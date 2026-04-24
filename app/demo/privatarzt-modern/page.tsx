'use client'
import { useState } from 'react'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

const leistungen = [
  { num: '01', title: 'Ästhetische Dermatologie', text: 'Botox, Hyaluron-Filler, Laserbehandlungen, chemische Peelings', detail: 'Jede Behandlung beginnt mit einem ausführlichen Beratungsgespräch. Keine Standardlösungen – nur was medizinisch sinnvoll und zu Ihrem Gesicht passt.', dauer: '30–60 Min.', preis: 'ab € 290' },
  { num: '02', title: 'Hautkrebs-Screening', text: 'Digitale Auflichtmikroskopie, Ganzkörper-Muttermalmapping', detail: 'Früherkennung rettet Leben. Wir empfehlen jährliche Kontrollen ab 30 Jahren – besonders bei heller Haut oder familiärer Vorbelastung.', dauer: '20–30 Min.', preis: 'Kasse möglich' },
  { num: '03', title: 'Medizinische Dermatologie', text: 'Psoriasis, Akne, Neurodermitis, Rosacea, Urtikaria', detail: 'Chronische Hauterkrankungen brauchen Geduld und ein individuelles Konzept. Ich begleite Sie langfristig.', dauer: '25–45 Min.', preis: 'Kasse & Wahlarzt' },
  { num: '04', title: 'Lasermedizin', text: 'Narbentherapie, Pigmentflecken, Gefäßbehandlung, Haarentfernung', detail: 'Modernste Lasertechnologie (Nd:YAG, CO₂). Fellowship-Training in Zürich. Realistische Aufklärung über Ergebnis und Heilungsverlauf.', dauer: '20–45 Min.', preis: 'ab € 190' },
  { num: '05', title: 'Allergologie', text: 'Pricktest, spezifisches IgE, Epikutantest, Desensibilisierung', detail: 'Ob Kontaktallergien, Nahrungsmittelunverträglichkeiten oder Umweltsensibilisierungen – wir finden die Ursache.', dauer: '45–60 Min.', preis: 'Kasse möglich' },
  { num: '06', title: 'Anti-Aging & Regeneration', text: 'Kollagenstimulation, PRP-Therapie, Bioremodelling, Profhilo', detail: 'Nicht weniger aussehen wollen, sondern besser. Kein Einheitsrezept, sondern ein auf Ihre Haut abgestimmter Plan.', dauer: '45–60 Min.', preis: 'ab € 390' },
]

