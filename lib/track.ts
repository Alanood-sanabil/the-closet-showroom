type TrackPayload = Record<string, string | number | boolean>

export function track(eventName: string, payload?: TrackPayload): void {
  const timestamp = new Date().toISOString()

  console.log(
    `%c[Analytics] ${eventName}`,
    'color: #5B21B6; font-weight: bold;',
    {
      event: eventName,
      payload: payload || {},
      timestamp,
    }
  )
}
