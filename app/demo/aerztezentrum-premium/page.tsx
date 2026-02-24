import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'MedCenter Alsergrund – Wien', robots: 'noindex' }

const fachbereiche = [
  { icon: '🫀', title: 'Innere Medizin', info: '2 Fachärzte · Kasse & Wahlarzt' },
  { icon: '🧠', title: 'Neurologie', info: '1 Facharzt · Wahlarzt' },
  { icon: '🦴', title: 'Orthopädie', info: '1 Fachärztin · Kasse & Wahlarzt' },
  { icon: '🤰', title: 'Gynäkologie', info: '1 Fachärztin · Kasse' },
  { icon: '👁️', title: 'Augenheilkunde', info: '1 Facharzt · Wahlarzt' },
  { icon: '👂', title: 'HNO', info: '1 Facharzt · Kasse & Wahlarzt' },
  { icon: '🦷', title: 'Zahnmedizin', info: '2 Zahnärzte · Kasse & Privat' },
  { icon: '🧬', title: 'Labormedizin', info: 'Zentrallabor · alle Kassenpatienten' },
]

export default function Demo5Page() {
  return (
    <div className="font-sans antialiased bg-[#111827] text-white">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 text-center py-1.5 text-xs font-semibold">
        Demo-Seite · Stil 5: Ärztezentrum Premium ·{' '}
        <Link href="/demo" className="underline">Alle Demos ansehen</Link>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-[#111827]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">MC</span>
            </div>
            <div>
              <p className="font-bold text-white text-sm tracking-wide">MEDCENTER</p>
              <p className="text-teal-400/70 text-xs tracking-widest">ALSERGRUND</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-sm text-white/60">
            <a href="#fachbereiche" className="hover:text-white transition-colors">Fachbereiche</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
            <a href="#termin" className="bg-teal-500 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-teal-400 transition-colors">Termin buchen</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="border border-teal-500/40 bg-teal-500/10 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full">8 Fachrichtungen</span>
                <span className="border border-white/20 bg-white/5 text-white/60 text-xs font-semibold px-3 py-1 rounded-full">Kasse & Wahlarzt</span>
                <span className="border border-white/20 bg-white/5 text-white/60 text-xs font-semibold px-3 py-1 rounded-full">1090 Wien</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] mb-6">
                Medizin.<br />
                <span className="text-teal-400">Zentral.</span><br />
                Vernetzt.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Das MedCenter Alsergrund vereint 8 Fachrichtungen unter einem Dach. Kürzere Wege, koordinierte Diagnostik, gemeinsame Patientenakte.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#termin" className="bg-teal-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                  Online-Termin buchen
                </a>
                <a href="#fachbereiche" className="border border-white/20 text-white/80 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-white/40 transition-colors">
                  Fachbereiche ansehen
                </a>
              </div>
              <p className="text-white/30 text-xs">Notfallambulanz täglich 07:00–20:00 · Parkhaus im Haus</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '8', l: 'Fachrichtungen', c: 'border-teal-500/30 bg-teal-500/5' },
                { v: '12', l: 'Fachärzte im Team', c: 'border-white/10 bg-white/5' },
                { v: '30.000+', l: 'Behandlungen/Jahr', c: 'border-white/10 bg-white/5' },
                { v: '⭐ 4,8', l: 'Google-Bewertung', c: 'border-white/10 bg-white/5' },
              ].map((s) => (
                <div key={s.l} className={`border ${s.c} rounded-2xl p-6 text-center`}>
                  <p className="text-3xl font-bold text-white mb-1">{s.v}</p>
                  <p className="text-white/40 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACHBEREICHE */}
      <section id="fachbereiche" className="py-24 px-6 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-teal-400/70 uppercase tracking-[0.3em]">Unter einem Dach</span>
              <h2 className="text-4xl font-bold text-white mt-2">Unsere Fachbereiche</h2>
            </div>
            <p className="text-white/30 text-sm hidden sm:block">Interne Überweisungen ohne Wartezeit</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fachbereiche.map((f) => (
              <div key={f.title} className="border border-white/10 rounded-xl p-5 hover:border-teal-500/40 hover:bg-teal-500/5 transition-all group cursor-pointer">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-white text-sm mb-1 group-hover:text-teal-400 transition-colors">{f.title}</h3>
                <p className="text-white/30 text-xs">{f.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARUM WIR */}
      <section id="team" className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-teal-400/70 uppercase tracking-[0.3em]">Unsere Stärken</span>
            <h2 className="text-4xl font-bold text-white mt-2">Warum das MedCenter?</h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-2xl mx-auto">
              Das MedCenter Alsergrund ist ein Ort moderner, vernetzter Medizin. In acht Fachrichtungen arbeiten Spezialistinnen und Spezialisten Hand in Hand – verbunden durch ein gemeinsames digitales System und das Ziel einer lückenlosen Patientenbetreuung.
            </p>
            <p className="text-teal-400/70 italic text-sm mt-3">„Modern denken, menschlich handeln."</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🔗', title: 'Vernetzte Versorgung', text: 'Alle Ärzte teilen eine gemeinsame digitale Patientenakte. Befunde sind sofort für alle behandelnden Fachärzte abrufbar.' },
              { icon: '⏱️', title: 'Kurze Wartezeiten', text: 'Durch interne Überweisungen ohne externe Wartezeiten kommen Sie schneller zur Diagnose und zur Behandlung.' },
              { icon: '🧬', title: 'Eigenes Zentrallabor', text: 'Laborergebnisse in 2 Stunden direkt im Haus. Keine externen Labore, kein Warten auf Post oder Online-Portale.' },
            ].map((v) => (
              <div key={v.title} className="border border-white/10 rounded-2xl p-8">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 px-6 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold text-teal-400/70 uppercase tracking-[0.3em]">Öffnungszeiten</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-6">Wann wir für Sie da sind</h2>
            {[
              { day: 'Montag – Freitag', time: '07:00 – 20:00' },
              { day: 'Samstag', time: '08:00 – 14:00 (Notfall)' },
              { day: 'Sonn- & Feiertage', time: 'Notfallambulanz 08:00–12:00' },
            ].map((r) => (
              <div key={r.day} className="flex justify-between py-3 border-b border-white/10 text-sm text-white/70">
                <span>{r.day}</span>
                <span>{r.time}</span>
              </div>
            ))}
            <div className="mt-6 bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-sm text-teal-300">
              📞 Akutnummer (24/7): <strong>+43 1 310 00 00</strong>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-teal-400/70 uppercase tracking-[0.3em]">Termin & Anfahrt</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-6">Wir sind für Sie erreichbar</h2>
            <div className="space-y-3 text-sm text-white/60 mb-6">
              <p>📍 Alser Straße 21, 1080 Wien</p>
              <p>📞 +43 1 310 00 20 (Zentrale)</p>
              <p>📧 termin@medcenter-alsergrund.at</p>
              <p>🚇 U6 Alser Straße (3 Min.) · U2 Rathaus (7 Min.)</p>
              <p>🅿️ Parkhaus im Gebäude · 3 Euro/Stunde</p>
            </div>
            <a href="mailto:termin@medcenter-alsergrund.at"
              className="block w-full bg-teal-500 text-white text-center py-3.5 rounded-xl font-bold text-sm hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
              Online-Termin buchen
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-white/30">
        <p className="mb-2">© 2026 MedCenter Alsergrund GmbH · 1080 Wien</p>
        <p className="text-xs mb-3">
          <a href="#" className="hover:text-white/60">Impressum</a> ·{' '}
          <a href="#" className="hover:text-white/60">Datenschutz</a>
        </p>
        <a href="https://mypraxis.at" className="inline-block border border-white/10 text-white/20 text-xs px-4 py-2 rounded-full hover:border-white/20 transition-colors">
          Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at
        </a>
      </footer>
    </div>
  )
}
