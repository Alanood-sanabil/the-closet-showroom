'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { track } from '@/lib/track'
import { ACCESS_FORM_CONTENT } from '@/content/customer'
import { useBasket } from '@/contexts/BasketContext'
import BasketSummary from '@/components/ui/BasketSummary'

interface FormData {
  name: string
  phone: string
  location: string
  customCity: string
  preferences: string[]
  priceRange: string
}

interface FormErrors {
  name?: string
  phone?: string
  location?: string
  customCity?: string
  priceRange?: string
}

interface AccessFormProps {
  selectedProduct?: {
    brandName: string
    productName: string
  } | null
}

export default function AccessForm({ selectedProduct }: AccessFormProps) {
  const formContent = ACCESS_FORM_CONTENT
  const { items: basketItems, clearBasket } = useBasket()

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    customCity: '',
    preferences: [],
    priceRange: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Trigger highlight when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setIsHighlighted(true)
      const timer = setTimeout(() => setIsHighlighted(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [selectedProduct])

  const handleFormFocus = useCallback(() => {
    if (!hasStarted) {
      setHasStarted(true)
      track('form_start')
    }
  }, [hasStarted])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = formContent.validation.nameRequired
    }

    if (!formData.phone.trim()) {
      newErrors.phone = formContent.validation.phoneRequired
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = formContent.validation.phoneMinLength
    }

    if (!formData.location) {
      newErrors.location = formContent.validation.locationRequired
    }

    if (formData.location === 'Other' && !formData.customCity.trim()) {
      newErrors.customCity = formContent.validation.customCityRequired
    }

    if (!formData.priceRange) {
      newErrors.priceRange = formContent.validation.priceRangeRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Store in localStorage
    const payload = {
      ...formData,
      basketItems,
      timestamp: new Date().toISOString(),
    }

    const existingRequests = JSON.parse(
      localStorage.getItem('accessRequests') || '[]'
    )
    localStorage.setItem(
      'accessRequests',
      JSON.stringify([...existingRequests, payload])
    )

    // Track submission
    track('form_submit', {
      location: formData.location === 'Other' ? formData.customCity : formData.location,
      priceRange: formData.priceRange,
      preferencesCount: formData.preferences.length,
      basketItemsCount: basketItems.length,
      hadBasketItems: basketItems.length > 0,
    })

    // Clear basket after successful submission
    clearBasket()

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handlePreferenceChange = (preference: string) => {
    setFormData((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter((p) => p !== preference)
        : [...prev.preferences, preference],
    }))
  }

  return (
    <section
      id="access"
      ref={sectionRef}
      className={`py-24 lg:py-32 px-6 lg:px-8 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              {formContent.sectionTitle}
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-8">
              {formContent.sectionDescription}
            </p>
            <div className="space-y-4 text-sm text-black/50">
              {formContent.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 ${
              isHighlighted ? 'ring-2 ring-black/30 shadow-lg shadow-black/10 rounded-lg p-1' : ''
            }`}
          >
            {/* Basket Summary */}
            {!isSubmitted && <BasketSummary />}

            {/* Selected Product Banner */}
            {selectedProduct && !isSubmitted && (
              <div className="mb-6 p-4 bg-black/5 border border-black/20 rounded-md">
                <p className="text-sm text-black">
                  <span className="font-medium">You're requesting access to view:</span>
                  <br />
                  <span className="font-serif text-base mt-1 inline-block">
                    {selectedProduct.brandName} — {selectedProduct.productName}
                  </span>
                </p>
              </div>
            )}

            {isSubmitted ? (
              <div className="bg-black/5 border border-black/20 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-serif text-xl font-semibold">
                    {formContent.successTitle}
                  </span>
                </div>
                <p className="text-black/60 leading-relaxed">
                  {formContent.successMessage}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onFocus={handleFormFocus}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {formContent.fields.name.label}{' '}
                    {formContent.fields.name.required && (
                      <span className="text-black">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                    placeholder={formContent.fields.name.placeholder}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    {formContent.fields.phone.label}{' '}
                    {formContent.fields.phone.required && (
                      <span className="text-black">*</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors ${
                      errors.phone
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                    placeholder={formContent.fields.phone.placeholder}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Showroom Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium mb-2"
                  >
                    {formContent.fields.location.label}{' '}
                    {formContent.fields.location.required && (
                      <span className="text-black">*</span>
                    )}
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors appearance-none cursor-pointer ${
                      errors.location
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                  >
                    <option value="">{formContent.fields.location.placeholder}</option>
                    {formContent.locationOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Conditional City Input */}
                {formData.location === 'Other' && (
                  <div>
                    <label
                      htmlFor="customCity"
                      className="block text-sm font-medium mb-2"
                    >
                      {formContent.fields.customCity.label}{' '}
                      {formContent.fields.customCity.required && (
                        <span className="text-black">*</span>
                      )}
                    </label>
                    <input
                      type="text"
                      id="customCity"
                      name="customCity"
                      value={formData.customCity}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border bg-white transition-colors ${
                        errors.customCity
                          ? 'border-red-500'
                          : 'border-black/20 focus:border-black'
                      }`}
                      placeholder={formContent.fields.customCity.placeholder}
                    />
                    {errors.customCity && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.customCity}
                      </p>
                    )}
                  </div>
                )}

                {/* Fashion Preferences */}
                <fieldset>
                  <legend className="block text-sm font-medium mb-3">
                    {formContent.fields.preferences.label}
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {formContent.fashionPreferences.map((pref) => (
                      <label
                        key={pref}
                        className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                          formData.preferences.includes(pref)
                            ? 'border-black bg-black/5'
                            : 'border-black/10 hover:border-black/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.preferences.includes(pref)}
                          onChange={() => handlePreferenceChange(pref)}
                          className="sr-only"
                        />
                        <span
                          className={`w-4 h-4 border flex items-center justify-center ${
                            formData.preferences.includes(pref)
                              ? 'border-black bg-black'
                              : 'border-black/30'
                          }`}
                        >
                          {formData.preferences.includes(pref) && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm">{pref}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Price Range */}
                <fieldset>
                  <legend className="block text-sm font-medium mb-3">
                    {formContent.fields.priceRange.label}{' '}
                    {formContent.fields.priceRange.required && (
                      <span className="text-black">*</span>
                    )}
                  </legend>
                  <div className="space-y-2">
                    {formContent.priceRanges.map((range) => (
                      <label
                        key={range}
                        className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                          formData.priceRange === range
                            ? 'border-black bg-black/5'
                            : 'border-black/10 hover:border-black/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="priceRange"
                          value={range}
                          checked={formData.priceRange === range}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            formData.priceRange === range
                              ? 'border-black'
                              : 'border-black/30'
                          }`}
                        >
                          {formData.priceRange === range && (
                            <span className="w-2 h-2 rounded-full bg-black" />
                          )}
                        </span>
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                  {errors.priceRange && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.priceRange}
                    </p>
                  )}
                </fieldset>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-black-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {formContent.submittingText}
                    </span>
                  ) : (
                    formContent.submitButton
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
