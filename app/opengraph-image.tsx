import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3ab8 0%, #2a50cc 60%, #1a2f9a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative circle top right */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            right: 120,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 40 }}>
          <span style={{ color: '#ff8a00', fontWeight: 800, fontSize: 48, letterSpacing: '-1px' }}>
            my
          </span>
          <span style={{ color: '#ffffff', fontWeight: 800, fontSize: 48, letterSpacing: '-1px' }}>
            praxis.at
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#ffffff',
            fontWeight: 800,
            fontSize: 62,
            lineHeight: 1.1,
            marginBottom: 28,
            letterSpacing: '-1.5px',
            maxWidth: 800,
          }}
        >
          Digitale Positionierung für Ärzte in Österreich.
        </div>

        {/* Subtext */}
        <div
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 700,
            marginBottom: 48,
          }}
        >
          KI-Sichtbarkeit · Schema Markup · Rechtssichere Websites
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['ChatGPT', 'Perplexity', 'Google AI', 'Claude'].map((name) => (
            <div
              key={name}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 100,
                padding: '10px 24px',
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 600,
                display: 'flex',
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Bottom tag */}
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            right: 80,
            color: 'rgba(255,255,255,0.45)',
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          by Kevin Hofbauer e.U. · Vitis, Niederösterreich
        </div>
      </div>
    ),
    { ...size }
  )
}
