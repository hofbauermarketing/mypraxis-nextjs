const items = [
  { src: '/logos/chatgpt.webp', name: 'ChatGPT', nutzer: '800M Nutzer' },
  { src: '/logos/googlegemini.svg', name: 'Google Gemini', nutzer: '650M Nutzer' },
  { src: '/logos/gemini.webp', name: 'Google AI Overviews', nutzer: 'Mrd. Suchen' },
  { src: '/logos/microsoftcopilot.svg', name: 'Microsoft Copilot', nutzer: '100M Nutzer' },
  { src: '/logos/perplexity.webp', name: 'Perplexity', nutzer: '50M+ Nutzer' },
  { src: '/logos/claude.webp', name: 'Claude AI', nutzer: '30M+ Nutzer' },
  { src: '/logos/apple.svg', name: 'Apple Siri', nutzer: '1Mrd.+ Geräte' },
  { src: '/logos/meta.svg', name: 'Meta AI', nutzer: '3Mrd.+ Nutzer' },
  { src: '/logos/brave.svg', name: 'Brave Search', nutzer: '50M/Tag' },
  { src: '/logos/openai.svg', name: 'OpenAI API', nutzer: 'Mrd. Anfragen' },
  { src: '/logos/amazon.svg', name: 'Amazon Alexa', nutzer: '500M+ Geräte' },
]

const BG = '#07090f'

export default function KiSystemeMarquee() {
  return (
    <section className="relative py-8 overflow-hidden marquee-container" style={{ background: BG }}>
      {/* Dunkelblaues Overlay – gleiche Optik wie Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3ab8]/20 via-[#112080]/10 to-[#1e3ab8]/20 pointer-events-none" />

      <p className="relative text-center text-gray-500 text-xs uppercase tracking-widest mb-6 px-6">
        Auf diesen Plattformen soll Ihre Ordination gefunden werden
      </p>

      <div className="relative">
        {/* Linker Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG}, transparent)` }} />
        {/* Rechter Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BG}, transparent)` }} />

        <div className="flex w-max animate-marquee gap-5 pr-5">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              aria-hidden={i >= items.length ? 'true' : undefined}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.07] shrink-0 hover:bg-white/[0.08] transition-colors"
              style={{ animation: `floatSm ${2.5 + (i % 4) * 0.4}s ease-in-out ${(i % 5) * 0.3}s infinite` }}
            >
              {/* Icon-Wrapper mit hellem Hintergrund damit auch weiße/dunkle SVGs sichtbar sind */}
              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-white/15 rounded-lg p-1.5">
                <img
                  src={item.src}
                  alt={i < items.length ? item.name : ''}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-white text-xs font-semibold whitespace-nowrap leading-tight">{item.name}</p>
                <p className="text-gray-500 text-[10px] whitespace-nowrap leading-tight mt-0.5">{item.nutzer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
