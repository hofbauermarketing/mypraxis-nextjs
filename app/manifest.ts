import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'mypraxis.at – Digitale Positionierung für Ärzte',
    short_name: 'mypraxis.at',
    description: 'KI-Sichtbarkeit, Schema Markup und rechtssichere Praxis-Websites für niedergelassene Ärzte in Österreich.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3ab8',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
