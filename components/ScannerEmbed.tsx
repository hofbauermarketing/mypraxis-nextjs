'use client'

export default function ScannerEmbed() {
  return (
    <div className="relative group">
      <iframe
        id="akiEmbedScanFrame"
        src="https://agenturkunden.io/mypraxis/embed-scan.html?t=277a6b337c9d91dba16c2aa7bc6a03426032f1290ab915fa"
        width="100%"
        height="500"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      {/* Scroll-Hinweis: sichtbar im Ruhezustand, blendet beim Hovern aus */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 flex flex-col items-center justify-end pb-4 pointer-events-none rounded-b-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.92))' }}
      >
        <div className="flex items-center gap-2 text-slate-400">
          {/* Maus-Icon */}
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="12" height="16" rx="6" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="7" y1="4" x2="7" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-medium">Hier scrollen</span>
          {/* Bouncing Pfeil */}
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
