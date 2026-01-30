/**
 * Convert ISO 3166-1 alpha-2 country code to emoji flag
 * @param countryCode - Two-letter country code (e.g., 'US', 'FR', 'IT')
 * @returns Emoji flag string
 * @example getCountryFlag('US') // Returns 🇺🇸
 */
export function getCountryFlag(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) {
    return ''
  }

  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))

  return String.fromCodePoint(...codePoints)
}
