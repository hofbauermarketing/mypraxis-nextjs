import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'Dr. Anna Berger – Kinder- und Jugendheilkunde', robots: 'noindex' }

const leistungen = [
  { icon: '💉', title: 'Schutzimpfungen', text: 'Alle Impfungen lt. Impfplan, Reiseimpfungen, Grippe' },
  { icon: '🧸', title: 'Vorsorgeuntersuchungen', text: 'Entwicklungsdiagnostik, Mutter-Kind-Pass-Untersuchungen' },
  { icon: '🍼', title: 'Neugeborenen-Versorgung', text: 'Erstuntersuchung, Beratung, Stillberatung, Schreikind' },
  { icon: '🫁', title: 'Atemwegserkrankungen', text: 'Asthma, Bronchitis, Pseudokrupp, Pneumonie' },
  { icon: '🧠', title: 'Entwicklungsbeurteilung', text: 'Sprache, Motorik, Sozialverhalten, Schulreife' },
  { icon: '🩺', title: 'Sportmedizin', text: 'Sporttauglichkeitsuntersuchung, Ernährungsberatung, Sportmedizin Kinder' },
]

export default function Demo3Page() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
          <Link href="/demo" className="flex items-center gap-1 hover:underline font-bold">← Alle Demos</Link>
          <span className="text-center">Demo · Stil 3: Warm & Persönlich</span>
          <span />
        </div>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-teal-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">AB</div>
            <div>
              <p className="font-bold text-teal-800 text-sm leading-tight">Dr. Anna Berger</p>
              <p className="text-teal-500 text-xs">Kinderärztin · Linz</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-sm text-gray-600">
            <a href="#leistungen" className="hover:text-teal-700 transition-colors">Leistungen</a>
            <a href="#ueber" className="hover:text-teal-700 transition-colors">Über mich</a>
            <a href="#kontakt" className="hover:text-teal-700 transition-colors">Kontakt</a>
            <a href="#termin" className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors">Termin</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-teal-50 via-emerald-50 to-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Kassenvertrag OÖGKK</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">BVA · SVS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Für Ihre Kleinen,<br />
              <span className="text-teal-600">groß gedacht.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Eine Kinderärztin, der Sie vertrauen können. Ich nehme mir Zeit, erkläre auf Augenhöhe und bin für Sie und Ihre Familie da – auch wenn mal etwas Geduld gefragt ist.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#termin" className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md shadow-teal-100">
                Termin vereinbaren
              </a>
              <a href="tel:+437325678" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm hover:border-teal-300 transition-colors">
                +43 732 56 78 90
              </a>
            </div>
            <p className="mt-6 text-sm text-teal-600 bg-teal-50 border border-teal-100 rounded-xl px-4 py-2 inline-block">
              🕐 Akute Erkrankungen: bitte telefonisch voranmelden
            </p>
          </div>
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-[2rem] overflow-hidden shadow-xl shadow-teal-100 relative">
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Dr. Anna Berger" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-teal-800/80 backdrop-blur-sm p-4">
                  <p className="text-white font-bold text-sm">Dr. Anna Berger</p>
                  <p className="text-teal-100 text-xs">Kinderärztin</p>
                </div>
              </div>
              {/* Fun floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-300 rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                <span className="text-xl">👶</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-2xl p-3 text-xs text-center">
                <p className="font-bold text-gray-900">18 Jahre</p>
                <p className="text-gray-400">Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Leistungen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Was ich für Ihr Kind tue</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leistungen.map((l) => (
              <div key={l.title} className="rounded-2xl p-6 border-2 border-teal-50 hover:border-teal-200 hover:bg-teal-50/50 transition-all group">
                <span className="text-3xl mb-4 block">{l.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors text-sm">{l.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section id="ueber" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-teal-100">
            <h3 className="font-bold text-gray-900 mb-5">Das sagen Eltern über mich</h3>
            {[
              { text: '"Dr. Berger nimmt sich wirklich Zeit. Mein Sohn geht sogar gerne zur Ärztin!"', name: 'Familie Gruber, Linz' },
              { text: '"Endlich eine Kinderärztin, die auch bei Impfungen verständlich erklärt."', name: 'Mama von Lena, 3 Jahre' },
              { text: '"Auch bei Notfällen immer erreichbar und hilfsbereit."', name: 'Familie Maier, Traun' },
            ].map((t, i) => (
              <div key={i} className="mb-4 pb-4 border-b border-gray-50 last:border-0">
                <p className="text-gray-600 text-sm leading-relaxed mb-1 italic">{t.text}</p>
                <p className="text-teal-600 text-xs font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Über mich</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Kindermedizin mit Herz</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Seit 2008 betreibe ich meine Kinder- und Jugendarztpraxis in Linz-Urfahr – ein Ort, an dem sich Familien wohl und verstanden fühlen sollen. Nach meiner Facharztausbildung an der Kinderklinik Linz entschloss ich mich bewusst für die Niederlassung: „Ich wollte Kinder über Jahre hinweg begleiten, nicht nur in akuten Momenten."
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mein Schwerpunkt liegt auf Vorsorge, Entwicklungsbegleitung und einer kindgerechten Medizin auf Augenhöhe. Eltern schätzen meine verständnisvolle Art, Kinder meinen Humor. Ich verstehe mich nicht nur als Ärztin, sondern auch als Begleiterin durchs Großwerden – empathisch, unaufgeregt und mit viel Herz.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ v: '18+', l: 'Jahre' }, { v: '5.000+', l: 'Patienten' }, { v: '⭐ 4,9', l: 'Bewertung' }].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-3 shadow-sm">
                  <p className="font-bold text-teal-700 text-lg">{s.v}</p>
                  <p className="text-gray-400 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Ordinationszeiten</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Wann wir für Sie da sind</h2>
            {[
              { day: 'Montag', time: '08:00 – 12:00 · 14:00 – 17:00' },
              { day: 'Dienstag', time: '08:00 – 12:00' },
              { day: 'Mittwoch', time: '08:00 – 12:00 · 14:00 – 18:00' },
              { day: 'Donnerstag', time: '08:00 – 12:00' },
              { day: 'Freitag', time: '08:00 – 13:00' },
              { day: 'Sa / So', time: 'Geschlossen' },
            ].map((r) => (
              <div key={r.day} className={`flex justify-between py-2.5 border-b border-gray-100 text-sm ${r.day === 'Sa / So' ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-medium">{r.day}</span>
                <span>{r.time}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Wo Sie uns finden</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Kontakt</h2>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p>📍 Hauptstraße 47, 4040 Linz-Urfahr</p>
              <p>📞 +43 732 56 78 90</p>
              <p>📧 ordination@dr-berger-kinder.at</p>
              <p className="text-teal-600 text-xs bg-teal-50 rounded-lg p-2">🅿️ Kostenlose Parkplätze vor dem Haus · Barrierefrei</p>
            </div>
            <a href="tel:+437325678" className="block w-full bg-teal-600 text-white text-center py-3 rounded-full font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md shadow-teal-100">
              Jetzt anrufen · +43 732 56 78 90
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Häufige Fragen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Fragen von Eltern</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Ab welchem Alter nehmen Sie Kinder an?', a: 'Von der Geburt bis zum vollendeten 18. Lebensjahr. Auch Jugendliche sind herzlich willkommen – ich nehme mir Zeit für alle Altersstufen.' },
              { q: 'Wie bekomme ich kurzfristig einen Termin bei akuter Erkrankung?', a: 'Bitte rufen Sie morgens zwischen 8:00 und 9:00 Uhr an. Wir reservieren täglich Akuttermine für kranke Kinder, die baldmöglichst untersucht werden müssen.' },
              { q: 'Sind alle Impfungen im Impfplan abgedeckt?', a: 'Ja, ich biete alle Impfungen laut österreichischem Impfplan an – inklusive kostenloser Schulimpfungen. Auf Wunsch auch Reiseimpfungen und optionale Zusatzimpfungen.' },
              { q: 'Was ist beim ersten Termin zu beachten?', a: 'Bitte bringen Sie den Mutter-Kind-Pass oder das Impfheft mit. Beim Ersttermin lerne ich Ihr Kind und Ihre Familie kennen – nehmen Sie sich gerne etwas mehr Zeit.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-teal-100">
                <p className="font-bold text-gray-900 text-sm mb-2">{faq.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-800 text-teal-200 py-8 px-6 text-sm text-center">
        <p className="mb-2">© 2026 Dr. Anna Berger · Kinder- und Jugendheilkunde · 4040 Linz</p>
        <p className="text-xs mb-3">
          <a href="#" className="hover:text-white">Impressum</a> ·{' '}
          <a href="#" className="hover:text-white">Datenschutz</a>
        </p>
        <a href="https://mypraxis.at" className="inline-block bg-teal-900 border border-teal-700 text-teal-300 text-xs px-4 py-2 rounded-full hover:border-teal-500 transition-colors">
          Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at
        </a>
      </footer>
    </div>
  )
}
