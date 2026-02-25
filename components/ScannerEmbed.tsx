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

      {/* Dekorativer Scrollbalken rechts */}
      <div className="absolute right-2 top-3 bottom-3 w-1 bg-slate-200 rounded-full pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-1/3 bg-slate-400/60 rounded-full" />
      </div>

      {/* Scroll-Hinweis: sichtbar im Ruhezustand, blendet beim Hovern aus */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 flex flex-col items-center justify-end pb-4 pointer-events-none rounded-b-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.92))' }}
      >
        <div className="flex items-center gap-2 text-slate-400">
          {/* Maus-Icon – Desktop */}
          <svg className="hidden sm:block" width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="12" height="16" rx="6" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="7" y1="4" x2="7" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          {/* Finger-Icon – Mobile */}
          <svg className="sm:hidden w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13V6a2 2 0 1 1 4 0v4m0-4v4m0-4a2 2 0 1 1 4 0v4m0-2a2 2 0 1 1 4 0v5a7 7 0 0 1-14 0v-3a2 2 0 1 1 4 0" />
          </svg>

          {/* Responsive Text */}
          <span className="hidden sm:inline text-xs font-medium">Mit Mausrad scrollen</span>
          <span className="sm:hidden text-xs font-medium">Mit Finger scrollen</span>

          {/* Bouncing Pfeil */}
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
