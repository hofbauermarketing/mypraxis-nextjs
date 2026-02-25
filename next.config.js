/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // non-www → www (HTTP und HTTPS, alle Pfade, ein einziger Hop)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mypraxis.at' }],
        destination: 'https://www.mypraxis.at/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
