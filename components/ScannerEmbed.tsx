'use client'

import { useEffect, useRef } from 'react'

export default function ScannerEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function handleMessage(ev: MessageEvent) {
      if (!ev || !ev.data || ev.data.type !== 'AKI_EMBED_SCAN_HEIGHT') return
      if (!ev.origin || ev.origin.indexOf('agenturkunden.io') === -1) return
      const h = parseInt(ev.data.height, 10)
      if (!h || h < 420) return
      const clamped = Math.max(420, Math.min(1400, h + 12))
      if (frameRef.current) {
        frameRef.current.style.height = clamped + 'px'
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={frameRef}
      id="akiEmbedScanFrame"
      src="https://agenturkunden.io/mypraxis/embed-scan.html?t=277a6b337c9d91dba16c2aa7bc6a03426032f1290ab915fa"
      width="100%"
      height="560"
      style={{ border: 0, borderRadius: '14px', display: 'block' }}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )
}
