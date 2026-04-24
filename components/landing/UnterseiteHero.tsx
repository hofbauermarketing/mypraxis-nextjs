import Link from 'next/link'

type Props = {
  pille: string
  h1: string
  sub: string
  ctaHref: string
  ctaLabel: string
  image?: string
}

export default function UnterseiteHero({
  pille,
  h1,
  sub,
  ctaHref,
  ctaLabel,
  image,
}: Props) {
  return (
    <section className="relative text-white px-6 py-20 md:py-28 overflow-hidden">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </>
      )}
      {/* Layer 1 · Haupt-Overlay (sehr stark) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07090f]/98 via-[#0a1340]/95 to-[#07090f]/98" />
      {/* Layer 2 · zusätzlicher vertikaler Verlauf für Text-Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/75 via-[#07090f]/55 to-[#07090f]/85 pointer-events-none" />
      {/* Layer 3 · Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2.5 bg-[#ff8a00]/25 border border-[#ff8a00]/50 text-[#ffb347] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a00]" />
          {pille}
        </div>

        {/* Lesbarer Content-Container mit dezenter dunkler Überlagerung + Backdrop-Blur */}
        <div className="inline-block bg-[#07090f]/40 backdrop-blur-[3px] rounded-sm px-4 md:px-6 py-4 md:py-5 mb-2 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            {h1}
          </h1>

          <p className="text-base md:text-xl text-white mb-0 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            {sub}
          </p>
        </div>
        <div className="mb-10" />

        {/* CTA dezent + kantig (kein fettes Orange, weil schon in der Nav oben rechts) */}
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white border border-white/30 hover:border-[#ff8a00] px-6 py-3 transition-all"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          }}
        >
          {ctaLabel}
          <span className="text-[#ff8a00]">→</span>
        </Link>
      </div>
    </section>
  )
}
