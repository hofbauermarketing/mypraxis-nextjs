import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { getSortedPostsData } from '@/lib/blog'
import BlogCarousel from '@/components/BlogCarousel'
import KiSystemeMarquee from '@/components/KiSystemeMarquee'
import ScannerEmbed from '@/components/ScannerEmbed'

export const metadata = {
  alternates: {
    canonical: '/',
    languages: { 'de-AT': '/' },
  },
}

/** Inline brand helper: "my" always orange, "praxis.at" inherits parent color */
function Mp() {
  return (
    <>
      <span className="text-[#ff8a00]">my</span>praxis.at
    </>
  )
}

export default function HomePage() {
  const blogPosts = getSortedPostsData()
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc]">

        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.webp" alt="Digitales Netzwerk – KI-Sichtbarkeit für Arztpraxen in Österreich" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="absolute inset-0 hero-pattern" />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-30" />

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 right-[15%] w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/3 left-[8%] w-56 h-56 rounded-full bg-[#ff8a00]/10 blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-[35%] w-36 h-36 rounded-full bg-blue-300/10 blur-xl animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

        {/* Angular corner accent – top right */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-60">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="220,0 220,220 0,0" fill="rgba(255,255,255,0.025)" />
            <polyline points="90,0 220,0 220,130" stroke="rgba(255,138,0,0.18)" strokeWidth="1.5" fill="none" />
            <polyline points="150,0 220,0 220,70" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Angular corner accent – bottom left */}
        <div className="absolute bottom-14 left-0 pointer-events-none opacity-50">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 0,160 160,160" fill="rgba(255,255,255,0.02)" />
            <polyline points="0,100 0,160 60,160" stroke="rgba(255,138,0,0.12)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-28">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              Österreichs Spezialist für digitale Positionierung von Ärzt:innen
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-100">
            <span className="gradient-text">Ihre Ordination.</span>
            <br />
            <span className="text-white">Digital positioniert.</span>
            <br />
            <span className="text-[#ff8a00]">Von KI empfohlen.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Wir machen niedergelassene Ärztinnen und Ärzte dort sichtbar, wo Patienten heute und morgen suchen – in Suchmaschinen und KI-Systemen wie ChatGPT.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-300">
            {['✓ ÖÄK- & DSGVO-konform', '✓ Bis zu 30 % KMU.DIGITAL Förderung', '✓ KI-Readiness inklusive'].map(
              (badge) => (
                <span key={badge} className="glass-card text-white text-sm px-4 py-2 rounded-full">
                  {badge}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <a
              href="#kontakt"
              className="bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 animate-glow-orange"
            >
              Erstberatung vereinbaren
            </a>
            <a
              href="#demos"
              className="glass-card hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg transition-all"
            >
              Demoseiten ansehen
            </a>
          </div>

          <p className="mt-5 text-blue-300 text-sm animate-fade-in-up delay-500">Mo–Fr, 09:00–18:00 Uhr erreichbar</p>

          {/* Social Media Icons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up delay-500">
            <span className="text-white/50 text-xs font-medium">Hier mit mir persönlich Kontakt aufnehmen →</span>
            <a
              href="https://www.linkedin.com/in/kevin-hofbauer-b2660b274/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#005f93] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-black/20 hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035353760113"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877f2] hover:bg-[#1464d8] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-black/20 hover:scale-105"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hofbauer.mypraxis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-black/20 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)' }}
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
          </div>

          {/* KI systems text strip */}
          <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in-up delay-600">
            <p className="text-blue-400/50 text-xs tracking-[0.2em] uppercase">Wir optimieren für</p>
            <div className="flex items-center justify-center gap-2 flex-wrap max-w-lg mx-auto">
              {['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude', 'Copilot', 'Siri', 'Meta AI', 'Alexa'].map((name) => (
                <span key={name} className="text-white/55 text-xs px-2.5 py-1 border border-white/10 rounded-full">
                  {name}
                </span>
              ))}
              <span className="text-white/30 text-xs">& mehr</span>
            </div>
          </div>
        </div>

        {/* Zigzag divider – 3 wide gentle peaks */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            style={{ height: '70px' }}
          >
            <polygon
              points="0,70 0,52 240,12 480,52 720,12 960,52 1200,12 1440,52 1440,70"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <KiSystemeMarquee />

      {/* ===== PROBLEMVERSTÄNDNIS ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Das Problem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary leading-tight">
            Sie sind Experte in Ihrem Fach.
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="shimmer-text">Online merkt man das nicht.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Sie haben sich als Wahlärztin oder Wahlarzt selbstständig gemacht – für mehr Autonomie, mehr Zeit pro
            Patient, bessere Medizin. Ihre Expertise spricht für sich, Ihre Patienten empfehlen Sie weiter.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Aber: Wer Sie noch nicht kennt, findet Sie nicht. Nicht auf Google, nicht bei ChatGPT, nicht bei
            Perplexity. Und die nächste Generation an Patienten sucht genau dort –{' '}
            <strong className="text-primary">während Ihre Mitbewerber bereits sichtbar sind.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Gleichzeitig stehen Sie vor einem regulatorischen Minenfeld: ÖÄK-Werberichtlinien, DSGVO,
            Impressumspflicht, Barrierefreiheitsgesetz. Eine Website aufzusetzen, die nicht nur gut aussieht, sondern
            auch rechtskonform ist – das braucht Spezialwissen.
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-medium text-primary leading-relaxed">
            Wir bringen beides zusammen: Rechtskonformität und digitale Sichtbarkeit. Damit Ihre Ordination nicht nur
            existiert, sondern gefunden wird.
          </p>

          {/* Kevin's photo – person card */}
          <div className="mt-12 bg-gray-50 border border-gray-100 overflow-hidden shadow-md"
            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              <div className="sm:w-52 lg:w-64 relative overflow-hidden flex-shrink-0" style={{ minHeight: '220px' }}>
                <Image
                  src="/kevin.webp"
                  alt="Kevin Hofbauer – Gründer mypraxis.at"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 256px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/80 hidden sm:block" />
              </div>
              {/* Info */}
              <div className="flex-1 px-6 py-6 sm:py-8 flex flex-col justify-center">
                <div className="text-[#ff8a00] text-3xl font-serif leading-none mb-3 select-none">"</div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic mb-5">
                  Wir bringen beides zusammen – Rechtskonformität und digitale Sichtbarkeit. Damit Ihre Ordination
                  nicht nur existiert, sondern gefunden wird.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Kevin Hofbauer</p>
                    <p className="text-xs text-gray-500">
                      Gründer & Geschäftsführer ·{' '}
                      <span className="text-primary font-medium">
                        <Mp />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCAN ERFOLG ===== */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full">
              Eigener KI-Sichtbarkeits-Scan
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-primary">
            Was unser eigener Scanner über uns sagt.
          </h2>
          <p className="text-center text-gray-500 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Wir messen uns selbst an den gleichen Maßstäben, die wir auch bei unseren Kunden anlegen.
            Hier ist unser Scan-Ergebnis vom 25. Februar 2026 – unbearbeitet.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Website Score */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Website-Score</p>
                  <p className="text-5xl font-extrabold text-primary">95<span className="text-xl text-gray-400">/100</span></p>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">Stark</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Performance', score: '100/100', ok: true },
                  { label: 'Mobile', score: '100/100', ok: true },
                  { label: 'SEO', score: '75/100', ok: false, note: 'Optimiert ✔' },
                  { label: 'Vertrauen', score: '95/100', ok: false, note: 'UID ergänzt ✔' },
                  { label: 'Sicherheit', score: '100/100', ok: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.label}</span>
                    <div className="flex items-center gap-2">
                      {item.note && <span className="text-xs text-gray-400 italic">{item.note}</span>}
                      <span className={`font-semibold text-xs px-2 py-0.5 rounded-full ${item.ok ? 'bg-green-50 text-green-700' : 'bg-lime-100 text-lime-700'
                        }`}>{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KI Score */}
            <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl shadow-sm p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-1">KI-Sichtbarkeits-Score</p>
                  <p className="text-5xl font-extrabold">98<span className="text-xl text-blue-300">/100</span></p>
                </div>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">Sehr stark</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'ChatGPT', score: '99/100' },
                  { label: 'Google Gemini', score: '98/100' },
                  { label: 'Claude', score: '99/100' },
                  { label: 'Perplexity', score: '97/100' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-blue-200">{item.label}</span>
                    <span className="font-semibold text-xs px-2 py-0.5 rounded-full bg-white/15 text-white">{item.score}</span>
                  </div>
                ))}
              </div>
              <p className="text-blue-300 text-xs mt-4 italic">
                Strukturierte Daten, Antwort-Struktur, EEAT, Crawlability: alle Pillar-Scores maximal.
              </p>
            </div>
          </div>

          {/* Relaunch context */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-xl flex-shrink-0 mt-0.5">&#9432;</span>
              <div>
                <p className="text-amber-800 font-semibold text-sm mb-1">Hinweis: Website-Relaunch am 26. Februar 2026</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Diese Website wurde heute neu lanciert. Google-Indexierung und vollständige KI-Sichtbarkeit
                  sind Prozesse, die <strong>4–8 Wochen</strong> nach dem Launch realistisch messbar werden.
                  Der Scan bewertet die <em>technische Bereitschaft</em> – nicht den aktuellen Ranking-Status.
                  Google Business Profil sowie erste Medienberichte sind in Arbeit und folgen in Kürze.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Das ist der Standard, den wir für unsere Kunden anstreben.</strong>{' '}
              Wir liefern Websites, die nicht nur gut aussehen – sie sind technisch, inhaltlich und für KI-Systeme
              optimal aufgestellt. Lassen Sie Ihren kostenlosen Scan durchlaufen und sehen Sie, wo Ihre Ordination steht.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              {/* Static arrow left */}
              <svg className="w-5 h-5 text-[#ff8a00] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              {/* Pulsing button */}
              <a
                href="#scan"
                className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors animate-pulse hover:[animation:none]"
              >
                Jetzt kostenlos scannen
              </a>
              {/* Static arrow right */}
              <svg className="w-5 h-5 text-[#ff8a00] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEMO PREVIEWS ===== */}
      <section className="py-14 px-6 bg-white" id="demos">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Beispiel-Websites</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-3">So könnte Ihre Ordination aussehen.</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Klicken Sie auf ein Design – und sehen Sie es live in Aktion.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { href: '/demo/privatarzt-classic', img: '/demo-preview-classic.jpg', label: 'Classic Trust' },
              { href: '/demo/privatarzt-modern', img: '/demo-preview-modern.jpg', label: 'Modern Premium' },
              { href: '/demo/privatarzt-warm', img: '/demo-preview-warm.jpg', label: 'Warm & Persönlich' },
              { href: '/demo/aerztezentrum-classic', img: '/demo-preview-aerztezentrum.jpg', label: 'Ärztezentrum Classic' },
              { href: '/demo/aerztezentrum-premium', img: '/demo-preview-premium.jpg', label: 'Ärztezentrum Premium' },
            ].map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 block">
                <img src={d.img} alt={d.label} className="w-full object-cover object-top h-40 sm:h-44 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold truncate">{d.label}</span>
                <span className="absolute top-2 right-2 bg-white/90 text-[#1e3ab8] text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Ansehen →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WAS UNS UNTERSCHEIDET ===== */}

      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Decorative angled accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-50/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-orange-50/30 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Was uns unterscheidet
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
            Nicht einfach eine Website.
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
            <span className="shimmer-text">Eine digitale Positionierung.</span>
          </h2>
          <p className="text-center text-gray-500 mb-12 text-base sm:text-lg">
            Vier Gründe, warum Ärzte uns wählen
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Tiefenrecherche statt Template',
                text: 'Wir analysieren Ihr Fachgebiet, Ihren Werdegang, Ihre Region und Ihre Mitbewerber. Jeder Text auf Ihrer Website basiert auf echten Daten – nicht auf Platzhaltern.',
              },
              {
                icon: '🤖',
                title: 'KI-Sichtbarkeit statt nur Google',
                text: 'Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Wir implementieren strukturierte Daten, semantische Inhalte und llms.txt – damit Ihre Ordination in KI-Antworten genannt wird.',
              },
              {
                icon: '⚖️',
                title: 'Rechtskonform ohne Ihr Zutun',
                text: 'ÖÄK-Werberichtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz – wir kennen die Anforderungen und setzen sie um. Sie konzentrieren sich auf Ihre Patienten.',
              },
              {
                icon: '🎯',
                title: 'Wunschpatienten statt Laufkundschaft',
                text: 'Durch gezielte Positionierung erreichen Sie genau die Patienten, die zu Ihrer Spezialisierung passen. Nicht mehr Patienten – die richtigen Patienten.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100 card-hover angular-clip"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-blue-50 text-2xl flex-shrink-0"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAKETE ===== */}
      <section className="py-20 px-6 bg-white" id="leistungen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Leistungen & Preise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Zwei Wege zu Ihrer digitalen Praxis-Präsenz.
          </h2>
          <p className="text-center text-gray-500 mb-12 text-base sm:text-lg">
            Transparente Festpreise. Bis zu 30 % über KMU.DIGITAL förderbar.
          </p>

          {/* Praxis-Website & Digitale Positionierung – nebeneinander */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Paket 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200 card-hover flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Praxis-Website</h3>
              <p className="text-gray-500 mb-3 text-sm">Ihre professionelle Online-Präsenz.</p>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – sauber umgesetzt,
                ohne Kompromisse bei Qualität und Compliance.
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-1">€ 3.900</p>
              <p className="text-xs text-gray-400 mb-6">netto, einmalig</p>
              <ul className="space-y-2 text-gray-700 mb-8 flex-1 text-xs sm:text-sm">
                {[
                  'Bis 5 Seiten (Home, Über mich, Leistungen, Kontakt, Impressum)',
                  'Individuelles Design (kein Template)',
                  'Local SEO & Google Maps',
                  'DSGVO- & ÖÄK-konform',
                  'Basis Schema Markup',
                  'Mobile-Optimierung & SSL',
                  'Online-Terminbuchung (Anbindung)',
                  'Cookie-Banner & Impressum',
                  'Einschulung (Inhalte selbst ändern)',
                  'Domain-Verbindung & Hosting-Setup',
                  '12 Monate technische Betreuung',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-600">Paketpreis: € 3.900</p>
                <p className="text-xs text-orange-700 font-medium">KMU.DIGITAL (30 %): − € 1.170</p>
                <p className="text-sm font-bold text-orange-800">Ihr Eigenanteil: € 2.730</p>
              </div>
              <p className="text-xs text-gray-400 mb-4 italic">
                Ideal für Kassenärzte und Wahlärzte, die eine solide digitale Visitenkarte brauchen.
              </p>
              <a
                href="#kontakt"
                className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm"
              >
                Erstberatung anfordern
              </a>
            </div>

            {/* Paket 2 – Empfohlen */}
            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] rounded-2xl shadow-2xl p-6 sm:p-8 relative card-hover flex flex-col neon-border-orange">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff8a00] text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                EMPFOHLEN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Digitale Positionierung</h3>
              <p className="text-blue-200 mb-3 text-sm">Gefunden werden, wo Patienten suchen.</p>
              <p className="text-xs text-blue-200/90 mb-4 leading-relaxed">
                Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen. Wir recherchieren Ihr
                Fachgebiet, analysieren Ihren Wettbewerb und positionieren Sie in Google UND KI-Systemen.
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-1">€ 7.500</p>
              <p className="text-xs text-blue-300 mb-6">netto, einmalig</p>
              <ul className="space-y-2 text-blue-100 mb-8 flex-1 text-xs sm:text-sm">
                {[
                  'Alles aus Praxis-Website, plus:',
                  'Bis 10 Seiten (inkl. FAQ, Spezialisierungen, Ablauf)',
                  'Tiefenrecherche: Fachgebiet, Werdegang, Wettbewerber, Region',
                  'Zielgruppenanalyse (Wunschpatienten-Profil)',
                  'Maßgeschneiderte Texte (basierend auf Recherche)',
                  'Suchbegriff-Verifizierung (nur belegbare Aussagen)',
                  'KI-Readiness: Erweiterte strukturierte Daten (Schema Markup)',
                  'llms.txt Implementierung',
                  'KI-Sichtbarkeitsanalyse (Vorher/Nachher)',
                  'FAQ-System (reduziert Routine-Anrufe)',
                  '12 Monate technische Betreuung inkl. Updates',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 border border-white/20 rounded-xl p-3 mb-3 text-xs text-blue-200 flex items-start gap-2">
                <span className="text-[#ffaa40] flex-shrink-0 mt-0.5">＋</span>
                <span><span className="text-[#ffaa40] font-semibold">Optional:</span> KI-Telefonassistent – Setup & Konfiguration nach Aufwand zubuchbar</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
                <p className="text-xs text-blue-200">Paketpreis: € 7.500</p>
                <p className="text-xs text-[#ffaa40] font-medium">KMU.DIGITAL (30 %): − € 2.250</p>
                <p className="text-sm font-bold text-white">Ihr Eigenanteil: € 5.250</p>
              </div>
              <p className="text-xs text-blue-300 mb-4 italic">
                Nicht einfach eine Website – eine Strategie. Für Wahlärzte, die online die richtigen Patienten
                erreichen wollen.
              </p>
              <a
                href="#kontakt"
                className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-105 text-sm"
              >
                Erstberatung anfordern
              </a>
            </div>
          </div>

          {/* Paket 3 – Ärztezentren & PVEs (kompakter Enterprise-Strip) */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#0f1623]">
            <div className="flex flex-col sm:flex-row sm:items-stretch">

              {/* Titel-Block */}
              <div className="p-5 sm:w-52 lg:w-60 bg-gradient-to-br from-[#1a2845] to-[#0f1623] border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center gap-2">
                <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-[0.3em]">Enterprise</span>
                <h3 className="text-lg font-bold text-white leading-snug">Ärztezentren &amp; PVEs</h3>
                <p className="text-white/40 text-xs leading-relaxed">Individuelle digitale Infrastruktur für Ihr gesamtes Haus.</p>
              </div>

              {/* Feature-Chips */}
              <div className="flex-1 p-5 flex items-center">
                <div className="flex flex-wrap gap-2">
                  {[
                    'Zentrum-Strategie',
                    'Schema-Architektur',
                    'KI-Readiness',
                    'Arzt-Profilseiten',
                    'llms.txt',
                    'Förderberatung',
                    'Mehrsprachigkeit (opt.)',
                    'Technische Betreuung',
                  ].map((f) => (
                    <span key={f} className="text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA-Block */}
              <div className="p-5 sm:w-52 lg:w-60 bg-amber-500/5 border-t sm:border-t-0 sm:border-l border-white/10 flex flex-col justify-center gap-3 text-center">
                <div>
                  <p className="text-white/40 text-[11px]">Pro Arzt förderbar</p>
                  <p className="text-amber-400 text-xl font-extrabold">bis € 6.000</p>
                  <p className="text-white/25 text-[10px]">Bei 10 Ärzten → bis € 60.000</p>
                </div>
                <a
                  href="#kontakt"
                  className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-2.5 rounded-xl transition-all text-sm"
                >
                  Projekt besprechen
                </a>
              </div>

            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            Alle Preise verstehen sich als unverbindliche Richtpreise (netto, zzgl. USt.). Hosting und laufende Kosten
            individuell.
          </p>
        </div>
      </section>

      {/* ===== KI-SICHTBARKEIT ===== */}
      <section className="py-12 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden" id="ki">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 tech-grid opacity-20" />

        {/* Decorative SVG elements */}
        <div className="absolute top-10 left-10 pointer-events-none opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="118" height="118" stroke="white" strokeWidth="1" fill="none" />
            <rect x="20" y="20" width="80" height="80" stroke="rgba(255,138,0,0.6)" strokeWidth="0.8" fill="none" />
            <line x1="1" y1="60" x2="119" y2="60" stroke="white" strokeWidth="0.5" />
            <line x1="60" y1="1" x2="60" y2="119" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 pointer-events-none opacity-20 animate-spin-slow">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,2 78,60 2,60" stroke="rgba(255,138,0,0.8)" strokeWidth="1.5" fill="none" />
            <polygon points="40,20 64,58 16,58" stroke="white" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full">
              Ihr entscheidender Vorteil
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Werden Sie von ChatGPT empfohlen?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 text-center mb-0 max-w-3xl mx-auto leading-relaxed">
            Testen Sie es selbst: Fragen Sie ChatGPT nach einem Facharzt Ihrer Richtung in Ihrer Stadt. Werden Sie
            genannt? Falls nicht – und das betrifft über 90 % aller Ordinationen in Österreich – dann ist Ihre
            Online-Präsenz für KI-Systeme unsichtbar.
          </p>
        </div>
      </section>

      {/* ===== WEBSITE SCANNER ===== */}
      <section className="py-16 px-6 bg-[#0a0f1e]" id="scan">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#ff8a00]/20 border border-[#ff8a00]/30 text-[#ff8a00] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Kostenfreie Analyse · Regulärer Aufwand: € 199 · Heute für Sie: 0 € – und dennoch{' '}
              <span className="uppercase tracking-wide">UNBEZAHLBAR</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Gehören Sie zu den 10 % – oder zu den 90 %?
            </h2>
            <p className="text-white/50 text-sm italic mb-4">
              Was gibt es Schöneres als zu wissen, wo man ansetzen muss?
            </p>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              Jetzt in 2 Minuten herausfinden: Unser Scanner prüft, ob Ihre Ordination von Google, ChatGPT und
              Co. wirklich gefunden wird – inklusive konkreter Schwachstellen und Verbesserungsvorschläge.
              Der Bericht kommt direkt zu Ihnen. Kostenlos. Unverbindlich.
            </p>
          </div>

          {/* iframe */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            <ScannerEmbed />
          </div>

          <p className="text-center text-slate-500 text-xs mt-4">
            Der Bericht wird direkt an Sie gesendet – kein Anruf nötig, keine Verpflichtung.
          </p>
        </div>
      </section>

      {/* ===== DREI-SCHICHTEN-ANSATZ ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-10 text-center">
            Unser Drei-Schichten-Ansatz für KI-Sichtbarkeit
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                nr: '1',
                title: 'Strukturierte Daten',
                text: 'Maschinenlesbare Informationen über Ihre Fachrichtung, Leistungen und Standort. Google, Bing und KI-Systeme lesen diese Daten direkt aus.',
              },
              {
                nr: '2',
                title: 'Semantische Inhalte',
                text: 'Texte, die so formuliert sind, dass KI Ihre Expertise korrekt einordnen kann. Nicht SEO-Texte für Google – Antwort-optimierte Inhalte für KI.',
              },
              {
                nr: '3',
                title: 'llms.txt',
                text: 'Eine spezielle Datei, die KI-Crawler von OpenAI, Anthropic und Perplexity gezielt auslesen. Ihr digitales Profil für die KI-Suche.',
              },
            ].map((item) => (
              <div key={item.nr} className="glass-card rounded-2xl p-6 sm:p-8 text-center card-hover angular-clip-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ff8a00]/20 border border-[#ff8a00]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#ff8a00]">{item.nr}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-white">{item.title}</h4>
                <p className="text-blue-200 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Wenn ein Patient ChatGPT fragt{' '}
              <em>„Welcher Hautarzt in St. Pölten hat gute Bewertungen?"</em>, wird Ihre Ordination in der Antwort
              genannt – mit Ihrem Namen, Ihrer Fachrichtung und Ihrem Standort.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FÖRDERUNG ===== */}
      <section className="py-20 px-6 bg-gray-50" id="foerderung">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-orange-50 text-[#cc6600] text-sm font-semibold px-4 py-1.5 rounded-full">
              KMU.DIGITAL Förderung
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
            Bis zu 30 % Ihrer Investition kommt zurück.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Über das österreichische Förderprogramm KMU.DIGITAL erhalten niedergelassene Ärztinnen und Ärzte bis zu
            30 % der Investitionskosten als Förderung zurück. Maximal € 6.000 pro Unternehmen.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed">
            Voraussetzung ist eine einmalige Strategieberatung durch einen zertifizierten Digital Consultant (CDC).
            Kosten: ca. € 500 – davon werden 50 % (€ 250) ebenfalls gefördert. Wir arbeiten mit einem erfahrenen,
            externen Förderberater zusammen, der die gesamte Beratung und Antragstellung für Sie übernimmt.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 sm:p-5 text-gray-500 font-medium text-sm sm:text-base"></th>
                  <th className="text-center p-4 sm:p-5 text-primary font-bold text-sm sm:text-base">
                    Praxis-Website
                  </th>
                  <th className="text-center p-4 sm:p-5 text-primary font-bold text-sm sm:text-base">
                    Digitale Positionierung
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Paketpreis', v1: '€ 3.900', v2: '€ 7.500', bold: false },
                  { label: 'Förderung (30 %)', v1: '− € 1.170', v2: '− € 2.250', orange: true },
                  { label: 'Ihr Eigenanteil', v1: '€ 2.730', v2: '€ 5.250', bold: true },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0">
                    <td
                      className={`p-4 sm:p-5 text-sm sm:text-base ${row.bold ? 'font-bold text-gray-900' : 'text-gray-600'}`}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`p-4 sm:p-5 text-center text-sm sm:text-base ${row.bold ? 'font-bold text-base sm:text-lg' : ''} ${row.orange ? 'text-[#cc6600] font-medium' : ''}`}
                    >
                      {row.v1}
                    </td>
                    <td
                      className={`p-4 sm:p-5 text-center text-sm sm:text-base ${row.bold ? 'font-bold text-base sm:text-lg' : ''} ${row.orange ? 'text-[#cc6600] font-medium' : ''}`}
                    >
                      {row.v2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">
            Strategieberatung (CDC): ca. € 500, davon € 250 gefördert. Netto-Aufwand für Sie: ca. € 250.
          </p>
        </div>
      </section>

      {/* ===== PROZESS ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Ablauf
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-center text-primary">
            In vier Schritten zu Ihrer digitalen Praxis-Präsenz.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            {[
              {
                nr: '1',
                title: 'Erstgespräch (30 Min, kostenlos)',
                text: 'Wir lernen Ihre Ordination kennen: Fachrichtung, Positionierung, Ziele. Sie erzählen – wir hören zu.',
              },
              {
                nr: '2',
                title: 'Förderberatung & Freigabe',
                text: 'Unser externer Förderberater führt die KMU.DIGITAL Strategieberatung durch. Erst nach Förderzusage starten wir.',
              },
              {
                nr: '3',
                title: 'Recherche, Strategie & Umsetzung',
                text: 'Analyse Ihres Fachgebiets, Wettbewerbs und Ihrer Region – daraus entstehen Texte, Design, Technik und KI-Readiness.',
              },
              {
                nr: '4',
                title: 'Launch & Betreuung',
                text: 'Ihre Website geht online. Wir überwachen die KI-Sichtbarkeit und halten 12 Monate lang alles aktuell.',
              },
            ].map((step) => (
              <div key={step.nr} className="text-center relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white flex items-center justify-center mx-auto mb-5 text-lg sm:text-xl font-extrabold shadow-lg relative z-10"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                  {step.nr}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WER STECKT HINTER MYPRAXIS.AT ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Über uns
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            Wer steckt hinter <Mp />?
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              <Mp /> ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich.
              Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Wir erstellen rechtssichere Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für
              medizinische Einrichtungen und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie
              ChatGPT, Perplexity und Google AI Overviews.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Unsere Leistungen reichen von der Praxis-Website für Einzelordinationen über die komplette digitale
              Positionierung mit KI-Readiness bis zur interdisziplinären Infrastruktur für Ärztezentren und PVEs.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🇦🇹', label: 'Österreichisches Unternehmen' },
                { icon: '✅', label: 'Förderfähiger Digitalisierungspartner' },
                { icon: '🏛️', label: 'WKÖ / AWS akkreditiert' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-blue-50 text-primary text-sm font-medium px-4 py-2 rounded-full border border-blue-100"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEMO-SEITEN ===== */}
      <section className="py-16 px-6 bg-white" id="demos">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-50 text-[#cc6600] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Demo-Seiten
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-primary">So könnte Ihre Website aussehen</h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              3 Stile für Wahlarzt-Ordinationen, 2 für Ärztezentren – alle DSGVO-konform, KI-ready, ÖÄK-konform.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { href: '/demo/privatarzt-classic', label: 'Stil 1 – Classic Trust', name: 'Dr. Thomas Haas', fach: 'Innere Medizin', color: 'from-[#1e3ab8] to-[#2a50cc]' },
              { href: '/demo/privatarzt-modern', label: 'Stil 2 – Modern Premium', name: 'Dr. Julia Stern', fach: 'Dermatologie & Ästhetik', color: 'from-[#0a0f1e] to-[#1a1f3e]' },
              { href: '/demo/privatarzt-warm', label: 'Stil 3 – Warm & Persönlich', name: 'Dr. Anna Berger', fach: 'Kinderheilkunde', color: 'from-[#0d9488] to-[#0f766e]' },
            ].map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className={`h-20 bg-gradient-to-br ${d.color} flex items-end p-3`}>
                  <span className="text-white/60 text-[10px] font-mono">{d.label}</span>
                </div>
                <div className="p-4 bg-gray-50 group-hover:bg-white transition-colors">
                  <p className="font-bold text-gray-900 text-sm">{d.name}</p>
                  <p className="text-gray-400 text-xs">{d.fach}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { href: '/demo/aerztezentrum-classic', label: 'Stil 4 – Ärztezentrum Classic', name: 'Ärztezentrum Mariahilf', fach: '4 Fachrichtungen', color: 'from-[#1d4ed8] to-[#2563eb]' },
              { href: '/demo/aerztezentrum-premium', label: 'Stil 5 – Ärztezentrum Premium', name: 'MedCenter Alsergrund', fach: '8 Fachrichtungen', color: 'from-[#111827] to-[#1f2937]' },
            ].map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className={`h-20 bg-gradient-to-br ${d.color} flex items-end p-3`}>
                  <span className="text-white/60 text-[10px] font-mono">{d.label}</span>
                </div>
                <div className="p-4 bg-gray-50 group-hover:bg-white transition-colors">
                  <p className="font-bold text-gray-900 text-sm">{d.name}</p>
                  <p className="text-gray-400 text-xs">{d.fach}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="/demo" target="_blank" rel="noopener noreferrer"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-xl transition-all text-sm">
              Alle Demo-Seiten ansehen
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 px-6 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-primary">
            Häufige Fragen
          </h2>
          <div className="space-y-2">
            {[
              {
                q: 'Wie lange dauert es, bis meine Website bei Google sichtbar ist?',
                a: 'Zwischen 2 und 12 Wochen, abhängig von Fachrichtung, Region und Wettbewerb. Was sofort funktioniert: KI-Systeme wie ChatGPT und Perplexity lesen strukturierte Daten oft innerhalb weniger Tage aus. Google-Rankings folgen danach organisch.',
              },
              {
                q: 'Was kostet eine Website für Ärzte in Österreich?',
                a: 'Praxis-Website: € 3.900 netto. Digitale Positionierung mit KI-Readiness: € 7.500 netto. Über KMU.DIGITAL sind bis zu 30 % förderbar. Für Ärztezentren individuelle Konzepte auf Anfrage.',
              },
              {
                q: 'Was ist KI-Readiness und warum brauche ich das?',
                a: 'KI-Readiness beschreibt, wie gut Ihre Website für KI-Suchsysteme wie ChatGPT und Perplexity aufbereitet ist. Ohne strukturierte Daten wird Ihre Ordination dort schlicht nicht genannt – egal wie gut Ihre Website aussieht.',
              },
              {
                q: 'Wie beantrage ich die KMU.DIGITAL-Förderung?',
                a: 'In zwei Schritten: (1) Strategieberatung durch einen zertifizierten Digital Consultant (€ 500, davon € 250 gefördert). (2) Antrag auf Umsetzungsförderung (30 %, max. € 6.000). Wir begleiten Sie durch den gesamten Prozess.',
              },
              {
                q: 'Wie wird meine Praxis in ChatGPT oder Perplexity sichtbar?',
                a: 'Durch KI-lesbare Website-Struktur: Schema Markup, semantische Inhalte und eine llms.txt-Datei. KI-Assistenten lesen diese Daten aus und nennen Ihre Ordination in Antworten. Wer jetzt startet, hat einen echten First-Mover-Vorteil.',
              },
              {
                q: 'Was ist der Unterschied zwischen DocFinder / Herold und einer eigenen Website?',
                a: 'Portale geben Ihnen keine Kontrolle über Darstellung und Ranking. Ihre eigene Domain bleibt immer Ihnen – inklusive KI-Optimierung, eigener Marke und vollständiger Unabhängigkeit von Portalbedingungen.',
              },
              {
                q: 'Brauche ich technisches Know-how?',
                a: 'Nein. Wir übernehmen alles – von der Förderabwicklung bis zum Launch. Nach Fertigstellung erhalten Sie eine Einschulung, damit Sie einfache Änderungen selbst vornehmen können.',
              },
              {
                q: 'Ist die Website DSGVO-konform und ÖÄK-konform?',
                a: 'Ja. Cookiebanner, Datenschutzerklärung, EU-Hosting, ÖÄK-konforme Texte ohne marktschreierische Werbung. Unsere Kunden hatten bisher keine Beanstandungen.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm group overflow-hidden">
                <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 text-sm">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-secondary font-bold text-sm group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="text-gray-600 px-4 sm:px-5 pb-4 sm:pb-5 leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/faq" className="inline-flex items-center gap-2 text-[#1e3ab8] hover:text-[#1a33a8] font-semibold text-sm border border-[#1e3ab8]/20 hover:border-[#1e3ab8]/40 bg-white px-5 py-2.5 rounded-xl transition-all">
              📋 Alle Fragen & Antworten ansehen →
            </a>
            <a href="#kontakt" className="inline-flex items-center gap-2 text-[#ff8a00] hover:text-[#e67a00] font-semibold text-sm transition-colors">
              Frage nicht dabei? Schreiben Sie uns →
            </a>
          </div>

        </div>
      </section>

      {/* ===== BLOG VORSCHAU ===== */}
      <BlogCarousel posts={blogPosts} />

      {/* ===== KONTAKT / CTA ===== */}
      <section
        className="py-20 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden"
        id="kontakt"
      >
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 tech-grid opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff8a00]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/3 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Info */}
            <div>
              <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Kostenloses Erstgespräch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Bereit für Ihre<br />rechtssichere Praxis-Website?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-10 leading-relaxed">
                Vereinbaren Sie ein kostenloses Erstgespräch. 30 Minuten. Unverbindlich. Wir zeigen Ihnen, wie Ihre
                Ordination in KI-Systemen sichtbar wird.
              </p>

              <div className="space-y-4">
                {/* Phone Kevin */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+436641915447" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">
                      +43 664 191 5447
                    </a>
                    <p className="text-blue-300 text-xs">Kevin Hofbauer</p>
                  </div>
                </div>

                {/* Phone Jenny */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+436703019798" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">
                      +43 670 301 9798
                    </a>
                    <p className="text-blue-300 text-xs">Jenny</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:office@mypraxis.at" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">
                      office@mypraxis.at
                    </a>
                    <p className="text-blue-300 text-xs">Mo–Fr, 09:00–18:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-3">
                {['✓ Kostenlos & unverbindlich', '✓ 30 Min. Erstgespräch', '✓ Antwort innerhalb 1 Werktag'].map(
                  (b) => (
                    <span key={b} className="text-blue-200 text-xs bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                      {b}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 angular-clip-sm">
              <h3 className="text-white font-bold text-xl mb-6">Anfrage senden</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 bg-[#111827] text-gray-400">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 text-xs sm:text-sm leading-relaxed">
            <Mp /> ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich.
            Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich. Wir erstellen rechtssichere
            Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für medizinische Einrichtungen
            und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI
            Overviews.
          </p>
          <p className="mb-4 text-xs text-gray-600 leading-relaxed">
            Wir betreuen Ärztinnen und Ärzte aller Fachrichtungen: Allgemeinmedizin, Innere Medizin, Orthopädie,
            Kardiologie, Dermatologie, Gynäkologie, HNO, Urologie, Neurologie, Chirurgie, Augenheilkunde,
            Kinderheilkunde, Zahnmedizin, Alternativmedizin und alle weiteren Fachrichtungen.
          </p>
          <div className="text-xs text-gray-600 mb-6">
            <span>Hauptplatz 12, TOP 24, 3902 Vitis</span>
            <span className="mx-2">·</span>
            <a href="tel:+436641915447" className="hover:text-gray-400 transition-colors">
              +43 664 191 5447
            </a>
            <span className="mx-2">·</span>
            <span>
              Jenny:{' '}
              <a href="tel:+436703019798" className="hover:text-gray-400 transition-colors">
                +43 670 301 9798
              </a>
            </span>
            <span className="mx-2">·</span>
            <span>Mo–Fr, 09:00–18:00 Uhr</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm border-t border-gray-800 pt-6">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="mailto:office@mypraxis.at" className="hover:text-white transition-colors">
              office@mypraxis.at
            </a>
            <div className="flex items-center gap-3 sm:ml-auto">
              <a
                href="https://www.linkedin.com/in/kevin-hofbauer-b2660b274/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kevin Hofbauer auf LinkedIn"
                className="hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100035353760113"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kevin Hofbauer auf Facebook"
                className="hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <span className="text-gray-600">© {new Date().getFullYear()} Kevin Hofbauer e.U.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
