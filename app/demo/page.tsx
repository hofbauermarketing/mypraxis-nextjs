import Link from 'next/link'

export const metadata = {
  title: 'Demo-Seiten – mypraxis.at',
  description: 'Stilvorlagen für Arzt-Websites und Ärztezentren von mypraxis.at',
  robots: 'noindex',
}

const demos = [
  {
    href: '/demo/privatarzt-classic',
    label: 'Privatarzt',
    title: 'Stil 1 – Classic Trust',
    name: 'Dr. Thomas Haas',
    fach: 'Innere Medizin · Wien',
    desc: 'Seriös, klar, vertrauenserweckend. Ideal für Internisten, Allgemeinmediziner, Hausärzte.',
    screenshot: '/demo-preview-classic.jpg',
  },
  {
    href: '/demo/privatarzt-modern',
    label: 'Privatarzt',
    title: 'Stil 2 – Modern Premium',
    name: 'Dr. Julia Stern',
    fach: 'Dermatologie & Ästhetik · Wien',
    desc: 'Dunkel, hochwertig, mutig. Für Spezialisten und Ästhetik-Medizin, die herausstechen wollen.',
    screenshot: '/demo-preview-modern.jpg',
  },
  {
    href: '/demo/privatarzt-warm',
    label: 'Privatarzt',
    title: 'Stil 3 – Warm & Persönlich',
    name: 'Dr. Anna Berger',
    fach: 'Kinder- und Jugendheilkunde · Linz',
    desc: 'Warm, einladend, menschlich. Perfekt für Kinderärzte, Gynäkologie, Familienmedizin.',
    screenshot: '/demo-preview-warm.jpg',
  },
  {
    href: '/demo/aerztezentrum-classic',
    label: 'Ärztezentrum',
    title: 'Stil 4 – Ärztezentrum Classic',
    name: 'Ärztezentrum Mariahilf',
    fach: '4 Fachrichtungen · Wien',
    desc: 'Professionell, übersichtlich, institutionell. Mehrere Ärzte, klare Fachbereiche.',
    screenshot: '/demo-preview-aerztezentrum.jpg',
  },
  {
    href: '/demo/aerztezentrum-premium',
    label: 'Ärztezentrum',
    title: 'Stil 5 – Ärztezentrum Premium',
    name: 'MedCenter Alsergrund',
    fach: '8 Fachrichtungen · Wien',
    desc: 'Modern, dunkel, corporate. Für größere Zentren mit starkem Markenanspruch.',
    screenshot: '/demo-preview-premium.jpg',
  },
]

export default function DemoIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white px-6 pt-6 pb-14" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        {/* Zurück-Link + Logo */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-semibold transition-colors">
            ← Zurück zur Website
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-bold text-lg tracking-tight">
              <span className="text-[#ff8a00]">my</span>praxis.at
            </span>
          </Link>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Demo-Seiten
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Stilvorlagen für Ihre Praxis-Website</h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            3 Designs für Wahlarzt-Ordinationen, 2 für Ärztezentren. Alle mit echten Inhalten, DSGVO-konform und KI-ready.
          </p>
        </div>
      </div>

      {/* Demos */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Privatärzte & Wahlarzt-Ordinationen</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-12" style={{ paddingTop: '20px' }}>
          {demos.slice(0, 3).map((d) => (
            <div key={d.href} className="relative mt-4">
              {/* Push-Pin */}
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="w-5 h-5 rounded-full border border-red-900/25" style={{ background: 'radial-gradient(circle at 35% 32%, #f05050 0%, #c02020 45%, #7a0f0f 100%)', boxShadow: '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.35)' }} />
                <div className="w-[2px] h-2.5 rounded-b-full" style={{ background: 'linear-gradient(to bottom, #bbb, #888)' }} />
              </div>
            <a href={d.href} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
              {/* Screenshot preview */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={d.screenshot}
                  alt={`Vorschau ${d.title} – ${d.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">{d.fach}</p>
                <p className="font-bold text-gray-900 text-sm mb-1">{d.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{d.desc}</p>
                <span className="text-xs font-semibold text-[#1e3ab8] group-hover:underline">Demo ansehen →</span>
              </div>
            </a>
            </div>
          ))}
        </div>

        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Ärztezentren & Gruppenpraxen</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-12" style={{ paddingTop: '20px' }}>
          {demos.slice(3).map((d) => (
            <div key={d.href} className="relative mt-4">
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="w-5 h-5 rounded-full border border-red-900/25" style={{ background: 'radial-gradient(circle at 35% 32%, #f05050 0%, #c02020 45%, #7a0f0f 100%)', boxShadow: '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.35)' }} />
                <div className="w-[2px] h-2.5 rounded-b-full" style={{ background: 'linear-gradient(to bottom, #bbb, #888)' }} />
              </div>
              <a href={d.href} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={d.screenshot}
                  alt={`Vorschau ${d.title} – ${d.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">{d.fach}</p>
                <p className="font-bold text-gray-900 text-sm mb-1">{d.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{d.desc}</p>
                <span className="text-xs font-semibold text-[#1e3ab8] group-hover:underline">Demo ansehen →</span>
              </div>
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#1e3ab8] rounded-2xl p-8 text-white text-center">
          <p className="text-blue-100 text-sm mb-2">Keiner dieser Stile trifft es genau?</p>
          <h3 className="text-xl font-bold mb-1">Wir gestalten nach Ihren Wünschen.</h3>
          <p className="text-blue-200 text-sm mb-5">Jede Umsetzung ist individuell – kein Template, keine Copy-Paste-Seite.</p>
          <Link href="/#kontakt" className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
            Kostenloses Erstgespräch
          </Link>
        </div>
      </div>
    </main>
  )
}
