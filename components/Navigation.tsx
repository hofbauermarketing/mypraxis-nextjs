'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageFlagSwitcher from './LanguageFlagSwitcher'
import { fachgebieteList } from '@/content/fachgebiete'
import { zielgruppenList } from '@/content/zielgruppen'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<null | 'fuerWen' | 'fachgebiete'>(null)
  const [mobileSection, setMobileSection] = useState<null | 'fuerWen' | 'fachgebiete'>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dropdown schließen bei Route-Wechsel
  useEffect(() => {
    setOpenDropdown(null)
    setMenuOpen(false)
  }, [pathname])

  if (pathname?.startsWith('/demo')) return null

  const openWithDelay = (which: 'fuerWen' | 'fachgebiete') => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setOpenDropdown(which)
  }
  const closeWithDelay = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const linkClass = (s: boolean) =>
    `text-[15px] font-medium transition-colors whitespace-nowrap ${
      s ? 'text-gray-700 hover:text-blue-700' : 'text-white/90 hover:text-white'
    }`

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-black/25 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 items-center">
        {/* Logo */}
        <Link href="/" aria-label="mypraxis.at – zur Startseite" className="flex items-center gap-2">
          <Image src="/logo.webp" alt="mypraxis.at Logo" width={140} height={40} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center justify-center gap-3 lg:gap-5 relative">

          {/* Für wen – Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openWithDelay('fuerWen')}
            onMouseLeave={closeWithDelay}
          >
            <button
              className={`${linkClass(scrolled)} flex items-center gap-1`}
              onClick={() => setOpenDropdown(openDropdown === 'fuerWen' ? null : 'fuerWen')}
              aria-expanded={openDropdown === 'fuerWen'}
              aria-haspopup="true"
            >
              Für wen
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'fuerWen' && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                onMouseEnter={() => openWithDelay('fuerWen')}
                onMouseLeave={closeWithDelay}
              >
                {zielgruppenList.map((zg) => (
                  <Link
                    key={zg.slug}
                    href={`/fuer-${zg.slug}`}
                    className="block px-5 py-3 hover:bg-[#faf7f2] transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <div className="font-semibold text-[#112080] text-sm">{zg.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{zg.hero.pille.replace('Für wen · ', '')}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Fachgebiete – Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openWithDelay('fachgebiete')}
            onMouseLeave={closeWithDelay}
          >
            <button
              className={`${linkClass(scrolled)} flex items-center gap-1`}
              onClick={() => setOpenDropdown(openDropdown === 'fachgebiete' ? null : 'fachgebiete')}
              aria-expanded={openDropdown === 'fachgebiete'}
              aria-haspopup="true"
            >
              Fachgebiete
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'fachgebiete' && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                onMouseEnter={() => openWithDelay('fachgebiete')}
                onMouseLeave={closeWithDelay}
              >
                <div className="grid grid-cols-2 gap-0">
                  {fachgebieteList.map((fg, i) => (
                    <Link
                      key={fg.slug}
                      href={`/fachgebiete/${fg.slug}`}
                      className={`px-5 py-2.5 hover:bg-[#faf7f2] transition-colors border-b border-gray-50 ${
                        i % 2 === 0 ? 'border-r border-gray-50' : ''
                      }`}
                    >
                      <div className="font-semibold text-[#112080] text-[13px]">{fg.name}</div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/fachgebiete"
                  className="block bg-[#112080] text-white text-center text-[13px] font-semibold py-3 hover:bg-[#1e3ab8] transition-colors"
                >
                  Alle Fachgebiete ansehen →
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className={linkClass(scrolled)}>Blog</Link>
          <Link href="/faq" className={linkClass(scrolled)}>FAQ</Link>
        </nav>

        {/* Desktop CTA + Lang */}
        <div className="hidden md:flex items-center justify-end gap-2.5">
          <LanguageFlagSwitcher scrolled={scrolled} />
          <a
            href="/#kontakt"
            className="bg-[#ff8a00] hover:bg-[#e67a00] text-white text-[13px] font-semibold px-4 py-2.5 transition-all whitespace-nowrap"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
          >
            Erstgespräch →
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden col-start-3 justify-self-end flex items-center gap-2">
          <LanguageFlagSwitcher scrolled={scrolled} compact />
          <button
            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu · Akkordion */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md shadow-lg px-6 py-4 flex flex-col gap-3 max-h-[calc(100vh-80px)] overflow-y-auto">

          {/* Für wen – Mobile Akkordion */}
          <button
            onClick={() => setMobileSection(mobileSection === 'fuerWen' ? null : 'fuerWen')}
            className="text-gray-700 font-medium py-2 flex items-center justify-between"
          >
            <span>Für wen</span>
            <svg
              className={`w-4 h-4 transition-transform ${mobileSection === 'fuerWen' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileSection === 'fuerWen' && (
            <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#ff8a00]/30">
              {zielgruppenList.map((zg) => (
                <Link
                  key={zg.slug}
                  href={`/fuer-${zg.slug}`}
                  className="text-sm text-gray-600 hover:text-[#112080] py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {zg.name}
                </Link>
              ))}
            </div>
          )}

          {/* Fachgebiete – Mobile Akkordion */}
          <button
            onClick={() => setMobileSection(mobileSection === 'fachgebiete' ? null : 'fachgebiete')}
            className="text-gray-700 font-medium py-2 flex items-center justify-between"
          >
            <span>Fachgebiete</span>
            <svg
              className={`w-4 h-4 transition-transform ${mobileSection === 'fachgebiete' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileSection === 'fachgebiete' && (
            <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#ff8a00]/30">
              {fachgebieteList.map((fg) => (
                <Link
                  key={fg.slug}
                  href={`/fachgebiete/${fg.slug}`}
                  className="text-sm text-gray-600 hover:text-[#112080] py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {fg.name}
                </Link>
              ))}
              <Link
                href="/fachgebiete"
                className="text-sm text-[#ff8a00] font-semibold py-1 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Alle ansehen →
              </Link>
            </div>
          )}

          <Link href="/blog" className="text-gray-700 font-medium hover:text-blue-700 py-2" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/faq" className="text-gray-700 font-medium hover:text-blue-700 py-2" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <a
            href="/#kontakt"
            className="bg-[#ff8a00] text-white font-semibold px-5 py-3 rounded-lg text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Erstgespräch anfragen
          </a>
        </div>
      )}
    </header>
  )
}
