'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'

type Language = 'en'

interface LanguageContextType {
  language: Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Set document language to English on mount
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
  }, [])

  return (
    <LanguageContext.Provider value={{ language: 'en' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
