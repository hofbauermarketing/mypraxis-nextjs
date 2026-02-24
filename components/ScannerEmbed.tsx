'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScannerEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let lastSet = 0

    function handleMessage(ev: MessageEvent) {
      if (!ev || !ev.data || ev.data.type !== 'AKI_EMBED_SCAN_HEIGHT') return
      if (!ev.origin || ev.origin.indexOf('agenturkunden.io') === -1) return
      const h = parseInt(ev.data.height, 10)
      if (!h || h < 420) return
      const clamped = Math.max(420, Math.min(1400, h + 12))
      // Skip if we already set this height – prevents feedback loop
      if (Math.abs(clamped - lastSet) < 2) return
      lastSet = clamped
      if (frameRef.current) {
        frameRef.current.style.height = clamped + 'px'
        setReady(true)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: ready ? 0 : 420 }}>
      {/* Skeleton shown until first height message arrives */}
      {!ready && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.4s infinite',
            borderRadius: 14,
          }}
        />
      )}
      <iframe
        ref={frameRef}
        id="akiEmbedScanFrame"
        src="https://agenturkunden.io/mypraxis/embed-scan.html?t=277a6b337c9d91dba16c2aa7bc6a03426032f1290ab915fa"
        width="100%"
        height="420"
        style={{
          border: 0,
          borderRadius: '14px',
          display: 'block',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setReady(true)}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
