import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'KI-Videothek für Ärzte – mypraxis.at',
  description: 'Kuratierte Videos zu KI in der Medizin, Digitalisierung und Online-Sichtbarkeit für niedergelassene Ärztinnen und Ärzte in Österreich. Kostenlos ansehen.',
  alternates: {
    canonical: '/videothek',
    languages: { 'de-AT': '/videothek' },
  },
}

interface Video {
  youtubeId: string
  title: string
  description: string
  category: string
  duration?: string
  source?: string
  placeholder?: boolean
}

const videos: Video[] = [
  // ─── Echte Videos ───────────────────────────────────────────────────────────
  {
    youtubeId: 'T3hzI7ZMpFw',
    title: 'KI gegen Krebs – Revolution der Medizin?',
    description:
      'KI-Systeme revolutionieren die Krebsdiagnose: Tumorzellen werden früher erkannt, Therapien präziser geplant. Dieses Video der KI WELT zeigt, wie maschinelles Lernen die Onkologie verändert – von der Bildanalyse bis zur personalisierten Behandlung.',
    category: 'KI & Medizin',
    source: 'KI WELT',
  },
  {
    youtubeId: 'gxjjAV-oFMA',
    title: 'Ich habe meine Gesundheit von KI analysieren lassen',
    description:
      'Ein Selbstversuch: Was passiert, wenn man seine Gesundheitsdaten von einer künstlichen Intelligenz auswerten lässt? Ein aufschlussreicher Erfahrungsbericht über Chancen und Grenzen von KI in der persönlichen Gesundheitsanalyse.',
    category: 'KI & Medizin',
  },
  {
    youtubeId: 'O0IVw_0R5eU',
    title: 'Wie funktioniert die Medizin von morgen?',
    description:
      'Der Bayrische Rundfunk beleuchtet, wie künstliche Intelligenz das Gesundheitssystem transformiert – von der Diagnose über die Behandlung bis zur Prävention. Ein fundierter Überblick über KI-Anwendungen in der Medizin von morgen.',
    category: 'KI & Medizin',
    source: 'Bayrischer Rundfunk',
  },

  // ─── Platzhalter – werden sukzessive befüllt ────────────────────────────────
  {
    youtubeId: 'PLACEHOLDER_1',
    title: 'KI-Sichtbarkeit für Arztpraxen – Was Ärzte 2025 wissen müssen',
    description:
      'Wie ChatGPT, Google Gemini und andere KI-Systeme Patientenanfragen beantworten und warum die Sichtbarkeit Ihrer Praxis in diesen Systemen immer wichtiger wird.',
    category: 'KI & Sichtbarkeit',
    duration: '~15 Min.',
    placeholder: true,
  },
  {
    youtubeId: 'PLACEHOLDER_2',
    title: 'Google AI Overviews – Was bedeutet das für Ihre Arztpraxis?',
    description:
      'Google zeigt bei bis zu 60 % aller Suchanfragen KI-generierte Zusammenfassungen. Erfahren Sie, wie Sie sicherstellen, dass Ihre Praxis dort positiv erwähnt wird.',
    category: 'KI & Sichtbarkeit',
    duration: '~12 Min.',
    placeholder: true,
  },
  {
    youtubeId: 'PLACEHOLDER_3',
    title: 'Schema Markup für Ärzte – Strukturierte Daten einfach erklärt',
    description:
      'Strukturierte Daten helfen KI-Systemen und Suchmaschinen, Ihre Praxisinformationen korrekt zu verstehen. Ein Überblick für medizinische Einrichtungen.',
    category: 'Digitalisierung',
    duration: '~10 Min.',
    placeholder: true,
  },
  {
    youtubeId: 'PLACEHOLDER_4',
    title: 'DSGVO-konforme Arzt-Website – Checkliste & häufige Fehler',
    description:
      'Welche Pflichtangaben gehören auf jede Arzt-Website? Was gilt für Kontaktformulare und Cookies? Die wichtigsten DSGVO-Anforderungen für niedergelassene Ärzte in Österreich.',
    category: 'DSGVO & Recht',
    duration: '~18 Min.',
    placeholder: true,
  },
  {
    youtubeId: 'PLACEHOLDER_5',
    title: 'KMU Digital Förderung für Ärzte – So beantragen Sie den Zuschuss',
    description:
      'Das KMU Digital Förderprogramm unterstützt niedergelassene Ärzte bei der Digitalisierung mit bis zu 10.000 €. Schritt-für-Schritt-Anleitung zur Antragstellung.',
    category: 'Förderung',
    duration: '~20 Min.',
    placeholder: true,
  },
]

const categoryColors: Record<string, string> = {
  'KI & Medizin': 'bg-teal-100 text-teal-700',
  'KI & Sichtbarkeit': 'bg-purple-100 text-purple-700',
  'Digitalisierung': 'bg-blue-100 text-blue-700',
  'DSGVO & Recht': 'bg-red-100 text-red-700',
  'Förderung': 'bg-green-100 text-green-700',
  'Marketing': 'bg-orange-100 text-orange-700',
}

