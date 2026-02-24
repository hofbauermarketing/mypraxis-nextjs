'use client'

export default function ScannerEmbed() {
  return (
    <iframe
      id="akiEmbedScanFrame"
      src="https://agenturkunden.io/mypraxis/embed-scan.html?t=277a6b337c9d91dba16c2aa7bc6a03426032f1290ab915fa"
      width="100%"
      height="500"
      style={{ border: 0, borderRadius: '14px', display: 'block' }}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )
}
