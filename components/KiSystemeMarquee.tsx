const kiSysteme = [
  {
    name: 'ChatGPT',
    anbieter: 'OpenAI',
    nutzer: '800 Mio. Nutzer',
    relevanz: 'Jeder 4. Patient nutzt KI für Gesundheitsfragen.',
    url: 'https://chatgpt.com',
    domain: 'openai.com',
  },
  {
    name: 'Google Gemini',
    anbieter: 'Google',
    nutzer: '650 Mio. Nutzer',
    relevanz: 'Auf jedem Android-Handy vorinstalliert.',
    url: 'https://gemini.google.com',
    domain: 'gemini.google.com',
  },
  {
    name: 'Google AI Overviews',
    anbieter: 'Google',
    nutzer: 'Milliarden Suchen',
    relevanz: 'Bei bis zu 60 % aller Google-Suchen sichtbar.',
    url: 'https://google.com',
    domain: 'google.com',
  },
  {
    name: 'Microsoft Copilot',
    anbieter: 'Microsoft',
    nutzer: '100 Mio. Nutzer',
    relevanz: 'In Windows & Edge integriert – jeder PC-Nutzer.',
    url: 'https://copilot.microsoft.com',
    domain: 'microsoft.com',
  },
  {
    name: 'Perplexity',
    anbieter: 'Perplexity AI',
    nutzer: '50+ Mio. Nutzer',
    relevanz: 'Direkter Link auf Ihre Website in jeder Antwort.',
    url: 'https://www.perplexity.ai',
    domain: 'perplexity.ai',
  },
  {
    name: 'Claude',
    anbieter: 'Anthropic',
    nutzer: '30+ Mio. Nutzer',
    relevanz: 'Apple-Integration: jeder iPhone-Nutzer erreicht.',
    url: 'https://claude.ai',
    domain: 'anthropic.com',
  },
  {
    name: 'Apple Siri',
    anbieter: 'Apple',
    nutzer: '1+ Mrd. Geräte',
    relevanz: '30 % iPhone-Marktanteil in Österreich.',
    url: 'https://www.apple.com/siri/',
    domain: 'apple.com',
  },
  {
    name: 'Meta AI',
    anbieter: 'Meta',
    nutzer: '3+ Mrd. Nutzer',
    relevanz: '7 Mio. Österreicher nutzen WhatsApp täglich.',
    url: 'https://ai.meta.com',
    domain: 'meta.com',
  },
  {
    name: 'Amazon Alexa',
    anbieter: 'Amazon',
    nutzer: '500+ Mio. Geräte',
    relevanz: 'Sprachsuche zuhause – auch nach Ärzten.',
    url: 'https://alexa.amazon.com',
    domain: 'amazon.com',
  },
  {
    name: 'Samsung Galaxy AI',
    anbieter: 'Samsung',
    nutzer: 'Hunderte Mio. Geräte',
    relevanz: 'Meistverkaufte Smartphone-Marke in Österreich.',
    url: 'https://www.samsung.com/global/galaxy/galaxy-ai/',
    domain: 'samsung.com',
  },
  {
    name: 'Brave Search',
    anbieter: 'Brave',
    nutzer: '50+ Mio. Suchen/Tag',
    relevanz: 'Liefert Daten an Claude. Datenschutzbewusste Patienten.',
    url: 'https://search.brave.com',
    domain: 'brave.com',
  },
  {
    name: 'DuckDuckGo',
    anbieter: 'DuckDuckGo',
    nutzer: '100 Mio. Suchen/Tag',
    relevanz: 'KI-Antworten ohne Tracking – im Gesundheitsbereich beliebt.',
    url: 'https://duckduckgo.com',
    domain: 'duckduckgo.com',
  },
]

export default function KiSystemeMarquee() {
  const doubled = [...kiSysteme, ...kiSysteme]

  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Ihre Ordination.{' '}
          <span className="text-primary">Sichtbar in allen KI-Systemen.</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Patienten suchen nicht mehr nur bei Google. Sie fragen ChatGPT, sprechen mit Siri, nutzen Perplexity.
          Wir sorgen dafür, dass Ihre Ordination überall dort empfohlen wird – mit einer einzigen, durchdachten technischen Basis.
        </p>
      </div>

      {/* Marquee strip */}
      <div className="relative marquee-container">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((ki, i) => (
            <a
              key={i}
              href={ki.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[196px] bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${ki.domain}&sz=64`}
                  alt={ki.name}
                  className="w-5 h-5 rounded-sm flex-shrink-0"
                />
                <p className="text-[14px] font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{ki.name}</p>
              </div>
              <p className="text-[11px] text-gray-400 mb-2">{ki.anbieter}</p>
              <p className="text-[13px] font-semibold text-primary mb-2">{ki.nutzer}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">{ki.relevanz}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Footer tagline */}
      <div className="text-center mt-10 px-6">
        <p className="text-[11px] sm:text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Schema Markup · llms.txt · Strukturierte Daten · Server-seitiges Rendering · Wikidata · IndexNow – eine technische Basis, die alle Plattformen abdeckt.
        </p>
      </div>
    </section>
  )
}
