'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type Lang = { code: string; flag: string; label: string; short: string }

const LANGS: Lang[] = [
  { code: 'DE', flag: '🇩🇪', label: 'Deutsch', short: 'DE' },
  { code: 'EN', flag: '🇬🇧', label: 'English', short: 'EN' },
  { code: 'RU', flag: '🇷🇺', label: 'Русский', short: 'RU' },
  { code: 'TR', flag: '🇹🇷', label: 'Türkçe', short: 'TR' },
  { code: 'AR', flag: '🇸🇦', label: 'العربية', short: 'AR' },
  { code: 'RO', flag: '🇷🇴', label: 'Română', short: 'RO' },
  { code: 'PL', flag: '🇵🇱', label: 'Polski', short: 'PL' },
  { code: 'HU', flag: '🇭🇺', label: 'Magyar', short: 'HU' },
  { code: 'UK', flag: '🇺🇦', label: 'Українська', short: 'UK' },
  { code: 'CS', flag: '🇨🇿', label: 'Čeština', short: 'CS' },
]

type Props = {
  scrolled?: boolean
  compact?: boolean
}

export default function LanguageFlagSwitcher({ scrolled = false, compact = false }: Props) {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('DE')
  const [translating, setTranslating] = useState(false)
  const originalTexts = useRef<Map<Text, string>>(new Map())
  const dictRef = useRef<Record<string, string> | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('a11y-lang') || 'DE'
    setActiveLang(saved)
  }, [])

  // Outside-Click schließt Dropdown
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const translatePage = useCallback(
    async (targetLang: string) => {
      if (targetLang === activeLang) {
        setOpen(false)
        return
      }
      if (targetLang === 'DE') {
        if (activeLang !== 'DE') {
          localStorage.setItem('a11y-lang', 'DE')
          window.location.reload()
          return
        }
        return
      }

      setTranslating(true)
      try {
        const res = await fetch(`/translations/${targetLang.toLowerCase()}.json?v=${Date.now()}`, {
          cache: 'no-store',
        })
        if (!res.ok) {
          console.error(`Translation file not found: ${targetLang}`)
          setTranslating(false)
          return
        }
        const dict: Record<string, string> = await res.json()
        dictRef.current = dict

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => {
            const parent = node.parentElement
            if (!parent) return NodeFilter.FILTER_REJECT
            const tag = parent.tagName.toLowerCase()
            if (['script', 'style', 'noscript'].includes(tag)) return NodeFilter.FILTER_REJECT
            if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT
            return NodeFilter.FILTER_ACCEPT
          },
        })

        const nodes: Text[] = []
        let n: Node | null
        while ((n = walker.nextNode())) nodes.push(n as Text)

        nodes.forEach((node) => {
          if (!originalTexts.current.has(node)) {
            originalTexts.current.set(node, node.textContent ?? '')
          }
        })

        nodes.forEach((node) => {
          const original = (originalTexts.current.get(node) ?? node.textContent ?? '').trim()
          if (!original) return
          const translation = dict[original]
          if (translation) {
            const orig = node.textContent ?? ''
            const leading = orig.match(/^\s*/)?.[0] ?? ''
            const trailing = orig.match(/\s*$/)?.[0] ?? ''
            node.textContent = leading + translation + trailing
          }
        })

        setActiveLang(targetLang)
        localStorage.setItem('a11y-lang', targetLang)
        document.documentElement.setAttribute('lang', targetLang.toLowerCase())
        // Kein dir="rtl" setzen – Layout ist LTR-only, arabischer Text
        // rendert korrekt via Unicode Bidi Algorithm innerhalb der Textknoten
        document.documentElement.removeAttribute('dir')
      } catch (e) {
        console.error('Translation error', e)
      } finally {
        setTranslating(false)
        setOpen(false)
      }
    },
    [activeLang]
  )

  // Gespeicherte Sprache beim Mount anwenden (wenn nicht DE)
  useEffect(() => {
    if (!mounted) return
    const saved = localStorage.getItem('a11y-lang')
    if (saved && saved !== 'DE' && saved !== activeLang) {
      translatePage(saved)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  // MutationObserver: Neue Text-Nodes (z.B. Widget-Panel) automatisch übersetzen
  useEffect(() => {
    if (!mounted) return
    const translateNode = (node: Text) => {
      const dict = dictRef.current
      if (!dict) return
      const text = (node.textContent ?? '').trim()
      if (!text) return
      const translation = dict[text]
      if (translation && translation !== text) {
        if (!originalTexts.current.has(node)) {
          originalTexts.current.set(node, node.textContent ?? '')
        }
        const orig = node.textContent ?? ''
        const leading = orig.match(/^\s*/)?.[0] ?? ''
        const trailing = orig.match(/\s*$/)?.[0] ?? ''
        node.textContent = leading + translation + trailing
      }
    }

    const observer = new MutationObserver((mutations) => {
      if (activeLang === 'DE' || !dictRef.current) return
      for (const mutation of mutations) {
        for (const added of mutation.addedNodes) {
          if (added.nodeType === Node.TEXT_NODE) {
            translateNode(added as Text)
          } else if (added.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(added, NodeFilter.SHOW_TEXT, {
              acceptNode: (n) => {
                const parent = n.parentElement
                if (!parent) return NodeFilter.FILTER_REJECT
                const tag = parent.tagName.toLowerCase()
                if (['script', 'style', 'noscript'].includes(tag)) return NodeFilter.FILTER_REJECT
                if (!n.textContent?.trim()) return NodeFilter.FILTER_REJECT
                return NodeFilter.FILTER_ACCEPT
              },
            })
            let n: Node | null
            while ((n = walker.nextNode())) translateNode(n as Text)
          }
        }
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [mounted, activeLang])

  if (!mounted) return null

  const current = LANGS.find((l) => l.code === activeLang) || LANGS[0]

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        disabled={translating}
        aria-label={`Sprache wählen – aktuell ${current.label}`}
        aria-expanded={open}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] font-medium transition-all border ${
          scrolled
            ? 'text-gray-700 border-gray-300 hover:border-blue-700 hover:text-blue-700 bg-white/50'
            : 'text-white/90 border-white/30 hover:border-white/80 hover:text-white bg-white/10 backdrop-blur-sm'
        } ${translating ? 'opacity-60 cursor-wait' : ''}`}
        style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
      >
        <span className="text-base leading-none" aria-hidden="true">
          {current.flag}
        </span>
        {!compact && <span className="tracking-wide">{current.short}</span>}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-56 bg-white shadow-2xl border border-gray-200 overflow-hidden z-50"
          style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
          role="menu"
        >
          <div className="px-4 py-2 bg-gradient-to-r from-[#1e3ab8] to-[#2a50cc] text-white text-[10px] font-bold uppercase tracking-widest">
            Sprache wählen
          </div>
          <ul className="max-h-80 overflow-y-auto py-1">
            {LANGS.map((lang) => {
              const active = lang.code === activeLang
              const available = lang.code === 'DE'
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => available ? translatePage(lang.code) : undefined}
                    disabled={!available || translating || active}
                    aria-disabled={!available}
                    title={!available ? 'Bald verfügbar — lokale Übersetzung in Arbeit' : undefined}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left ${
                      active
                        ? 'bg-[#ff8a00]/10 text-[#ff8a00] font-semibold cursor-default'
                        : available
                          ? 'text-gray-700 hover:bg-gray-50 hover:text-[#1e3ab8]'
                          : 'text-gray-300 cursor-not-allowed bg-gray-50/50'
                    } ${translating && !active ? 'opacity-40 cursor-wait' : ''}`}
                    role="menuitem"
                  >
                    <span className={`text-lg leading-none ${!available ? 'grayscale opacity-50' : ''}`} aria-hidden="true">
                      {lang.flag}
                    </span>
                    <span className="flex-1">{lang.label}</span>
                    {active && (
                      <svg className="w-4 h-4 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {!available && (
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">bald</span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-500 italic leading-snug">
            Weitere Sprachen werden derzeit lokal übersetzt — finalisieren wir in den nächsten Tagen.
          </div>
        </div>
      )}
    </div>
  )
}