const categoryGradients: Record<string, string> = {
  'KI & Medizin': 'from-teal-500 to-emerald-700',
  'KI & Sichtbarkeit': 'from-violet-600 to-purple-800',
  'Digitalisierung': 'from-blue-500 to-blue-800',
  'DSGVO & Recht': 'from-red-500 to-rose-700',
  'Förderung': 'from-emerald-500 to-teal-700',
  'Marketing': 'from-orange-500 to-amber-600',
}

function VideoCard({ video }: { video: Video }) {
  const hasId = video.youtubeId && !video.youtubeId.startsWith('PLACEHOLDER')
  const thumbnail = hasId
    ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
    : null
  const href = hasId
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : '#'
  const gradient = categoryGradients[video.category] ?? 'from-gray-600 to-gray-800'
  const colorClass = categoryColors[video.category] ?? 'bg-gray-100 text-gray-700'

  return (
    <a
      href={href}
      target={hasId ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={hasId ? `${video.title} – auf YouTube ansehen` : video.title}
      className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all group flex flex-col ${
        video.placeholder
          ? 'border-dashed border-gray-200 opacity-60 cursor-default pointer-events-none'
          : 'border-gray-100 hover:shadow-md'
      }`}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`Vorschaubild: ${video.title}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Platzhalter</span>
          </div>
        )}
        {/* Play button overlay – nur bei echten Videos */}
        {hasId && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-colors">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass} bg-white/95`}>
            {video.category}
          </span>
        </div>
        {/* Platzhalter badge */}
        {video.placeholder && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-gray-800/80 text-gray-300 uppercase tracking-wide">
              Platzhalter
            </span>
          </div>
        )}
        {/* Duration */}
        {video.duration && !video.placeholder && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-medium px-2 py-1 rounded bg-black/60 text-white">
              {video.duration}
            </span>
          </div>
        )}
        {/* Source badge */}
        {video.source && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-semibold px-2 py-1 rounded bg-black/60 text-white/90">
              {video.source}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-[15px] font-bold text-gray-900 mb-2 group-hover:text-[#1e3ab8] transition-colors leading-snug line-clamp-2">
          {video.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {video.description}
        </p>
        {hasId && (
          <div className="mt-4 flex items-center gap-1.5 text-[#1e3ab8] font-semibold text-xs" aria-hidden="true">
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.4 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.8 14.5V9l5.4 2.8-5.4 2.7z" />
            </svg>
            <span>Auf YouTube ansehen</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </a>
  )
}

export default function VideothekPage() {
  const realVideos = videos.filter((v) => !v.placeholder)
  const placeholderVideos = videos.filter((v) => v.placeholder)
  const categories = [...new Set(realVideos.map((v) => v.category))]

  const videothekSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.mypraxis.at/videothek#page',
        name: 'KI-Videothek für Ärzte',
        description: 'Kuratierte Videos zu KI in der Medizin, Digitalisierung und Online-Sichtbarkeit für niedergelassene Ärztinnen und Ärzte in Österreich.',
        url: 'https://www.mypraxis.at/videothek',
        inLanguage: 'de-AT',
        publisher: { '@id': 'https://www.mypraxis.at/#organization' },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Kuratierte Videos zu KI & Digitalisierung für Ärzte',
          numberOfItems: realVideos.length,
          itemListElement: realVideos.map((video, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'VideoObject',
              name: video.title,
              description: video.description,
              thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
              url: `https://www.youtube.com/watch?v=${video.youtubeId}`,
              embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
              uploadDate: '2024-01-01',
              ...(video.source ? { author: { '@type': 'Organization', name: video.source } } : {}),
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'mypraxis.at', item: 'https://www.mypraxis.at' },
          { '@type': 'ListItem', position: 2, name: 'KI-Videothek', item: 'https://www.mypraxis.at/videothek' },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videothekSchema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-blue-200/70 text-xs mb-4">
              <Link href="/" className="hover:text-white transition-colors">mypraxis.at</Link>
              <span aria-hidden="true">/</span>
              <span className="text-blue-200">KI-Videothek</span>
            </nav>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Kuratierte Inhalte</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">KI-Videothek</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Ausgewählte Videos zu KI in der Medizin, Digitalisierung und Online-Präsenz für niedergelassene Ärztinnen und Ärzte.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Category pills */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center mb-10" role="list" aria-label="Kategorien">
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className={`text-sm font-semibold px-4 py-1.5 rounded-full ${categoryColors[cat] ?? 'bg-gray-100 text-gray-700'}`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Real Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {realVideos.map((video) => (
              <VideoCard key={video.youtubeId} video={video} />
            ))}
          </div>

          {/* Copyright notice */}
          <p className="text-xs text-gray-400 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            Die Rechte an den oben verlinkten Videos liegen beim jeweiligen Produzenten bzw. Rechteinhaber.
            mypraxis.at zeigt und verlinkt diese Videos ausschließlich zu Informationszwecken und ohne kommerzielle Absicht.
          </p>

          {/* Placeholder section */}
          {placeholderVideos.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">
                  Demnächst verfügbar
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {placeholderVideos.map((video) => (
                  <VideoCard key={video.youtubeId} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Kostenlose Erstberatung</h2>
            <p className="text-blue-100 mb-6">
              30 Minuten, unverbindlich. Wir analysieren Ihre aktuelle Online-Präsenz und zeigen, was möglich ist.
            </p>
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
