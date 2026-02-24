'use client'
import { useState } from 'react'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

const leistungen = [
  { icon: '🫀', title: 'Kardiologie', text: 'EKG, Langzeit-EKG, Belastungs-EKG, Echokardiographie' },
  { icon: '🩸', title: 'Labordiagnostik', text: 'Großes Blutbild, Schilddrüse, Diabetes, Vitaminwerte' },
  { icon: '🔬', title: 'Ultraschall', text: 'Bauchorgane, Schilddrüse, Gefäßdoppler' },
  { icon: '🫁', title: 'Lungenfunktion', text: 'Spirometrie, Bodyplethysmographie, Allergietest' },
  { icon: '🩺', title: 'Vorsorge', text: 'Gesundenuntersuchung, Vorsorgecheck, Risikoanalyse' },
  { icon: '💊', title: 'Chronische Erkrankungen', text: 'Bluthochdruck, Diabetes, Schilddrüse, Fettstoffwechsel' },
]

const faqs = [
  { q: 'Nehmen Sie neue Patienten an?', a: 'Ja, wir nehmen laufend neue Patienten auf. Bitte vereinbaren Sie telefonisch oder per E-Mail Ihren Ersttermin.' },
  { q: 'Welche Krankenkassen werden akzeptiert?', a: 'Wir haben einen Kassenvertrag mit WGKK, BVA und SVS. Privatpatienten sind ebenfalls herzlich willkommen.' },
  { q: 'Wie schnell erhalte ich einen Termin?', a: 'In der Regel innerhalb von 1–3 Werktagen. Bei akuten Beschwerden bitten wir Sie, sich telefonisch zu melden – wir reservieren täglich Akutslots.' },
  { q: 'Bieten Sie auch Hausbesuche an?', a: 'In begründeten Ausnahmefällen – etwa bei eingeschränkter Mobilität – sind Hausbesuche auf Anfrage möglich.' },
]

const openingRows = [
  { day: 'Montag',    time: '08:00 – 12:00 · 14:00 – 17:00' },
  { day: 'Dienstag',  time: '08:00 – 12:00' },
  { day: 'Mittwoch',  time: '08:00 – 12:00 · 14:00 – 18:00' },
  { day: 'Donnerstag',time: '08:00 – 12:00' },
  { day: 'Freitag',   time: '08:00 – 13:00' },
  { day: 'Sa / So',   time: 'Geschlossen' },
]

function getStatus(): { open: boolean; label: string } {
  const now = new Date()
  const d = now.getDay()
  const m = now.getHours() * 60 + now.getMinutes()
  const open =
    (d === 1 && ((m >= 480 && m < 720) || (m >= 840 && m < 1020))) ||
    ((d === 2 || d === 4) && m >= 480 && m < 720) ||
    (d === 3 && ((m >= 480 && m < 720) || (m >= 840 && m < 1080))) ||
    (d === 5 && m >= 480 && m < 780)
  return { open, label: open ? '● Jetzt geöffnet' : '● Derzeit geschlossen' }
}

