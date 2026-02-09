'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from '@/lib/track'
import { supabase } from '@/utils/supabase/client'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/content/translations'

interface FormData {
  name: string
  phone: string
  location: string
}

interface FormErrors {
  name?: string
  phone?: string
  location?: string
}

export default function PopupForm() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
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

    if (!formData.name.trim()) {
      newErrors.name = t.popup.nameRequired
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.popup.phoneRequired
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = t.popup.phoneMinLength
    }

    if (!formData.location) {
      newErrors.location = t.popup.locationsRequired
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
      // Submit to Supabase (same table as customer form)
      const payload = {
        name: formData.name,
        phone: formData.phone,
        location: formData.location,
        basket_items: [],
      }

      console.log('Submitting popup form with payload:', payload)

      const { data, error } = await supabase.from('customer_requests').insert(payload)

      if (error) {
        console.error('Supabase error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint,
        })
        throw error
      }

      console.log('Submission successful:', data)

      // Track submission
      track('popup_form_submit', {
        location: formData.location,
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      setSubmitError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleLocationChange = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      location,
    }))
    // Clear error when user selects a location
    if (errors.location) {
      setErrors((prev) => ({ ...prev, location: undefined }))
    }
  }

  return (
    <section
      id="popup-form"
      ref={sectionRef}
      className={`py-12 md:py-24 lg:py-32 px-6 lg:px-8 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              {t.popup.formTitle}
            </h2>
            <p className="text-base md:text-lg text-black/60 leading-snug md:leading-relaxed">
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
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5 md:mb-2"
                  >
                    {t.popup.nameLabel} <span className="text-black">*</span>
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
                    placeholder={t.popup.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1.5 md:mb-2"
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

                {/* Location (Single-select) */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 md:mb-2">
                    {t.popup.locationsLabel} <span className="text-black">*</span>
                  </label>
                  <div className="space-y-2">
                    {t.popup.locations.map((location) => (
                      <label
                        key={location}
                        className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all ${
                          formData.location === location
                            ? 'border-black bg-black/5'
                            : 'border-black/20 hover:border-black/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="location"
                          checked={formData.location === location}
                          onChange={() => handleLocationChange(location)}
                          className="w-4 h-4 accent-black"
                        />
                        <span className="text-sm">{location}</span>
                      </label>
                    ))}
                  </div>
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-500">{errors.location}</p>
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
                  className="w-full px-8 py-4 md:py-4 bg-black text-white text-base md:text-base font-medium tracking-wide hover:bg-black-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2 md:mt-0"
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
