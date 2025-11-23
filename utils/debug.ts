export function debugError(message: string, error?: unknown): void {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[DEBUG] ${message}`, error)
  }
}

