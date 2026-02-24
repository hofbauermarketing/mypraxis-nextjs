import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'Dr. Thomas Haas – Facharzt für Innere Medizin', robots: 'noindex' }

const leistungen = [
  { icon: '🫀', title: 'Kardiologie', text: 'EKG, Langzeit-EKG, Belastungs-EKG, Echokardiographie' },
  { icon: '🩸', title: 'Labordiagnostik', text: 'Großes Blutbild, Schilddrüse, Diabetes, Vitaminwerte' },
  { icon: '🔬', title: 'Ultraschall', text: 'Bauchorgane, Schilddrüse, Gefäßdoppler' },
  { icon: '🫁', title: 'Lungenfunktion', text: 'Spirometrie, Bodyplethysmographie, Allergietest' },
  { icon: '🩺', title: 'Vorsorge', text: 'Gesundenuntersuchung, Vorsorgecheck, Risikoanalyse' },
  { icon: '💊', title: 'Chronische Erkrankungen', text: 'Bluthochdruck, Diabetes, Schilddrüse, Fettstoffwechsel' },
]

export default function Demo1Page() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 text-center py-1.5 text-xs font-semibold">
        Demo-Seite · Stil 1: Classic Trust ·{' '}
        <Link href="/demo" className="underline">Alle Demos ansehen</Link>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div>
            <p className="font-bold text-[#1e3ab8] text-sm leading-tight">Dr. Thomas Haas</p>
            <p className="text-gray-400 text-xs">Facharzt für Innere Medizin</p>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#leistungen" className="hover:text-[#1e3ab8] transition-colors">Leistungen</a>
            <a href="#ueber" className="hover:text-[#1e3ab8] transition-colors">Über mich</a>
            <a href="#zeiten" className="hover:text-[#1e3ab8] transition-colors">Ordinationszeiten</a>
            <a href="#kontakt" className="bg-[#1e3ab8] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a33a8] transition-colors">Termin anfragen</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4ff] via-white to-[#e8eeff]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-[#1e3ab8] text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Kassenvertrag: WGKK · BVA · SVS
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Ihre Innere Medizin<br />
              <span className="text-[#1e3ab8]">im 1. Bezirk.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Umfassende internistische Diagnostik und Therapie – persönlich, kompetent und auf dem aktuellen Stand der Medizin. Termine auch kurzfristig möglich.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="bg-[#1e3ab8] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#1a33a8] transition-colors shadow-md">
                Termin vereinbaren
              </a>
              <a href="tel:+431512345" className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#1e3ab8] hover:text-[#1e3ab8] transition-colors">
                +43 1 512 34 56
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">✓ DSGVO-konform</span>
              <span className="flex items-center gap-1">✓ ÖÄK-Mitglied</span>
              <span className="flex items-center gap-1">✓ Online-Termin</span>
            </div>
          </div>
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-2xl bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] flex items-end justify-center overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-5xl font-bold text-white/80">TH</div>
                </div>
                <div className="relative z-10 w-full bg-white/10 backdrop-blur p-4 text-white">
                  <p className="font-bold text-sm">Dr. Thomas Haas</p>
                  <p className="text-white/70 text-xs">Facharzt für Innere Medizin</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-gray-100 shadow-lg rounded-xl p-3 text-xs">
                <p className="font-bold text-gray-900">⭐ 4,9</p>
                <p className="text-gray-400">127 Bewertungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Leistungen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Was ich für Sie tue</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leistungen.map((l) => (
              <div key={l.title} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors group">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#1e3ab8] transition-colors">{l.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section id="ueber" className="py-20 px-6 bg-[#f0f4ff]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Über mich</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Ihr Arzt im 1. Bezirk</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Thomas Haas blickt auf über 15 Jahre Erfahrung in der Inneren Medizin zurück, zuletzt als Oberarzt am AKH Wien. Seine Schwerpunkte – Kardiologie und Diabetes – sind nicht nur medizinische Fachgebiete, sondern persönliche Anliegen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              2021 eröffnete er seine Wahlarztpraxis im Herzen von Wien, um seinen Patientinnen und Patienten mehr Zeit widmen zu können. Neben seiner ärztlichen Tätigkeit engagiert er sich in Präventionsprojekten und hält Vorträge über Herzgesundheit und den Zusammenhang von Stress, Bewegung und Ernährung.
            </p>
            <div className="border-l-2 border-[#1e3ab8] pl-4 text-gray-500 italic text-sm mb-6">
              „Viele Herzerkrankungen haben mit unserem Lebensstil zu tun. Mir geht es darum, Verständnis und Eigenverantwortung zu fördern – nicht nur Medikamente zu verschreiben."
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#1e3ab8]">15+</p>
                <p className="text-gray-500 text-xs mt-1">Jahre Erfahrung</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#1e3ab8]">3.500+</p>
                <p className="text-gray-500 text-xs mt-1">Behandelte Patienten</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-bold text-gray-900 mb-4">Ausbildung & Qualifikationen</h3>
            {[
              { year: '2003–2010', text: 'Studium der Humanmedizin, MedUni Wien' },
              { year: '2010–2015', text: 'Facharztausbildung Innere Medizin, AKH Wien' },
              { year: '2015–2021', text: 'Oberarzt Kardiologie, AKH Wien' },
              { year: '2021', text: 'Niederlassung als Wahlarzt, Wien 1010' },
              { year: '2023', text: 'Diplom Ernährungsmedizin, ÖÄK' },
            ].map((q) => (
              <div key={q.year} className="flex gap-4 text-sm">
                <span className="text-[#1e3ab8] font-semibold shrink-0 w-16">{q.year}</span>
                <span className="text-gray-600">{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDINATIONSZEITEN + KONTAKT */}
      <section id="zeiten" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Ordinationszeiten</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Wann Sie mich erreichen</h2>
            <div className="space-y-2">
              {[
                { day: 'Montag', time: '08:00 – 12:00 · 14:00 – 17:00' },
                { day: 'Dienstag', time: '08:00 – 12:00' },
                { day: 'Mittwoch', time: '08:00 – 12:00 · 14:00 – 18:00' },
                { day: 'Donnerstag', time: '08:00 – 12:00' },
                { day: 'Freitag', time: '08:00 – 13:00' },
                { day: 'Sa / So', time: 'Geschlossen' },
              ].map((r) => (
                <div key={r.day} className={`flex justify-between py-2 border-b border-gray-100 text-sm ${r.day === 'Sa / So' ? 'text-gray-400' : 'text-gray-700'}`}>
                  <span className="font-medium">{r.day}</span>
                  <span>{r.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="kontakt">
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Kontakt</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Termin anfragen</h2>
            <div className="space-y-3 mb-6 text-sm text-gray-600">
              <p>📍 Wollzeile 12, 1010 Wien</p>
              <p>📞 +43 1 512 34 56</p>
              <p>📧 ordination@dr-haas-wien.at</p>
            </div>
            <a href="mailto:ordination@dr-haas-wien.at"
              className="block w-full bg-[#1e3ab8] text-white text-center py-3 rounded-xl font-semibold text-sm hover:bg-[#1a33a8] transition-colors">
              Termin per E-Mail anfragen
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-sm text-center">
        <p className="mb-2">© 2026 Dr. Thomas Haas · Facharzt für Innere Medizin · 1010 Wien</p>
        <p className="text-xs text-gray-600 mb-3">
          <a href="#" className="hover:text-gray-400">Impressum</a> ·{' '}
          <a href="#" className="hover:text-gray-400">Datenschutz</a>
        </p>
        <a href="https://mypraxis.at" className="inline-block bg-gray-800 border border-gray-700 text-gray-400 text-xs px-4 py-2 rounded-full hover:border-gray-500 transition-colors">
          Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at
        </a>
      </footer>
    </div>
  )
}
