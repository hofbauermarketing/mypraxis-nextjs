'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    fachrichtung: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', fachrichtung: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 text-white placeholder-blue-300/70 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff8a00] focus:ring-1 focus:ring-[#ff8a00]/50 transition-all'
  const labelClass = 'block text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1.5'

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-500/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Anfrage gesendet!</h3>
        <p className="text-blue-200 text-sm leading-relaxed">
          Vielen Dank! Wir melden uns in der Regel <strong className="text-white">innerhalb eines Werktags</strong> bei Ihnen.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-blue-300 hover:text-white text-sm underline underline-offset-2 transition-colors"
        >
          Weitere Anfrage senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set('name')}
            placeholder="Dr. Max Mustermann"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>E-Mail *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set('email')}
            placeholder="ordination@example.at"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Telefon</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="+43 ..."
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
            <option value="" className="bg-[#1e3ab8] text-white">
              Bitte wählen...
            </option>
            {FACHRICHTUNGEN.map((f) => (
              <option key={f} value={f} className="bg-[#1e3ab8] text-white">
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Nachricht / Fragen (optional)</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={set('message')}
          placeholder="Was möchten Sie wissen? Haben Sie bereits eine Website? Gibt es ein konkretes Projekt?"
          className={inputClass + ' resize-none'}
        />
      </div>

      {status === 'error' && (
        <div className="text-red-300 text-sm bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-3">
          Etwas ist schiefgegangen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an{' '}
          <a href="mailto:office@mypraxis.at" className="underline hover:text-white transition-colors">
            office@mypraxis.at
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#ff8a00] hover:bg-[#e67a00] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg animate-glow-orange"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Wird gesendet...
          </span>
        ) : (
          'Erstberatung anfragen →'
        )}
      </button>

      <p className="text-blue-400 text-xs text-center">
        Kostenlos &amp; unverbindlich · Antwort innerhalb eines Werktags · DSGVO-konform
      </p>
    </form>
  )
}
