import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'KI-Videothek – mypraxis.at',
  description: 'Kuratierte Videos zu KI, Digitalisierung und Online-Sichtbarkeit für niedergelassene Ärztinnen und Ärzte in Österreich.',
}

interface Video {
  youtubeId: string
  title: string
  description: string
  category: string
  duration?: string
}

// ─── Videos hier eintragen ───────────────────────────────────────────────────
// youtubeId: Der Teil nach „watch?v=" in der YouTube-URL
// Beispiel: https://www.youtube.com/watch?v=dQw4w9WgXcQ → youtubeId: 'dQw4w9WgXcQ'
const videos: Video[] = [
  {
    youtubeId: 'PLACEHOLDER_1',
    title: 'KI-Sichtbarkeit für Arztpraxen – Was Ärzte 2025 wissen müssen',
    description:
      'Wie ChatGPT, Google Gemini und andere KI-Systeme Patientenanfragen beantworten und warum die Sichtbarkeit Ihrer Praxis in diesen Systemen immer wichtiger wird.',
    category: 'KI & Sichtbarkeit',
    duration: '~15 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_2',
    title: 'Google AI Overviews – Was bedeutet das für Ihre Arztpraxis?',
    description:
      'Google zeigt bei bis zu 60 % aller Suchanfragen KI-generierte Zusammenfassungen. Erfahren Sie, wie Sie sicherstellen, dass Ihre Praxis dort positiv erwähnt wird.',
    category: 'KI & Sichtbarkeit',
    duration: '~12 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_3',
    title: 'Schema Markup für Ärzte – Strukturierte Daten einfach erklärt',
    description:
      'Strukturierte Daten helfen KI-Systemen und Suchmaschinen, Ihre Praxisinformationen korrekt zu verstehen und weiterzugeben. Ein Überblick für medizinische Einrichtungen.',
    category: 'Digitalisierung',
    duration: '~10 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_4',
    title: 'DSGVO-konforme Arzt-Website – Checkliste & häufige Fehler',
    description:
      'Welche Pflichtangaben gehören auf jede Arzt-Website? Was gilt für Kontaktformulare und Cookies? Die wichtigsten DSGVO-Anforderungen für niedergelassene Ärzte in Österreich.',
    category: 'DSGVO & Recht',
    duration: '~18 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_5',
    title: 'KMU Digital Förderung für Ärzte – So beantragen Sie den Zuschuss',
    description:
      'Das KMU Digital Förderprogramm unterstützt niedergelassene Ärzte bei der Digitalisierung mit bis zu 10.000 €. Schritt-für-Schritt-Anleitung zur Antragstellung.',
    category: 'Förderung',
    duration: '~20 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_6',
    title: 'ChatGPT in der Arztpraxis – Chancen und Risiken im Überblick',
    description:
      'Wie nutzen Patienten ChatGPT für Gesundheitsfragen? Welche Risiken entstehen durch falsche Informationen? Und wie können Praxen mit fundierter Online-Präsenz Vertrauen aufbauen.',
    category: 'KI & Sichtbarkeit',
    duration: '~14 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_7',
    title: 'Bewertungsmanagement für Ärzte – Docfinder, Google & Co.',
    description:
      'Positive Bewertungen auf Docfinder, Jameda und Google sind entscheidend für die Patientengewinnung. Tipps zum professionellen Umgang mit Bewertungen.',
    category: 'Marketing',
    duration: '~16 Min.',
  },
  {
    youtubeId: 'PLACEHOLDER_8',
    title: 'Barrierefreiheitsgesetz 2025 – Was ändert sich für Arzt-Websites?',
    description:
      'Ab 2025 gilt das Barrierefreiheitsgesetz auch für private Websites. Was muss eine barrierefreie Arzt-Website erfüllen, und welche Strafen drohen bei Nichteinhaltung?',
    category: 'DSGVO & Recht',
    duration: '~11 Min.',
  },
]

const categoryColors: Record<string, string> = {
  'KI & Sichtbarkeit': 'bg-purple-100 text-purple-700',
  'Digitalisierung': 'bg-blue-100 text-blue-700',
  'DSGVO & Recht': 'bg-red-100 text-red-700',
  'Förderung': 'bg-green-100 text-green-700',
  'Marketing': 'bg-orange-100 text-orange-700',
}

const categoryGradients: Record<string, string> = {
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
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        )}
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-colors">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass} bg-white/95`}>
            {video.category}
          </span>
        </div>
        {/* Duration */}
        {video.duration && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-medium px-2 py-1 rounded bg-black/60 text-white">
              {video.duration}
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
        <div className="mt-4 flex items-center gap-1.5 text-[#1e3ab8] font-semibold text-xs">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
          </svg>
          <span>Video ansehen</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  )
}

export default function VideothekPage() {
  const categories = [...new Set(videos.map((v) => v.category))]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Kuratierte Inhalte</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">KI-Videothek</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Ausgewählte Videos zu KI-Sichtbarkeit, Digitalisierung und Online-Präsenz für niedergelassene Ärztinnen und Ärzte in Österreich.
            </p>
          </div>
        </div>

        {/* Category pills */}
        <div className="max-w-6xl mx-auto px-6 mt-10">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full ${categoryColors[cat] ?? 'bg-gray-100 text-gray-700'}`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.youtubeId} video={video} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Kostenlose Erstberatung</h3>
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
