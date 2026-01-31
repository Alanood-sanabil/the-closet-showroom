'use client'

import { useState, useEffect } from 'react'

interface CustomerSubmission {
  id: string
  name: string
  phone: string
  location: string
  preferences: string[]
  priceRange: string
  basketItems: Array<{
    id: string
    productId: string
    productName: string
    brandId: string
    brandName: string
    category: string
    price: number
    image?: string
  }>
  submittedAt: string
}

interface BrandSubmission {
  id: string
  contactName: string
  title: string
  email: string
  phone: string
  brandName: string
  websiteUrl: string
  countryOfOrigin: string
  productTypes: string[]
  pricePoint: string
  numberOfSKUs: number
  sellsVia: string
  hasMiddleEastPresence: boolean
  middleEastPresenceDetails?: string | null
  instagramHandle?: string | null
  submittedAt: string
}

export default function AdminSubmissionsPage() {
  const [activeTab, setActiveTab] = useState<'customers' | 'brands'>('customers')
  const [customerSubmissions, setCustomerSubmissions] = useState<CustomerSubmission[]>([])
  const [brandSubmissions, setBrandSubmissions] = useState<BrandSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    setLoading(true)
    setError(null)

    try {
      // Fetch customer submissions
      const customerResponse = await fetch('/api/submissions/customer')
      const customerData = await customerResponse.json()

      if (customerData.success) {
        setCustomerSubmissions(customerData.data)
      }

      // Fetch brand submissions
      const brandResponse = await fetch('/api/submissions/brand')
      const brandData = await brandResponse.json()

      if (brandData.success) {
        setBrandSubmissions(brandData.data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Submissions Dashboard</h1>
          <p className="text-gray-600">
            View all customer and brand partnership submissions
          </p>
          <button
            onClick={fetchSubmissions}
            className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm"
          >
            Refresh Data
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('customers')}
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'customers'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Customer Submissions ({customerSubmissions.length})
          </button>
          <button
            onClick={() => setActiveTab('brands')}
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'brands'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Brand Applications ({brandSubmissions.length})
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            <p className="mt-4 text-gray-600">Loading submissions...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        {/* Content */}
        {!loading && !error && (
          <>
            {activeTab === 'customers' && (
              <div>
                {customerSubmissions.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <p className="text-gray-500">No customer submissions yet</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {customerSubmissions.map((submission) => (
                      <CustomerCard key={submission.id} submission={submission} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'brands' && (
              <div>
                {brandSubmissions.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <p className="text-gray-500">No brand applications yet</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {brandSubmissions.map((submission) => (
                      <BrandCard key={submission.id} submission={submission} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function CustomerCard({ submission }: { submission: CustomerSubmission }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-black">{submission.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {submission.phone} • {submission.location}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Submitted: {new Date(submission.submittedAt).toLocaleString()}
            </p>
          </div>
          <button className="text-gray-400 hover:text-black">
            <svg
              className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Submission ID" value={submission.id} />
            <Field label="Name" value={submission.name} />
            <Field label="Phone" value={submission.phone} />
            <Field label="Location" value={submission.location} />
            <Field label="Price Range" value={submission.priceRange} />
            <Field
              label="Fashion Preferences"
              value={
                submission.preferences.length > 0
                  ? submission.preferences.join(', ')
                  : 'None selected'
              }
            />
            <Field
              label="Basket Items"
              value={`${submission.basketItems.length} items`}
              fullWidth
            />
          </div>

          {/* Basket Items Detail */}
          {submission.basketItems.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-300">
              <h4 className="font-medium text-black mb-4">Basket Items:</h4>
              <div className="space-y-3">
                {submission.basketItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded border border-gray-200"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Product:</span> {item.productName}
                      </div>
                      <div>
                        <span className="font-medium">Brand:</span> {item.brandName}
                      </div>
                      <div>
                        <span className="font-medium">Category:</span> {item.category}
                      </div>
                      <div>
                        <span className="font-medium">Price:</span> {item.price} SAR
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Field
            label="Submitted At"
            value={new Date(submission.submittedAt).toLocaleString()}
            fullWidth
          />
        </div>
      )}
    </div>
  )
}

function BrandCard({ submission }: { submission: BrandSubmission }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-black">{submission.brandName}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {submission.contactName} • {submission.title}
            </p>
            <p className="text-sm text-gray-600">
              {submission.email} • {submission.phone}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Submitted: {new Date(submission.submittedAt).toLocaleString()}
            </p>
          </div>
          <button className="text-gray-400 hover:text-black">
            <svg
              className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Submission ID" value={submission.id} />
            <Field label="Brand Name" value={submission.brandName} />
            <Field label="Contact Name" value={submission.contactName} />
            <Field label="Title/Role" value={submission.title} />
            <Field label="Email" value={submission.email} />
            <Field label="Phone" value={submission.phone} />
            <Field label="Website" value={submission.websiteUrl} />
            <Field label="Country of Origin" value={submission.countryOfOrigin} />
            <Field
              label="Product Types"
              value={submission.productTypes.join(', ')}
              fullWidth
            />
            <Field label="Price Point" value={submission.pricePoint} />
            <Field label="Number of SKUs" value={submission.numberOfSKUs.toString()} />
            <Field label="Sells Via" value={submission.sellsVia} />
            <Field
              label="Has Middle East Presence"
              value={submission.hasMiddleEastPresence ? 'Yes' : 'No'}
            />
            {submission.hasMiddleEastPresence && submission.middleEastPresenceDetails && (
              <Field
                label="Middle East Presence Details"
                value={submission.middleEastPresenceDetails}
                fullWidth
              />
            )}
            {submission.instagramHandle && (
              <Field label="Instagram Handle" value={submission.instagramHandle} />
            )}
            <Field
              label="Submitted At"
              value={new Date(submission.submittedAt).toLocaleString()}
              fullWidth
            />
          </div>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  value,
  fullWidth = false,
}: {
  label: string
  value: string
  fullWidth?: boolean
}) {
  return (
    <div className={fullWidth ? 'md:col-span-2' : ''}>
      <dt className="text-sm font-medium text-gray-500 mb-1">{label}</dt>
      <dd className="text-sm text-black break-words">{value}</dd>
    </div>
  )
}
