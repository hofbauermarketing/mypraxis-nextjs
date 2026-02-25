import { getSortedPostsData } from '@/lib/blog'
import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.mypraxis.at'

export const revalidate = 86400

export function GET() {
  const posts = getSortedPostsData()

  const entries = [
    { url: `${BASE_URL}/`,          lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: '1.0' },
    { url: `${BASE_URL}/blog`,      lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: '0.9' },
    { url: `${BASE_URL}/videothek`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
    ...posts.map((post) => ({
      url:        `${BASE_URL}/blog/${post.slug}`,
      lastmod:    new Date(post.date).toISOString(),
      changefreq: 'monthly',
      priority:   '0.7',
    })),
  ]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((e) =>
      `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    ),
    '</urlset>',
  ].join('\n')

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
