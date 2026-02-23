/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force static generation for all pages = fastest, best for SEO
  output: 'export',
  // Alternativ: 'standalone' wenn du dynamische Features brauchst
  
  // Trailing slashes für saubere URLs
  trailingSlash: false,
  
  // Image optimization
  images: {
    unoptimized: true, // Für static export
  },
}

module.exports = nextConfig
