/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mypraxis.at' }],
        destination: 'https://www.mypraxis.at/:path*',
        permanent: true,
      },
      // Alte /foerderung URL (falls noch indexiert) → Förderungs-Section auf Startseite
      // Kevin: keine eigene Förderseite mehr, alles läuft über Erstberatung.
      {
        source: '/foerderung',
        destination: '/#foerderung',
        permanent: true,
      },
      {
        source: '/foerderung/:path*',
        destination: '/#foerderung',
        permanent: true,
      },
    ]
  },
  async headers() {
    const securityHeaders = [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=()' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
    ]
    return [
      // Security-Header auf allen Routes (inkl. API)
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Link-Header für KI-Discovery auf allen HTML-Seiten
      {
        source: '/((?!_next|api|.*\\..*).*)',
        headers: [
          { key: 'Link', value: '</llms.txt>; rel="llms"; type="text/plain"' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'X-Robots-Tag', value: 'all' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'X-Robots-Tag', value: 'all' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
