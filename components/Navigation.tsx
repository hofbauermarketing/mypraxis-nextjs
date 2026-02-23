'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-black/25 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="mypraxis.at Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Leistungen', href: '#leistungen' },
            { label: 'KI-Sichtbarkeit', href: '#ki' },
            { label: 'Förderung', href: '#foerderung' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-blue-700'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? 'text-gray-700 hover:text-blue-700'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Blog
          </Link>
          <a
            href="#kontakt"
            className="bg-[#ff8a00] hover:bg-[#e67a00] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            Beratung vereinbaren
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Leistungen', href: '#leistungen' },
            { label: 'KI-Sichtbarkeit', href: '#ki' },
            { label: 'Förderung', href: '#foerderung' },
            { label: 'FAQ', href: '#faq' },
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
          <Link
            href="/blog"
            className="text-gray-700 font-medium hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#kontakt"
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
