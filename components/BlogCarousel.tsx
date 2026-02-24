import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/blog'
import { formatDate } from '@/lib/blog'

const categoryColors: Record<string, string> = {
  'was-kostet-website-arzt': 'bg-blue-100 text-blue-700',
  'website-wechsel-bedenken': 'bg-orange-100 text-orange-700',
  'ki-sichtbarkeit-aerzte': 'bg-purple-100 text-purple-700',
  'brauche-ich-website-als-arzt': 'bg-green-100 text-green-700',
  'dsgvo-arzt-website': 'bg-red-100 text-red-700',
  'barrierefreiheitsgesetz-aerzte': 'bg-yellow-100 text-yellow-700',
  'kmu-digital-foerderung-aerzte': 'bg-emerald-100 text-emerald-700',
  'docfinder-herold-google-vergleich': 'bg-sky-100 text-sky-700',
  'ki-telefonassistent-arztpraxis': 'bg-violet-100 text-violet-700',
}

const categoryLabels: Record<string, string> = {
  'was-kostet-website-arzt': 'Kosten',
  'website-wechsel-bedenken': 'Relaunch',
  'ki-sichtbarkeit-aerzte': 'KI',
  'brauche-ich-website-als-arzt': 'Grundlagen',
  'dsgvo-arzt-website': 'Datenschutz',
  'barrierefreiheitsgesetz-aerzte': 'Recht',
  'kmu-digital-foerderung-aerzte': 'Förderung',
  'docfinder-herold-google-vergleich': 'Plattformen',
  'ki-telefonassistent-arztpraxis': 'KI-Telefon',
}

export default function BlogCarousel({ posts }: { posts: BlogPostMeta[] }) {
  const doubled = [...posts, ...posts]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
          Wissen für Ihre Praxis
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Aktuelle Artikel</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Praxisnahe Einblicke zu Kosten, KI-Sichtbarkeit und digitalem Aufbau für niedergelassene Ärzte.
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative overflow-hidden marquee-container">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee-slow pb-2" style={{ width: 'max-content' }}>
          {doubled.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="flex-shrink-0 w-[268px] bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 rounded-2xl p-5 flex flex-col gap-2.5 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.slug] ?? 'bg-gray-100 text-gray-600'}`}>
                  {categoryLabels[post.slug] ?? 'Artikel'}
                </span>
                <span className="text-gray-400 text-[11px]">{formatDate(post.date)}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed flex-1 line-clamp-3">
                {post.description}
              </p>
              <span className="text-xs font-semibold text-primary flex items-center gap-1 mt-1">
                Lesen
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 px-6">
        <Link
          href="/blog"
          className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-xl transition-all text-sm"
        >
          Alle Artikel ansehen
        </Link>
      </div>
    </section>
  )
}
