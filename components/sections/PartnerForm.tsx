'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'
import { track } from '@/lib/track'
import { supabase } from '@/utils/supabase/client'

interface FormData {
  contactName: string
  title: string
  email: string
  phone: string
  brandName: string
  websiteUrl: string
  countryOfOrigin: string
  productTypes: string[]
  pricePoint: string
  numberOfSKUs: string
  sellsVia: string
  hasMiddleEastPresence: string
  middleEastPresenceDetails: string
  agreement: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function PartnerForm() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const productTypeOptions = [
    { value: 'streetwear', label: t.partnerForm.productTypeStreetwear },
    { value: 'formal', label: t.partnerForm.productTypeFormal },
    { value: 'gymwear', label: t.partnerForm.productTypeGymwear },
    { value: 'smart-casual', label: t.partnerForm.productTypeSmartCasual },
    { value: 'shoes', label: t.partnerForm.productTypeShoes },
    { value: 'jewellery', label: t.partnerForm.productTypeJewellery },
    { value: 'accessories', label: t.partnerForm.productTypeAccessories },
  ]

  const pricePointOptions = [
    { value: 'entry', label: t.partnerForm.pricePointEntry },
    { value: 'mid', label: t.partnerForm.pricePointMid },
    { value: 'premium', label: t.partnerForm.pricePointPremium },
  ]

