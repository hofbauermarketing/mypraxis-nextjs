import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import Navigation from '@/components/Navigation'
import BlogGrid from '@/components/BlogGrid'

export const metadata = {
  title: 'Blog: KI-Sichtbarkeit & Arzt-Website Tipps | mypraxis.at',
  description: 'Praxisnahe Artikel zu KI-Readiness, digitaler Positionierung und Website-Kosten für niedergelassene Ärzte in Österreich. Von ChatGPT bis Google AI Overviews – alles was Ärzte 2025 wissen müssen.',
  alternates: {
    canonical: '/blog',
    languages: { 'de-AT': '/blog' },
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
        description: 'Praxisnahe Artikel zu KI-Readiness, digitaler Positionierung und Website-Kosten für niedergelassene Ärzte in Österreich.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-blue-200/70 text-xs mb-4">
              <Link href="/" className="hover:text-white transition-colors">mypraxis.at</Link>
              <span aria-hidden="true">/</span>
              <span className="text-blue-200">Blog</span>
            </nav>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Wissen für Ihre Praxis</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Praxisnahe Artikel über digitale Positionierung, KI-Sichtbarkeit und Förderungen für niedergelassene Ärztinnen und Ärzte in Österreich.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <BlogGrid posts={posts} />

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Kostenlose Erstberatung</h2>
            <p className="text-blue-100 mb-6">30 Minuten, unverbindlich. Wir analysieren Ihre aktuelle Online-Präsenz und zeigen, was möglich ist.</p>
            <Link
              href="/#kontakt"
              className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Beratung vereinbaren
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
