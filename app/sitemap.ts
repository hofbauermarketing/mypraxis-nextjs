import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'

const BASE_URL = 'https://www.mypraxis.at'

// Feste Datumswerte – bei inhaltlichen Änderungen aktualisieren
const SITE_LAUNCHED    = new Date('2025-11-01')
const LAST_MAJOR_UPDATE  = new Date('2026-03-17')
const LAST_CONTENT_UPDATE = new Date('2026-03-17')

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: `${BASE_URL}/`,                  lastModified: LAST_MAJOR_UPDATE,   changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/preise`,            lastModified: LAST_MAJOR_UPDATE,   changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/blog`,             lastModified: LAST_CONTENT_UPDATE,  changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/faq`,              lastModified: LAST_CONTENT_UPDATE,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/videothek`,        lastModified: LAST_CONTENT_UPDATE,  changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/gratis-check`,     lastModified: LAST_MAJOR_UPDATE,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/wcag-check`,         lastModified: LAST_MAJOR_UPDATE,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/barrierefreiheit`, lastModified: SITE_LAUNCHED,        changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${BASE_URL}/impressum`,        lastModified: LAST_MAJOR_UPDATE,    changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`,      lastModified: LAST_MAJOR_UPDATE,    changeFrequency: 'yearly',  priority: 0.3 },
    ...blogEntries,
  ]
}
