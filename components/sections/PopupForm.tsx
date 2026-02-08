'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from '@/lib/track'
import { supabase } from '@/utils/supabase/client'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

interface FormData {
  fullName: string
  email: string
  phone: string
  city: string
  preferredLocation: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  city?: string
  preferredLocation?: string
}

export default function PopupForm() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const isRTL = language === 'ar'

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    preferredLocation: '',
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.popup.fullNameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.popup.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.popup.emailInvalid
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.popup.phoneRequired
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = t.popup.phoneMinLength
    }

    if (!formData.city.trim()) {
      newErrors.city = t.popup.cityRequired
    }

    if (!formData.preferredLocation) {
      newErrors.preferredLocation = t.popup.preferredLocationRequired
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
      const { error } = await supabase.from('popup_requests').insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        preferred_location: formData.preferredLocation,
      })

      if (error) {
        throw new Error(error.message)
      }

      // Track submission
      track('popup_form_submit', {
        city: formData.city,
        preferredLocation: formData.preferredLocation,
      })

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
      id="popup-form"
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
              {t.popup.formTitle}
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              {t.popup.formDescription}
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
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
                    {t.common.success}
                  </span>
                </div>
                <p className="text-black/60 leading-relaxed">
                  {t.popup.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.popup.fullNameLabel} <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors ${
                      errors.fullName
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                    placeholder={t.popup.fullNamePlaceholder}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.popup.emailLabel} <span className="text-black">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                    placeholder={t.popup.emailPlaceholder}
                    dir="ltr"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.popup.phoneLabel} <span className="text-black">*</span>
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
                    placeholder={t.popup.phonePlaceholder}
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.popup.cityLabel} <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors ${
                      errors.city
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                    placeholder={t.popup.cityPlaceholder}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                  )}
                </div>

                {/* Preferred Location */}
                <div>
                  <label
                    htmlFor="preferredLocation"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.popup.preferredLocationLabel} <span className="text-black">*</span>
                  </label>
                  <select
                    id="preferredLocation"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white transition-colors appearance-none cursor-pointer ${
                      errors.preferredLocation
                        ? 'border-red-500'
                        : 'border-black/20 focus:border-black'
                    }`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="">{t.popup.preferredLocationPlaceholder}</option>
                    {t.popup.locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  {errors.preferredLocation && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.preferredLocation}
                    </p>
                  )}
                </div>

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
                      {t.popup.submittingText}
                    </span>
                  ) : (
                    t.popup.submitButton
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
