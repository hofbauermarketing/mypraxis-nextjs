'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

function Counter({ target, inView }: { target: number; inView: boolean }) {
  // Start at target so SSR/LLM-crawlers always see the correct number.
  // Animation resets to 0 and counts up once the element enters the viewport.
  const [count, setCount] = useState(target)
  const animated = useRef(false)

  useEffect(() => {
    if (!inView || animated.current) return
    animated.current = true
    let startTime: number | null = null
    const duration = 1000
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <>{count}</>
}

function Typewriter({ text, isInView, delay = 0 }: { text: string; isInView: boolean; delay?: number }) {
  // SSR renders full text so crawlers always read "Pilotkonditionen."
  const [displayed, setDisplayed] = useState(text)
  const [done, setDone] = useState(false)
  const animated = useRef(false)

  useEffect(() => {
    if (!isInView || animated.current) return
    animated.current = true
    setDisplayed('')
    setDone(false)
    const startTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 800)
        }
      }, 55)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(startTimer)
  }, [isInView, text, delay])

  return (
    <span className="whitespace-nowrap">
      <span className={done ? 'shimmer-gold' : ''} style={!done ? { color: '#ff8a00' } : {}}>
        {displayed}
      </span>
      {!done && (
        <span className="inline-block w-[3px] h-[0.85em] bg-[#ff8a00] ml-1 align-middle animate-typewriter-cursor" />
      )}
    </span>
  )
}

