'use client'
import { useState } from 'react'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

const leistungen = [
  { icon: '💉', title: 'Schutzimpfungen', text: 'Alle Impfungen lt. Impfplan, Reiseimpfungen, Grippe' },
  { icon: '🧸', title: 'Vorsorgeuntersuchungen', text: 'Entwicklungsdiagnostik, Mutter-Kind-Pass-Untersuchungen' },
  { icon: '🍼', title: 'Neugeborenen-Versorgung', text: 'Erstuntersuchung, Beratung, Stillberatung, Schreikind' },
  { icon: '🫁', title: 'Atemwegserkrankungen', text: 'Asthma, Bronchitis, Pseudokrupp, Pneumonie' },
  { icon: '🧠', title: 'Entwicklungsbeurteilung', text: 'Sprache, Motorik, Sozialverhalten, Schulreife' },
  { icon: '🩺', title: 'Sportmedizin', text: 'Sporttauglichkeitsuntersuchung, Ernährungsberatung' },
]

export default function Demo3Page() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

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
              <p className="font-bold text-teal-800 text-sm">Dr. Anna Berger</p>
              <p className="text-teal-500 text-xs">Kinderärztin · Linz</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-sm text-gray-600">
            <a href="#leistungen" className="hover:text-teal-700 transition-colors">Leistungen</a>
            <a href="#ueber" className="hover:text-teal-700 transition-colors">Über mich</a>
            <a href="#team" className="hover:text-teal-700 transition-colors">Team</a>
            <Link href="/demo/privatarzt-warm/impfen" className="hover:text-teal-700 transition-colors">Impfinfo</Link>
            <a href="#termin" className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors">Termin</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-teal-50 via-emerald-50 to-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Kassenvertrag OÖGKK</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">BVA · SVS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Für Ihre Kleinen,<br /><span className="text-teal-600">groß gedacht.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Eine Kinderärztin, der Sie vertrauen können. Ich nehme mir Zeit, erkläre auf Augenhöhe und bin für Sie und Ihre Familie da – in guten wie in herausfordernden Momenten.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#termin" className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md shadow-teal-100">Termin vereinbaren</a>
              <a href="tel:+437325678" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm hover:border-teal-300 transition-colors">+43 732 56 78 90</a>
            </div>
            <p className="mt-6 text-sm text-teal-600 bg-teal-50 border border-teal-100 rounded-xl px-4 py-2 inline-block">
              🕐 Akute Erkrankungen: täglich Akutslots – bitte telefonisch voranmelden
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-[2rem] overflow-hidden shadow-xl shadow-teal-100 relative">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85&fit=crop&crop=face,top" alt="Dr. Anna Berger" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-teal-800/80 backdrop-blur-sm p-4">
                  <p className="text-white font-bold text-sm">Dr. Anna Berger</p>
                  <p className="text-teal-100 text-xs">Kinderärztin seit 2008 in Linz</p>
                </div>
              </div>
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
          {/* Impfen CTA */}
          <div className="mt-10 bg-teal-50 border-2 border-teal-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-4xl">💉</div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-teal-800">Alles rund ums Impfen</p>
              <p className="text-teal-600 text-sm">Impfplan, FAQs, Reiseimpfungen – wir beantworten alle Ihre Fragen auf einer eigenen Seite.</p>
            </div>
            <Link href="/demo/privatarzt-warm/impfen" className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap">Impfinfo lesen →</Link>
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section id="ueber" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Über mich</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Kindermedizin mit Herz</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Seit 2008 betreibe ich meine Kinder- und Jugendarztpraxis in Linz-Urfahr. Nach meiner Facharztausbildung an der Kinderklinik Linz entschloss ich mich bewusst für die Niederlassung: „Ich wollte Kinder über Jahre hinweg begleiten – nicht nur in akuten Momenten."
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mein Schwerpunkt liegt auf Vorsorge, Entwicklungsbegleitung und einer kindgerechten Medizin auf Augenhöhe. Eltern schätzen meine verständnisvolle Art, Kinder meinen Humor. Ich verstehe mich nicht nur als Ärztin, sondern auch als Begleiterin durchs Großwerden.
            </p>
            <div className="border-l-2 border-teal-400 pl-4 text-gray-500 italic text-sm mb-6">
              „Jedes Kind ist anders. Genau das macht meine Arbeit so schön und so verantwortungsvoll zugleich."
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ v: '18+', l: 'Jahre' }, { v: '5.000+', l: 'Patienten' }, { v: '⭐ 4,9', l: 'Bewertung' }].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-3 shadow-sm">
                  <p className="font-bold text-teal-700 text-lg">{s.v}</p>
                  <p className="text-gray-400 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Bewertungen rechts */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-teal-100">
            <h3 className="font-bold text-gray-900 mb-5">Das sagen Eltern</h3>
            {[
              { text: '"Dr. Berger nimmt sich wirklich Zeit. Mein Sohn geht sogar gerne zur Ärztin!"', name: 'Familie Gruber, Linz' },
              { text: '"Endlich eine Kinderärztin, die auch bei Impfungen verständlich erklärt – ohne Druck."', name: 'Mama von Lena, 3 Jahre' },
              { text: '"Auch bei Notfällen immer erreichbar und hilfsbereit. Das bedeutet als Elternteil sehr viel."', name: 'Familie Maier, Traun' },
              { text: '"Monika, die Kinderkrankenschwester, ist absolut wunderbar. Mein Sohn liebt sie."', name: 'Papa von Felix, 6 Jahre' },
            ].map((t, i) => (
              <div key={i} className="mb-4 pb-4 border-b border-gray-50 last:border-0">
                <p className="text-amber-400 text-xs mb-1">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-1 italic">{t.text}</p>
                <p className="text-teal-600 text-xs font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Unser Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Wer auf Ihr Kind wartet</h2>
            <p className="text-gray-500 text-sm mt-2">Wir glauben: Medizin beginnt am Empfang. Das gesamte Team zählt.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: 'Monika Huber', rolle: 'Diplomierte Kinderkrankenschwester', jahre: '20 Jahre Berufserfahrung · seit 2012 im Team', text: 'Monika hat ein besonderes Händchen für Kinder jedes Alters – ob Säugling oder Teenager. Sie führt Impfungen und Messungen durch und hat immer ein Pflaster und ein Lächeln parat.', photo: '/demo-team-huber.jpg', initials: 'MH', color: 'from-teal-400 to-emerald-500' },
              { name: 'Sandra Aichner', rolle: 'Rezeption & Terminkoordination', jahre: 'seit 2015 in der Ordination', text: 'Sandra ist die gute Seele unserer Ordination. Sie koordiniert alle Termine, beantwortet Fragen rund um Mutter-Kind-Pass und Impfpass und sorgt dafür, dass niemand lange wartet.', photo: null, initials: 'SA', color: 'from-yellow-300 to-amber-400' },
            ].map((t) => (
              <div key={t.name} className="flex gap-5 bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <div className="shrink-0">
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-2xl object-cover" />
                  ) : (
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-sm`}>
                      <span className="text-white font-bold text-xl">{t.initials}</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-teal-600 text-xs font-semibold mb-0.5">{t.rolle}</p>
                  <p className="text-gray-400 text-xs mb-2">{t.jahre}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Ordinationszeiten</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Wann wir für Sie da sind</h2>
            {[{ day: 'Montag', time: '08:00 – 12:00 · 14:00 – 17:00' }, { day: 'Dienstag', time: '08:00 – 12:00' }, { day: 'Mittwoch', time: '08:00 – 12:00 · 14:00 – 18:00' }, { day: 'Donnerstag', time: '08:00 – 12:00' }, { day: 'Freitag', time: '08:00 – 13:00' }, { day: 'Sa / So', time: 'Geschlossen' }].map((r) => (
              <div key={r.day} className={`flex justify-between py-2.5 border-b border-gray-100 text-sm ${r.day === 'Sa / So' ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-medium">{r.day}</span><span>{r.time}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Kontakt & Anfahrt</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Wo Sie uns finden</h2>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p>📍 Hauptstraße 47, 4040 Linz-Urfahr</p>
              <p>📞 +43 732 56 78 90</p>
              <p>📧 ordination@dr-berger-kinder.at</p>
              <p className="text-teal-600 text-xs bg-teal-50 rounded-lg p-2">🅿️ Kostenlose Parkplätze vor dem Haus · Barrierefrei · Wickelraum vorhanden</p>
            </div>
            <a href="tel:+437325678" className="block w-full bg-teal-600 text-white text-center py-3 rounded-full font-semibold text-sm hover:bg-teal-700 transition-colors shadow-md shadow-teal-100">Jetzt anrufen · +43 732 56 78 90</a>
          </div>
        </div>
      </section>

      {/* TERMIN */}
      <section id="termin" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Online-Termin</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Termin anfragen</h2>
            <p className="text-gray-500 text-sm mt-2">Für Akutfälle bitte telefonisch anrufen – wir reservieren täglich Akutslots.</p>
          </div>
          {formState === 'success' ? (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-12 text-center">
              <p className="text-4xl mb-4">🌱</p>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Anfrage erhalten!</h3>
              <p className="text-gray-500 text-sm">Wir melden uns in Kürze bei Ihnen.</p>
              <button onClick={() => setFormState('idle')} className="mt-6 text-teal-600 text-sm underline">Neue Anfrage stellen</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormState('submitting'); setTimeout(() => setFormState('success'), 1500) }} className="bg-teal-50 rounded-2xl p-8 border border-teal-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Vorname (Elternteil) *</label><input required type="text" placeholder="Anna" className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors" /></div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Nachname *</label><input required type="text" placeholder="Gruber" className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Telefon *</label><input required type="tel" placeholder="+43 732 ..." className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors" /></div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Name des Kindes *</label><input required type="text" placeholder="Max" className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Alter des Kindes</label><input type="text" placeholder="z.B. 3 Jahre" className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors" /></div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Anliegen</label>
                  <select className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors">
                    <option>Vorsorgeuntersuchung</option><option>Impftermin</option><option>Akute Erkrankung</option><option>Mutter-Kind-Pass</option><option>Entwicklungsbeurteilung</option>
                  </select>
                </div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Beschreibung (optional)</label><textarea rows={3} placeholder="Was sollen wir wissen? z.B. Symptome, Impfpass..." className="w-full border border-teal-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors resize-none" /></div>
              <div className="flex items-start gap-3"><input required type="checkbox" id="dsgvo3" className="mt-0.5 accent-teal-600" /><label htmlFor="dsgvo3" className="text-xs text-gray-500">Ich stimme der Verarbeitung meiner Daten zu. *</label></div>
              <button type="submit" disabled={formState === 'submitting'} className="w-full bg-teal-600 text-white py-3.5 rounded-full font-bold text-sm hover:bg-teal-700 transition-colors disabled:opacity-60">{formState === 'submitting' ? 'Wird gesendet…' : 'Termin anfragen →'}</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12"><span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Häufige Fragen</span><h2 className="text-3xl font-bold text-gray-900 mt-2">Fragen von Eltern</h2></div>
          <div className="space-y-4">
            {[
              { q: 'Ab welchem Alter nehmen Sie Kinder an?', a: 'Von der Geburt bis zum vollendeten 18. Lebensjahr. Auch Jugendliche sind herzlich willkommen.' },
              { q: 'Wie bekomme ich kurzfristig einen Termin?', a: 'Bitte rufen Sie morgens zwischen 8:00 und 9:00 Uhr an. Wir reservieren täglich Akuttermine für kranke Kinder.' },
              { q: 'Sind alle Impfungen im Impfplan abgedeckt?', a: 'Ja, alle Impfungen laut österreichischem Impfplan – inklusive kostenloser Schulimpfungen. Auf Wunsch auch Reiseimpfungen.' },
              { q: 'Was ist beim ersten Termin zu beachten?', a: 'Bitte bringen Sie den Mutter-Kind-Pass oder das Impfheft mit. Beim Ersttermin lernen wir uns in Ruhe kennen.' },
              { q: 'Haben Sie auch Sprechzeiten ohne Voranmeldung?', a: 'Für akut kranke Kinder reservieren wir täglich Akutslots. Für reguläre Termine bitten wir um Voranmeldung.' },
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
        <p className="text-xs mb-3"><a href="#" className="hover:text-white">Impressum</a> · <a href="#" className="hover:text-white">Datenschutz</a></p>
        <a href="https://www.mypraxis.at" className="inline-block bg-teal-900 border border-teal-700 text-teal-300 text-xs px-4 py-2 rounded-full hover:border-teal-500 transition-colors">Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at</a>
      </footer>
    </div>
  )
}
