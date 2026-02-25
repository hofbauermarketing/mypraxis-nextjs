import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'Dr. Julia Stern – Dermatologie & Ästhetische Medizin', robots: 'noindex' }

const leistungen = [
  { title: 'Ästhetische Dermatologie', text: 'Botox, Hyaluron-Filler, Laserbehandlungen, chemische Peelings' },
  { title: 'Hautkrebs-Screening', text: 'Digitale Auflichtmikroskopie, Ganzkörper-Muttermalmapping' },
  { title: 'Medizinische Dermatologie', text: 'Psoriasis, Akne, Neurodermitis, Rosacea, Urtikaria' },
  { title: 'Lasermedizin', text: 'Narbentherapie, Pigmentflecken, Gefäßbehandlung, Haarentfernung' },
  { title: 'Allergologie', text: 'Pricktest, spezifisches IgE, Epikutantest, Desensibilisierung' },
  { title: 'Anti-Aging', text: 'Individualisierte Behandlungskonzepte, Kollagenstimulation, PRP-Therapie' },
]

export default function Demo2Page() {
  return (
    <div className="font-sans text-white antialiased bg-[#0a0f1e]">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
          <Link href="/demo" className="flex items-center gap-1 hover:underline font-bold">← Alle Demos</Link>
          <span className="text-center">Demo · Stil 2: Modern Premium</span>
          <span />
        </div>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div>
            <p className="font-bold text-white text-sm leading-tight tracking-wide">DR. JULIA STERN</p>
            <p className="text-amber-400/70 text-xs tracking-widest uppercase">Dermatologie · Ästhetik</p>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/60">
            <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#ueber" className="hover:text-white transition-colors">Über mich</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
            <a href="#termin" className="bg-amber-400 text-[#0a0f1e] px-5 py-2 rounded-lg text-sm font-bold hover:bg-amber-300 transition-colors">Termin</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Wahlarztstatus · Wien 1090</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] mb-6">
              Schönheit.<br />
              <span className="text-amber-400">Wissenschaft.</span><br />
              Ergebnis.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Dermatologie auf höchstem Niveau — kombiniert mit dem geschulten Blick für Ästhetik. Individuell. Diskret. Mit nachweisbaren Ergebnissen.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#termin" className="bg-amber-400 text-[#0a0f1e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20">
                Erstgespräch vereinbaren
              </a>
              <a href="#leistungen" className="border border-white/20 text-white/80 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-white/40 hover:text-white transition-colors">
                Leistungen entdecken
              </a>
            </div>
          </div>
          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative w-72 h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-purple-500/20 blur-2xl" />
              <div className="relative h-full rounded-2xl border border-white/10 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Julia Stern" className="w-full h-3/4 object-cover object-top" />
                <div className="border-t border-white/10 px-6 py-4 flex justify-center gap-6 text-center bg-white/5">
                  <div><p className="text-amber-400 font-bold">15+</p><p className="text-white/40 text-xs">Jahre</p></div>
                  <div><p className="text-amber-400 font-bold">⭐ 5,0</p><p className="text-white/40 text-xs">Bewertung</p></div>
                  <div><p className="text-amber-400 font-bold">4.200+</p><p className="text-white/40 text-xs">Patienten</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-24 px-6 bg-[#0d1225]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Leistungsspektrum</span>
            <h2 className="text-4xl font-bold text-white mt-2">Was ich für Sie leiste</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leistungen.map((l, i) => (
              <div key={l.title} className="border border-white/10 rounded-xl p-6 hover:border-amber-400/30 hover:bg-amber-400/3 transition-all group">
                <span className="text-amber-400/50 text-xs font-mono mb-3 block">0{i + 1}</span>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">{l.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section id="ueber" className="py-24 px-6 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Über mich</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">Medizin. Präzision. Vertrauen.</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Nach vielen Jahren am AKH Wien und einem Forschungsaufenthalt in Zürich mit Schwerpunkt Lasermedizin hat Dr. Stern die Vision einer Praxis verwirklicht, die medizinische Kompetenz mit einem feinen Gespür für Natürlichkeit verbindet. Für sie steht ein gesund erhaltener Hautzustand im Mittelpunkt – nicht bloß das äußere Erscheinungsbild.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Jede Behandlung beginnt mit einem ausführlichen Erstgespräch. Ich höre zu, erkläre Optionen und empfehle nur, was ich medizinisch für sinnvoll und vertretbar halte. Transparente Beratung und modernste Technologie schließen menschliche Wärme für mich nicht aus.
            </p>
            <div className="border-l-2 border-amber-400 pl-4 text-white/50 italic text-sm">
              „Haut erzählt Geschichten – von Gesundheit, von Lebensstil, manchmal auch von innerer Unruhe."
            </div>
          </div>
          <div className="md:col-span-2 space-y-3">
            {[
              { year: '1999–2006', text: 'Medizinstudium, MedUni Wien' },
              { year: '2006–2012', text: 'Facharztausbildung Dermatologie, Wilhelminenspital' },
              { year: '2012–2016', text: 'Oberärztin, AKH Wien' },
              { year: '2016', text: 'Niederlassung Wahlarzt, Wien 1090' },
              { year: '2020', text: 'Fellowship Lasermedizin, Zürich' },
            ].map((q) => (
              <div key={q.year} className="flex gap-4 text-sm border-b border-white/5 pb-3">
                <span className="text-amber-400 font-semibold shrink-0 text-xs">{q.year}</span>
                <span className="text-white/50 text-xs">{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 px-6 bg-[#0d1225]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Ordinationszeiten</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-6">Wann ich für Sie da bin</h2>
            {[
              { day: 'Montag', time: '09:00 – 17:00' },
              { day: 'Dienstag', time: '09:00 – 12:00' },
              { day: 'Mittwoch', time: '09:00 – 19:00' },
              { day: 'Donnerstag', time: '09:00 – 12:00' },
              { day: 'Freitag', time: '09:00 – 14:00' },
              { day: 'Sa / So', time: 'Geschlossen' },
            ].map((r) => (
              <div key={r.day} className={`flex justify-between py-2 border-b border-white/10 text-sm ${r.day === 'Sa / So' ? 'text-white/20' : 'text-white/70'}`}>
                <span>{r.day}</span>
                <span>{r.time}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Kontakt & Anfahrt</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-6">Termin vereinbaren</h2>
            <div className="space-y-3 text-sm text-white/60 mb-6">
              <p>📍 Nussdorfer Straße 4, Top 8, 1090 Wien</p>
              <p>📞 +43 1 374 28 19</p>
              <p>📧 praxis@dr-stern-dermatologie.at</p>
              <p className="text-white/30 text-xs">Nur nach telefonischer Voranmeldung.</p>
            </div>
            <a href="mailto:praxis@dr-stern-dermatologie.at"
              className="block w-full bg-amber-400 text-[#0a0f1e] text-center py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors">
              Erstgespräch anfragen
            </a>
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section className="py-24 px-6 bg-[#0d1225]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Patientenstimmen</span>
            <h2 className="text-4xl font-bold text-white mt-2">Was Patientinnen sagen</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { text: '„Dr. Stern ist die beste Dermatologin, die ich je hatte. Kompetent, ehrlich und mit einem absoluten Gespür für natürliche Ästhetik."', name: 'Sandra M.' },
              { text: '„Nach der Botox-Behandlung sehe ich aus wie ich mich fühle – ausgeruht und frisch. Kein übertriebenes Ergebnis, alles sehr natürlich."', name: 'Katharina V.' },
              { text: '„Endlich jemand, der nicht gleich zu Produkten greift, sondern wirklich erklärt, was mit meiner Haut passiert. Sehr empfehlenswert."', name: 'Julia R.' },
            ].map((r, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5">
                <p className="text-amber-400 text-sm mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-white/70 text-sm leading-relaxed mb-4 italic">{r.text}</p>
                <p className="text-amber-400/70 text-xs font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Häufige Fragen</span>
            <h2 className="text-4xl font-bold text-white mt-2">Ihre Fragen</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: 'Wie ist die Praxis erreichbar?', a: 'Nur nach telefonischer Voranmeldung. Wir legen Wert auf ausreichend Zeit für jede Patientin – daher keine offene Sprechstunde.' },
              { q: 'Sind ästhetische Behandlungen kassenfinanziert?', a: 'Nein. Ästhetische Behandlungen wie Botox, Filler oder Laserbehandlungen sind Wahlleistungen und werden privat verrechnet. Medizinische Dermatologie ist nach Absprache über Kasse möglich.' },
              { q: 'Wie lange dauert eine Erstberatung?', a: 'Für das Erstgespräch planen wir 30–45 Minuten ein. Ich nehme mir die Zeit, Ihren Hautzustand gründlich zu beurteilen und einen individuellen Behandlungsplan zu erarbeiten.' },
              { q: 'Wie lange sind die Ergebnisse sichtbar?', a: 'Das hängt stark von der Behandlung und Ihrem Stoffwechsel ab. Botox hält in der Regel 3–6 Monate, Hyaluron-Filler 6–18 Monate. Wir besprechen realistische Erwartungen im Erstgespräch.' },
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-5">
                <p className="font-bold text-white text-sm mb-2">{faq.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-white/30">
        <p className="mb-2">© 2026 Dr. Julia Stern · Dermatologie & Ästhetische Medizin · 1090 Wien</p>
        <p className="text-xs mb-3">
          <a href="#" className="hover:text-white/60">Impressum</a> ·{' '}
          <a href="#" className="hover:text-white/60">Datenschutz</a>
        </p>
        <a href="https://www.mypraxis.at" className="inline-block border border-white/10 text-white/30 text-xs px-4 py-2 rounded-full hover:border-white/20 transition-colors">
          Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at
        </a>
      </footer>
    </div>
  )
}