export default function Demo1Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const status = getStatus()
  const todayRowIdx = (() => { const d = new Date().getDay(); return d >= 1 && d <= 5 ? d - 1 : 5 })()

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <div className="font-sans text-gray-800 antialiased">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
          <Link href="/demo" className="flex items-center gap-1 hover:underline font-bold">← Alle Demos</Link>
          <span className="text-center">Demo · Stil 1: Classic Trust</span>
          <span />
        </div>
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
            <a href="#termin" className="bg-[#1e3ab8] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a33a8] transition-colors">Termin anfragen</a>
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
              <a href="#termin" className="bg-[#1e3ab8] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#1a33a8] transition-colors shadow-md">
                Termin vereinbaren
              </a>
              <a href="tel:+4315123456" className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#1e3ab8] hover:text-[#1e3ab8] transition-colors">
                +43 1 512 34 56
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
              <span>✓ DSGVO-konform</span>
              <span>✓ ÖÄK-Mitglied</span>
              <span>✓ Online-Termin</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-2xl overflow-hidden shadow-xl relative">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Dr. Thomas Haas" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#1e3ab8]/80 backdrop-blur-sm p-4 text-white">
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
              <div key={l.title} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors group cursor-default">
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
              2021 eröffnete er seine Wahlarztpraxis im Herzen von Wien, um seinen Patientinnen und Patienten mehr Zeit widmen zu können. Neben seiner ärztlichen Tätigkeit engagiert er sich in Präventionsprojekten und hält Vorträge über Herzgesundheit.
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
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Ordinationszeiten</span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${status.open ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {status.label}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Wann Sie mich erreichen</h2>
            <div className="space-y-1">
              {openingRows.map((r, i) => (
                <div key={r.day} className={`flex justify-between py-2.5 border-b border-gray-100 text-sm rounded px-2 -mx-2 transition-colors ${i === todayRowIdx ? 'bg-blue-50 text-[#1e3ab8] font-semibold' : r.day === 'Sa / So' ? 'text-gray-400' : 'text-gray-700'}`}>
                  <span>{r.day}{i === todayRowIdx ? ' (heute)' : ''}</span>
                  <span>{r.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="kontakt">
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Kontakt</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">So erreichen Sie uns</h2>
            <div className="space-y-3 mb-6 text-sm text-gray-600">
              <p>📍 Wollzeile 12, 1010 Wien</p>
              <p>📞 <a href="tel:+4315123456" className="hover:text-[#1e3ab8] transition-colors">+43 1 512 34 56</a></p>
              <p>📧 <a href="mailto:ordination@dr-haas-wien.at" className="hover:text-[#1e3ab8] transition-colors">ordination@dr-haas-wien.at</a></p>
              <p>🚇 U1/U3 Stephansplatz (5 Min. Fußweg)</p>
              <p>♿ Barrierefrei · Lift vorhanden</p>
            </div>
            <a href="#termin" className="block w-full bg-[#1e3ab8] text-white text-center py-3 rounded-xl font-semibold text-sm hover:bg-[#1a33a8] transition-colors">
              Online-Termin anfragen →
            </a>
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section className="py-20 px-6 bg-[#f0f4ff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Bewertungen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Was Patienten sagen</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { text: '„Dr. Haas nimmt sich wirklich Zeit für jeden Patienten. Endlich ein Arzt, der zuhört und erklärt."', name: 'Martin K.' },
              { text: '„Sehr professionell und kompetent. Die Diagnose war schnell, die Behandlung erfolgreich. Sehr empfehlenswert!"', name: 'Ursula B.' },
              { text: '„Hervorragende Praxis. Das Team ist freundlich, Wartezeiten kurz. Ich bin jetzt seit 3 Jahren Patient hier."', name: 'Peter W.' },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-amber-400 text-sm mb-1">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-400 text-xs mb-3">Verifizierte Bewertung · Google</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">{r.text}</p>
                <p className="text-[#1e3ab8] text-xs font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMIN FORMULAR */}
      <section id="termin" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Online-Termin</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Termin anfragen</h2>
            <p className="text-gray-500 text-sm mt-2">Wir melden uns innerhalb von 24 Stunden. Felder mit * sind Pflichtfelder.</p>
          </div>
          {formState === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Anfrage erfolgreich gesendet!</h3>
              <p className="text-gray-500 text-sm">Wir melden uns in Kürze bei Ihnen. Bitte prüfen Sie auch Ihren Spam-Ordner.</p>
              <button onClick={() => setFormState('idle')} className="mt-6 text-[#1e3ab8] text-sm underline hover:no-underline">Neue Anfrage stellen</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Vorname *</label>
                  <input required type="text" placeholder="Maria" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nachname *</label>
                  <input required type="text" placeholder="Mustermann" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Telefon *</label>
                  <input required type="tel" placeholder="+43 1 ..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">E-Mail *</label>
                  <input required type="email" placeholder="ihre@email.at" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Anliegen</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors">
                    <option>Ersttermin</option>
                    <option>Folgetermin</option>
                    <option>Befundbesprechung</option>
                    <option>Vorsorgeuntersuchung</option>
                    <option>Akutkonsultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Wunschtermin</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Kurze Beschreibung (optional)</label>
                <textarea rows={3} placeholder="Was sollen wir wissen? z.B. Symptome, Vorbefunde, besondere Wünsche..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3ab8]/20 focus:border-[#1e3ab8] transition-colors resize-none" />
              </div>
              <div className="flex items-start gap-3">
                <input required type="checkbox" id="dsgvo1" className="mt-0.5 accent-[#1e3ab8]" />
                <label htmlFor="dsgvo1" className="text-xs text-gray-500 leading-relaxed">
                  Ich stimme der Verarbeitung meiner Daten gemäß der <a href="#" className="text-[#1e3ab8] underline">Datenschutzerklärung</a> zu. *
                </label>
              </div>
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-[#1e3ab8] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#1a33a8] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Wird gesendet…
                  </>
                ) : 'Termin anfragen →'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#f0f4ff]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#1e3ab8] uppercase tracking-widest">Häufige Fragen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Ihre Fragen – unsere Antworten</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm pr-4">{faq.q}</span>
                  <span className={`text-[#1e3ab8] shrink-0 text-lg leading-none transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
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