function FadeUp({ delay, isInView, children, className }: { delay: number; isInView: boolean; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

function FadeIn({ delay, isInView, children, className }: { delay: number; isInView: boolean; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function ReferenzkundenSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="relative mb-16 overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0f1623] to-[#1a2845] border border-white/10 shadow-2xl" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}>
      {/* Meshgitter */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Deco orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff8a00]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/3 blur-2xl pointer-events-none" />

      {/* Top section */}
      <div className="relative z-10 text-center px-6 sm:px-10 pt-8 sm:pt-10 pb-6">
        <FadeUp delay={0} isInView={isInView}>
          <span className="inline-block bg-[#ff8a00]/15 border border-[#ff8a00]/35 text-[#ff8a00] text-xs font-bold px-4 py-1.5 mb-4 tracking-wider uppercase">
            Referenzkunden-Programm 2026
          </span>
        </FadeUp>

        <FadeUp delay={0.15} isInView={isInView}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Ich suche{' '}
            <span className="text-[#ff8a00]">
              <Counter target={9} inView={isInView} /> Ordinationen.
            </span>
            <br />
            <span className="text-white/70 text-xl sm:text-2xl font-bold">
              Nicht mehr. Nicht weniger.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.35} isInView={isInView}>
          <p className="text-blue-200/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Ich baue Ihre Praxis-Website neu – rechtssicher, individuell entwickelt und für Suchmaschinen sowie KI-Systeme sauber vorbereitet.
          </p>
        </FadeUp>
      </div>

      {/* Das Programm */}
      <div className="relative z-10 px-6 sm:px-12 pb-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Divider */}
          <div className="flex items-center gap-4 justify-center mb-7">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
              style={{ originX: 1 }}
              className="h-px bg-white/15 w-16 sm:w-24"
            />
            <FadeIn delay={0.6} isInView={isInView}>
              <p className="text-white/35 text-xs uppercase tracking-[0.35em] font-medium whitespace-nowrap">
                Das Programm
              </p>
            </FadeIn>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="h-px bg-white/15 w-16 sm:w-24"
            />
          </div>

          <FadeIn delay={0.7} isInView={isInView}>
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-bold italic leading-tight mb-3 whitespace-nowrap overflow-visible"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em', transform: 'rotate(-1.5deg)' }}
            >
              <Typewriter text="Referenzpartner 2026." isInView={isInView} delay={0.7} />
            </p>
          </FadeIn>

          <FadeIn delay={1.0} isInView={isInView}>
            <p className="text-white/50 text-sm sm:text-base italic mb-7">
              Vorteilskonditionen für ausgewählte Ordinationen – gegen vereinbarte Zusammenarbeit und Freigabe als Referenzkunde. Die genauen Konditionen besprechen wir im Erstgespräch.
            </p>
          </FadeIn>

          <FadeIn delay={1.15} isInView={isInView}>
            <p className="text-white/40 text-sm italic">
              Nähere Informationen zu den Konditionen gerne im Erstgespräch.
            </p>
          </FadeIn>

          <FadeIn delay={1.3} isInView={isInView}>
            <div className="flex items-center gap-4 justify-center mt-7">
              <div className="h-px bg-white/10 w-16 sm:w-24" />
              <p className="text-white/20 text-xs whitespace-nowrap">Bewerbung erforderlich · Nicht jeder wird aufgenommen</p>
              <div className="h-px bg-white/10 w-16 sm:w-24" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3 Kacheln – staggered */}
      <div className="relative z-10 px-6 sm:px-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              src: '/ref-kassenarzt.jpg',
              alt: 'Kassenarzt Website mypraxis.at',
              title: 'Kassenärzte',
              desc: 'Allgemeinmedizin & Fachärzte mit Kassenvertrag',
              bg: 'bg-gradient-to-br from-[#0f2070] to-[#1e3ab8]',
              overlay: 'from-[#0a1540] via-[#0f2070]/40',
              dark: 'bg-[#0a1540]',
              border: 'border-blue-500/25 hover:border-blue-400/50',
              textColor: 'text-blue-300/80',
              delay: 1.45,
            },
            {
              src: '/ref-wahlarzt.jpg',
              alt: 'Wahlarzt Website mypraxis.at',
              title: 'Privatärzte',
              desc: 'Wahlärzte & Privatordinationen aller Fachrichtungen',
              bg: 'bg-gradient-to-br from-[#2a1400] to-[#3d1e00]',
              overlay: 'from-[#1a0c00] via-[#2a1400]/40',
              dark: 'bg-[#1a0c00]',
              border: 'border-[#ff8a00]/30 hover:border-[#ff8a00]/60',
              textColor: 'text-amber-300/70',
              delay: 1.6,
            },
            {
              src: '/ref-zentrum.jpg',
              alt: 'Ärztezentrum Website mypraxis.at',
              title: 'Ärztezentren',
              desc: 'Gruppenpraxen, PVEs & medizinische Zentren',
              bg: 'bg-gradient-to-br from-[#051e1e] to-[#0a3030]',
              overlay: 'from-[#031414] via-[#051e1e]/40',
              dark: 'bg-[#031414]',
              border: 'border-teal-500/25 hover:border-teal-400/50',
              textColor: 'text-teal-300/70',
              delay: 1.75,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.55, delay: card.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`overflow-hidden border ${card.border} shadow-xl hover:scale-[1.02] transition-all duration-300 group`}
            >
              <div className={`relative h-36 ${card.bg}`}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${card.overlay} to-transparent`} />
                <div className="absolute top-3 right-3 bg-[#ff8a00] text-white text-xs font-black px-3 py-1.5 shadow-lg">
                  3 Plätze
                </div>
                <div className="absolute bottom-3 left-4">
                  <div className="text-white font-extrabold text-xl leading-none">{card.title}</div>
                </div>
              </div>
              <div className={`p-4 ${card.dark}`}>
                <p className={`${card.textColor} text-xs leading-relaxed`}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 1.95, ease: 'easeOut' }}
        className="relative z-10 px-8 sm:px-12 pb-10 text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <a
            href="#kontakt"
            className="bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3.5 transition-all hover:scale-105 shadow-lg shadow-orange-500/25 text-sm"
          >
            Vorteilskonditionen sichern
          </a>
          <span className="text-blue-400/80 text-sm">15 Min. Erstcheck · 45–60 Min. Strategiegespräch</span>
        </div>
        <p className="text-white/25 text-xs">
          Solange Plätze verfügbar · 9 Ordinationen gesamt · Aufnahme nach Gespräch und Eignung
        </p>
      </motion.div>
    </div>
  )
}
