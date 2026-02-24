import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import Navigation from '@/components/Navigation'
import BlogGrid from '@/components/BlogGrid'

export const metadata = {
  title: 'Blog – mypraxis.at',
  description: 'Praxisnahe Artikel über digitale Positionierung, KI-Sichtbarkeit und Website-Kosten für niedergelassene Ärzte in Österreich.',
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
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <BlogGrid posts={posts} />

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
