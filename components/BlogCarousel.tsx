import Link from 'next/link'
import Image from 'next/image'
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
  'barrierefreiheits-widget-arzt-website': 'bg-teal-100 text-teal-700',
  // 2026-04-24 neue Artikel
  'bfsg-arztpraxen-checkliste': 'bg-red-100 text-red-700',
  'chatgpt-ordination-finden': 'bg-purple-100 text-purple-700',
  'wahlarzt-positionierung-docfinder': 'bg-sky-100 text-sky-700',
  'oeak-werberichtlinien-website': 'bg-yellow-100 text-yellow-700',
  'praxis-uebergabe-planen': 'bg-amber-100 text-amber-700',
  'telefon-entlastung-ordination': 'bg-blue-100 text-blue-700',
  'google-business-ordination': 'bg-sky-100 text-sky-700',
  'lokales-seo-arztpraxis': 'bg-green-100 text-green-700',
  'bewertungen-rechtssicher-aerzte': 'bg-violet-100 text-violet-700',
  // Batch 4 — Cluster A/B/C/D/E/F
  'wcag-arztpraxis-umsetzen': 'bg-yellow-100 text-yellow-700',
  'online-terminbuchung-barrierefrei': 'bg-red-100 text-red-700',
  'dsgvo-checkliste-arztpraxis': 'bg-red-100 text-red-700',
  'bfsg-abmahnungen-2025': 'bg-red-100 text-red-700',
  'wahlarzt-vs-kassenarzt-online': 'bg-orange-100 text-orange-700',
  'pensionswelle-hausaerzte-2030': 'bg-amber-100 text-amber-700',
  'praxis-verkauf-website-wert': 'bg-amber-100 text-amber-700',
  'nachfolge-suche-wahlarzt-digital': 'bg-amber-100 text-amber-700',
  'chatgpt-fuer-ordination': 'bg-purple-100 text-purple-700',
  'llms-txt-arztpraxis': 'bg-purple-100 text-purple-700',
  'schema-medical-business': 'bg-purple-100 text-purple-700',
  'ki-telefonassistent-pro-contra': 'bg-purple-100 text-purple-700',
  'online-rezept-bestellung': 'bg-blue-100 text-blue-700',
  'mfa-mangel-website-entlastung': 'bg-blue-100 text-blue-700',
  'ecard-elga-patienten-info': 'bg-blue-100 text-blue-700',
  'kmu-digital-2026-aerzte': 'bg-emerald-100 text-emerald-700',
  'mehrsprachigkeit-ordination-bfsg': 'bg-emerald-100 text-emerald-700',
  'tageszeit-medizin-spitalsentlastung': 'bg-emerald-100 text-emerald-700',
  // ältere Artikel (nachgetragen 2026-04-24)
  'arzt-homepage-richtlinien': 'bg-yellow-100 text-yellow-700',
  'google-bewertungen-arzt': 'bg-violet-100 text-violet-700',
  'google-business-aerzte': 'bg-sky-100 text-sky-700',
  'ki-arztpraxis-einsatz': 'bg-purple-100 text-purple-700',
  'online-sichtbarkeit-aerzte': 'bg-green-100 text-green-700',
  'online-terminbuchung-arzt-vergleich': 'bg-blue-100 text-blue-700',
  'ordinationsgruendung-website-checkliste': 'bg-green-100 text-green-700',
  'patienten-gewinnen-wahlarzt': 'bg-orange-100 text-orange-700',
  'social-media-arzt-oesterreich': 'bg-pink-100 text-pink-700',
  'vorher-nachher-content-arzt': 'bg-yellow-100 text-yellow-700',
  'wahlarzt-website': 'bg-orange-100 text-orange-700',
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
  'barrierefreiheits-widget-arzt-website': 'Barrierefreiheit',
  // 2026-04-24 neue Artikel
  'bfsg-arztpraxen-checkliste': 'Recht',
  'chatgpt-ordination-finden': 'KI',
  'wahlarzt-positionierung-docfinder': 'Plattformen',
  'oeak-werberichtlinien-website': 'Recht',
  'praxis-uebergabe-planen': 'Übergabe',
  'telefon-entlastung-ordination': 'Praxis-Alltag',
  'google-business-ordination': 'Plattformen',
  'lokales-seo-arztpraxis': 'SEO',
  'bewertungen-rechtssicher-aerzte': 'Bewertungen',
  // Batch 4
  'wcag-arztpraxis-umsetzen': 'Barrierefreiheit',
  'online-terminbuchung-barrierefrei': 'Recht',
  'dsgvo-checkliste-arztpraxis': 'Datenschutz',
  'bfsg-abmahnungen-2025': 'Recht',
  'wahlarzt-vs-kassenarzt-online': 'Positionierung',
  'pensionswelle-hausaerzte-2030': 'Übergabe',
  'praxis-verkauf-website-wert': 'Übergabe',
  'nachfolge-suche-wahlarzt-digital': 'Übergabe',
  'chatgpt-fuer-ordination': 'KI',
  'llms-txt-arztpraxis': 'KI',
  'schema-medical-business': 'KI',
  'ki-telefonassistent-pro-contra': 'KI-Telefon',
  'online-rezept-bestellung': 'Praxis-Alltag',
  'mfa-mangel-website-entlastung': 'Praxis-Alltag',
  'ecard-elga-patienten-info': 'ELGA',
  'kmu-digital-2026-aerzte': 'Förderung',
  'mehrsprachigkeit-ordination-bfsg': 'Mehrsprachig',
  'tageszeit-medizin-spitalsentlastung': 'Gesundheitspolitik',
  // ältere Artikel (nachgetragen 2026-04-24)
  'arzt-homepage-richtlinien': 'Recht',
  'google-bewertungen-arzt': 'Bewertungen',
  'google-business-aerzte': 'Plattformen',
  'ki-arztpraxis-einsatz': 'KI',
  'online-sichtbarkeit-aerzte': 'SEO',
  'online-terminbuchung-arzt-vergleich': 'Praxis-Alltag',
  'ordinationsgruendung-website-checkliste': 'Grundlagen',
  'patienten-gewinnen-wahlarzt': 'Positionierung',
  'social-media-arzt-oesterreich': 'Social Media',
  'vorher-nachher-content-arzt': 'Recht',
  'wahlarzt-website': 'Positionierung',
}

function BlogCard({ post, tabIndex }: { post: BlogPostMeta; tabIndex?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      tabIndex={tabIndex}
      className="flex-shrink-0 w-[268px] bg-white border border-gray-100 hover:border-blue-100 rounded-2xl overflow-hidden flex flex-col transition-all hover:shadow-md group"
    >
      {/* Cover image */}
      <div className="relative w-full h-[148px] bg-gray-100 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="268px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <span className="text-blue-300 text-4xl">📄</span>
          </div>
        )}
        <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.slug] ?? 'bg-gray-100 text-gray-600'}`}>
          {categoryLabels[post.slug] ?? 'Artikel'}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-gray-400 text-[11px]">{formatDate(post.date)}</span>
        <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[12px] text-gray-500 leading-relaxed flex-1 line-clamp-2">
          {post.description}
        </p>
        <span className="text-xs font-semibold text-primary flex items-center gap-1 mt-1">
          Lesen
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function BlogCarousel({ posts }: { posts: BlogPostMeta[] }) {
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
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
          {/* Visual duplicates for infinite scroll – hidden from screen readers */}
          {posts.map((post, i) => (
            <BlogCard key={`dup-${i}`} post={post} tabIndex={-1} />
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
