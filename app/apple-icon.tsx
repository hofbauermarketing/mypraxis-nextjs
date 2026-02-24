import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1e3ab8',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              color: '#ff8a00',
              fontWeight: 800,
              fontSize: 64,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            my
          </span>
          <span
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 64,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            P
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
