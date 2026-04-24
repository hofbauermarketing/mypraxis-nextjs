'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

type FontSize = 0 | 1 | 2

interface Settings {
  fontSize: FontSize
  lineHeight: boolean
  letterSpacing: boolean
  dyslexiaFont: boolean
  highContrast: boolean
  darkMode: boolean
  grayscale: boolean
  invertColors: boolean
  noMotion: boolean
  hideImages: boolean
  underlineLinks: boolean
  highlightLinks: boolean
  largeCursor: boolean
  focusHighlight: boolean
  highlightTitles: boolean
  readingMask: boolean
}

const defaults: Settings = {
  fontSize: 0,
  lineHeight: false,
  letterSpacing: false,
  dyslexiaFont: false,
  highContrast: false,
  darkMode: false,
  grayscale: false,
  invertColors: false,
  noMotion: false,
  hideImages: false,
  underlineLinks: false,
  highlightLinks: false,
  largeCursor: false,
  focusHighlight: false,
  highlightTitles: false,
  readingMask: false,
}

const CLASS_MAP: Partial<Record<keyof Settings, string>> = {
  lineHeight:      'a11y-line-height',
  letterSpacing:   'a11y-letter-spacing',
  dyslexiaFont:    'a11y-dyslexia',
  highContrast:    'a11y-high-contrast',
  darkMode:        'a11y-dark-mode',
  grayscale:       'a11y-grayscale',
  invertColors:    'a11y-invert',
  noMotion:        'a11y-no-motion',
  hideImages:      'a11y-hide-images',
  underlineLinks:  'a11y-underline-links',
  highlightLinks:  'a11y-highlight-links',
  largeCursor:     'a11y-large-cursor',
  focusHighlight:  'a11y-focus-highlight',
  highlightTitles: 'a11y-highlight-titles',
}


function ReadingMask() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const move = (e: MouseEvent) => setY(e.clientY)
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[99990]" style={{ background: 'rgba(0,0,0,0.6)', clipPath: `polygon(0 0,100% 0,100% ${y - 30}px,0 ${y - 30}px)` }} />
      <div className="fixed inset-0 pointer-events-none z-[99990]" style={{ background: 'rgba(0,0,0,0.6)', clipPath: `polygon(0 ${y + 30}px,100% ${y + 30}px,100% 100%,0 100%)` }} />
    </>
  )
}

