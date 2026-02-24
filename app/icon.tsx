import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            color: '#ff8a00',
            fontWeight: 800,
            fontSize: 12,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          my
        </span>
        <span
          style={{
            color: '#ffffff',
            fontWeight: 800,
            fontSize: 12,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          P
        </span>
      </div>
    ),
    { ...size }
  )
}
