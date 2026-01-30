/**
 * Shared Design System Tokens
 *
 * Centralized theme constants for consistent styling across customer and partner pages.
 * Uses black & white color palette with subtle neutral backgrounds.
 */

// ============================================
// Colors
// ============================================

export const colors = {
  // Primary
  black: '#000000',
  white: '#FFFFFF',

  // Neutrals
  gray: {
    50: '#F9F9F9',
    100: '#F5F5F5',
    200: '#EFEFEF',
    300: '#E5E5E5',
    400: '#D4D4D4',
    500: '#A3A3A3',
    600: '#737373',
    700: '#525252',
    800: '#404040',
    900: '#262626',
  },
} as const

// ============================================
// Spacing & Layout
// ============================================

export const layout = {
  // Container max widths
  containerSm: 'max-w-3xl',
  containerMd: 'max-w-4xl',
  containerLg: 'max-w-6xl',
  containerXl: 'max-w-7xl',

  // Section padding
  sectionPy: 'py-20 lg:py-28',
  sectionPx: 'px-6 lg:px-8',

  // Card padding
  cardPadding: 'p-6',
  cardPaddingLg: 'p-8 lg:p-10',
} as const

// ============================================
// Border Radius
// ============================================

export const radius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  default: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

// ============================================
// Shadows
// ============================================

export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  default: 'shadow-md',
  lg: 'shadow-lg',
} as const

// ============================================
// Component Classes
// ============================================

// Buttons
export const BUTTON_PRIMARY_CLASS =
  'w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-md hover:bg-gray-900 transition-all duration-200 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed'

export const BUTTON_SECONDARY_CLASS =
  'w-full sm:w-auto px-8 py-3.5 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-200 font-medium tracking-wide'

export const BUTTON_HERO_PRIMARY_CLASS =
  'w-full sm:w-auto px-8 py-4 bg-black text-white font-medium tracking-wide rounded-sm hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'

export const BUTTON_HERO_SECONDARY_CLASS =
  'w-full sm:w-auto px-8 py-4 border border-black text-black font-medium tracking-wide rounded-sm hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'

// Form Inputs
export const INPUT_CLASS =
  'w-full px-4 py-2.5 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors'

export const INPUT_ERROR_CLASS =
  'w-full px-4 py-2.5 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500/20'

export const TEXTAREA_CLASS =
  'w-full px-4 py-2.5 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors'

export const SELECT_CLASS =
  'w-full px-4 py-2.5 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors'

export const CHECKBOX_CLASS =
  'w-4 h-4 text-black border-black/20 rounded focus:ring-black/20'

export const LABEL_CLASS =
  'block text-sm font-medium mb-2'

export const LABEL_REQUIRED_CLASS =
  'text-red-500 ml-1'

export const LABEL_OPTIONAL_CLASS =
  'text-black/40 ml-2 text-xs'

export const ERROR_TEXT_CLASS =
  'text-red-500 text-sm mt-1'

// Cards
export const CARD_CLASS =
  'p-6 border border-black/10 rounded-lg hover:border-black/20 hover:shadow-sm transition-all duration-200'

export const CARD_PADDED_CLASS =
  'bg-white rounded-lg p-8 lg:p-10 shadow-sm border border-black/5'

// Badges
export const BADGE_CLASS =
  'inline-flex items-center px-4 py-1.5 rounded-full border border-black/20 bg-white/80 backdrop-blur-sm'

export const BADGE_WITH_DOT_CLASS =
  'inline-flex items-center gap-2 px-3 py-1 bg-black/5 text-black text-xs tracking-wide'

export const BADGE_DOT_CLASS =
  'w-1.5 h-1.5 bg-black rounded-full'

export const BADGE_NEW_CLASS =
  'text-[10px] tracking-widest uppercase bg-black text-white px-2 py-1'

// Sections
export const SECTION_CLASS =
  'py-20 lg:py-28 px-6 lg:px-8'

export const SECTION_BG_LIGHT_CLASS =
  'py-20 lg:py-28 px-6 lg:px-8 bg-gray-50'

export const SECTION_HEADER_CLASS =
  'text-center mb-16'

export const SECTION_TITLE_CLASS =
  'font-serif text-3xl lg:text-4xl tracking-tight mb-4'

export const SECTION_DESCRIPTION_CLASS =
  'text-lg text-black/60 max-w-2xl mx-auto'

// Links
export const LINK_CLASS =
  'text-black hover:underline transition-colors'

export const LINK_MUTED_CLASS =
  'text-black/70 hover:text-black transition-colors'

// Success States
export const SUCCESS_ICON_WRAPPER_CLASS =
  'inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/10 mb-6'

export const SUCCESS_ICON_CLASS =
  'w-8 h-8 text-black'

export const SUCCESS_TITLE_CLASS =
  'font-serif text-3xl mb-4'

export const SUCCESS_MESSAGE_CLASS =
  'text-lg text-black/60'

// Selected/Active States
export const SELECTED_RING_CLASS =
  'ring-2 ring-black ring-offset-2'

export const SELECTED_BG_CLASS =
  'bg-black/5'

export const SELECTED_TEXT_CLASS =
  'text-black font-medium'

// Highlights
export const HIGHLIGHT_BANNER_CLASS =
  'mb-6 p-4 bg-gray-100 border border-gray-300 rounded-md'

export const HIGHLIGHT_TEXT_CLASS =
  'text-sm text-black'
