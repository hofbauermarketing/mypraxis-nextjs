'use client'

import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'

export default function QrCode() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`hidden lg:flex flex-col items-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ animation: visible ? 'qrFloat 4s ease-in-out infinite' : 'none' }}
    >
      {/* Label oben */}
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-4 h-4 text-[#ff8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8a00] whitespace-nowrap">
          Hier scannen
        </span>
      </div>

      {/* QR Box mit Gold-Corners */}
      <div
        className="relative p-3 shadow-2xl"
        style={{
          backgroundColor: 'rgba(255,255,255,0.93)',
          backdropFilter: 'blur(12px)',
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        }}
      >
        {/* Orange corner accents (mypraxis-Stil statt Gold) */}
        <div className="absolute top-0 left-0 w-5 h-[2px] bg-[#ff8a00]" />
        <div className="absolute top-0 left-0 h-5 w-[2px] bg-[#ff8a00]" />
        <div className="absolute bottom-0 right-0 w-5 h-[2px] bg-[#ff8a00]" />
        <div className="absolute bottom-0 right-0 h-5 w-[2px] bg-[#ff8a00]" />

        <QRCodeSVG
          value="https://www.mypraxis.at/preise"
          size={96}
          level="M"
          bgColor="transparent"
          fgColor="#0a0f1e"
        />
      </div>

      {/* Label unten */}
      <p className="mt-1.5 text-[9px] text-white/45 tracking-wider text-center font-medium">
        mobil öffnen
      </p>
    </div>
  )
}
