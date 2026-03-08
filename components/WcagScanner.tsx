'use client'

import { useState } from 'react'

type ScanResult = {
  status: { success: boolean; httpstatuscode: number }
  statistics: {
    pageurl: string
    pagetitle: string
    time: number
    creditsremaining: number
    allitemcount: number
    totalelements: number
    waveurl: string
  }
  categories: {
    error: { description: string; count: number }
    contrast: { description: string; count: number }
    alert: { description: string; count: number }
    feature: { description: string; count: number }
    structure: { description: string; count: number }
    aria: { description: string; count: number }
  }
}

function getScore(result: ScanResult): number {
  const errors = result.categories.error.count
  const contrast = result.categories.contrast.count
  const alerts = result.categories.alert.count
  const deduction = errors * 8 + contrast * 5 + alerts * 2
  return Math.max(0, 100 - deduction)
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'
  const label = score >= 80 ? 'Gut' : score >= 50 ? 'Verbesserungsbedarf' : 'Kritisch'
  const r = 54
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={r} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          style={{ transition: 'stroke-dasharray 1s ease' }}
        />
        <text x="70" y="65" textAnchor="middle" fill="white" fontSize="28" fontWeight="800">{score}</text>
        <text x="70" y="84" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">/100</text>
      </svg>
      <span className="text-sm font-bold" style={{ color }}>{label}</span>
    </div>
  )
}

function CategoryBadge({ count, label, color, icon }: { count: number; label: string; color: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-white/5 rounded-xl px-4 py-3 flex-1 min-w-[80px]">
      <span className="text-xl">{icon}</span>
      <span className="text-2xl font-extrabold" style={{ color }}>{count}</span>
      <span className="text-xs text-white/60 text-center leading-tight">{label}</span>
    </div>
  )
}

