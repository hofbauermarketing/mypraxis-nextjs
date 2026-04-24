import Link from 'next/link'
import { fachgebieteList, fachgebieteExtraSlugs } from '@/content/fachgebiete'

function Mp() {
  return <span><span className="text-blue-400">my</span>praxis<span className="text-gray-500">.at</span></span>
}

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] text-gray-400 border-t border-gray-800">
      {/* Navigation-Blöcke */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <div className="text-base font-semibold text-white mb-3">
            <Mp />
          </div>
          <p className="text-xs leading-relaxed text-gray-500 mb-4">
            Fachagentur für niedergelassene Ärzt:innen. Websites pro Fachgebiet einzeln — auf Basis eigener Strategiepapiere.
          </p>
          <p className="text-[11px] text-gray-600 leading-snug">
            Kevin Hofbauer e.U.<br />
            Hauptplatz 12 · TOP 24<br />
            3902 Vitis · Niederösterreich
          </p>
        </div>

        {/* Fachgebiete */}
        <div>
          <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Fachgebiete</h3>
          <ul className="space-y-1.5">
            {fachgebieteList.map((fg) => {
              const isExtra = fachgebieteExtraSlugs.includes(fg.slug)
              return (
                <li key={fg.slug}>
                  <Link
                    href={`/fachgebiete/${fg.slug}`}
                    className={`text-xs hover:text-white transition-colors ${isExtra ? 'text-[#ff8a00]' : ''}`}
                  >
                    {fg.shortName}
                  </Link>
                </li>
              )
            })}
            <li className="pt-1">
              <Link href="/fachgebiete" className="text-xs text-white/70 hover:text-white font-semibold">
                Alle Fachgebiete →
              </Link>
            </li>
          </ul>
        </div>

        {/* Für wen */}
        <div>
          <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Für wen</h3>
          <ul className="space-y-1.5">
            <li><Link href="/fuer-kassenaerzte" className="text-xs hover:text-white transition-colors">Kassenärzt:innen</Link></li>
            <li><Link href="/fuer-privatarzt" className="text-xs hover:text-white transition-colors">Privat- und Wahlärzt:innen</Link></li>
            <li><Link href="/fuer-aerztezentren" className="text-xs hover:text-white transition-colors">Ärztezentren &amp; PVEs</Link></li>
          </ul>

          <h3 className="text-white text-xs font-semibold uppercase tracking-wider mt-6 mb-3">Methodik</h3>
          <ul className="space-y-1.5">
            <li><Link href="/#erstgespraech" className="text-xs hover:text-white transition-colors">Vier Schritte</Link></li>
            <li><Link href="/#kontakt" className="text-xs hover:text-white transition-colors">Erstgespräch</Link></li>
          </ul>
        </div>

        {/* Inhalte */}
        <div>
          <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Inhalte</h3>
          <ul className="space-y-1.5">
            <li><Link href="/blog" className="text-xs hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/videothek" className="text-xs hover:text-white transition-colors">Videothek</Link></li>
            <li><Link href="/faq" className="text-xs hover:text-white transition-colors">FAQ</Link></li>
          </ul>

          <h3 className="text-white text-xs font-semibold uppercase tracking-wider mt-6 mb-3">Rechtliches</h3>
          <ul className="space-y-1.5">
            <li><Link href="/impressum" className="text-xs hover:text-white transition-colors">Impressum</Link></li>
            <li><Link href="/datenschutz" className="text-xs hover:text-white transition-colors">Datenschutz</Link></li>
            <li><Link href="/barrierefreiheit" className="text-xs hover:text-white transition-colors">Barrierefreiheit</Link></li>
          </ul>
        </div>
      </div>

      {/* Separator + Beschreibung (SEO-relevant) */}
      <div className="border-t border-gray-800/80">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs leading-relaxed text-gray-500">
          <p className="mb-3">
            <Mp /> ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich und Deutschland.
            Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich. Wir erstellen rechtssichere
            Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für medizinische Einrichtungen
            und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews.
          </p>
          <p className="text-gray-600">
            Wir betreuen Ärztinnen und Ärzte aller Fachrichtungen: Allgemeinmedizin, Innere Medizin, Orthopädie,
            Kardiologie, Dermatologie, Gynäkologie, HNO, Urologie, Neurologie, Chirurgie, Augenheilkunde,
            Kinderheilkunde, Zahnmedizin, Alternativmedizin und alle weiteren Fachrichtungen.
          </p>
        </div>
      </div>

      {/* Bottom-Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500">
            <a href="tel:+436641915447" className="hover:text-white transition-colors">+43 664 191 5447</a>
            <a href="mailto:office@mypraxis.at" className="hover:text-white transition-colors">office@mypraxis.at</a>
            <span className="text-gray-700">Mo–Fr, 09:00–18:00 Uhr</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/kevin-hofbauer-b2660b274/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kevin Hofbauer auf LinkedIn"
              className="hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035353760113"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kevin Hofbauer auf Facebook"
              className="hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <span className="text-gray-600 ml-2">© {year} Kevin Hofbauer e.U.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
