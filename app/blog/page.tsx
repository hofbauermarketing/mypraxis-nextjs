import type { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import Navigation from '@/components/Navigation'
import BlogGrid from '@/components/BlogGrid'

export const metadata: Metadata = {
  title: 'Blog: Arzt-Website & KI-Sichtbarkeit für Ärzte in Österreich & Deutschland | mypraxis.at',
  description: 'Praxisnahe Artikel zu KI-Readiness, digitaler Positionierung und Arzt-Website-Kosten für niedergelassene Ärzte in Österreich und Deutschland. Von ChatGPT bis Google AI Overviews – alles was Ärzte 2026 wissen müssen.',
  keywords: 'Blog Arzt Website Österreich Deutschland, KI-Sichtbarkeit Arztpraxis, digitale Positionierung Ärzte, ChatGPT Perplexity Arzt, Praxis Website Kosten, DSGVO Arztwebsite',
  alternates: {
    canonical: '/blog',
    languages: { 'de-AT': '/blog' },
  },
  openGraph: {
    title: 'Blog: Arzt-Website & KI-Sichtbarkeit für Ärzte – mypraxis.at',
    description: 'Praxisnahe Artikel zu KI-Readiness, digitaler Positionierung und Arzt-Website-Kosten für Ärzte in Österreich und Deutschland.',
    url: 'https://www.mypraxis.at/blog',
    siteName: 'mypraxis.at',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://www.mypraxis.at/blog#blog',
        name: 'mypraxis.at Blog – KI & Digitalisierung für Ärzte',
        description: 'Praxisnahe Artikel zu KI-Readiness, digitaler Positionierung und Website-Kosten für niedergelassene Ärzte in Österreich und Deutschland.',
        url: 'https://www.mypraxis.at/blog',
        inLanguage: 'de-AT',
        publisher: { '@id': 'https://www.mypraxis.at/#organization' },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `https://www.mypraxis.at/blog/${post.slug}#article`,
          headline: post.title,
          description: post.description,
          url: `https://www.mypraxis.at/blog/${post.slug}`,
          datePublished: post.date,
          author: { '@id': 'https://www.mypraxis.at/#kevin-hofbauer' },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'mypraxis.at', item: 'https://www.mypraxis.at' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mypraxis.at/blog' },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema, null, 2) }}
      />
      <Navigation />
      <main className="relative min-h-screen bg-gray-50 pb-20">
        {/* Strukturhintergrund: diagonale Punkte blau, sehr dezent */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,184,0.045) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Header */}
        <div className="relative overflow-hidden text-white pt-28 pb-20 px-6" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#112080] to-[#0a0f1e]" />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-blue-200/70 text-xs mb-4">
              <Link href="/" className="hover:text-white transition-colors">mypraxis.at</Link>
              <span aria-hidden="true">/</span>
              <span className="text-blue-200">Blog</span>
            </nav>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Wissen für Ihre Praxis</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog: Arzt-Website & KI-Sichtbarkeit für Ärzte in Österreich & Deutschland</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Praxisnahe Artikel über digitale Positionierung, KI-Sichtbarkeit und Förderungen für niedergelassene Ärztinnen und Ärzte in Österreich und Deutschland.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <BlogGrid posts={posts} />

          {/* CTA — im Stil der Startseite (kantig, Eyebrow, Navy/Orange) */}
          <div className="mt-16 bg-white border-2 border-[#112080]/15 shadow-[6px_6px_0_rgba(17,32,128,0.08)] px-6 md:px-10 py-10 text-center">
            <p className="text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-3">
              Nächster Schritt
            </p>
            <h2 className="text-lg md:text-xl font-bold text-[#112080] leading-snug mb-3">
              Kostenloses Erstgespräch
            </h2>
            <p className="text-[14px] text-gray-700 leading-relaxed max-w-xl mx-auto mb-6">
              30 Minuten, unverbindlich. Wir schauen uns Ihre aktuelle Online-Präsenz an und besprechen, was für Ihre Ordination sinnvoll ist.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-3 transition-colors"
            >
              Erstgespräch anfragen
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} mypraxis.at – Hofbauer Marketing</span>
          <nav aria-label="Footer Navigation" className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