// Reusable scanner form + results – used standalone (/wcag-check) and embedded (/gratis-check)
export default function WcagScanner({ embedded = false }: { embedded?: boolean }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScanResult | null>(null)
  const [error, setError] = useState('')
  const [showContact, setShowContact] = useState(false)

  const handleScan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setResult(null)
    setError('')
    setShowContact(false)

    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setError(data.error ?? 'Scan fehlgeschlagen.')
      } else {
        setResult(data)
        if (getScore(data) < 90) setShowContact(true)
      }
    } catch {
      setError('Netzwerkfehler. Bitte erneut versuchen.')
    } finally {
      setLoading(false)
    }
  }

  const score = result ? getScore(result) : null

  return (
    <div className={embedded ? '' : 'px-6 pb-20 pt-8 max-w-3xl mx-auto'}>

      {/* Header – only on standalone /wcag-check page */}
      {!embedded && (
        <div className="text-center mb-10">
          <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            Kostenloser Check
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ist Ihre Praxis-Website<br />
            <span className="text-[#ff8a00]">wirklich barrierefrei?</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Seit 28. Juni 2025 gilt das Barrierefreiheitsgesetz (BaFG) auch für private Websites.
            Prüfen Sie jetzt in Sekunden, ob Ihre Ordination betroffen ist.
          </p>
        </div>
      )}

      {/* Scanner Form */}
      <form onSubmit={handleScan} className="mb-8">
        <div className="glass-card rounded-2xl p-6">
          <label htmlFor="scan-url" className="block text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
            Website-URL Ihrer Ordination
          </label>
          <div className="flex gap-3 flex-col sm:flex-row">
            <input
              id="scan-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="z.B. www.drmeier-wien.at"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-300/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff8a00] focus:ring-1 focus:ring-[#ff8a00]/50 transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="bg-[#ff8a00] hover:bg-[#e67a00] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-[1.02] whitespace-nowrap animate-glow-orange"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Wird geprüft...
                </span>
              ) : 'Jetzt prüfen →'}
            </button>
          </div>
          <p className="text-blue-300/60 text-xs mt-3">
            Kostenlos · Kein Download · Kein Konto nötig · DSGVO-konform
          </p>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-400/30 rounded-xl px-5 py-4 text-red-300 text-sm mb-6">
          {error}
        </div>
      )}

      {/* Results */}
      {result && score !== null && (
        <div className="space-y-5 animate-fade-in">
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <ScoreRing score={score} />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Analysierte Seite</p>
              <p className="text-white font-bold text-base break-all leading-snug mb-1">
                {result.statistics.pagetitle || result.statistics.pageurl}
              </p>
              <p className="text-blue-300 text-xs">{result.statistics.pageurl}</p>
              <p className="text-blue-400 text-xs mt-2">
                {result.statistics.totalelements} Elemente geprüft · {result.statistics.time.toFixed(1)}s Ladezeit
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">Ergebnisse im Detail</p>
            <div className="flex gap-3 flex-wrap">
              <CategoryBadge count={result.categories.error.count} label="Fehler" color="#ef4444" icon="🔴" />
              <CategoryBadge count={result.categories.contrast.count} label="Kontrast" color="#f97316" icon="🟠" />
              <CategoryBadge count={result.categories.alert.count} label="Warnungen" color="#f59e0b" icon="🟡" />
              <CategoryBadge count={result.categories.feature.count} label="Positiv" color="#22c55e" icon="🟢" />
              <CategoryBadge count={result.categories.structure.count} label="Struktur" color="#60a5fa" icon="🔵" />
              <CategoryBadge count={result.categories.aria.count} label="ARIA" color="#a78bfa" icon="🟣" />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">Was bedeutet das?</p>
            <ul className="space-y-2 text-sm text-blue-100 leading-relaxed">
              {result.categories.error.count > 0 && (
                <li className="flex gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  <span><strong className="text-white">{result.categories.error.count} kritische Fehler</strong> – z.B. fehlende Alt-Texte bei Bildern, leere Buttons oder nicht beschriftete Formulare. Diese verstoßen direkt gegen WCAG 2.1.</span>
                </li>
              )}
              {result.categories.contrast.count > 0 && (
                <li className="flex gap-2">
                  <span className="text-orange-400 mt-0.5 shrink-0">✗</span>
                  <span><strong className="text-white">{result.categories.contrast.count} Kontrast-Probleme</strong> – Text ist für sehbeeinträchtigte Personen schwer lesbar. Verletzt WCAG 1.4.3.</span>
                </li>
              )}
              {result.categories.alert.count > 0 && (
                <li className="flex gap-2">
                  <span className="text-yellow-400 mt-0.5 shrink-0">⚠</span>
                  <span><strong className="text-white">{result.categories.alert.count} Warnungen</strong> – Potenzielle Probleme die manuell geprüft werden sollten.</span>
                </li>
              )}
              {result.categories.error.count === 0 && result.categories.contrast.count === 0 && (
                <li className="flex gap-2">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <span><strong className="text-white">Keine kritischen Fehler</strong> – Ihre Website besteht die automatische Prüfung. Einige WCAG-Kriterien können nur manuell geprüft werden.</span>
                </li>
              )}
            </ul>
          </div>

          {showContact && (
            <div className="bg-[#ff8a00]/10 border border-[#ff8a00]/30 rounded-2xl p-6 text-center">
              <p className="text-[#ff8a00] font-bold text-lg mb-2">Wir beheben das für Sie.</p>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Als Spezialist für Arzt-Websites kennen wir jeden dieser Fehler – und wie man sie rechtssicher behebt.
                Vereinbaren Sie jetzt eine kostenlose Erstberatung.
              </p>
              <a
                href="/#kontakt"
                className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all hover:scale-[1.02]"
              >
                Gratis Beratung anfragen →
              </a>
              <p className="text-blue-400 text-xs mt-3">Kostenlos & unverbindlich · Antwort innerhalb eines Werktags</p>
            </div>
          )}

          <p className="text-center text-blue-400 text-xs">
            Detaillierter WAVE-Bericht:{' '}
            <a href={result.statistics.waveurl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
              wave.webaim.org ansehen
            </a>
          </p>
        </div>
      )}

      {/* Info boxes – only show when no result yet */}
      {!embedded && !result && !loading && (
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {[
            { icon: '⚖️', title: 'Gesetzlich relevant', text: 'Seit 28.06.2025 gilt das BaFG. Verstöße können Beschwerden und Behördenverfahren auslösen.' },
            { icon: '♿', title: 'WCAG 2.1 Standard', text: 'Wir prüfen nach dem internationalen Web Content Accessibility Guidelines Standard.' },
            { icon: '🔒', title: 'DSGVO-konform', text: 'Wir speichern keine eingegebenen URLs. Der Scan läuft vollständig anonym.' },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white text-sm font-bold mb-1">{item.title}</p>
              <p className="text-blue-200 text-xs leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
