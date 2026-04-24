import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Modell-Vergleich · intern', robots: { index: false, follow: false } }

const portraitModels = [
  { file: 'flux2pro.jpg', name: 'FLUX.2-pro', meta: 'Black Forest Labs · Together AI · 1024×768' },
  { file: 'flux2max.jpg', name: 'FLUX.2-max', meta: 'Black Forest Labs (größer) · Together AI · 1024×768' },
  { file: 'gptimage.jpg', name: 'GPT-Image-1.5', meta: 'OpenAI · Together AI · 1536×1024' },
  { file: 'imagen4ultra.jpg', name: 'Imagen 4.0 Ultra', meta: 'Google · Together AI · 1408×768' },
  { file: 'leonardo-phoenix.jpg', name: 'Leonardo Phoenix 1.0', meta: 'Leonardo AI · direktes API · 1024×768' },
]

const zielgruppenCards = [
  {
    title: 'Kassenärzte',
    text: 'Aktuell · 17. März-Bild  vs.  GPT-Image-1.5 (mehrsprachiges Wartezimmer, Familien-Praxis-Stimmung)',
    original: 'zg-kassen-original.jpg',
    neu: 'zg-kassen-gpt.jpg',
  },
  {
    title: 'Privat- und Wahlärzt:innen',
    text: 'Aktuell  vs.  GPT-Image-1.5 (Wahlärztin im 1:1-Erstgespräch, premium-ruhig)',
    original: 'zg-privat-original.jpg',
    neu: 'zg-privat-gpt.jpg',
  },
  {
    title: 'Ärztezentren & PVEs',
    text: 'Aktuell  vs.  GPT-Image-1.5 (Empfangsbereich mit Wayfinding zu mehreren Fachrichtungen)',
    original: 'zg-zentrum-original.jpg',
    neu: 'zg-zentrum-gpt.jpg',
  },
]

export default function ComparePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#0a0f1e', color: '#fff', minHeight: '100vh', padding: 24 }}>
      <h1 style={{ fontSize: 22, margin: '0 0 8px' }}>Bild-Modell-Vergleich · intern</h1>
      <p style={{ color: '#999', margin: '0 0 32px', fontSize: 13 }}>Hilfsseite zum Bewerten der KI-Bildmodelle vor produktivem Einsatz.</p>

      <h2 style={{ fontSize: 16, color: '#ff8a00', margin: '24px 0 12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>1) Portrait Dr. Lena Brandner — fünf Modelle</h2>
      <p style={{ color: '#777', fontSize: 12, marginBottom: 18 }}>Identischer Prompt: austrian female psychiatrist 34, short dark hair, white coat, warm calm expression, natural window light.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 16, marginBottom: 48 }}>
        {portraitModels.map((m) => (
          <div key={m.file} style={{ background: '#111827', border: '1px solid #1f2937', padding: 12, borderRadius: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/_compare/${m.file}`} alt={m.name} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }} />
            <h3 style={{ fontSize: 14, margin: '10px 0 2px', color: '#ff8a00' }}>{m.name}</h3>
            <div style={{ color: '#888', fontSize: 11 }}>{m.meta}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 16, color: '#ff8a00', margin: '32px 0 12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2) Zielgruppen-Karten Startseite — vorher/nachher</h2>
      <p style={{ color: '#777', fontSize: 12, marginBottom: 18 }}>Aktuell laufen die Karten mit März-Stockfotos. Die rechte Spalte zeigt die GPT-Image-1.5-Variante mit kontextspezifischem Prompt.</p>

      {zielgruppenCards.map((z) => (
        <section key={z.title} style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: 14, color: '#fff', margin: '0 0 4px' }}>{z.title}</h3>
          <p style={{ color: '#888', fontSize: 12, margin: '0 0 12px' }}>{z.text}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={{ background: '#111827', border: '1px solid #1f2937', padding: 8, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 6 }}>AKTUELL · März-Bild</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/_compare/${z.original}`} alt={`${z.title} aktuell`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }} />
            </div>
            <div style={{ background: '#111827', border: '1px solid #ff8a0033', padding: 8, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: '#ff8a00', marginBottom: 6 }}>NEU · GPT-Image-1.5</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/_compare/${z.neu}`} alt={`${z.title} neu`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }} />
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
