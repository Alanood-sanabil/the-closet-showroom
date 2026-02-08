'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { track } from '@/lib/track'
import { supabase } from '@/utils/supabase/client'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'
import { useBasket } from '@/contexts/BasketContext'
import BasketSummary from '@/components/ui/BasketSummary'

interface FormData {
  name: string
  phone: string
  location: string
  customCity: string
}

interface FormErrors {
  name?: string
  phone?: string
  location?: string
  customCity?: string
}

interface AccessFormProps {
  selectedProduct?: {
    brandName: string
    productName: string
  } | null
}

export default function AccessForm({ selectedProduct }: AccessFormProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const { items: basketItems, clearBasket } = useBasket()

  const locationOptions = [t.accessForm.locationRiyadh, t.accessForm.locationJeddah, t.accessForm.locationDubai, t.accessForm.locationOther]

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    customCity: '',
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
      newErrors.name = t.accessForm.nameRequired
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.accessForm.phoneRequired
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = t.accessForm.phoneMinLength
    }

    if (!formData.location) {
      newErrors.location = t.accessForm.locationRequired
    }

    if (formData.location === 'Other' && !formData.customCity.trim()) {
      newErrors.customCity = t.accessForm.customCityRequired
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
    setSubmitError(null)

    try {
      // Submit to Supabase
      const { error } = await supabase.from('customer_requests').insert({
        name: formData.name,
        phone: formData.phone,
        location: formData.location === 'Other' ? formData.customCity : formData.location,
        basket_items: basketItems,
      })

      if (error) {
        throw new Error(error.message)
      }

      // Track submission
      track('form_submit', {
        location: formData.location === 'Other' ? formData.customCity : formData.location,
        basketItemsCount: basketItems.length,
        hadBasketItems: basketItems.length > 0,
      })

      // Clear basket after successful submission
      clearBasket()

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to submit form. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
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
              {t.accessForm.sectionTitle}
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-8">
              {t.accessForm.sectionDescription}
            </p>
            <div className="space-y-4 text-sm text-black/50">
              {t.accessForm.benefits.map((benefit, index) => (
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
                    {t.accessForm.successTitle}
                  </span>
                </div>
                <p className="text-black/60 leading-relaxed">
                  {t.accessForm.successMessage}
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
                    {t.accessForm.nameLabel} <span className="text-black">*</span>
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
                    placeholder={t.accessForm.namePlaceholder}
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
                    {t.accessForm.phoneLabel} <span className="text-black">*</span>
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
                    placeholder={t.accessForm.phonePlaceholder}
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
                    {t.accessForm.locationLabel} <span className="text-black">*</span>
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
                    <option value="">{t.accessForm.locationPlaceholder}</option>
                    {locationOptions.map((loc) => (
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
                      {t.accessForm.customCityLabel} <span className="text-black">*</span>
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
                      placeholder={t.accessForm.customCityPlaceholder}
                    />
                    {errors.customCity && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.customCity}
                      </p>
                    )}
                  </div>
                )}

                {/* Error Message */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{submitError}</p>
                  </div>
                )}

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
                      {t.accessForm.submittingText}
                    </span>
                  ) : (
                    t.accessForm.submitButton
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
