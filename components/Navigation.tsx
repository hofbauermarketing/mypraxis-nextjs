'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageFlagSwitcher from './LanguageFlagSwitcher'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname?.startsWith('/demo')) return null

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-black/25 backdrop-blur-sm py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 items-center">
        {/* Logo */}
        <Link href="/" aria-label="mypraxis.at – zur Startseite" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="mypraxis.at Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav – centered */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center justify-center gap-3 lg:gap-5">
          {[
            { label: 'Demo & Leistungen', href: '/preise' },
            { label: 'FAQ', href: '/faq' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium transition-colors whitespace-nowrap ${scrolled
                ? 'text-gray-700 hover:text-blue-700'
                : 'text-white/90 hover:text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/blog"
            className={`text-[13px] font-medium transition-colors whitespace-nowrap ${scrolled
              ? 'text-gray-700 hover:text-blue-700'
              : 'text-white/90 hover:text-white'
              }`}
          >
            Blog
          </Link>
          <Link
            href="/videothek"
            className={`text-[13px] font-medium transition-colors whitespace-nowrap ${scrolled
              ? 'text-gray-700 hover:text-blue-700'
              : 'text-white/90 hover:text-white'
              }`}
          >
            Videothek
          </Link>
          {/* Förderung – scrollt zur Section auf Startseite */}
          <Link
            href="/#foerderung"
            className={`text-[13px] font-semibold whitespace-nowrap transition-all px-3 py-1.5 rounded-full ${scrolled
              ? 'text-[#ff8a00] bg-[#ff8a00]/8 hover:bg-[#ff8a00]/15'
              : 'text-[#ff8a00] bg-white/10 hover:bg-white/20'
              }`}
          >
            Förderung
          </Link>
        </nav>

        {/* Desktop CTA + Language-Switcher – right aligned */}
        <div className="hidden md:flex items-center justify-end gap-2.5">
          <LanguageFlagSwitcher scrolled={scrolled} />
          <a
            href="/#kontakt"
            className="bg-[#ff8a00] hover:bg-[#e67a00] text-white text-[13px] font-semibold px-4 py-2.5 transition-all whitespace-nowrap"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
          >
            Erstgespräch anfragen →
          </a>
        </div>

        {/* Mobile: Sprachflagge + Hamburger */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Demo & Leistungen', href: '/preise' },
            { label: 'FAQ', href: '/faq' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 font-medium hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link href="/blog" className="text-gray-700 font-medium hover:text-blue-700" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/videothek" className="text-gray-700 font-medium hover:text-blue-700" onClick={() => setMenuOpen(false)}>
            KI-Videothek
          </Link>
          <Link
            href="/#foerderung"
            className="text-[#ff8a00] font-semibold hover:text-[#e67a00]"
            onClick={() => setMenuOpen(false)}
          >
            Förderung
          </Link>
          <a
            href="/#kontakt"
            className="bg-accent text-white font-semibold px-5 py-3 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Beratung vereinbaren
          </a>
        </div>
      )}
    </header>
  )
}