export default function Demo2Page() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="font-sans text-white antialiased bg-[#0a0f1e]">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
          <Link href="/#demos" className="flex items-center gap-1 hover:underline font-bold">← Zurück zur Demo-Übersicht</Link>
          <span className="text-center">Demo · Stil 2: Modern Premium</span>
          <span />
        </div>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div>
            <p className="font-bold text-white text-sm tracking-wide">DR. JULIA STERN</p>
            <p className="text-amber-400/70 text-xs tracking-widest uppercase">Dermatologie · Ästhetik</p>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-sm text-white/60">
            <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#ansatz" className="hover:text-white transition-colors">Mein Ansatz</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
            <a href="#termin" className="bg-amber-400 text-[#0a0f1e] px-5 py-2 rounded-lg font-bold hover:bg-amber-300 transition-colors">Termin</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Wahlarztstatus · Wien 1090</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] mb-6">
              Schönheit.<br /><span className="text-amber-400">Wissenschaft.</span><br />Ergebnis.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Dermatologie auf höchstem Niveau — kombiniert mit dem geschulten Blick für Ästhetik. Individuell. Diskret. Nachweisbar.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#termin" className="bg-amber-400 text-[#0a0f1e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20">Erstgespräch vereinbaren</a>
              <a href="#leistungen" className="border border-white/20 text-white/80 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-white/40 transition-colors">Leistungen entdecken</a>
            </div>
            <div className="pt-5 border-t border-white/10">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Zertifikate & Mitgliedschaften</p>
              <div className="flex flex-wrap gap-2">
                {['ÖGD Mitglied', 'ISAPS', 'Fellowship Lasermedizin Zürich'].map((m) => (
                  <span key={m} className="text-xs border border-white/15 text-white/40 px-2.5 py-1 rounded-full">{m}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-purple-500/20 blur-2xl" />
              <div className="relative h-full rounded-2xl border border-white/10 overflow-hidden">
                <img src="/demo-dr-stern.jpg" alt="Dr. Julia Stern" className="w-full h-3/4 object-cover object-top" />
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
      <section id="leistungen" className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #0d1630 50%, #060a14 100%)' }}>
        {/* Ambient glow */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-amber-400/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Leistungsspektrum</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-3">Was ich für Sie leiste</h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto">Jede Behandlung basiert auf einem ausführlichen Erstgespräch. Keine Standardlösungen – nur was medizinisch sinnvoll und zu Ihnen passt.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Ästhetische Dermatologie',
                subtitle: 'Botox · Hyaluron · Laser · Peelings',
                img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=85&fit=crop&crop=faces,center',
                imgGradient: 'from-amber-900/80 via-amber-800/40 to-transparent',
                detail: 'Jede Behandlung beginnt mit einem ausführlichen Beratungsgespräch. Keine Standardlösungen – nur was medizinisch sinnvoll und zu Ihrem Gesicht passt. Natürlichkeit ist dabei kein Kompromiss, sondern das Ziel.',
                meta: 'Ob diskrete Faltenreduktion, Volumenaufbau oder Hautverjüngung – ästhetische Medizin soll nicht "gemacht" aussehen, sondern Ihre Ausstrahlung unterstreichen.',
                dauer: '30–60 Min.',
                preis: 'ab € 290',
              },
              {
                num: '02',
                title: 'Hautkrebs-Screening',
                subtitle: 'Auflichtmikroskopie · Muttermalmapping',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&fit=crop',
                imgGradient: 'from-blue-900/80 via-blue-800/40 to-transparent',
                detail: 'Früherkennung rettet Leben. Wir empfehlen jährliche Kontrollen ab 30 Jahren – besonders bei heller Haut, vielen Muttermalen oder familiärer Vorbelastung.',
                meta: 'Digitale Dermatoskopie ermöglicht die Dokumentation und den Verlaufsvergleich jedes einzelnen Muttermals. Veränderungen werden frühzeitig erkannt.',
                dauer: '20–30 Min.',
                preis: 'Kasse möglich',
              },
              {
                num: '03',
                title: 'Medizinische Dermatologie',
                subtitle: 'Psoriasis · Akne · Neurodermitis · Rosacea',
                img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85&fit=crop',
                imgGradient: 'from-teal-900/80 via-teal-800/40 to-transparent',
                detail: 'Chronische Hauterkrankungen brauchen Geduld, Kontinuität und ein individuelles Konzept. Ich begleite Sie langfristig – von der Diagnose bis zur stabilen Remission.',
                meta: 'Moderne Behandlungsmethoden, einschließlich Biologika und topischer Immunmodulatoren, werden nach dem aktuellen Stand der Wissenschaft eingesetzt.',
                dauer: '25–45 Min.',
                preis: 'Kasse & Wahlarzt',
              },
              {
                num: '04',
                title: 'Lasermedizin',
                subtitle: 'Narben · Pigmente · Gefäße · Haarentfernung',
                img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=85&fit=crop',
                imgGradient: 'from-purple-900/80 via-purple-800/40 to-transparent',
                detail: 'Modernste Lasertechnologie (Nd:YAG, CO₂, fraktionierter Laser). Fellowship-Training in Zürich. Realistische Aufklärung über Ergebnis und Heilungsverlauf gehört für mich zum Standard.',
                meta: 'Laserbehandlungen erzielen nachhaltige Ergebnisse bei Narbentherapie, Pigmentflecken und Gefäßveränderungen. Mehrere Sitzungen sind oft nötig – ich erkläre Ihnen warum.',
                dauer: '20–45 Min.',
                preis: 'ab € 190',
              },
              {
                num: '05',
                title: 'Allergologie',
                subtitle: 'Pricktest · IgE · Epikutan · Desensibilisierung',
                img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=85&fit=crop',
                imgGradient: 'from-green-900/80 via-green-800/40 to-transparent',
                detail: 'Ob Kontaktallergien, Nahrungsmittelunverträglichkeiten oder Umweltsensibilisierungen – wir finden die Ursache und entwickeln einen individuellen Therapieplan.',
                meta: 'Allergologische Diagnostik am neuesten Stand: strukturiertes Vorgehen von der Anamnese über Hauttests bis zur spezifischen Immuntherapie (Desensibilisierung).',
                dauer: '45–60 Min.',
                preis: 'Kasse möglich',
              },
              {
                num: '06',
                title: 'Anti-Aging & Regeneration',
                subtitle: 'Kollagen · PRP · Bioremodelling · Profhilo',
                img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&fit=crop',
                imgGradient: 'from-rose-900/80 via-rose-800/40 to-transparent',
                detail: 'Nicht "jünger aussehen wollen", sondern besser. Kein Einheitsrezept, sondern ein auf Ihre Haut und Ihren Hautzustand abgestimmter Regenerationsplan.',
                meta: 'PRP (Platelet Rich Plasma) und Bioremodelling nutzen körpereigene Mechanismen zur Hauterneuerung. Ergebnisse sind subtil, natürlich und langanhaltend.',
                dauer: '45–60 Min.',
                preis: 'ab € 390',
              },
            ].map((l, i) => (
              <div key={l.title}
                className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-amber-400/25 transition-all duration-300 cursor-pointer bg-[#0d1225] hover:shadow-2xl hover:shadow-amber-400/5 hover:-translate-y-1"
                onClick={() => setExpanded(expanded === i ? null : i)}>
                {/* Image area */}
                <div className="relative h-48 overflow-hidden">
                  {/* Gradient placeholder shown when image not available */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${l.imgGradient} opacity-80`} />
                  <img
                    src={l.img}
                    alt={l.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1225] via-[#0d1225]/20 to-transparent" />
                  {/* Number badge */}
                  <span className="absolute top-3 left-3 text-amber-400/60 text-xs font-mono bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">{l.num}</span>
                  {/* Expand indicator */}
                  <span className="absolute top-3 right-3 text-amber-400/50 text-xs bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">{expanded === i ? '▲' : '▼'}</span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-400 transition-colors">{l.title}</h3>
                  <p className="text-amber-400/50 text-[11px] font-medium mb-2 tracking-wide">{l.subtitle}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{l.meta}</p>

                  {/* Expanded detail */}
                  {expanded === i && (
                    <div className="mt-4 border-t border-white/8 pt-4 space-y-3">
                      <p className="text-white/60 text-xs leading-relaxed">{l.detail}</p>
                      <div className="flex gap-2 text-xs flex-wrap">
                        <span className="bg-amber-400/10 text-amber-400 px-2.5 py-1 rounded-full">⏱ {l.dauer}</span>
                        <span className="bg-white/5 text-white/50 px-2.5 py-1 rounded-full">{l.preis}</span>
                      </div>
                      <a href="#termin" className="inline-block text-xs text-amber-400 hover:text-amber-300 font-semibold mt-1 transition-colors">Termin anfragen →</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEIN ANSATZ */}
      <section id="ansatz" className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #03060e 50%, #060a14 100%)' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/2 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Über mich</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">Medizin. Präzision. Vertrauen.</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Nach Jahren am AKH Wien und einem Fellowship in Zürich mit Schwerpunkt Lasermedizin habe ich eine Praxis verwirklicht, die medizinische Kompetenz mit einem feinen Gespür für Natürlichkeit verbindet. Für mich steht ein gesund erhaltener Hautzustand im Mittelpunkt – nicht bloß das Erscheinungsbild.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              Ich lehne Über-Behandlungen konsequent ab. Wenn ich eine Behandlung nicht für geeignet halte, sage ich das – klar und direkt. Meine Patientinnen schätzen diese Ehrlichkeit. „Natürlich" ist kein Kompromiss – es ist das Ziel.
            </p>
            <div className="border-l-2 border-amber-400 pl-4 text-white/50 italic text-sm">
              „Haut erzählt Geschichten – von Gesundheit, von Lebensstil, manchmal auch von innerer Unruhe."
            </div>
          </div>
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em] mb-4">Ausbildung</p>
            {[
              { year: '1999–2006', text: 'Medizinstudium, MedUni Wien' },
              { year: '2006–2012', text: 'Facharztausbildung Dermatologie, Wilhelminenspital' },
              { year: '2012–2016', text: 'Oberärztin, AKH Wien' },
              { year: '2016', text: 'Niederlassung Wahlarzt, Wien 1090' },
              { year: '2020', text: 'Fellowship Lasermedizin, Zürich' },
            ].map((q) => (
              <div key={q.year} className="flex gap-4 text-sm border-b border-white/5 pb-2">
                <span className="text-amber-400 font-semibold shrink-0 text-xs w-20">{q.year}</span>
                <span className="text-white/50 text-xs">{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #0d1630 50%, #060a14 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Das Team</span>
            <h2 className="text-3xl font-bold text-white mt-2">Wer Sie empfängt</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: 'Nina Bauer',
                rolle: 'Ordinationsassistentin',
                spez: 'Laser- & Ästhetik-Patientenbetreuung · 6 Jahre im Team',
                text: 'Nina begleitet unsere Patientinnen durch alle Behandlungsschritte – von der Vorbereitung bis zur Nachsorge. Ihre empathische Art ist gerade bei ästhetischen Eingriffen ein echter Mehrwert.',
                img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=85&fit=crop&crop=face',
              },
              {
                name: 'Lisa Engel',
                rolle: 'Empfang & Terminkoordination',
                spez: '4 Jahre in der Praxis',
                text: 'Lisa ist die erste Stimme, die Sie hören. Sie sorgt für reibungslose Abläufe und – ganz wichtig – für absolute Diskretion.',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85&fit=crop&crop=face',
              },
            ].map((t) => (
              <div key={t.name} className="flex gap-5 border border-white/10 rounded-2xl p-6 hover:border-amber-400/20 transition-all group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-amber-400/20 transition-all">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                      el.parentElement!.classList.add('bg-gradient-to-br', 'from-amber-400/20', 'to-purple-500/20', 'flex', 'items-center', 'justify-center')
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-amber-400 text-xs font-semibold mb-0.5">{t.rolle}</p>
                  <p className="text-white/30 text-xs mb-2">{t.spez}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #03060e 50%, #060a14 100%)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Ordinationszeiten</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-6">Wann ich für Sie da bin</h2>
            {[{ day: 'Montag', time: '09:00 – 17:00' }, { day: 'Dienstag', time: '09:00 – 12:00' }, { day: 'Mittwoch', time: '09:00 – 19:00' }, { day: 'Donnerstag', time: '09:00 – 12:00' }, { day: 'Freitag', time: '09:00 – 14:00' }, { day: 'Sa / So', time: 'Geschlossen' }].map((r) => (
              <div key={r.day} className={`flex justify-between py-2 border-b border-white/10 text-sm ${r.day === 'Sa / So' ? 'text-white/20' : 'text-white/70'}`}><span>{r.day}</span><span>{r.time}</span></div>
            ))}
            <p className="text-white/30 text-xs mt-4">Nur nach telefonischer Voranmeldung.</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Kontakt & Anfahrt</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-6">Wo Sie uns finden</h2>
            <div className="space-y-3 text-sm text-white/60 mb-6">
              <p>📍 Nussdorfer Straße 4, Top 8, 1090 Wien</p>
              <p>📞 +43 1 374 28 19</p>
              <p>📧 praxis@dr-stern-dermatologie.at</p>
              <p>🚇 U4 Friedensbrücke (3 Min.) · Straßenbahn D</p>
            </div>
            <a href="#termin" className="block w-full bg-amber-400 text-[#0a0f1e] text-center py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors">Erstgespräch anfragen →</a>
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #0d1630 50%, #060a14 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(212,168,67,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)' }} />
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Patientenstimmen</span>
            <h2 className="text-4xl font-bold text-white mt-2">Was Patientinnen sagen</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { text: '„Dr. Stern ist die beste Dermatologin, die ich je hatte. Kompetent, ehrlich und mit einem absoluten Gespür für natürliche Ästhetik."', name: 'Sandra M.', date: 'Feb 2026' },
              { text: '„Nach der Botox-Behandlung sehe ich aus wie ich mich fühle – ausgeruht und frisch. Kein übertriebenes Ergebnis."', name: 'Katharina V.', date: 'Jan 2026' },
              { text: '„Endlich jemand, der wirklich erklärt, was mit meiner Haut passiert. Ich komme seit 3 Jahren regelmäßig."', name: 'Julia R.', date: 'Dez 2025' },
              { text: '„Die Laserbehandlung meiner Narben hat mein Leben verändert. Dr. Stern war von Anfang an ehrlich über den Verlauf."', name: 'Petra K.', date: 'Nov 2025' },
              { text: '„Das Team ist so angenehm. Nina hat mich bei der Nachsorge wirklich gut begleitet."', name: 'Eva M.', date: 'Okt 2025' },
            ].map((r, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5">
                <p className="text-amber-400 text-sm mb-1">⭐⭐⭐⭐⭐</p>
                <p className="text-white/30 text-xs mb-3">Google · {r.date}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-3 italic">{r.text}</p>
                <p className="text-amber-400/70 text-xs font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMIN */}
      <section id="termin" className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #03060e 50%, #060a14 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Erstgespräch</span>
            <h2 className="text-3xl font-bold text-white mt-2">Termin anfragen</h2>
            <p className="text-white/40 text-sm mt-2">Wir melden uns innerhalb von 24 Stunden. Nur nach Voranmeldung.</p>
          </div>
          {formState === 'success' ? (
            <div className="border border-amber-400/30 bg-amber-400/5 rounded-2xl p-12 text-center">
              <p className="text-4xl mb-4">✨</p>
              <h3 className="font-bold text-white text-lg mb-2">Anfrage erhalten!</h3>
              <p className="text-white/50 text-sm">Wir melden uns in Kürze.</p>
              <button onClick={() => setFormState('idle')} className="mt-6 text-amber-400 text-sm underline">Neue Anfrage stellen</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormState('submitting'); setTimeout(() => setFormState('success'), 1500) }} className="border border-white/10 rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-white/40 mb-1.5">Vorname *</label><input required type="text" placeholder="Julia" className="w-full border border-white/10 bg-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors" /></div>
                <div><label className="block text-xs font-semibold text-white/40 mb-1.5">Nachname *</label><input required type="text" placeholder="Muster" className="w-full border border-white/10 bg-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-white/40 mb-1.5">Telefon *</label><input required type="tel" placeholder="+43 1 ..." className="w-full border border-white/10 bg-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors" /></div>
                <div><label className="block text-xs font-semibold text-white/40 mb-1.5">E-Mail *</label><input required type="email" placeholder="ihre@email.at" className="w-full border border-white/10 bg-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors" /></div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 mb-1.5">Gewünschte Leistung</label>
                <select className="w-full border border-white/10 bg-[#0a0f1e] rounded-lg px-4 py-2.5 text-sm text-white/70 focus:outline-none focus:border-amber-400/50 transition-colors">
                  <option>Erstberatung</option><option>Ästhetische Dermatologie</option><option>Hautkrebs-Screening</option><option>Lasermedizin</option><option>Anti-Aging</option><option>Medizinische Dermatologie</option>
                </select>
              </div>
              <div><label className="block text-xs font-semibold text-white/40 mb-1.5">Nachricht</label><textarea rows={3} placeholder="Was sollen wir wissen?" className="w-full border border-white/10 bg-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors resize-none" /></div>
              <div className="flex items-start gap-3"><input required type="checkbox" id="dsgvo2" className="mt-0.5 accent-amber-400" /><label htmlFor="dsgvo2" className="text-xs text-white/30">Ich stimme der Verarbeitung meiner Daten zu. *</label></div>
              <button type="submit" disabled={formState === 'submitting'} className="w-full bg-amber-400 text-[#0a0f1e] py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors disabled:opacity-60">
                {formState === 'submitting' ? 'Wird gesendet…' : 'Anfrage senden →'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 relative" style={{ background: 'linear-gradient(180deg, #060a14 0%, #0d1630 50%, #060a14 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12"><span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.3em]">Häufige Fragen</span><h2 className="text-4xl font-bold text-white mt-2">Ihre Fragen</h2></div>
          <div className="space-y-3">
            {[
              { q: 'Wie ist die Praxis erreichbar?', a: 'Nur nach telefonischer Voranmeldung. Wir legen Wert auf ausreichend Zeit für jede Patientin – daher keine offene Sprechstunde.' },
              { q: 'Sind ästhetische Behandlungen kassenfinanziert?', a: 'Nein. Ästhetische Behandlungen sind Wahlleistungen. Medizinische Dermatologie ist nach Absprache über Kasse möglich.' },
              { q: 'Wie lange dauert eine Erstberatung?', a: '30–45 Minuten. Ich nehme mir die Zeit, Ihren Hautzustand gründlich zu beurteilen und einen individuellen Plan zu erarbeiten.' },
              { q: 'Wie lange sind die Ergebnisse sichtbar?', a: 'Botox hält 3–6 Monate, Hyaluron-Filler 6–18 Monate. Wir besprechen realistische Erwartungen im Erstgespräch.' },
              { q: 'Kann ich auch nur zur Kontrolle kommen?', a: 'Ja, sehr gerne. Wir empfehlen ab 30 Jahren eine jährliche Hautkontrolle – auch ohne konkreten Anlass.' },
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-5 hover:border-amber-400/20 transition-all">
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
        <p className="text-xs mb-3"><a href="#" className="hover:text-white/60">Impressum</a> · <a href="#" className="hover:text-white/60">Datenschutz</a></p>
        <a href="https://www.mypraxis.at" className="inline-block border border-white/10 text-white/30 text-xs px-4 py-2 rounded-full hover:border-white/20 transition-colors">Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at</a>
      </footer>
    </div>
  )
}
