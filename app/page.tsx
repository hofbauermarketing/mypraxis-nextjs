import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { getSortedPostsData } from '@/lib/blog'
import BlogCarousel from '@/components/BlogCarousel'
import KiSystemeMarquee from '@/components/KiSystemeMarquee'
import ReferenzkundenSection from '@/components/ReferenzkundenSection'
import AskAiSection from '@/components/AskAiSection'

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
            {['✓ ÖÄK- & DSGVO-konform', '✓ Bis zu 30 % KMU.DIGITAL Förderung', '✓ KI-Lesbarkeit & Auffindbarkeit inklusive'].map(
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
              href="/preise"
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
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="shimmer-text">Online merkt man das nicht.</span>
          </p>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Sie haben sich als Wahlärztin oder Wahlarzt selbstständig gemacht – für mehr Autonomie, mehr Zeit pro
            Patient, bessere Medizin. Ihre Expertise spricht für sich, Ihre Patienten empfehlen Sie weiter.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Nur: <strong className="text-primary">97 % der Patienten recherchieren ihre nächste Ärztin oder ihren nächsten Arzt zuerst online</strong> – bevor sie auch nur anrufen. Wunschpatienten, die perfekt zu Ihrer Spezialisierung passen, suchen genau dort nach Ihnen.
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
                  Ärzte haben täglich genug Fachjargon. Mit uns reden Sie auf Augenhöhe – direkt, transparent, ohne Agentur-Blabla. Das Ergebnis: eine Ordination, die online so wirkt wie Sie offline.
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
        <div className="max-w-5xl mx-auto">
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

          <div className="bg-gradient-to-br from-[#0a0f1e] to-[#1a2845] rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Und Ihre Ordination?</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Werden Sie von ChatGPT empfohlen?
            </h3>
            <p className="text-blue-200/70 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              Fragen Sie ChatGPT nach einem Facharzt Ihrer Richtung in Ihrer Stadt. Werden Sie genannt?
              Falls nicht – das betrifft <strong className="text-white/80">über 90 % aller Ordinationen</strong> in Österreich.
            </p>
            <a
              href="/gratis-check"
              className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-7 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-orange-500/20"
            >
              Gratis Check starten →
            </a>
            <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Konto nötig · DSGVO-konform</p>
          </div>
        </div>
      </section>

      {/* ===== WAS UNS UNTERSCHEIDET ===== */}

      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Decorative angled accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-50/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-orange-50/30 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8 gap-6">
            <div>
              <span className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Was uns unterscheidet
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                Nicht einfach eine Website.{' '}
                <span className="shimmer-text">Eine digitale Positionierung.</span>
              </h2>
            </div>
            <p className="hidden sm:block text-gray-400 text-sm text-right flex-shrink-0">Vier Gründe,<br />warum Ärzte uns wählen</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: '🔍',
                title: 'Tiefenrecherche statt Template',
                text: 'Jeder Text basiert auf echten Daten – Fachgebiet, Werdegang, Region, Mitbewerber.',
              },
              {
                icon: '🤖',
                title: 'KI-Sichtbarkeit statt nur Google',
                text: 'Schema Markup, semantische Inhalte und llms.txt – damit KI-Assistenten Ihre Ordination nennen.',
              },
              {
                icon: '⚖️',
                title: 'Rechtskonform ohne Ihr Zutun',
                text: 'ÖÄK, DSGVO, Impressum, Barrierefreiheit – wir kennen die Anforderungen und setzen sie um.',
              },
              {
                icon: '🎯',
                title: 'Wunschpatienten statt Laufkundschaft',
                text: 'Nicht mehr Patienten – die richtigen Patienten für Ihre Spezialisierung.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 shadow-sm border border-gray-100 card-hover angular-clip-sm">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold mb-1.5 text-primary leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Killer-Vergleich */}
          <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Der Unterschied in einem Satz</p>
            <p className="text-primary font-bold text-lg sm:text-xl leading-snug">
              Andere Agenturen bauen Ihnen eine Website.
            </p>
            <p className="text-[#ff8a00] font-bold text-lg sm:text-xl leading-snug mt-1">
              Wir sorgen dafür, dass ChatGPT Ihre Ordination empfiehlt.
            </p>
          </div>
        </div>
      </section>

      {/* ===== REFERENZKUNDEN-PROGRAMM ===== */}
      <section className="py-20 px-6 bg-white" id="leistungen">
        <div className="max-w-6xl mx-auto">

          {/* Referenzkunden-Banner – animated */}
          <ReferenzkundenSection />

          {/* Was Sie bekommen – Features ohne Preise */}
          <div className="text-center mb-8">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Was Sie bekommen
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-primary">
              Handgemacht. Kein Template. Kein Baukasten.
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Jede Ordination ist anders – deshalb wird jede Website individuell entwickelt.
            </p>
          </div>

          {/* Feature Cards – kein Preis, nur Wert */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Karte 1: Praxis-Website */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200 card-hover flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Praxis-Website</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – individuell
                entwickelt, ohne Kompromisse bei Qualität und Compliance.
              </p>
              <ul className="space-y-2 text-gray-700 flex-1 text-xs sm:text-sm">
                {[
                  'Bis 5 Seiten (Home, Über mich, Leistungen, Kontakt, Impressum)',
                  'Individuelles Design – kein Template, kein Baukasten',
                  'Local SEO & Google Maps Einbindung',
                  'DSGVO- & ÖÄK-konform',
                  'Basis Schema Markup (strukturierte Daten)',
                  'Mobile-Optimierung & SSL',
                  'Online-Terminbuchung (Anbindung)',
                  'Cookie-Banner & Impressum',
                  'Einschulung – Inhalte selbst ändern',
                  'Domain-Verbindung & Hosting-Setup',
                  'Laufende Betreuung: mind. 6–12 Monate empfohlen',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm mt-6">
                Jetzt bewerben
              </a>
            </div>

            {/* Karte 2: Digitale Positionierung */}
            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] rounded-2xl shadow-2xl p-6 sm:p-8 relative card-hover flex flex-col neon-border-orange">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff8a00] text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                EMPFOHLEN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Digitale Positionierung</h3>
              <p className="text-blue-200 mb-4 text-sm leading-relaxed">
                Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen – in Google
                UND in KI-Systemen wie ChatGPT und Perplexity.
              </p>
              <ul className="space-y-2 text-blue-100 flex-1 text-xs sm:text-sm">
                {[
                  'Alles aus Praxis-Website, plus:',
                  'Bis 10 Seiten (inkl. FAQ, Spezialisierungen, Ablauf)',
                  'Tiefenrecherche: Fachgebiet, Wettbewerber, Region',
                  'Zielgruppenanalyse (Wunschpatienten-Profil)',
                  'Maßgeschneiderte Texte basierend auf Recherche',
                  'KI-Readiness: Erweiterte strukturierte Daten',
                  'llms.txt Implementierung',
                  'KI-Sichtbarkeitsanalyse (Vorher / Nachher)',
                  'FAQ-System (reduziert Routine-Anrufe)',
                  'Laufende Betreuung: mind. 6–12 Monate empfohlen',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 border border-white/20 rounded-xl p-3 mt-4 mb-4 text-xs text-blue-200 flex items-start gap-2">
                <span className="text-[#ffaa40] flex-shrink-0 mt-0.5">＋</span>
                <span><span className="text-[#ffaa40] font-semibold">Optional:</span> KI-Telefonassistent zubuchbar</span>
              </div>
              <a href="#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-105 text-sm">
                Jetzt bewerben
              </a>
            </div>
          </div>

          {/* Ärztezentren Strip */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#0f1623]">
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              <div className="p-5 sm:w-52 lg:w-60 bg-gradient-to-br from-[#1a2845] to-[#0f1623] border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center gap-2">
                <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-[0.3em]">3 Plätze im Programm</span>
                <h3 className="text-lg font-bold text-white leading-snug">Ärztezentren &amp; PVEs</h3>
                <p className="text-white/40 text-xs leading-relaxed">Digitale Infrastruktur für Ihr gesamtes Haus.</p>
              </div>
              <div className="flex-1 p-5 flex items-center">
                <div className="flex flex-wrap gap-2">
                  {['Zentrum-Strategie', 'Schema-Architektur', 'KI-Readiness', 'Arzt-Profilseiten', 'llms.txt', 'Förderberatung', 'Mehrsprachigkeit (opt.)', 'Technische Betreuung'].map((f) => (
                    <span key={f} className="text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
              <div className="p-5 sm:w-52 lg:w-60 bg-amber-500/5 border-t sm:border-t-0 sm:border-l border-white/10 flex flex-col justify-center gap-3 text-center">
                <p className="text-white/50 text-xs leading-relaxed">KMU.DIGITAL förderbar –<br />bis zu €&nbsp;6.000 pro Arzt</p>
                <a href="#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-2.5 rounded-xl transition-all text-sm">
                  Jetzt bewerben
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRATIS CHECK CTA ===== */}
      <section className="py-14 px-6 bg-[#0a0f1e]" id="scan">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#ff8a00]/20 border border-[#ff8a00]/30 text-[#ff8a00] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            100 % kostenlos · kein Konto nötig
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Wie gut ist Ihre Ordination<br />wirklich aufgestellt?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed mb-8">
            Zwei kostenlose Checks: Wird Ihre Praxis von ChatGPT & Co. gefunden?
            Und ist Ihre Website barrierefrei nach BaFG? Ergebnis in Sekunden.
          </p>
          <a
            href="/gratis-check"
            className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg animate-glow-orange"
          >
            Gratis Website-Analyse starten →
          </a>
          <p className="text-slate-500 text-xs mt-4">KI-Sichtbarkeit + Barrierefreiheit · Kein Download · DSGVO-konform</p>
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

      {/* ===== DEMOS EYECATCHER ===== */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Beispiel-Websites</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-2">5 Stile – alle live & klickbar</h2>
          <p className="text-center text-gray-500 text-sm mb-1">Diese Demos dienen ausschließlich der Anschauung – als Ausgangspunkt, nicht als Endprodukt.</p>
          <p className="text-center text-gray-400 text-xs mb-10">Farben, Typografie, Struktur und Inhalte werden für jede Ordination von Grund auf neu entwickelt.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {[
              { href: '/demo/privatarzt-classic', img: '/demo-preview-classic.jpg', label: 'Classic Trust', desc: 'Seriös & vertrauenserweckend' },
              { href: '/demo/privatarzt-modern', img: '/demo-preview-modern.jpg', label: 'Modern Premium', desc: 'Dunkel, hochwertig, mutig' },
              { href: '/demo/privatarzt-warm', img: '/demo-preview-warm.jpg', label: 'Warm & Persönlich', desc: 'Einladend & menschlich' },
              { href: '/demo/aerztezentrum-classic', img: '/demo-preview-aerztezentrum.jpg', label: 'Ärztezentrum Classic', desc: 'Übersichtlich & institutionell' },
              { href: '/demo/aerztezentrum-premium', img: '/demo-preview-premium.jpg', label: 'Ärztezentrum Premium', desc: 'Modern & corporate' },
            ].map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block">
                <img src={d.img} alt={d.label} className="w-full object-cover object-top h-44 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-bold leading-tight">{d.label}</p>
                  <p className="text-white/70 text-[10px]">{d.desc}</p>
                </div>
                <span className="absolute top-2 right-2 bg-[#ff8a00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Ansehen →</span>
              </a>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs">
            Keiner dieser Stile trifft es genau?{' '}
            <a href="/preise" className="text-primary font-semibold hover:underline">Alle Demos & Programm ansehen →</a>
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
                title: 'Konzept & Strategie',
                text: 'Wir analysieren Ihr Fachgebiet, Ihre Region und Ihre Mitbewerber. Daraus entsteht ein konkretes Konzept – bevor eine Zeile Code geschrieben wird.',
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
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Unsere Leistungen reichen von der Praxis-Website für Einzelordinationen über die komplette digitale
              Positionierung mit KI-Readiness bis zur interdisziplinären Infrastruktur für Ärztezentren und PVEs.
            </p>
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

      {/* ===== KI FRAGEN ===== */}
      <AskAiSection />

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
              <p className="text-base sm:text-lg text-blue-100 mb-6 leading-relaxed">
                Vereinbaren Sie ein kostenloses Erstgespräch. 30 Minuten. Unverbindlich. Wir zeigen Ihnen, wie Ihre
                Ordination in KI-Systemen sichtbar wird.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Auf Augenhöhe', 'Transparent & direkt', 'Antwort in 1 Werktag'].map((t) => (
                  <span key={t} className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                    ✓ {t}
                  </span>
                ))}
              </div>

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