  const sellsViaOptions = [
    { value: 'dtc', label: t.partnerForm.sellsViaDTC },
    { value: 'wholesale', label: t.partnerForm.sellsViaWholesale },
    { value: 'both', label: t.partnerForm.sellsViaBoth },
  ]

  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    contactName: '',
    title: '',
    email: '',
    phone: '',
    brandName: '',
    websiteUrl: '',
    countryOfOrigin: '',
    productTypes: [],
    pricePoint: '',
    numberOfSKUs: '',
    sellsVia: '',
    hasMiddleEastPresence: '',
    middleEastPresenceDetails: '',
    agreement: false,
  })

  // Track form start on first interaction
  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true)
      track('partner_form_start', {})
    }
  }

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const v = t.partnerForm

    if (!formData.contactName.trim()) {
      newErrors.contactName = v.contactNameRequired
    }

    if (!formData.title.trim()) {
      newErrors.title = v.titleRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = v.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = v.emailInvalid
    }

    if (!formData.phone.trim()) {
      newErrors.phone = v.phoneRequired
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = v.phoneMinLength
    }

    if (!formData.brandName.trim()) {
      newErrors.brandName = v.brandNameRequired
    }

    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = v.websiteInvalid
    } else if (!/^https?:\/\/.+\..+/.test(formData.websiteUrl)) {
      newErrors.websiteUrl = v.websiteInvalid
    }

    if (!formData.countryOfOrigin.trim()) {
      newErrors.countryOfOrigin = v.countryOfOriginRequired
    }

    if (formData.productTypes.length === 0) {
      newErrors.productTypes = v.productTypesRequired
    }

    if (!formData.pricePoint) {
      newErrors.pricePoint = v.pricePointRequired
    }

    if (!formData.numberOfSKUs.trim()) {
      newErrors.numberOfSKUs = v.numberOfSKUsRequired
    } else if (isNaN(Number(formData.numberOfSKUs)) || Number(formData.numberOfSKUs) <= 0) {
      newErrors.numberOfSKUs = v.numberOfSKUsInvalid
    }

    if (!formData.sellsVia) {
      newErrors.sellsVia = v.sellsViaRequired
    }

    if (!formData.hasMiddleEastPresence) {
      newErrors.hasMiddleEastPresence = v.hasMiddleEastPresenceRequired
    }

    if (!formData.agreement) {
      newErrors.agreement = v.agreementRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle checkbox change for multi-select fields
  const handleCheckboxChange = (field: 'productTypes', value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field]
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value]
      return { ...prev, [field]: newValues }
    })
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Submit to Supabase
      const { error } = await supabase.from('brand_applications').insert({
        contact_name: formData.contactName,
        title: formData.title,
        email: formData.email,
        phone: formData.phone,
        brand_name: formData.brandName,
        website_url: formData.websiteUrl,
        country_of_origin: formData.countryOfOrigin,
        product_types: formData.productTypes,
        price_point: formData.pricePoint,
        number_of_skus: parseInt(formData.numberOfSKUs, 10),
        sells_via: formData.sellsVia,
        has_middle_east_presence: formData.hasMiddleEastPresence === 'yes',
        middle_east_presence_details: formData.middleEastPresenceDetails || null,
      })

      if (error) {
        throw new Error(error.message)
      }

      // Track submission
      track('partner_form_submit', {
        brandName: formData.brandName,
        productTypes: formData.productTypes.join(', '),
        pricePoint: formData.pricePoint,
        sellsVia: formData.sellsVia,
        hasMiddleEastPresence: formData.hasMiddleEastPresence,
      })

      setIsSubmitted(true)

      // Scroll to success message
      setTimeout(() => {
        const form = document.getElementById('partner-form')
        if (form) {
          form.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to submit application. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (isSubmitted) {
    return (
      <section
        id="partner-form"
        className="py-20 lg:py-28 px-6 lg:px-8 bg-black/5"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/10 mb-6">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="font-serif text-3xl mb-4">
            {t.partnerForm.successTitle}
          </h2>
          <p className="text-lg text-black/60">
            {t.partnerForm.successMessage}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="partner-form"
      className="py-20 lg:py-28 px-6 lg:px-8 bg-black/5"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight mb-4">
            {t.partnerForm.sectionTitle}
          </h2>
          <p className="text-lg text-black/60">
            {t.partnerForm.sectionDescription}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          onFocus={handleFormStart}
          className="bg-white rounded-lg p-8 lg:p-10 shadow-sm border border-black/5"
        >
          {/* Section 1: About You */}
          <div className="mb-10">
            <h3 className="font-serif text-xl mb-6 pb-2 border-b border-black/10">
              About You
            </h3>

            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.contactNameLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) =>
                  setFormData({ ...formData, contactName: e.target.value })
                }
                placeholder={t.partnerForm.contactNamePlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.contactName ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.contactName && (
                <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
              )}
            </div>

            {/* Role / Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.titleLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder={t.partnerForm.titlePlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.title ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.emailLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t.partnerForm.emailPlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.email ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-0">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.phoneLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder={t.partnerForm.phonePlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.phone ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Section 2: About the Brand */}
          <div className="mb-10">
            <h3 className="font-serif text-xl mb-6 pb-2 border-b border-black/10">
              About the Brand
            </h3>

            {/* Brand Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.brandNameLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) =>
                  setFormData({ ...formData, brandName: e.target.value })
                }
                placeholder={t.partnerForm.brandNamePlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.brandName ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.brandName && (
                <p className="text-red-500 text-sm mt-1">{errors.brandName}</p>
              )}
            </div>

            {/* Website or LinkedIn */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.websiteLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="url"
                value={formData.websiteUrl}
                onChange={(e) =>
                  setFormData({ ...formData, websiteUrl: e.target.value })
                }
                placeholder={t.partnerForm.websitePlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.websiteUrl ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.websiteUrl && (
                <p className="text-red-500 text-sm mt-1">{errors.websiteUrl}</p>
              )}
            </div>

            {/* Country of Origin */}
            <div className="mb-0">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.countryLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="text"
                value={formData.countryOfOrigin}
                onChange={(e) =>
                  setFormData({ ...formData, countryOfOrigin: e.target.value })
                }
                placeholder={t.partnerForm.countryPlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.countryOfOrigin ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.countryOfOrigin && (
                <p className="text-red-500 text-sm mt-1">{errors.countryOfOrigin}</p>
              )}
            </div>
          </div>

          {/* Section 3: Your Collection */}
          <div className="mb-10">
            <h3 className="font-serif text-xl mb-6 pb-2 border-b border-black/10">
              Your Collection
            </h3>

            {/* Product Categories */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.productTypesLabel}
                <span className="text-black ml-1">*</span>
              </label>
              {t.partnerForm.productTypesHelpText && (
                <p className="text-xs text-black/50 mb-3">
                  {t.partnerForm.productTypesHelpText}
                </p>
              )}
              <div className="space-y-2">
                {productTypeOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.productTypes.includes(option.value)}
                      onChange={() =>
                        handleCheckboxChange('productTypes', option.value)
                      }
                      className="w-4 h-4 text-black border-black/20 rounded focus:ring-black/20"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.productTypes && (
                <p className="text-red-500 text-sm mt-1">{errors.productTypes}</p>
              )}
            </div>

            {/* Average Retail Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.pricePointLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <select
                value={formData.pricePoint}
                onChange={(e) =>
                  setFormData({ ...formData, pricePoint: e.target.value })
                }
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.pricePoint ? 'border-red-500' : 'border-black/20'
                }`}
              >
                <option value="">
                  {t.partnerForm.pricePointPlaceholder}
                </option>
                {pricePointOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.pricePoint && (
                <p className="text-red-500 text-sm mt-1">{errors.pricePoint}</p>
              )}
            </div>

            {/* Number of SKUs */}
            <div className="mb-0">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.numberOfSKUsLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="number"
                value={formData.numberOfSKUs}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfSKUs: e.target.value })
                }
                placeholder={t.partnerForm.numberOfSKUsPlaceholder}
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.numberOfSKUs ? 'border-red-500' : 'border-black/20'
                }`}
              />
              {errors.numberOfSKUs && (
                <p className="text-red-500 text-sm mt-1">{errors.numberOfSKUs}</p>
              )}
            </div>
          </div>

          {/* Section 4: Your Current Presence */}
          <div className="mb-10">
            <h3 className="font-serif text-xl mb-6 pb-2 border-b border-black/10">
              Your Current Presence
            </h3>

            {/* Do you currently sell */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.sellsViaLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <select
                value={formData.sellsVia}
                onChange={(e) =>
                  setFormData({ ...formData, sellsVia: e.target.value })
                }
                className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 ${
                  errors.sellsVia ? 'border-red-500' : 'border-black/20'
                }`}
              >
                <option value="">
                  {t.partnerForm.sellsViaPlaceholder}
                </option>
                {sellsViaOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.sellsVia && (
                <p className="text-red-500 text-sm mt-1">{errors.sellsVia}</p>
              )}
            </div>

            {/* Middle East Presence */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.partnerForm.hasMiddleEastPresenceLabel}
                <span className="text-black ml-1">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasMiddleEastPresence"
                    value="yes"
                    checked={formData.hasMiddleEastPresence === 'yes'}
                    onChange={(e) =>
                      setFormData({ ...formData, hasMiddleEastPresence: e.target.value })
                    }
                    className="w-4 h-4 text-black border-black/20 focus:ring-black/20"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasMiddleEastPresence"
                    value="no"
                    checked={formData.hasMiddleEastPresence === 'no'}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hasMiddleEastPresence: e.target.value,
                        middleEastPresenceDetails: '' // Clear details if No is selected
                      })
                    }
                    className="w-4 h-4 text-black border-black/20 focus:ring-black/20"
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
              {errors.hasMiddleEastPresence && (
                <p className="text-red-500 text-sm mt-1">{errors.hasMiddleEastPresence}</p>
              )}
            </div>

            {/* Conditional: Middle East Presence Details */}
            {formData.hasMiddleEastPresence === 'yes' && (
              <div className="mb-0">
                <label className="block text-sm font-medium mb-2">
                  {t.partnerForm.middleEastPresenceDetailsLabel}
                </label>
                <textarea
                  value={formData.middleEastPresenceDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, middleEastPresenceDetails: e.target.value })
                  }
                  placeholder={t.partnerForm.middleEastPresenceDetailsPlaceholder}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            )}
          </div>

          {/* Agreement */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreement}
                onChange={(e) =>
                  setFormData({ ...formData, agreement: e.target.checked })
                }
                className={`w-4 h-4 mt-1 text-black border-black/20 rounded focus:ring-black/20 flex-shrink-0 ${
                  errors.agreement ? 'border-red-500' : ''
                }`}
              />
              <span className="text-sm text-black/70">
                {t.partnerForm.agreementLabel}
                <span className="text-black ml-1">*</span>
              </span>
            </label>
            {errors.agreement && (
              <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>
            )}
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3.5 bg-black text-white rounded-md hover:bg-gray-900 transition-all duration-200 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? t.partnerForm.submittingText
              : t.partnerForm.submitButton}
          </button>
        </form>
      </div>
    </section>
  )
}
