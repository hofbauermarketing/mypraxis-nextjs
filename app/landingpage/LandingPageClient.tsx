'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

// ─── ChatGPT Mock Answers (module-level – SSR-safe) ───────────────────────────
const MOCK_QUESTION = 'Welcher Gynäkologe in Wien ist empfehlenswert?'

const ANSWER_OHNE =
  'Ich empfehle folgende Gynäkologen in Wien:\n\n• Dr. Müller – 1010 Wien\n• Dr. Schmidt – 1090 Wien\n• Ordination am Ring – 1010 Wien\n\nFür Ihre Anfrage konnte ich leider keine weiteren Informationen finden.'

const ANSWER_MIT =
  'Ich empfehle folgende Gynäkologen in Wien:\n\n• Dr. Müller – 1010 Wien\n• Dr. Schmidt – 1090 Wien\n• Dr. Franz Fischl – Facharzt für Gynäkologie & Geburtshilfe, 1010 Wien\n  Schwerpunkte: Kinderwunsch, Hormontherapie, pränatale Diagnostik\n  Mehrsprachige Betreuung: Deutsch, Türkisch, Arabisch\n  Online-Terminbuchung verfügbar · Wahlarzt\n\nDr. Fischl bietet auf seiner Website ausführliche Patienteninformationen zu Diagnosen, Therapieoptionen –'

const SERVICE_CARDS: Record<string, { text: string; color: string }> = {
  Kinderwunsch: {
    text: 'Individuelle medizinische Abklärung bei unerfülltem Kinderwunsch – von der Diagnostik bis zur Besprechung möglicher Behandlungsschritte.',
    color: 'from-rose-900/60 to-rose-800/40',
  },
  Hormontherapie: {
    text: 'Diagnostik hormoneller Beschwerden und Begleitung bei Veränderungen des hormonellen Gleichgewichts – in allen Lebensphasen.',
    color: 'from-purple-900/60 to-purple-800/40',
  },
  Schwangerschaft: {
    text: 'Persönliche medizinische Betreuung während der Schwangerschaft mit regelmäßigen Kontrollen und individueller Beratung.',
    color: 'from-blue-900/60 to-blue-800/40',
  },
  Vorsorge: {
    text: 'Regelmäßige Vorsorgeuntersuchungen, Früherkennung und medizinische Beratung bei gynäkologischen Fragestellungen.',
    color: 'from-emerald-900/60 to-emerald-800/40',
  },
  Verhütung: {
    text: 'Ausführliche Beratung zu hormonellen und nicht-hormonellen Verhütungsmethoden sowie Fragen rund um Sexualität und Beratung.',
    color: 'from-orange-900/60 to-orange-800/40',
  },
}

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedStat({
  target,
  suffix = '',
  prefix = '',
  label,
  compact = false,
}: {
  target: number
  suffix?: string
  prefix?: string
  label: string
  compact?: boolean
}) {
  const [count, setCount] = useState(target)
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
          setCount(0)
          let start = 0
          const duration = 1800
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animated, target])

  return (
    <div ref={ref} className="text-center">
      <div className={compact ? 'text-xl font-bold text-white leading-none' : 'text-3xl md:text-4xl font-bold text-white'}>
        {prefix}{count.toLocaleString('de-AT')}{suffix}
      </div>
      <div className={compact ? 'text-[10px] text-blue-200/80 mt-1 leading-tight' : 'text-sm text-blue-200 mt-1'}>{label}</div>
    </div>
  )
}

// ─── ChatGPT Mock ─────────────────────────────────────────────────────────────
type MockPhase = 'question' | 'thinking' | 'answer'

