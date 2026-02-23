import Link from 'next/link'
import { getSortedPostsData, formatDate } from '@/lib/blog'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Blog – mypraxis.at',
  description: 'Praxisnahe Artikel über digitale Positionierung, KI-Sichtbarkeit und Website-Kosten für niedergelassene Ärzte in Österreich.',
}

const categoryColors: Record<string, string> = {
  'was-kostet-website-arzt': 'bg-blue-100 text-blue-700',
  'website-wechsel-bedenken': 'bg-orange-100 text-orange-700',
  'ki-sichtbarkeit-aerzte': 'bg-purple-100 text-purple-700',
}

const categoryLabels: Record<string, string> = {
  'was-kostet-website-arzt': 'Kosten & Förderung',
  'website-wechsel-bedenken': 'Website-Relaunch',
  'ki-sichtbarkeit-aerzte': 'KI-Sichtbarkeit',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Wissen für Ihre Praxis</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Praxisnahe Artikel über digitale Positionierung, KI-Sichtbarkeit und Förderungen für niedergelassene Ärztinnen und Ärzte in Österreich.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <Link href={`/blog/${post.slug}`} className="block p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.slug] ?? 'bg-gray-100 text-gray-600'}`}>
                      {categoryLabels[post.slug] ?? 'Artikel'}
                    </span>
                    <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3ab8] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-5">{post.description}</p>
                  <div className="flex items-center gap-2 text-[#1e3ab8] font-semibold text-sm">
                    <span>Artikel lesen</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Kostenlose Erstberatung</h3>
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
          <span>© 2026 mypraxis.at – Hofbauer Marketing</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
