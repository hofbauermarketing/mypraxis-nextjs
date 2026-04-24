import Link from 'next/link'
import type { StartseitenContent } from '@/lib/content-types'

type Props = {
  data: StartseitenContent['fachgebieteStrip']
}

export default function FachgebieteStrip({ data }: Props) {
  return (
    <section id="fachgebiete-strip" className="px-6 py-20 bg-[#f3f1ec] scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#112080] leading-snug mb-3 max-w-3xl mx-auto">
            {data.headline}
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">{data.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.items.map((item) => (
            <Link
              key={item.slug}
              href={`/fachgebiete/${item.slug}`}
              className={`group bg-white border rounded-xl p-5 transition-all ${
                item.extra
                  ? 'border-[#ff8a00]/40 hover:border-[#ff8a00]/70 hover:shadow-md'
                  : 'border-gray-200 hover:border-[#112080]/40 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className={`font-semibold text-sm transition-colors ${
                  item.extra
                    ? 'text-[#112080] group-hover:text-[#1e3ab8]'
                    : 'text-[#112080] group-hover:text-[#1e3ab8]'
                }`}>
                  {item.shortName}
                </div>
                {item.extra && (
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#ff8a00] bg-[#ff8a00]/10 border border-[#ff8a00]/30 px-1.5 py-0.5 rounded">
                    {item.extraLabel || 'extra'}
                  </span>
                )}
              </div>
              <div className="text-[11px] text-gray-500 leading-snug mb-3">
                {item.teaser}
              </div>
              <div className={`text-[11px] font-semibold ${
                item.extra ? 'text-[#ff8a00]' : 'text-[#ff8a00]'
              }`}>
                Ansehen →
              </div>
            </Link>
          ))}
        </div>

        {/* Hinweis-Karte: Fachgebiet nicht dabei? */}
        <div className="mt-6 border border-dashed border-gray-300 bg-white/60 rounded-xl px-5 py-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-[#112080]">Ihr Fachgebiet nicht aufgeführt?</span>{' '}
            Die hier gezeigten Fachgebiete dienen als Beispiele. Für jedes andere Fachgebiet arbeiten wir das Strategiepapier eigenständig aus — individuell auf Ihre Ordination abgestimmt.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href={data.ctaHref}
            className="inline-block bg-[#112080] hover:bg-[#1e3ab8] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            {data.ctaText} →
          </Link>
        </div>
      </div>
    </section>
  )
}