export default function AccessibilityWidget({
  accentColor = '#2563eb',
  declarationHref = '/barrierefreiheit',
}: {
  accentColor?: string
  declarationHref?: string
}) {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(defaults)
  const [mounted, setMounted] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('a11y-settings')
      if (saved) setSettings(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    html.classList.remove('a11y-fs-1', 'a11y-fs-2')
    if (settings.fontSize === 1) html.classList.add('a11y-fs-1')
    if (settings.fontSize === 2) html.classList.add('a11y-fs-2')
    Object.entries(CLASS_MAP).forEach(([key, cls]) => {
      html.classList.toggle(cls!, !!settings[key as keyof Settings])
    })
    try { localStorage.setItem('a11y-settings', JSON.stringify(settings)) } catch {}
  }, [settings, mounted])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // ── Text-to-Speech (ElevenLabs audio) ────────────────────────────
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleSpeak = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/beschreibung.mp3')
      audioRef.current.onended = () => setSpeaking(false)
      audioRef.current.onerror = () => setSpeaking(false)
    }
    if (speaking) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setSpeaking(false)
      return
    }
    audioRef.current.play()
    setSpeaking(true)
  }, [speaking])

  const toggle = (key: keyof Settings) => setSettings((p) => ({ ...p, [key]: !p[key] }))
  const reset = () => {
    setSettings(defaults)
    if (speaking) { window.speechSynthesis?.cancel(); setSpeaking(false) }
  }

  const activeCount = Object.entries(settings).filter(([k, v]) =>
    k === 'fontSize' ? v !== 0 : v === true
  ).length

  if (!mounted) return null

  return (
    <>
      {settings.readingMask && <ReadingMask />}

      {/* Mobile: top-center tab; sm+: left-side tab */}
      <div ref={panelRef} className="fixed z-[9999] top-0 left-1/2 -translate-x-1/2 sm:left-0 sm:top-1/2 sm:translate-x-0 sm:-translate-y-1/2 flex flex-col items-center sm:items-start gap-1">

        {/* Puls-Ring – only on sm+ (left-side shape) */}
        {!open && (
          <span
            className="absolute -left-1 top-0 w-[calc(100%+4px)] h-[52px] pointer-events-none animate-a11y-pulse hidden sm:block"
            style={{
              backgroundColor: accentColor,
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
            }}
          />
        )}

        {/* Trigger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Barrierefreiheit Einstellungen öffnen"
          aria-expanded={open}
          aria-haspopup="dialog"
          className="relative flex items-center gap-2 px-3 py-1.5 sm:pl-2 sm:pr-3 sm:py-0 sm:h-[52px] shadow-xl transition-all duration-200 focus:outline-none animate-a11y-mobile-pulse sm:animate-none"
          style={{
            backgroundColor: accentColor,
            clipPath:
              'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
          }}
        >
          {/* Mobile layout: icon + hint row */}
          <span className="sm:hidden flex flex-col items-center gap-0.5">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
              <circle cx="12" cy="4" r="2.2" />
              <path d="M18 8.5c-1.5-.3-3.8-.5-6-.5s-4.5.2-6 .5l.4 1.5 5.6-.3v3.5L9.5 19h2.3l.7-3.5.7 3.5h2.3l-2.5-5.3V10.2l5.6.3z" />
            </svg>
            <span className="text-white text-[8px] font-bold tracking-wide leading-none whitespace-nowrap opacity-90">♿ Aa 🌐</span>
          </span>
          {/* Desktop layout: icon + text */}
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 flex-shrink-0 hidden sm:block" aria-hidden="true">
            <circle cx="12" cy="4" r="2.2" />
            <path d="M18 8.5c-1.5-.3-3.8-.5-6-.5s-4.5.2-6 .5l.4 1.5 5.6-.3v3.5L9.5 19h2.3l.7-3.5.7 3.5h2.3l-2.5-5.3V10.2l5.6.3z" />
          </svg>
          <span className="text-white text-[11px] font-bold tracking-wide leading-tight hidden sm:inline" style={{ maxWidth: '68px', wordBreak: 'break-word', hyphens: 'auto' }}>
            Barrierefreiheit
          </span>
          {activeCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] text-white text-[10px] font-black rounded-full flex items-center justify-center px-1 shadow" style={{ backgroundColor: '#22c55e' }}>
              {activeCount}
            </span>
          )}
        </button>

        {/* Mobile hint text */}
        {!open && (
          <p className="sm:hidden text-[8px] font-semibold tracking-wide text-center leading-none mt-0.5 whitespace-nowrap" style={{ color: accentColor }} aria-hidden="true">
            widget hier testen
          </p>
        )}

        {/* WCAG Badge – only on sm+ */}
        <div
          className="hidden sm:flex items-center gap-1 pl-2 pr-2.5 py-1 shadow text-white text-[10px] font-bold tracking-wider"
          style={{
            backgroundColor: accentColor + 'cc',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
          }}
          aria-hidden="true"
        >
          <span>♿</span><span>WCAG 2.1</span>
        </div>

        {/* Panel */}
        {open && (
          <div
            role="dialog"
            aria-modal="false"
            aria-label="Barrierefreiheitseinstellungen"
            className="absolute top-full mt-1 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 sm:left-[46px] w-[288px] bg-white shadow-2xl border border-gray-100 overflow-hidden"
            style={{
              maxHeight: '90vh',
              clipPath:
                'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: accentColor }}>
              <span className="text-white font-bold text-sm tracking-tight">Barrierefreiheit</span>
              <div className="flex items-center gap-3">
                <button onClick={reset} className="text-white/70 hover:text-white text-xs underline transition-colors">Zurücksetzen</button>
                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors text-base leading-none">✕</button>
              </div>
            </div>

            <div className="overflow-y-auto p-4 space-y-5" style={{ maxHeight: 'calc(90vh - 96px)' }}>

              {/* Vorlesen */}
              <Section title="Vorlesen">
                <button
                  onClick={toggleSpeak}
                  className="w-full flex items-center gap-3 px-3 py-3 border-2 transition-all text-left"
                  style={{
                    borderColor: speaking ? accentColor : '#f3f4f6',
                    backgroundColor: speaking ? accentColor + '12' : '#fafafa',
                  }}
                >
                  <span className="text-xl">{speaking ? '⏹' : '▶️'}</span>
                  <div>
                    <div className="text-[13px] font-semibold" style={{ color: speaking ? accentColor : '#374151' }}>
                      {speaking ? 'Vorlesen stoppen' : 'Website-Beschreibung vorlesen'}
                    </div>
                    <div className="text-[11px] text-gray-400">{speaking ? 'Läuft…' : 'Was mypraxis.at ist & kann'}</div>
                  </div>
                </button>
              </Section>

              {/* Schriftgröße */}
              <Section title="Schriftgröße">
                <div className="flex gap-2">
                  {([
                    { fs: 14, val: 0 as FontSize },
                    { fs: 17, val: 1 as FontSize },
                    { fs: 21, val: 2 as FontSize },
                  ]).map(({ fs, val }) => (
                    <button
                      key={val}
                      onClick={() => setSettings((p) => ({ ...p, fontSize: val }))}
                      aria-pressed={settings.fontSize === val}
                      className="flex-1 py-2.5 border-2 font-bold transition-all"
                      style={{
                        fontSize: `${fs}px`,
                        borderColor: settings.fontSize === val ? accentColor : '#e5e7eb',
                        backgroundColor: settings.fontSize === val ? accentColor + '18' : '#f9fafb',
                        color: settings.fontSize === val ? accentColor : '#6b7280',
                      }}
                    >
                      A
                    </button>
                  ))}
                </div>
              </Section>

              {/* Text */}
              <Section title="Text & Lesbarkeit">
                <Toggle label="Zeilenhöhe erhöhen"     sub="Mehr Abstand zwischen Zeilen"    active={settings.lineHeight}      onChange={() => toggle('lineHeight')}      accentColor={accentColor} />
                <Toggle label="Buchstabenabstand"       sub="Wörter weiter auseinanderziehen" active={settings.letterSpacing}   onChange={() => toggle('letterSpacing')}   accentColor={accentColor} />
                <Toggle label="Legasthenie-Schrift"     sub="Besser lesbare Schriftart"       active={settings.dyslexiaFont}    onChange={() => toggle('dyslexiaFont')}    accentColor={accentColor} />
                <Toggle label="Überschriften markieren" sub="Titles farblich hervorheben"     active={settings.highlightTitles} onChange={() => toggle('highlightTitles')} accentColor={accentColor} />
                <Toggle label="Lese-Lineal"             sub="Lesehilfe folgt dem Mauszeiger"  active={settings.readingMask}     onChange={() => toggle('readingMask')}     accentColor={accentColor} />
              </Section>

              {/* Farbe */}
              <Section title="Farbe & Ansicht">
                <Toggle label="Dunkler Modus"      sub="Dunkler Hintergrund"           active={settings.darkMode}      onChange={() => toggle('darkMode')}      accentColor={accentColor} />
                <Toggle label="Hoher Kontrast"     sub="Schärfere Farbunterschiede"    active={settings.highContrast}  onChange={() => toggle('highContrast')}  accentColor={accentColor} />
                <Toggle label="Graustufen"         sub="Alle Farben entfernen"         active={settings.grayscale}     onChange={() => toggle('grayscale')}     accentColor={accentColor} />
                <Toggle label="Farben invertieren" sub="Für Lichtempfindliche"         active={settings.invertColors}  onChange={() => toggle('invertColors')}  accentColor={accentColor} />
                <Toggle label="Bilder ausblenden"  sub="Nur Text anzeigen"             active={settings.hideImages}    onChange={() => toggle('hideImages')}    accentColor={accentColor} />
              </Section>

              {/* Navigation */}
              <Section title="Navigation & Fokus">
                <Toggle label="Animationen stoppen"  sub="Kein Flackern, keine Bewegung"    active={settings.noMotion}       onChange={() => toggle('noMotion')}       accentColor={accentColor} />
                <Toggle label="Links unterstreichen" sub="Alle Links deutlich markieren"     active={settings.underlineLinks} onChange={() => toggle('underlineLinks')} accentColor={accentColor} />
                <Toggle label="Links hervorheben"    sub="Links farblich kennzeichnen"       active={settings.highlightLinks} onChange={() => toggle('highlightLinks')} accentColor={accentColor} />
                <Toggle label="Großer Cursor"        sub="Mauszeiger 2× vergrößern"          active={settings.largeCursor}    onChange={() => toggle('largeCursor')}    accentColor={accentColor} />
                <Toggle label="Fokus hervorheben"    sub="Aktives Element deutlich sichtbar" active={settings.focusHighlight} onChange={() => toggle('focusHighlight')} accentColor={accentColor} />
              </Section>

            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-gray-100 flex items-center justify-between">
              <a href={declarationHref} className="text-[11px] text-gray-400 hover:text-gray-600 underline transition-colors">
                Barrierefreiheitserklärung
              </a>
              <span className="text-[11px] text-gray-300 font-medium">BFSG · WCAG 2.1</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}

function Toggle({ label, sub, active, onChange, accentColor }: {
  label: string; sub: string; active: boolean; onChange: () => void; accentColor: string
}) {
  return (
    <button
      onClick={onChange}
      aria-pressed={active}
      className="w-full flex items-center justify-between px-3 py-2.5 border-2 transition-all text-left"
      style={{ borderColor: active ? accentColor : '#f3f4f6', backgroundColor: active ? accentColor + '12' : '#fafafa' }}
    >
      <div className="flex-1 min-w-0 mr-3">
        <div className="text-[13px] font-semibold leading-tight" style={{ color: active ? accentColor : '#374151' }}>{label}</div>
        <div className="text-[11px] text-gray-400 leading-tight mt-0.5">{sub}</div>
      </div>
      <div className="relative flex-shrink-0 w-9 h-5 rounded-full transition-all duration-200" style={{ backgroundColor: active ? accentColor : '#d1d5db' }}>
        <span className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200" style={{ left: active ? '18px' : '2px' }} />
      </div>
    </button>
  )
}
