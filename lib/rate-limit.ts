// In-Memory-Rate-Limit per IP (einfach, für Vercel Edge reicht's im Regelfall).
// Bei Vercel-Serverless-Instanzen nicht perfekt (mehrere Instanzen), aber besser als nichts.

type Bucket = { count: number; windowStart: number }
const buckets = new Map<string, Bucket>()

/** Gibt null zurück wenn OK, sonst eine Fehler-Nachricht. */
export function rateLimit(ip: string, route: string, max: number, windowSec: number): string | null {
  const now = Date.now()
  const windowMs = windowSec * 1000
  const key = `${route}:${ip}`
  const b = buckets.get(key)
  if (!b || now - b.windowStart > windowMs) {
    buckets.set(key, { count: 1, windowStart: now })
    return null
  }
  if (b.count >= max) {
    const retryIn = Math.ceil((b.windowStart + windowMs - now) / 1000)
    return `Zu viele Anfragen. Bitte in ${retryIn}s erneut versuchen.`
  }
  b.count++
  return null
}

export function getClientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  const xri = req.headers.get('x-real-ip')
  if (xri) return xri.trim()
  return 'unknown'
}
