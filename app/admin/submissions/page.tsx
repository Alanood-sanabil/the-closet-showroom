'use client'

import { useState, useEffect, useMemo } from 'react'
import { supabase } from '@/utils/supabase/client'

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

type SortOrder = 'newest' | 'oldest'

export default function AdminSubmissionsPage() {
  const [activeTab, setActiveTab] = useState<'customers' | 'brands'>('customers')
  const [customerSubmissions, setCustomerSubmissions] = useState<CustomerSubmission[]>([])
  const [brandSubmissions, setBrandSubmissions] = useState<BrandSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    setLoading(true)
    setError(null)

    try {
      // Fetch from Supabase
      const [customerResponse, brandResponse] = await Promise.all([
        supabase.from('customer_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('brand_applications').select('*').order('created_at', { ascending: false }),
      ])

      if (customerResponse.error) throw customerResponse.error
      if (brandResponse.error) throw brandResponse.error

      // Map Supabase column names to frontend interface
      const customers: CustomerSubmission[] = customerResponse.data.map((row: any) => ({
        id: row.id,
        name: row.name,
        phone: row.phone,
        location: row.location,
        preferences: row.preferences || [],
        priceRange: row.price_range,
        basketItems: row.basket_items || [],
        submittedAt: row.created_at,
      }))

      const brands: BrandSubmission[] = brandResponse.data.map((row: any) => ({
        id: row.id,
        contactName: row.contact_name,
        title: row.title,
        email: row.email,
        phone: row.phone,
        brandName: row.brand_name,
        websiteUrl: row.website_url,
        countryOfOrigin: row.country_of_origin,
        productTypes: row.product_types || [],
        pricePoint: row.price_point,
        numberOfSKUs: row.number_of_skus,
        sellsVia: row.sells_via,
        hasMiddleEastPresence: row.has_middle_east_presence,
        middleEastPresenceDetails: row.middle_east_presence_details,
        instagramHandle: row.instagram_handle,
        submittedAt: row.created_at,
      }))

      setCustomerSubmissions(customers)
      setBrandSubmissions(brands)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }

  // Filter and sort customer submissions
  const filteredCustomers = useMemo(() => {
    let filtered = customerSubmissions

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((sub) =>
        sub.name.toLowerCase().includes(query) ||
        sub.phone.includes(query) ||
        sub.location.toLowerCase().includes(query) ||
        sub.priceRange.toLowerCase().includes(query) ||
        sub.preferences.some(p => p.toLowerCase().includes(query)) ||
        sub.basketItems.some(item =>
          item.productName.toLowerCase().includes(query) ||
          item.brandName.toLowerCase().includes(query)
        )
      )
    }

    return filtered.sort((a, b) => {
      const dateA = new Date(a.submittedAt).getTime()
      const dateB = new Date(b.submittedAt).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })
  }, [customerSubmissions, searchQuery, sortOrder])

  // Filter and sort brand submissions
  const filteredBrands = useMemo(() => {
    let filtered = brandSubmissions

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((sub) =>
        sub.brandName.toLowerCase().includes(query) ||
        sub.contactName.toLowerCase().includes(query) ||
        sub.email.toLowerCase().includes(query) ||
        sub.phone.includes(query) ||
        sub.countryOfOrigin.toLowerCase().includes(query) ||
        sub.productTypes.some(p => p.toLowerCase().includes(query)) ||
        sub.sellsVia.toLowerCase().includes(query)
      )
    }

    return filtered.sort((a, b) => {
      const dateA = new Date(a.submittedAt).getTime()
      const dateB = new Date(b.submittedAt).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })
  }, [brandSubmissions, searchQuery, sortOrder])

  // Export functions
  function exportToJSON() {
    const data = activeTab === 'customers' ? filteredCustomers : filteredBrands
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${activeTab}-submissions-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  function exportToCSV() {
    if (activeTab === 'customers') {
      const headers = ['ID', 'Name', 'Phone', 'Location', 'Preferences', 'Price Range', 'Basket Items', 'Submitted At']
      const rows = filteredCustomers.map(sub => [
        sub.id,
        sub.name,
        sub.phone,
        sub.location,
        sub.preferences.join('; '),
        sub.priceRange,
        sub.basketItems.length.toString(),
        new Date(sub.submittedAt).toLocaleString(),
      ])
      const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')
      downloadCSV(csv, 'customer-submissions')
    } else {
      const headers = ['ID', 'Brand Name', 'Contact Name', 'Email', 'Phone', 'Country', 'Product Types', 'Price Point', 'SKUs', 'Sells Via', 'ME Presence', 'Submitted At']
      const rows = filteredBrands.map(sub => [
        sub.id,
        sub.brandName,
        sub.contactName,
        sub.email,
        sub.phone,
        sub.countryOfOrigin,
        sub.productTypes.join('; '),
        sub.pricePoint,
        sub.numberOfSKUs.toString(),
        sub.sellsVia,
        sub.hasMiddleEastPresence ? 'Yes' : 'No',
        new Date(sub.submittedAt).toLocaleString(),
      ])
      const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')
      downloadCSV(csv, 'brand-submissions')
    }
  }

  function downloadCSV(csv: string, filename: string) {
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  const displayedSubmissions = activeTab === 'customers' ? filteredCustomers : filteredBrands
  const totalSubmissions = activeTab === 'customers' ? customerSubmissions.length : brandSubmissions.length

  return (
    <div className="min-h-screen bg-white py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-3">
            Submissions Dashboard
          </h1>
          <p className="text-lg text-black/60">
            View and manage all customer requests and brand partnership applications
          </p>
        </div>

        {/* Controls Bar */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search submissions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 transition-all cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            {/* Refresh */}
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="px-4 py-3 border border-black/20 text-black rounded-md hover:bg-black/5 transition-colors disabled:opacity-50"
              title="Refresh data"
            >
              <svg
                className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>

            {/* Export JSON */}
            <button
              onClick={exportToJSON}
              disabled={displayedSubmissions.length === 0}
              className="px-6 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Export JSON
            </button>

            {/* Export CSV */}
            <button
              onClick={exportToCSV}
              disabled={displayedSubmissions.length === 0}
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b-2 border-black/10">
          <button
            onClick={() => setActiveTab('customers')}
            className={`px-6 py-4 font-medium transition-all relative ${
              activeTab === 'customers'
                ? 'text-black'
                : 'text-black/40 hover:text-black/70'
            }`}
          >
            <span>Customer Submissions</span>
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-black/10">
              {customerSubmissions.length}
            </span>
            {activeTab === 'customers' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('brands')}
            className={`px-6 py-4 font-medium transition-all relative ${
              activeTab === 'brands'
                ? 'text-black'
                : 'text-black/40 hover:text-black/70'
            }`}
          >
            <span>Brand Applications</span>
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-black/10">
              {brandSubmissions.length}
            </span>
            {activeTab === 'brands' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-6 text-sm text-black/60">
            Showing {displayedSubmissions.length} of {totalSubmissions} submissions
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black mb-4"></div>
            <p className="text-black/60">Loading submissions...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-md p-6 mb-8">
            <p className="text-red-600 font-medium">Error: {error}</p>
          </div>
        )}

        {/* Content */}
        {!loading && !error && (
          <>
            {displayedSubmissions.length === 0 ? (
              <div className="text-center py-20 border-2 border-black/10 rounded-md">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-black/20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-black/40 text-lg">
                  {searchQuery ? 'No submissions match your search' : 'No submissions yet'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {activeTab === 'customers' &&
                  filteredCustomers.map((submission) => (
                    <CustomerCard key={submission.id} submission={submission} />
                  ))}
                {activeTab === 'brands' &&
                  filteredBrands.map((submission) => (
                    <BrandCard key={submission.id} submission={submission} />
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// Customer Card Component
function CustomerCard({ submission }: { submission: CustomerSubmission }) {
  const [expanded, setExpanded] = useState(false)

  function copyJSON() {
    navigator.clipboard.writeText(JSON.stringify(submission, null, 2))
    alert('Copied to clipboard!')
  }

  return (
    <div className="bg-white border-2 border-black/10 rounded-md overflow-hidden hover:border-black/20 transition-all">
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-black/5 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-xl font-semibold text-black mb-2">
              {submission.name}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-black/60">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {submission.phone}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {submission.location}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {submission.basketItems.length} items
              </span>
            </div>
            <p className="text-xs text-black/40 mt-2">
              {new Date(submission.submittedAt).toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                copyJSON()
              }}
              className="px-3 py-1.5 text-xs border border-black/20 rounded hover:bg-black/5 transition-colors"
              title="Copy JSON"
            >
              Copy
            </button>
            <svg
              className={`w-5 h-5 text-black/40 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t-2 border-black/10 p-6 bg-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Submission ID" value={submission.id} mono />
            <Field label="Full Name" value={submission.name} />
            <Field label="Phone Number" value={submission.phone} />
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
          </div>

          {/* Basket Items */}
          {submission.basketItems.length > 0 && (
            <div className="mt-8 pt-8 border-t-2 border-black/10">
              <h4 className="font-serif text-lg font-semibold text-black mb-4">
                Basket Items ({submission.basketItems.length})
              </h4>
              <div className="space-y-3">
                {submission.basketItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded border border-black/10"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <Field label="Product" value={item.productName} compact />
                      <Field label="Brand" value={item.brandName} compact />
                      <Field label="Category" value={item.category} compact />
                      <Field label="Price" value={`${item.price} SAR`} compact />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t-2 border-black/10">
            <Field
              label="Submitted At"
              value={new Date(submission.submittedAt).toLocaleString()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// Brand Card Component
function BrandCard({ submission }: { submission: BrandSubmission }) {
  const [expanded, setExpanded] = useState(false)

  function copyJSON() {
    navigator.clipboard.writeText(JSON.stringify(submission, null, 2))
    alert('Copied to clipboard!')
  }

  return (
    <div className="bg-white border-2 border-black/10 rounded-md overflow-hidden hover:border-black/20 transition-all">
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-black/5 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-xl font-semibold text-black mb-2">
              {submission.brandName}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-black/60">
              <span>{submission.contactName}</span>
              <span>•</span>
              <span>{submission.title}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-black/60 mt-1">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {submission.email}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {submission.phone}
              </span>
            </div>
            <p className="text-xs text-black/40 mt-2">
              {new Date(submission.submittedAt).toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                copyJSON()
              }}
              className="px-3 py-1.5 text-xs border border-black/20 rounded hover:bg-black/5 transition-colors"
              title="Copy JSON"
            >
              Copy
            </button>
            <svg
              className={`w-5 h-5 text-black/40 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t-2 border-black/10 p-6 bg-black/5">
          {/* Contact Information */}
          <div className="mb-8">
            <h4 className="font-serif text-lg font-semibold text-black mb-4">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Submission ID" value={submission.id} mono />
              <Field label="Contact Name" value={submission.contactName} />
              <Field label="Title/Role" value={submission.title} />
              <Field label="Email Address" value={submission.email} />
              <Field label="Phone Number" value={submission.phone} />
              {submission.instagramHandle && (
                <Field label="Instagram" value={submission.instagramHandle} />
              )}
            </div>
          </div>

          {/* Brand Information */}
          <div className="mb-8 pt-8 border-t-2 border-black/10">
            <h4 className="font-serif text-lg font-semibold text-black mb-4">Brand Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Brand Name" value={submission.brandName} />
              <Field label="Website" value={submission.websiteUrl} link />
              <Field label="Country of Origin" value={submission.countryOfOrigin} />
              <Field
                label="Product Categories"
                value={submission.productTypes.join(', ')}
                fullWidth
              />
            </div>
          </div>

          {/* Business Details */}
          <div className="mb-8 pt-8 border-t-2 border-black/10">
            <h4 className="font-serif text-lg font-semibold text-black mb-4">Business Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Price Point" value={submission.pricePoint} />
              <Field label="Number of SKUs" value={submission.numberOfSKUs.toString()} />
              <Field label="Sells Via" value={submission.sellsVia} />
              <Field
                label="Middle East Presence"
                value={submission.hasMiddleEastPresence ? 'Yes' : 'No'}
              />
              {submission.hasMiddleEastPresence && submission.middleEastPresenceDetails && (
                <Field
                  label="ME Presence Details"
                  value={submission.middleEastPresenceDetails}
                  fullWidth
                />
              )}
            </div>
          </div>

          <div className="pt-6 border-t-2 border-black/10">
            <Field
              label="Submitted At"
              value={new Date(submission.submittedAt).toLocaleString()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// Field Component
function Field({
  label,
  value,
  fullWidth = false,
  mono = false,
  compact = false,
  link = false,
}: {
  label: string
  value: string
  fullWidth?: boolean
  mono?: boolean
  compact?: boolean
  link?: boolean
}) {
  return (
    <div className={fullWidth ? 'md:col-span-2' : ''}>
      <dt className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-black/50 mb-1`}>
        {label}
      </dt>
      <dd className={`${compact ? 'text-sm' : 'text-base'} text-black break-words ${mono ? 'font-mono text-xs' : ''}`}>
        {link ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}
