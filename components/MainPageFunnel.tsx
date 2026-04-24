'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const FACHRICHTUNGEN = [
  'Allgemeinmedizin',
  'Innere Medizin',
  'Orthopädie & Unfallchirurgie',
  'Kardiologie',
  'Dermatologie',
  'Gynäkologie',
  'HNO',
  'Urologie',
  'Neurologie',
  'Chirurgie',
  'Augenheilkunde',
  'Kinderheilkunde & Pädiatrie',
  'Zahnmedizin',
  'Psychiatrie & Psychotherapie',
  'Radiologie',
  'Ärztezentrum / PVE / Gruppenpraxis',
  'Andere',
]

type Step = 1 | 2

export default function MainPageFunnel() {
  const router = useRouter()
  const [step, setStep] = useState<Step>(1)
  const [q1, setQ1] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', fachrichtung: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [formError, setFormError] = useState('')

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setFormError('Bitte Name und Telefonnummer ausfüllen.')
      return
    }
    setFormError('')
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          fachrichtung: form.fachrichtung,
          message: `Erstgespräch-Anfrage. Online-Sichtbarkeit aktuell: ${q1 === 'sichtbar' ? 'Ja, steht weit oben' : 'Nein / weiß ich nicht'}`,
        }),
      })
      if (res.ok) {
        router.push('/danke')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1e3ab8] focus:ring-2 focus:ring-[#1e3ab8]/15 transition-all'
  const labelClass = 'block text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1.5'

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step >= s ? 'bg-[#1e3ab8] text-white' : 'bg-gray-100 text-gray-400'
            }`}>{s}</div>
            {s < 2 && <div className={`h-px w-8 transition-all ${step > s ? 'bg-[#1e3ab8]' : 'bg-gray-200'}`} />}
          </div>
        ))}
        <span className="text-gray-500 text-xs ml-2">
          {step === 1 ? 'Kurze Frage' : 'Ihre Kontaktdaten'}
        </span>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <p className="text-gray-900 font-semibold text-base mb-1">
            Finden Patient:innen Ihre Ordination — oder gehen sie zu Kolleg:innen?
          </p>
          <p className="text-gray-500 text-xs mb-5">
            Googeln Sie selbst einmal: „[Ihr Fach] [Ihre Stadt]" — stehen Sie unter den ersten drei Ergebnissen?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { value: 'sichtbar', label: 'Ja, stehe weit oben', icon: '✓' },
              { value: 'nicht_sichtbar', label: 'Nein / weiß ich nicht', icon: '?' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { setQ1(opt.value); setStep(2) }}
                className={`flex items-center gap-3 w-full text-left px-4 py-4 rounded-xl border text-sm font-semibold transition-all hover:scale-[1.02] ${
                  opt.value === 'nicht_sichtbar'
                    ? 'bg-[#ff8a00]/8 border-[#ff8a00]/50 text-gray-900 hover:bg-[#ff8a00]/15'
                    : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                  opt.value === 'nicht_sichtbar' ? 'bg-[#ff8a00]/15 text-[#ff8a00]' : 'bg-gray-200 text-gray-600'
                }`}>{opt.icon}</span>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={set('name')}
                placeholder="Dr. Max Mustermann"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Telefon *</label>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="+43 ..."
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                E-Mail <span className="text-blue-400/60 normal-case font-normal">(für Auswertung)</span>
              </label>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                placeholder="ordination@example.at"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Fachrichtung</label>
              <select
                value={form.fachrichtung}
                onChange={set('fachrichtung')}
                className={inputClass + ' cursor-pointer'}
              >
                <option value="">Bitte wählen...</option>
                {FACHRICHTUNGEN.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          {formError && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {formError}
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              Etwas ist schiefgegangen. Bitte schreiben Sie direkt an{' '}
              <a href="mailto:office@mypraxis.at" className="underline hover:text-red-800">office@mypraxis.at</a>.
            </p>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full bg-[#ff8a00] hover:bg-[#e67a00] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg animate-glow-orange"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Wird gesendet...
              </span>
            ) : (
              'Erstgespräch mit Kevin anfragen →'
            )}
          </button>
          <p className="text-gray-400 text-xs text-center">
            30 Min · kostenlos · persönlich · DSGVO-konform
          </p>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-gray-400 hover:text-gray-700 text-xs transition-colors"
          >
            ← Zurück
          </button>
        </div>
      )}
    </div>
  )
}