function ChatGptMock() {
  const [active, setActive] = useState<'ohne' | 'mit'>('ohne')
  const [phase, setPhase] = useState<MockPhase>('answer')
  const [dispQuestion, setDispQuestion] = useState(MOCK_QUESTION)
  const [dispAnswer, setDispAnswer] = useState(ANSWER_OHNE)
  const [activeService, setActiveService] = useState<string | null>(null)
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null)
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null)
  const iv = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearAll = useCallback(() => {
    if (t1.current) { clearTimeout(t1.current); t1.current = null }
    if (t2.current) { clearTimeout(t2.current); t2.current = null }
    if (iv.current) { clearInterval(iv.current); iv.current = null }
  }, [])

  const runSequence = useCallback((answer: string) => {
    clearAll()
    // Phase 1: type question
    setPhase('question')
    setDispQuestion('')
    setDispAnswer('')
    let qi = 0
    iv.current = setInterval(() => {
      qi++
      setDispQuestion(MOCK_QUESTION.slice(0, qi))
      if (qi >= MOCK_QUESTION.length) {
        clearInterval(iv.current!); iv.current = null
        // Phase 2: thinking dots
        setPhase('thinking')
        t1.current = setTimeout(() => {
          t1.current = null
          // Phase 3: type answer
          setPhase('answer')
          let ai = 0
          iv.current = setInterval(() => {
            ai++
            setDispAnswer(answer.slice(0, ai))
            if (ai >= answer.length) {
              clearInterval(iv.current!); iv.current = null
            }
          }, 16)
        }, 900)
      }
    }, 28)
  }, [clearAll])

  useEffect(() => {
    runSequence(active === 'ohne' ? ANSWER_OHNE : ANSWER_MIT)
    return clearAll
  }, [active, runSequence, clearAll])

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tab Switch */}
      <div className="flex rounded-xl overflow-hidden border border-gray-200 mb-4 text-sm font-semibold">
        <button
          onClick={() => setActive('ohne')}
          className={`flex-1 py-3 transition-colors border-r border-gray-200 ${
            active === 'ohne' ? 'bg-red-50 text-red-700' : 'bg-white text-gray-500 hover:bg-gray-50'
          }`}
        >
          Typische Arzt-Website
        </button>
        <button
          onClick={() => setActive('mit')}
          className={`flex-1 py-3 transition-colors ${
            active === 'mit' ? 'bg-green-50 text-green-700' : 'bg-white text-gray-500 hover:bg-gray-50'
          }`}
        >
          Mit KI-Optimierung
        </button>
      </div>

      {/* Mock Chat Window */}
      <div className="bg-[#212121] rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#171717] border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-3 text-xs text-gray-500">ChatGPT</span>
        </div>

        <div className="p-5 space-y-4">
          {/* User question – types in first */}
          <div className="flex justify-end">
            <div className="bg-[#2f2f2f] text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-xs min-h-[38px]">
              {dispQuestion}
              {phase === 'question' && (
                <span className="inline-block w-0.5 h-4 bg-white ml-0.5 animate-pulse align-middle" />
              )}
            </div>
          </div>

          {/* GPT answer */}
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-[#10a37f] flex items-center justify-center shrink-0 text-white text-xs font-bold mt-0.5">
              G
            </div>
            <div className="text-sm text-gray-200 leading-relaxed whitespace-pre-line min-h-[80px]">
              {phase === 'thinking' ? (
                <span className="flex gap-1 mt-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              ) : (
                <>
                  {dispAnswer}
                  {phase === 'answer' && dispAnswer.length > 0 && dispAnswer.length < (active === 'ohne' ? ANSWER_OHNE : ANSWER_MIT).length && (
                    <span className="inline-block w-0.5 h-4 bg-white ml-0.5 animate-pulse align-middle" />
                  )}
                  {/* Orange Ergänzung + Service-Buttons – erscheint wenn Antwort fertig getippt */}
                  {active === 'mit' && dispAnswer.length >= ANSWER_MIT.length && (
                    <span className="whitespace-normal">
                      <span className="text-[#ff8a00]"> (und viele weitere Informationen die wir für Sie einpflegen)</span>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {Object.keys(SERVICE_CARDS).map(s => (
                          <button
                            key={s}
                            onClick={() => setActiveService(activeService === s ? null : s)}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                              activeService === s
                                ? 'bg-[#ff8a00] border-[#ff8a00] text-white'
                                : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      {activeService && SERVICE_CARDS[activeService] && (
                        <div className={`mt-2 rounded-xl p-3 bg-gradient-to-br ${SERVICE_CARDS[activeService].color} border border-white/10`}>
                          <p className="text-xs text-gray-200 leading-relaxed mb-2 whitespace-normal">
                            {SERVICE_CARDS[activeService].text}
                          </p>
                          <span className="inline-flex items-center gap-1 text-[#ff8a00] text-xs font-medium">
                            Mehr erfahren
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-3 text-xs text-center px-4 leading-relaxed ${active === 'ohne' ? 'text-red-500' : 'text-green-600'}`}>
        {active === 'ohne'
          ? '⚠️ Ihre Ordination erscheint nicht. Patienten rufen jemand anderen an.'
          : '✅ Steigt die Chance, dass Patienten Ihre Ordination finden und kontaktieren.'}
      </div>
      <p className="text-xs text-gray-400 text-center mt-2 px-4">
        Simuliertes Beispiel. Ob und wann eine Ordination von KI-Systemen genannt wird, hängt von vielen Faktoren ab – wir optimieren alle bekannten.
      </p>
    </div>
  )
}

// ─── Celebration Sparkles ─────────────────────────────────────────────────────
function CelebrationSparkles() {
  type P = { x: number; y: number; s: number; d: number; t: number; shape: 0 | 1 | 2 }
  const particles: P[] = [
    // links
    { x: 4,  y: 10, s: 22, d: 0.0, t: 3.2, shape: 0 },
    { x: 14, y: 34, s: 13, d: 1.3, t: 2.9, shape: 2 },
    { x: 2,  y: 60, s: 26, d: 2.1, t: 3.7, shape: 0 },
    { x: 20, y: 20, s: 9,  d: 0.8, t: 2.5, shape: 1 },
    { x: 8,  y: 79, s: 18, d: 1.8, t: 3.1, shape: 0 },
    { x: 22, y: 47, s: 7,  d: 2.9, t: 2.7, shape: 1 },
    { x: 11, y: 24, s: 30, d: 0.4, t: 4.1, shape: 2 },
    { x: 6,  y: 67, s: 26, d: 2.6, t: 3.9, shape: 2 },
    // rechts
    { x: 96, y: 10, s: 22, d: 0.7, t: 3.2, shape: 0 },
    { x: 86, y: 34, s: 13, d: 2.0, t: 2.9, shape: 2 },
    { x: 98, y: 60, s: 26, d: 0.3, t: 3.7, shape: 0 },
    { x: 80, y: 20, s: 9,  d: 1.4, t: 2.5, shape: 1 },
    { x: 92, y: 79, s: 18, d: 1.0, t: 3.1, shape: 0 },
    { x: 78, y: 47, s: 7,  d: 2.4, t: 2.7, shape: 1 },
    { x: 89, y: 24, s: 30, d: 1.1, t: 4.1, shape: 2 },
    { x: 94, y: 67, s: 26, d: 3.2, t: 3.9, shape: 2 },
  ]
  const colors = ['#ff8a00', '#ffd700', '#ffb347', '#ff6b00']
  const burstAngles = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <>
      {particles.map((p, i) => {
        const c = colors[i % colors.length]
        return (
          <div
            key={i}
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div style={{ animation: `sparklePop ${p.t}s ease-in-out ${p.d}s infinite`, willChange: 'transform, opacity' }}>
              {p.shape === 0 && (
                <svg width={p.s} height={p.s} viewBox="0 0 24 24" fill={c}>
                  <path d="M12 1L13.2 9.8L22 12L13.2 14.2L12 23L10.8 14.2L2 12L10.8 9.8Z" />
                </svg>
              )}
              {p.shape === 1 && (
                <svg width={p.s} height={p.s} viewBox="0 0 24 24" fill={c}>
                  <circle cx="12" cy="12" r="8" />
                </svg>
              )}
              {p.shape === 2 && (
                <svg width={p.s} height={p.s} viewBox="-15 -15 30 30">
                  {burstAngles.map(a => (
                    <line
                      key={a}
                      x1={0} y1={0}
                      x2={+(Math.cos(a * Math.PI / 180) * 12).toFixed(1)}
                      y2={+(Math.sin(a * Math.PI / 180) * 12).toFixed(1)}
                      stroke={c} strokeWidth="2.5" strokeLinecap="round"
                    />
                  ))}
                  <circle cx={0} cy={0} r={2.5} fill={c} />
                </svg>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

// ─── Scarcity Bar ─────────────────────────────────────────────────────────────
function ScarcityBar() {
  const taken = 2
  const total = 9
  const pct = Math.round((taken / total) * 100)
  const ref = useRef<HTMLDivElement>(null)
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFill(pct)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="max-w-sm mx-auto">
      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
        <span>{taken} von {total} Plätzen belegt</span>
        <span>{total - taken} noch frei</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#ff8a00] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${fill}%` }}
        />
      </div>
    </div>
  )
}

// ─── Pilot Pricing Cards ──────────────────────────────────────────────────────
function PilotPricingCards() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-2 max-w-sm mx-auto gap-4 mb-8">
      {/* Regulärer Preis – wird durchgestrichen */}
      <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
        <div className="text-sm opacity-80 mb-1">Regulärer Preis</div>
        <div className="relative">
          <div className="text-3xl font-bold opacity-60">€ 7.900</div>
          <div
            className="absolute left-0 h-[3px] bg-red-400 rounded-full"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              width: visible ? '100%' : '0%',
              transition: visible ? 'width 0.5s ease 0.5s' : 'none',
            }}
          />
        </div>
        <div className="text-xs opacity-70 mt-1">netto regulär</div>
      </div>

      {/* Pilotpreis – pulsiert */}
      <div
        className="rounded-2xl p-6 bg-[#ff8a00]"
        style={{
          animation: visible ? 'pricePulse 2.2s ease-in-out 1.1s infinite' : 'none',
        }}
      >
        <div className="text-sm opacity-80 mb-1">Pilotpreis</div>
        <div className="text-3xl font-bold">€ 3.950</div>
        <div className="text-xs opacity-70 mt-1">netto</div>
      </div>
    </div>
  )
}

// ─── Qualifying Funnel ────────────────────────────────────────────────────────
type FunnelStep = 1 | 2 | 3 | 4 | 5

function QualifyingFunnel() {
  const [step, setStep] = useState<FunnelStep>(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [formData, setFormData] = useState({ name: '', phone: '', fachrichtung: '', ort: '' })
  const funnelRef = useRef<HTMLDivElement>(null)

  function scrollToFunnel() {
    setTimeout(() => {
      funnelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  function choose(q: number, answer: string, next: FunnelStep) {
    setAnswers(prev => ({ ...prev, [q]: answer }))
    setStep(next)
    scrollToFunnel()
  }

  async function sendFunnelNotification(method: 'jenny' | 'cal') {
    try {
      await fetch('/api/funnel-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          fachrichtung: formData.fachrichtung,
          ort: formData.ort,
          q1: answers[1] ?? '',
          q2: answers[2] ?? '',
          q3: answers[3] ?? '',
          q4: answers[4] ?? '',
          method,
        }),
      })
    } catch {
      // fire-and-forget — never block the user flow
    }
  }

  const optionBtn = (selected: boolean) =>
    `w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
      selected
        ? 'border-[#112080] bg-blue-50 text-[#112080]'
        : 'border-gray-200 bg-white text-gray-700 hover:border-[#112080]/40 hover:bg-blue-50/30'
    }`

  return (
    <div ref={funnelRef}>
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mb-8">
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} className="flex items-center gap-1.5">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step > s ? 'bg-green-500 text-white' :
              step === s ? 'bg-[#112080] text-white' :
              'bg-gray-200 text-gray-400'
            }`}>
              {step > s ? '✓' : s}
            </div>
            {s < 5 && <div className={`w-6 h-0.5 ${step > s ? 'bg-green-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#112080] text-center mb-6">
            Hat Ihre Ordination eine eigene Website?
          </h3>
          {[
            { label: 'Ja – mit eigener Domain', value: 'eigen' },
            { label: 'Ja – aber nur über ein Verzeichnis (docfinder, herold.at etc.)', value: 'verzeichnis' },
            { label: 'Nein, noch keine', value: 'keine' },
          ].map(opt => (
            <button key={opt.value} onClick={() => choose(1, opt.value, 2)} className={optionBtn(answers[1] === opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#112080] text-center mb-2">
            Ein Patient fragt ChatGPT:
          </h3>
          <div className="bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600 italic text-center mb-4">
            „Welcher Arzt in meiner Stadt ist empfehlenswert?"
          </div>
          <p className="text-sm text-gray-500 text-center mb-4">Was glauben Sie, was passiert?</p>
          {[
            { label: 'Meine Ordination wird wahrscheinlich nicht genannt', value: 'nicht_genannt' },
            { label: 'Ich weiß es ehrlich gesagt nicht', value: 'weiss_nicht' },
            { label: 'Ich glaube, ich bin bereits sichtbar', value: 'sichtbar' },
          ].map(opt => (
            <button key={opt.value} onClick={() => choose(2, opt.value, 3)} className={optionBtn(answers[2] === opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#112080] text-center mb-6">
            Was kostet Sie täglich am meisten Zeit?
          </h3>
          {[
            { label: 'Patienten erklären immer wieder dieselben Grundlagen', value: 'erklaerung' },
            { label: 'Neue Patienten gewinnen / Auslastung steigern', value: 'auslastung' },
            { label: 'Sprachbarrieren mit internationalen Patienten', value: 'sprache' },
            { label: 'Etwas anderes', value: 'anderes' },
          ].map(opt => (
            <button key={opt.value} onClick={() => choose(3, opt.value, 4)} className={optionBtn(answers[3] === opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 4 – Timeline */}
      {step === 4 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#112080] text-center mb-2">
            Letzte Frage: Wann könnten Sie starten?
          </h3>
          <p className="text-sm text-gray-500 text-center mb-5">
            Das Pilotprogramm vergibt Starttermine laufend – Verfügbarkeit ist begrenzt.
          </p>
          {[
            {
              label: 'Innerhalb der nächsten 14 Tage',
              sub: 'Ich bin bereit, schnell umzusetzen',
              value: 'sofort',
              badge: '🟢 Ideal',
            },
            {
              label: 'In 2–4 Wochen',
              sub: 'Ich brauche noch etwas Vorlaufzeit',
              value: 'bald',
              badge: '🟡 Eingeschränkt',
            },
            {
              label: 'Erst in über einem Monat',
              sub: 'Ich informiere mich erst einmal',
              value: 'spaeter',
              badge: '🔴 Wenige Plätze',
            },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => choose(4, opt.value, 5)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${optionBtn(answers[4] === opt.value)}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold">{opt.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{opt.sub}</div>
                </div>
                <span className="text-xs font-medium shrink-0 text-gray-500">{opt.badge}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 5 – Kontakt */}
      {step === 5 && (
        <div>
          <>
            {/* Dringlichkeits-Nudge für späte Starter */}
              {(answers[4] === 'bald' || answers[4] === 'spaeter') && (
                <div className="bg-amber-50 border border-amber-300 rounded-2xl px-5 py-4 mb-4 flex gap-3">
                  <span className="text-lg shrink-0 mt-0.5">⏳</span>
                  <div>
                    <p className="text-amber-800 font-bold text-sm mb-1">
                      Startplätze sind begrenzt
                    </p>
                    <p className="text-amber-700 text-xs leading-relaxed">
                      {answers[4] === 'spaeter'
                        ? 'Aktuell vergeben wir Starttermine bevorzugt an Ordinationen, die in den nächsten Tagen loslegen möchten. Sie können sich trotzdem jetzt bewerben – wir melden uns sobald ein Platz verfügbar ist. Wer früher startet, profitiert früher.'
                        : 'Wir empfehlen, nicht zu lange zu warten – verfügbare Starttermine gehen rasch. Am meisten profitieren Ordinationen, die innerhalb der nächsten 14 Tage in die Umsetzung gehen.'
                      }
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-[#112080]/5 border border-[#112080]/20 rounded-2xl p-5 mb-6 text-center">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-bold text-[#112080] text-lg mb-1">
                  Sie qualifizieren sich für das Pilotprogramm.
                </h3>
                <p className="text-gray-500 text-sm">
                  Wie sollen wir Sie erreichen?
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Dr. Maria Muster"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#112080] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Telefon *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+43 ..."
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#112080] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Fachrichtung</label>
                    <input
                      type="text"
                      value={formData.fachrichtung}
                      onChange={e => setFormData(p => ({ ...p, fachrichtung: e.target.value }))}
                      placeholder="z.B. Gynäkologie"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#112080] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Stadt</label>
                    <input
                      type="text"
                      value={formData.ort}
                      onChange={e => setFormData(p => ({ ...p, ort: e.target.value }))}
                      placeholder="z.B. Wien"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#112080] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <a
                href="https://cal.com/kevin-hofbauer-marketing/mypraxis.at"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendFunnelNotification('cal')}
                className="flex flex-col items-center gap-1.5 w-full bg-[#ff8a00] hover:bg-orange-600 text-white font-bold py-5 px-4 rounded-2xl transition-all shadow-md hover:shadow-lg text-center"
              >
                <span className="text-2xl">📅</span>
                <span className="text-sm font-bold">Jetzt Termin mit Kevin buchen</span>
                <span className="text-xs font-normal opacity-80">Kostenloses Beratungsgespräch</span>
              </a>

              <p className="text-gray-400 text-xs text-center mt-4">
                Mit dem Fortfahren stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a> zu.
              </p>
          </>
        </div>
      )}
    </div>
  )
}

// ─── Pain Cards ───────────────────────────────────────────────────────────────
const PAIN_CARDS = [
  {
    number: '01',
    stat: '40 %',
    statLabel: 'der Ärzte burnout-gefährdet',
    pain: 'Das 40. Mal heute.',
    text: 'Sie erklären dieselbe Diagnose, dieselbe Therapie, dieselben Optionen – wieder und wieder. Nicht weil Ihre Patienten schwierig sind. Sondern weil Ihre Website schweigt, bevor sie zu Ihnen kommen. Ein vorinformierter Patient spart reell 12–18 Minuten. Pro Termin. Jeden Tag.',
    accent: 'border-red-500/25 bg-red-500/5',
    statColor: 'text-red-400',
    source: 'Wiener Ärztekammer',
    logo: '/logos/aekwien-logo.jpg',
    logoAlt: 'Ärztekammer für Wien',
  },
  {
    number: '02',
    stat: '50,3 %',
    statLabel: 'Migrationshintergrund in Wien',
    pain: 'Der Patient, den Sie nie gesehen haben.',
    text: 'Mehr als die Hälfte der Wiener Bevölkerung hat ausländische Wurzeln. Viele suchen ihren Arzt auf Türkisch, Arabisch oder Serbisch. Wer Ihre Website nicht versteht, ruft nicht an. Er geht woanders hin – oder bleibt unbehandelt. Beides ist vermeidbar.',
    accent: 'border-blue-500/25 bg-blue-500/5',
    statColor: 'text-blue-400',
    source: 'Statistik Austria 2023',
    logo: '/logos/statistik-real.svg',
    logoAlt: 'Statistik Austria',
  },
  {
    number: '03',
    stat: '⅓',
    statLabel: 'Arbeitszeit für Bürokratie',
    pain: 'Nicht für Medizin. Für Formulare.',
    text: 'Ein Drittel der ärztlichen Arbeitszeit fließt in Dokumentation, Administration und Erklärarbeit – nicht in Behandlung. Und bis 2030 fehlen laut ÖÄK bis zu 7.400 Ärzte. Das System trägt die Last auf Schultern, die schon jetzt am Limit sind.',
    accent: 'border-orange-500/25 bg-orange-500/5',
    statColor: 'text-orange-400',
    source: 'Österreichische Ärztekammer',
    logo: '/logos/oeak-logo.png',
    logoAlt: 'Österreichische Ärztekammer',
  },
]

function PainCards() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-5 mb-16">
      {PAIN_CARDS.map((item, i) => (
        /* Outer div: scroll-reveal (fadeSlideUp, einmalig) */
        <div
          key={item.number}
          style={
            visible
              ? { animation: `fadeSlideUp 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 130}ms both` }
              : { opacity: 0, transform: 'translateY(28px)' }
          }
        >
          {/* Inner div: dauerhaftes Schweben (floatMicro) */}
          <div
            style={
              visible
                ? { animation: `floatMicro ${5.2 + i * 0.7}s ease-in-out ${i * 130 + 900}ms infinite` }
                : undefined
            }
          >
            <div className={`relative rounded-xl p-6 border ${item.accent} flex flex-col overflow-hidden`}>
              {/* Ghost-Zahl Hintergrund */}
              <span
                className={`absolute -top-3 -right-1 text-[100px] font-black leading-none select-none pointer-events-none ${item.statColor}`}
                style={{ opacity: 0.1 }}
              >
                {item.number}
              </span>
              {/* Stat prominent */}
              <div className="mb-4 relative z-10">
                <div className={`text-4xl font-black ${item.statColor} leading-none`}>{item.stat}</div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">{item.statLabel}</div>
              </div>
              <div className="font-bold text-white text-base mb-3 leading-snug relative z-10">{item.pain}</div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 relative z-10 text-justify">{item.text}</p>
              {/* Quellenlogo */}
              <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-white/5">
                <div className="bg-white rounded px-2 py-1 flex-shrink-0 flex items-center justify-center" style={{ minWidth: 64 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt={item.logoAlt} className="h-5 w-auto object-contain max-w-[72px]" />
                </div>
                <p className="text-gray-600 text-[10px] leading-tight">Quelle: {item.source}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Border-Beam — Canvas 2D: ctx.lineDashOffset, keine SVG-Artifacts ────────
function GuaranteeBeam() {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap   = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const dpr = window.devicePixelRatio || 1
    let cw = 0, ch = 0
    let rafId: number
    let startTime: number | null = null

    const resize = () => {
      const r = wrap.getBoundingClientRect()
      if (Math.abs(cw - r.width) < 1 && Math.abs(ch - r.height) < 1) return
      cw = r.width
      ch = r.height
      canvas.width  = Math.round(cw * dpr)
      canvas.height = Math.round(ch * dpr)
      canvas.style.width  = `${cw}px`
      canvas.style.height = `${ch}px`
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const pad = 1.5
    const rx   = 16
    const DURATION = 10000

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const t = ((now - startTime) % DURATION) / DURATION

      const ctx = canvas.getContext('2d')!
      // setTransform resets any previous state incl. after canvas resize
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, cw, ch)

      if (cw < 1 || ch < 1) { rafId = requestAnimationFrame(tick); return }

      const bx = pad, by = pad
      const bw = cw - 2 * pad
      const bh = ch - 2 * pad
      const r  = Math.min(rx, bw / 2, bh / 2)

      // Exact perimeter of a rounded-rect: straight edges + 4 quarter-circle arcs
      const perim  = 2 * (bw + bh) - r * (8 - 2 * Math.PI)
      const dashLen = Math.min(420, perim - 10)
      const gap     = perim - dashLen          // dashLen + gap = perim → exactly 1 dash

      ctx.strokeStyle = 'rgba(255, 240, 160, 1)'
      ctx.lineWidth   = 2.5
      ctx.lineCap     = 'round'
      ctx.lineJoin    = 'round'
      ctx.setLineDash([dashLen, gap])
      ctx.lineDashOffset = -(t * perim)        // single scalar → no list interpolation

      ctx.beginPath()
      if (typeof (ctx as unknown as { roundRect?: unknown }).roundRect === 'function') {
        ;(ctx as unknown as { roundRect: (x: number, y: number, w: number, h: number, r: number) => void })
          .roundRect(bx, by, bw, bh, r)
      } else {
        ctx.moveTo(bx + r,      by)
        ctx.lineTo(bx + bw - r, by)
        ctx.arcTo(bx + bw,      by,           bx + bw,      by + r,       r)
        ctx.lineTo(bx + bw,     by + bh - r)
        ctx.arcTo(bx + bw,      by + bh,      bx + bw - r,  by + bh,      r)
        ctx.lineTo(bx + r,      by + bh)
        ctx.arcTo(bx,           by + bh,      bx,           by + bh - r,  r)
        ctx.lineTo(bx,          by + r)
        ctx.arcTo(bx,           by,           bx + r,       by,           r)
        ctx.closePath()
      }
      ctx.stroke()

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{
          filter:
            'drop-shadow(0 0 3px rgba(255,200,80,0.9)) ' +
            'drop-shadow(0 0 8px rgba(255,130,0,0.6)) ' +
            'drop-shadow(0 0 18px rgba(255,100,0,0.3))',
        }}
      />
    </div>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Andere verlangen ab 12.000 € für Arzt-Websites – wie geht das bei mypraxis.at?',
    a: 'Das verstehen wir – und ja, 12.000 € sind am Markt keine Seltenheit. Während unserer Aufbauphase investieren wir bewusst in Vertrauen und Referenzkunden statt in Gewinn. Denken Sie an Ihre eigene Anfangszeit: Als Assistenzärztin oder Assistenzarzt gingen Sie die Extrameile, um sich zu beweisen. Genau das tun wir. Der Preis ändert sich – die Qualität nicht.',
  },
  {
    q: 'Es gibt günstigere Anbieter – warum also mypraxis.at?',
    a: 'Diese Frage ist absolut berechtigt. Stellen Sie sich vor: Sie bauen ein Haus. Sie können einen Fertigbausatz kaufen – günstig, schnell, und am Ende steht etwas. Oder Sie beauftragen jemanden, der nach Ihren Wünschen plant, die Leitungen richtig legt und in zehn Jahren noch erreichbar ist, wenn das Dach undicht wird. Beides ist ein Haus. Aber nur eines ist Ihres. Ähnlich beim Auto: Ein Kleinwagen bringt Sie von A nach B. Aber er bringt Sie nicht mit dem Gefühl an, das Sie verdienen. Wer billig kauft, kauft zweimal – und die Zeit, die dabei verloren geht, die kommt nicht zurück.',
  },
  {
    q: 'Wird mir die Website gefallen?',
    a: 'Unser Qualitätsstandard ist nicht nur Premium, sondern Königsklasse – weil wir das wollen. Standard liegt uns nicht. Dass wir Webseiten bauen können, sehen Sie hier: sei es in Grafiken, Animationen, Übergängen, Texten und vielem mehr. Haben Sie dadurch genug Vertrauen, uns eine Chance zu geben?',
  },
  {
    q: 'Ihr seid neu am Markt – gibt es mypraxis.at auch langfristig noch?',
    a: 'Jede Frage hat ihre Berechtigung, auch diese. Gewiss ist es so, dass viele Unternehmen kommen und gehen – aber wir sind gekommen um zu bleiben. Unser Leitspruch: „Do whatever it takes." Wer gute Arbeit liefert, muss sich keine Sorgen machen. Wir arbeiten mehr als das.',
  },
  {
    q: 'Gibt es Demoseiten?',
    a: 'Ja, die gibt es – diese dienen aber nur der Veranschaulichung, was schnell umsetzbar ist. Richtige Königsklasse-Seiten wirken noch viel besser. Diese bauen wir erst bei richtigen Kundenanfragen für Sie. Umsatz kommt vom Umsetzen. Auch wenn das frech klingt: Als Ärztin oder Arzt üben Sie ja auch nicht ständig auf einer Puppe, sondern behandeln lieber echte Patienten.',
  },
  {
    q: 'Wird die Website mit einem Baukasten oder KI-Builder gemacht?',
    a: 'Nein – und das ist ein bewusster Qualitätsentscheid. Baukästen wie Wix, Squarespace oder KI-Builder sind ein bisschen so wie ein Saugdiesel im Vergleich zu einem Sportwagen: beide fahren, aber das Fahrgefühl – und was unter der Haube passiert – ist ein völlig anderes. Viele solcher Tools legen seitenweise unnötiges CSS über einfaches HTML, was dazu führt, dass Suchmaschinen und vor allem KI-Systeme wie ChatGPT oder Perplexity die Inhalte schlechter lesen und verstehen können. Das kostet Sichtbarkeit. Dazu kommt: kein Baukasten kann Ihre Persönlichkeit einfangen – nur Maßarbeit kann das.',
  },
  {
    q: 'Wie baut mypraxis.at die Websites?',
    a: 'Wir arbeiten mit Next.js – der gleichen Technologie, die große internationale Plattformen antreibt. Die Bilder werden mit Adobe Firefly AI generiert, das bedeutet: kommerzielle Lizenz, kein Urheberrechtsproblem, und ein einheitlicher visueller Stil, der zu Ihrer Praxis passt. Jede Website ist ein Einzelstück – kein Copy-Paste, keine Vorlage. Hosting und Domain sind inklusive. Auf Wunsch erhalten Sie den vollständigen Quellcode – die Website gehört Ihnen, nicht uns. Und anders als bei Baukästen: Wenn Sie jemals wechseln möchten, können Sie das – Sie sind nicht eingesperrt.',
  },
]

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
            open === i
              ? 'border-[#112080]/20 bg-white shadow-lg shadow-[#112080]/5'
              : 'border-gray-200 bg-white hover:border-[#112080]/25 hover:shadow-md hover:shadow-[#112080]/4'
          }`}
          style={{
            animation: `floatMicro ${5 + (i % 3) * 0.7}s ease-in-out ${i * 0.45}s infinite`,
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black transition-colors duration-200 ${open === i ? 'bg-[#112080] text-white' : 'bg-gray-100 text-gray-400'}`}>
                {i + 1}
              </span>
              <span className={`font-bold text-[13px] sm:text-[15px] leading-snug transition-colors duration-200 ${open === i ? 'text-[#112080]' : 'text-[#07090f]'}`}>
                {item.q}
              </span>
            </span>
            <span
              className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-[#112080]' : 'bg-gray-100'}`}
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <line x1="6.5" y1="1" x2="6.5" y2="12" stroke={open === i ? 'white' : '#9ca3af'} strokeWidth="2" strokeLinecap="round"/>
                <line x1="1" y1="6.5" x2="12" y2="6.5" stroke={open === i ? 'white' : '#9ca3af'} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </button>
          {/* Smooth expand via CSS grid trick */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: open === i ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.28s ease',
            }}
          >
            <div className="overflow-hidden">
              <p className="px-4 sm:px-6 pb-5 pt-1 text-gray-500 text-[13px] sm:text-[14px] leading-relaxed border-t border-gray-100">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LandingPageClient() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <header className="bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="text-xl font-bold text-[#112080]">
          <span className="text-[#ff8a00]">my</span>praxis.at
        </div>
        <a
          href="#funnel"
          className="bg-[#ff8a00] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          Jetzt bewerben
        </a>
      </header>

      {/* HERO */}
      <section className="relative text-white px-6 py-24 md:py-36 text-center overflow-hidden min-h-[600px] flex items-center">
        {/* Hero Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lp-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Overlay – Blau dominant, Bild scheint dezent durch */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/85 via-[#112080]/75 to-[#0a0f1e]/85" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 w-full">
          {/* Urgency Badge */}
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            {/* Pill mit Live-Dot */}
            <div className="flex items-center gap-2.5 bg-[#ff8a00]/20 border border-[#ff8a00]/40 text-[#ffb347] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Pilotprogramm 2026 – noch 7 Plätze verfügbar
            </div>
            {/* Slot-Visualisierung: 9 Kreise, 2 vergeben, 7 frei */}
            <div className="flex items-center gap-2">
              {Array.from({ length: 9 }, (_, i) => {
                const taken = i < 2
                return (
                  <div
                    key={i}
                    className={taken
                      ? 'w-3 h-3 rounded-full bg-white/15 border border-white/10'
                      : 'w-3 h-3 rounded-full bg-[#ff8a00]'}
                    style={!taken ? {
                      boxShadow: '0 0 7px rgba(255,138,0,0.7)',
                      animation: `pulse 2.2s cubic-bezier(0.4,0,0.6,1) ${i * 0.13}s infinite`,
                    } : undefined}
                  />
                )
              })}
              <span className="text-[10px] text-white/30 ml-1.5 uppercase tracking-wider">2 vergeben · 7 frei</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
            Was, wenn Ihre Wunschpatienten<br className="hidden md:block" /> Sie finden –
            <span className="text-[#ff8a00]"> während Sie schlafen?</span>
          </h1>

          <p className="text-base md:text-xl text-blue-100 mb-3 max-w-2xl mx-auto leading-relaxed">
            Ärzte, die von uns betreut werden, haben Patienten, die gut vorbereitet kommen –
            und werden von genau jenen gefunden, die zu ihnen passen.
            Nicht weil sie Glück hatten. Sondern weil ihre Website für sie arbeitet.
          </p>

          <p className="text-blue-300/80 text-sm mb-10 max-w-lg mx-auto">
            mypraxis.at baut Arzt-Websites, die von KI-Suchmaschinen gefunden,
            verstanden und weiterempfohlen werden.
          </p>

          <a
            href="#funnel"
            className="inline-block bg-[#ff8a00] hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all shadow-xl hover:shadow-orange-500/40 hover:scale-105"
          >
            Jetzt kostenlos bewerben →
          </a>
          <p className="text-blue-300/70 text-sm mt-4">Kein Auftrag. Kein Risiko. Kevin meldet sich persönlich.</p>
        </div>
      </section>

      {/* KI-PLATTFORMEN MARQUEE */}
      <section className="bg-[#07090f] py-8 overflow-hidden marquee-container">
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6 px-6">
          Auf diesen Plattformen soll Ihre Ordination künftig gefunden werden
        </p>
        <div className="flex w-max animate-marquee gap-5 pr-5">
          {([
            { src: '/logos/chatgpt.webp',     name: 'ChatGPT',       users: '800M Nutzer' },
            { src: '/logos/googlegemini.svg', name: 'Google Gemini', users: '650M Nutzer' },
            { src: '/logos/perplexity.webp',  name: 'Perplexity',    users: '50M+ Nutzer' },
            { src: '/logos/meta.svg',         name: 'Meta AI',        users: '3B+ Nutzer'  },
            { src: '/logos/apple.svg',        name: 'Apple Siri',    users: '1B+ Geräte'  },
            { src: '/logos/claude.webp',      name: 'Claude AI',     users: '30M+ Nutzer' },
            { src: '/logos/brave.svg',        name: 'Brave Search',  users: '50M/Tag'     },
            { src: '/logos/openai.svg',       name: 'OpenAI API',    users: 'Mrd. Anfragen'},
            // duplicate for seamless loop
            { src: '/logos/chatgpt.webp',     name: 'ChatGPT',       users: '800M Nutzer' },
            { src: '/logos/googlegemini.svg', name: 'Google Gemini', users: '650M Nutzer' },
            { src: '/logos/perplexity.webp',  name: 'Perplexity',    users: '50M+ Nutzer' },
            { src: '/logos/meta.svg',         name: 'Meta AI',        users: '3B+ Nutzer'  },
            { src: '/logos/apple.svg',        name: 'Apple Siri',    users: '1B+ Geräte'  },
            { src: '/logos/claude.webp',      name: 'Claude AI',     users: '30M+ Nutzer' },
            { src: '/logos/brave.svg',        name: 'Brave Search',  users: '50M/Tag'     },
            { src: '/logos/openai.svg',       name: 'OpenAI API',    users: 'Mrd. Anfragen'},
          ] as { src: string; name: string; users: string }[]).map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.07] shrink-0 hover:bg-white/[0.08] transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.name} className="h-9 w-9 object-contain flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white text-xs font-semibold whitespace-nowrap leading-tight">{item.name}</p>
                <p className="text-gray-500 text-[10px] whitespace-nowrap leading-tight mt-0.5">{item.users}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHATGPT MOCK */}
      <section className="relative px-6 py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #07090f 0%, #0a0e1c 100%)' }}>
        {/* Hintergrundbild */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lp-ki-showcase-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.10] mix-blend-luminosity" />
        {/* Subtiles Grid-Muster */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        {/* Glowing Orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(17,32,128,0.45) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            So sieht KI-Sichtbarkeit aus
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto text-sm">
            Klicken Sie auf die Tabs – und sehen Sie den Unterschied, den technisch saubere,
            KI-lesbare Websites machen können.
          </p>
          <ChatGptMock />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative px-6 py-16 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f3f6ff 0%, #eef2ff 50%, #f5f7fe 100%)' }}>
        {/* Subtiles Hintergrundbild */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lp-problem-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.22] mix-blend-luminosity" />
        {/* Dekorative Blur-Orb oben */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#112080] text-center mb-3">
            Drei Probleme. Täglich. In jeder Ordination.
          </h2>
          <p className="text-gray-400 text-center text-sm mb-12 max-w-lg mx-auto">
            Diese Probleme löst mypraxis.at – nicht mit Marketingversprechen, sondern technisch.
          </p>
          <div className="grid md:grid-cols-3 gap-5 md:gap-8 items-start pt-5">
            {[
              {
                img: '/lp-card-ki.jpg',
                headline: 'KI kennt Ihre Konkurrenz. Und nicht Sie.',
                text: 'ChatGPT, Siri und Google AI lesen Websites – aber nur solche, die technisch lesbar gebaut sind. Ohne strukturierte Daten sinkt die Chance erheblich, in KI-Antworten zu erscheinen.',
                color: 'bg-red-50 border-red-100',
                rotate: '-rotate-2',
                imgRotate: 'rotate-1',
              },
              {
                img: '/lp-card-zeit.jpg',
                headline: '20 Minuten Erklärarbeit. Pro Patient.',
                text: 'Patienten kommen unvorbereitet. Sie erklären Diagnosen und Therapieoptionen immer wieder. Eine strukturierte Website mit guten Patienteninformationen kann das täglich reduzieren.',
                color: 'bg-orange-50 border-orange-100',
                rotate: 'rotate-1',
                imgRotate: '-rotate-1',
              },
              {
                img: '/lp-card-sprache.jpg',
                headline: 'Ihre Patienten sprechen 10 Sprachen. Ihre Website eine.',
                text: 'Wien hat über 200 Nationalitäten. Viele Patienten – darunter Privatpatienten, die sich vorab in ihrer Muttersprache informieren – entscheiden sich bewusst für eine Ordination, die sie versteht. Wer Ihre Website nicht lesen kann, ruft woanders an.',
                color: 'bg-blue-50 border-blue-100',
                rotate: '-rotate-1',
                imgRotate: 'rotate-2',
              },
            ].map(p => (
              <div
                key={p.headline}
                className={`relative rounded-sm border shadow-lg hover:shadow-2xl hover:rotate-0 transition-all duration-300 ${p.color} ${p.rotate}`}
                style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))' }}
              >
                {/* Push-Pin */}
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  {/* Pin head – Glanz-Kreis */}
                  <div
                    className="w-6 h-6 rounded-full border border-red-900/25"
                    style={{
                      background: 'radial-gradient(circle at 35% 32%, #f05050 0%, #c02020 45%, #7a0f0f 100%)',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.35)',
                    }}
                  />
                  {/* Nadel */}
                  <div className="w-[3px] h-3 rounded-b-full" style={{ background: 'linear-gradient(to bottom, #bbb, #888)' }} />
                </div>

                <div className={`h-52 overflow-hidden ${p.imgRotate}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt="" className="w-full h-full object-cover scale-105" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#112080] mb-2 leading-snug">{p.headline}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#112080] text-center mb-3">
            Eine Website, die wirklich für Sie arbeitet
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-sm">
            Österreichs einzige Arzt-Website mit echter KI-Sichtbarkeit –
            technisch sauber, rechtssicher, mehrsprachig.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { img: '/lp-feat-ki.jpg', text: 'Optimiert für ChatGPT, Perplexity & Google AI – steigt die Chance deutlich, dass Patienten Sie finden' },
              { img: '/lp-feat-sprachen.jpg', text: 'Automatische Übersetzung in 10 Sprachen: Türkisch, Arabisch, Serbisch, Kroatisch und mehr' },
              { img: '/lp-feat-zeit.jpg', text: 'Vorinformierte Patienten: bis zu 270 Stunden weniger Erklärarbeit pro Jahr möglich' },
              { img: '/lp-feat-access.jpg', text: 'WCAG 2.1 AA Barrierefreiheit nach BaFG – Accessibility-Widget mit 16 Features inklusive' },
              { img: '/lp-feat-domain.jpg', text: 'Domain gehört Ihnen. Alle Zugangsdaten bei Ihnen. Kein Lock-in. Kein Pflicht-Abo.' },
              { img: '/lp-feat-support.jpg', text: '12 Monate technische Betreuung inklusive – ohne Aufpreis, ohne Knebelvertrag' },
            ].map((f, i) => (
              <div
                key={f.text}
                className="group flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#112080]/20 transition-all duration-300"
                style={{
                  animation: `fadeSlideUp 0.5s ease both`,
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="shrink-0"
                  style={{
                    animation: `floatSm ${3.2 + (i % 3) * 0.6}s ease-in-out infinite`,
                    animationDelay: `${i * 0.45}s`,
                  }}
                >
                  <div
                    className={`w-20 h-20 rounded-sm overflow-hidden shadow-lg border border-gray-200 group-hover:rotate-0 transition-transform duration-300 ${i % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.img}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mt-1">{f.text}</p>
              </div>
            ))}
          </div>

          {/* ANIMATED STATS – kompakt, gleiche Breite wie Features */}
          <div className="mt-10 rounded-xl bg-gradient-to-br from-[#112080] to-[#1e3ab8] shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x md:divide-y-0 md:divide-x divide-white/10">
              {[
                { target: 270, suffix: 'h',    label: 'Zeitersparnis / Jahr' },
                { target: 10,  suffix: '',     label: 'Sprachen übersetzt'   },
                { target: 9,   suffix: '',     label: 'Pilotplätze gesamt'   },
                { target: 12,  suffix: ' Mo.', label: 'Betreuung inklusive'  },
              ].map((s, i) => (
                <div key={i} className="py-5 px-4">
                  <AnimatedStat target={s.target} suffix={s.suffix} label={s.label} compact />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILOTPROGRAMM */}
      <section className="relative bg-[#0a0f1e] text-white px-6 py-16 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lp-pilot-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 via-transparent to-[#0a0f1e]/80" />
        <CelebrationSparkles />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#ff8a00]/20 border border-[#ff8a00]/40 text-[#ffb347] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Pilotprogramm 2026
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            NUR JETZT – Stark reduzierte Konditionen<br className="hidden md:block" /> für 9 ausgewählte Ordinationen
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto text-sm">
            Wir befinden uns im Aufbau unseres Referenzkundenprogramms. Für 9 ausgewählte
            Ordinationen bieten wir stark reduzierte Pilotkonditionen. Im Gegenzug:
            24 Monate Zusammenarbeit und Referenzfreigabe.
          </p>
          <PilotPricingCards />
          <ScarcityBar />
          <a
            href="#funnel"
            className="inline-block mt-8 bg-[#ff8a00] hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            Jetzt Platz sichern →
          </a>
        </div>
      </section>

      {/* ÜBER KEVIN */}
      <section className="bg-white px-6 pt-16 pb-32 relative z-30" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="shrink-0 flex flex-col items-center gap-3 md:pt-2">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-[#112080]/10">
                <Image
                  src="/kevin.webp"
                  alt="Kevin Hofbauer – Gründer mypraxis.at"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-[#112080] text-sm">Kevin Hofbauer</div>
                <div className="text-gray-400 text-xs">Gründer, mypraxis.at</div>
              </div>
            </div>
            <div className="flex-1">
              <blockquote className="text-gray-700 leading-relaxed mb-4 text-base italic border-l-4 border-[#ff8a00] pl-5">
                „Ich habe mypraxis.at gegründet, weil ich gesehen habe, wie viele gute Ärzte
                digital unsichtbar sind – nicht wegen mangelnder Qualität, sondern wegen technisch
                veralteter Websites. Das lässt sich ändern."
              </blockquote>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Ich arbeite ausschließlich mit Arztordinationen in Österreich. Kein allgemeines
                Webdesign-Studio, kein anonymer Ansprechpartner. Wenn Sie sich bewerben, melde ich
                mich persönlich – und ich sage Ihnen ehrlich, ob und wie ich helfen kann.
              </p>
              <p className="text-gray-400 text-xs">
                Kevin Hofbauer e.U. · Hauptplatz 12, 3902 Vitis · office@mypraxis.at · +43 664 19 15 447
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HONEYPOT – VERSPRECHEN */}
      <section className="text-white px-6 pb-28 relative z-20 -mt-20 overflow-hidden" style={{ paddingTop: '7rem', background: 'radial-gradient(ellipse at 80% 0%, rgba(255,138,0,0.12) 0%, transparent 55%), #07090f', clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lp-versprechen-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity" />
        <CelebrationSparkles />
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#ffb347] font-semibold border border-[#ff8a00]/30 px-5 py-2 rounded-full bg-[#ff8a00]/10">
              Unser Versprechen an Sie
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-5 leading-tight">
            Sie haben Medizin studiert.<br />
            <span className="text-[#ff8a00]">Nicht Marketing.</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Wir wissen, was Ärzte wirklich belastet – nicht aus Studien, sondern aus Gesprächen
            mit Ärztinnen und Ärzten, die abends erschöpft nach Hause fahren. Nicht weil die Ordination leer wäre.
            Sondern weil zu viel Zeit für Erklärarbeit und Formulare verloren geht –
            und weil die richtigen Patienten sie im Netz noch nicht finden.
          </p>

          {/* Pain Cards – scroll-reveal + float */}
          <PainCards />

          {/* Mission Statement – Zitat Kevin */}
          <div className="border-t border-white/5 pt-14 mb-16">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Foto */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#ff8a00]/40 shadow-lg shadow-orange-500/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/kevin-quote.jpg"
                    alt="Kevin Hofbauer"
                    className="w-full h-full object-cover object-top"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center">
                  <div className="text-white text-xs font-semibold">Kevin Hofbauer</div>
                  <div className="text-gray-500 text-[11px]">Gründer, mypraxis.at</div>
                </div>
              </div>

              {/* Zitat */}
              <div className="flex-1">
                <div className="text-[#ff8a00]/60 text-5xl font-serif leading-none mb-2 select-none">"</div>
                <blockquote className="text-white/90 text-base md:text-lg leading-relaxed font-light mb-4">
                  Wir bauen keine Websites.{' '}
                  <span className="text-white font-semibold">
                    Wir bauen das digitale Fundament dafür, dass Österreichs Ärzte
                    entlasteter, wirksamer und nachhaltiger arbeiten können.
                  </span>
                </blockquote>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Denn ein ausgebrannter Arzt ist kein persönliches Problem.
                  Es ist ein Problem für jede einzelne Person, die auf ihn angewiesen ist.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Block */}
          <div className="relative">

            {/* Trust Shield – fliegt einmal rein, bleibt immer sichtbar */}
            <div
              className="absolute -top-7 -right-7 z-20 pointer-events-none"
              style={{ animation: 'trustBadgeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both' }}
            >
              {/* Puls-Ebene */}
              <div style={{ animation: 'trustBeamPulse 3s ease-in-out 1.5s infinite', transform: 'rotate(8deg)' }}>
                {/* Schild-Form: fill-div + SVG-Doppelrahmen nebeneinander */}
                <div className="relative w-[86px] h-[96px]">
                  {/* Schild-Füllung (geclippt) */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] shadow-2xl shadow-green-500/50"
                    style={{
                      background: 'linear-gradient(160deg, #4ade80 0%, #10b981 45%, #059669 100%)',
                      clipPath: 'path("M43 4 L78 16 L78 52 Q78 76 43 92 Q8 76 8 52 L8 16 Z")',
                    }}
                  >
                    {/* Glanzfleck oben */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-5 rounded-full bg-white/15 blur-sm" />
                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] mt-1 relative z-10" fill="none">
                      <polyline points="4.5 12.5 10 18 19.5 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white font-black text-[15px] leading-none tracking-tight relative z-10">100%</span>
                    <span className="text-white/80 font-bold text-[7px] uppercase tracking-[0.16em] leading-none relative z-10 mb-3">TRUST</span>
                  </div>

                  {/* Doppelrahmen via SVG – sitzt außerhalb des clip-path, bleibt voll sichtbar */}
                  <svg
                    className="absolute inset-0 pointer-events-none"
                    width="86" height="96"
                    viewBox="0 0 86 96"
                    fill="none"
                    style={{ overflow: 'visible' }}
                  >
                    {/* Äußerer Rahmen – entlang der Schildkontur */}
                    <path
                      d="M43 4 L78 16 L78 52 Q78 76 43 92 Q8 76 8 52 L8 16 Z"
                      stroke="rgba(255,255,255,0.72)"
                      strokeWidth="2"
                    />
                    {/* Innerer Rahmen – ~6 px eingerückt */}
                    <path
                      d="M43 10 L73 20 L73 52 Q73 72 43 87 Q13 72 13 52 L13 20 Z"
                      stroke="rgba(255,255,255,0.32)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

          {/* SVG-Beam — außerhalb overflow-hidden, kein Eckensprung */}
          <GuaranteeBeam />

          {/* Karte */}
          <div className="rounded-2xl border border-[#ff8a00]/40 bg-gradient-to-br from-[#ff8a00]/10 via-[#ff8a00]/5 to-transparent text-center overflow-hidden">

            {/* Badge – inside */}
            <div className="flex justify-center pt-8 pb-6 px-8">
              <div className="bg-[#ff8a00] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/30">
                100 % Zufriedenheitsgarantie
              </div>
            </div>

            <div className="px-4 sm:px-8 md:px-12 pb-10">
              {/* Glow */}
              <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,138,0,0.1),transparent_70%)] pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                Wenn Sie nicht vollständig überzeugt sind –<br className="hidden md:block" /> überarbeiten wir alles. Kostenlos.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                Keine Diskussion, kein Kleingedrucktes. Das ist kein Marketingversprechen –
                das steht im Vertrag. Wir sind erst zufrieden, wenn Sie es sind.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                {[
                  'Kein Knebelvertrag',
                  'Domain gehört Ihnen',
                  'Kein Lock-in',
                  '12 Monate Betreuung',
                  'Persönlicher Ansprechpartner',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 text-gray-300">
                    <span className="text-green-400 font-bold shrink-0">✓</span>
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>{/* end relative wrapper */}

        </div>
      </section>

      {/* FUNNEL */}
      <section id="funnel" className="relative bg-gray-50 pb-16 overflow-hidden z-10 -mt-20" style={{ paddingTop: '7rem' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lp-funnel-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" style={{ animation: 'kenBurns 14s ease-in-out infinite alternate' }} />

        <div className="relative z-10 flex items-center justify-center gap-3 max-w-6xl mx-auto px-6">

          {/* ── Spalte 1: Leitsatz ── */}
          <div className="hidden xl:flex shrink-0 w-[148px] flex-col">
            <p className="text-[#112080] font-black text-[18px] italic leading-tight mb-3">
              „Zu schön<br />um wahr<br />zu sein?"
            </p>
            <div className="w-8 h-[2px] bg-[#ff8a00] mb-3 rounded-full" />
            <p className="text-gray-500 text-[10.5px] leading-relaxed">
              Ja – das wissen<br />
              wir selbst.<br /><br />
              Wir verkaufen uns<br />
              nicht unter Wert.<br />
              Wir investieren<br />
              in echten Wert<br />
              und Vertrauen.<br /><br />
              <span className="text-[#112080] font-bold">Wir wollen<br />wachsen – durch<br />Ihre Erfolge.</span>
            </p>
          </div>

          {/* ── Spalte 2: Ihre Chance nutzen ── */}
          <div className="hidden xl:flex shrink-0 w-20 flex-col items-center gap-1">
            <p className="text-[#ff8a00] font-black text-[10px] uppercase tracking-[0.12em] text-center leading-snug mb-3">
              Ihre Chance<br />nutzen!
            </p>
            {[0, 1, 2].map(i => (
              <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                className="w-12 h-12 text-[#ff8a00]"
                style={{ animation: `arrowChase 1.5s ease-in-out ${i * 0.28}s infinite` }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ))}
            <p className="text-gray-400 text-[9px] text-center mt-3 leading-snug">
              Noch 7 Plätze<br />verfügbar
            </p>
          </div>

          {/* ── Spalte 3: Formular ── */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#112080] text-center mb-3">
              Jetzt kostenlos bewerben
            </h2>
            <p className="text-gray-500 text-center mb-10 text-sm max-w-sm mx-auto">
              Drei kurze Fragen – dann wählen Sie, ob Jenny Sie sofort anruft oder
              Sie einen Termin mit Kevin vereinbaren.
            </p>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <QualifyingFunnel />
            </div>
          </div>

          {/* ── Spalte 4: JETZT profitieren ── */}
          <div className="hidden xl:flex shrink-0 w-20 flex-col items-center gap-1">
            <p className="text-[#ff8a00] font-black text-[10px] uppercase tracking-[0.12em] text-center leading-snug mb-3">
              JETZT<br />profitieren!
            </p>
            {[2, 1, 0].map(i => (
              <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                className="w-12 h-12 text-[#ff8a00]"
                style={{ animation: `arrowChaseLeft 1.5s ease-in-out ${i * 0.28}s infinite` }}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            ))}
            <p className="text-gray-400 text-[9px] text-center mt-3 leading-snug">
              Pilotpreis<br />nur € 3.950
            </p>
          </div>

          {/* ── Spalte 5: Jede Seite enthält ── */}
          <div className="hidden xl:flex shrink-0 w-[148px] flex-col">
            <div className="rounded-2xl bg-gradient-to-b from-[#0c1650] to-[#112080] border border-[#1e3ab8]/50 shadow-2xl shadow-[#112080]/30 p-4">
              <p className="text-[#ff8a00] text-[9px] font-bold uppercase tracking-[0.16em] mb-3">
                Jede Seite enthält:
              </p>
              {[
                { label: '100 % Code', sub: 'Next.js · kein Baukasten' },
                { label: '100 % individuell', sub: 'kein Template' },
                { label: 'KI-sichtbar', sub: 'ChatGPT & Google AI' },
                { label: 'Mehrsprachig', sub: '12+ Sprachen' },
                { label: 'Blitzschnell', sub: 'Core Web Vitals >90' },
                { label: 'Barrierefrei', sub: 'von Haus aus · WCAG', hi: true },
                { label: 'Domain gehört Ihnen', sub: 'kein Lock-in' },
              ].map(f => (
                <div key={f.label} className={`flex items-start gap-1.5 py-[7px] border-b last:border-0 ${f.hi ? 'border-[#ff8a00]/25' : 'border-white/5'}`}>
                  <span className={`font-bold text-[10px] mt-0.5 shrink-0 leading-none ${f.hi ? 'text-[#ff8a00]' : 'text-emerald-400'}`}>✓</span>
                  <div>
                    <span className={`text-[10.5px] font-semibold leading-tight block ${f.hi ? 'text-[#ff8a00]' : 'text-white/90'}`}>{f.label}</span>
                    <span className="text-white/35 text-[9px] leading-tight">{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8faff] px-6 py-20 relative overflow-hidden">

        {/* Dekoratives SVG-Hintergrundbild – Selbstsicherheit + Fragen */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* ── Große Fragezeichen-Kulisse ── */}
            <text x="980" y="520" fontFamily="Georgia, serif" fontSize="480" fontWeight="900" fill="#112080" fillOpacity="0.032" textAnchor="middle">?</text>
            <text x="130" y="160" fontFamily="Georgia, serif" fontSize="90"  fill="#112080" fillOpacity="0.05"  textAnchor="middle">?</text>
            <text x="260" y="510" fontFamily="Georgia, serif" fontSize="60"  fill="#ff8a00" fillOpacity="0.06"  textAnchor="middle">?</text>
            <text x="1120" y="110" fontFamily="Georgia, serif" fontSize="70" fill="#112080" fillOpacity="0.04"  textAnchor="middle">?</text>
            <text x="55"   y="430" fontFamily="Georgia, serif" fontSize="44" fill="#112080" fillOpacity="0.04"  textAnchor="middle">?</text>
            <text x="1160" y="460" fontFamily="Georgia, serif" fontSize="50" fill="#ff8a00" fillOpacity="0.05"  textAnchor="middle">?</text>
            <text x="680"  y="95"  fontFamily="Georgia, serif" fontSize="38" fill="#112080" fillOpacity="0.04"  textAnchor="middle">?</text>

            {/* ── Selbstbewusste Figur (Power-Pose, Hände in die Hüften) ── */}
            {/* Kopf */}
            <circle cx="200" cy="175" r="42" fill="#112080" fillOpacity="0.055"/>
            {/* Hals */}
            <rect x="191" y="215" width="18" height="22" rx="6" fill="#112080" fillOpacity="0.05"/>
            {/* Torso – breite Schultern, schmale Taille */}
            <path d="M148 237 Q148 228 160 226 L200 224 L240 226 Q252 228 252 237 L248 330 Q248 340 240 342 L160 342 Q152 340 152 330 Z" fill="#112080" fillOpacity="0.05"/>
            {/* Linker Arm – Ellbogen raus, Hand an Hüfte */}
            <path d="M152 248 Q118 252 105 272 Q98 288 115 298 Q130 308 152 302" stroke="#112080" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.045"/>
            {/* Rechter Arm – Ellbogen raus, Hand an Hüfte */}
            <path d="M248 248 Q282 252 295 272 Q302 288 285 298 Q270 308 248 302" stroke="#112080" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.045"/>
            {/* Linkes Bein – leicht gespreizt, Standfestigkeit */}
            <path d="M172 342 Q168 390 163 450" stroke="#112080" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.05"/>
            {/* Rechtes Bein */}
            <path d="M228 342 Q232 390 237 450" stroke="#112080" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.05"/>

            {/* ── Ausstrahlungs-Ringe um die Figur ── */}
            <circle cx="200" cy="320" r="115" stroke="#112080" strokeWidth="1.5" strokeOpacity="0.045" strokeDasharray="6 5" fill="none"/>
            <circle cx="200" cy="320" r="165" stroke="#112080" strokeWidth="1"   strokeOpacity="0.028" strokeDasharray="4 7" fill="none"/>
            <circle cx="200" cy="320" r="215" stroke="#ff8a00" strokeWidth="1"   strokeOpacity="0.022" strokeDasharray="3 9" fill="none"/>

            {/* ── Sparkle-Punkte ── */}
            <circle cx="390" cy="120" r="5"  fill="#ff8a00" fillOpacity="0.20"/>
            <circle cx="350" cy="210" r="3"  fill="#112080" fillOpacity="0.16"/>
            <circle cx="425" cy="290" r="4"  fill="#ff8a00" fillOpacity="0.14"/>
            <circle cx="68"  cy="290" r="4"  fill="#112080" fillOpacity="0.10"/>
            <circle cx="140" cy="510" r="3"  fill="#ff8a00" fillOpacity="0.14"/>
            <circle cx="1040" cy="195" r="5" fill="#112080" fillOpacity="0.09"/>
            <circle cx="1095" cy="375" r="3" fill="#ff8a00" fillOpacity="0.11"/>
            <circle cx="610" cy="480" r="4"  fill="#112080" fillOpacity="0.07"/>

            {/* ── Haken / Checkmark-Akzent rechts (Antworten geben) ── */}
            <path d="M840 195 L870 235 L935 155" stroke="#112080" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity="0.055"/>
            <circle cx="887" cy="198" r="52" stroke="#112080" strokeWidth="2" strokeOpacity="0.045" fill="none"/>
          </svg>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#112080]/8 text-[#112080] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Häufige Fragen
            </span>
            <h2 className="text-3xl font-black text-[#07090f]">Ihre Fragen. Ehrliche Antworten.</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        <p className="mb-2">
          <span className="font-bold text-[#112080]"><span className="text-[#ff8a00]">my</span>praxis.at</span>
          {' '}· Kevin Hofbauer e.U. · Hauptplatz 12, 3902 Vitis
        </p>
        <div className="flex justify-center gap-4">
          <a href="/impressum" className="hover:text-gray-600">Impressum</a>
          <a href="/datenschutz" className="hover:text-gray-600">Datenschutz</a>
        </div>
      </footer>

    </main>
  )
}
