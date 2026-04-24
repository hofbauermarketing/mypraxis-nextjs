import type { StartseitenContent } from '@/lib/content-types'

type Props = {
  data: StartseitenContent['befund']
}

export default function BefundKarte({ data }: Props) {
  return (
    <section className="px-6 py-20 bg-[#faf7f2] relative overflow-hidden">
      {/* Subtiles Ruled-Paper-Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, #112080 25%, #112080 26%, transparent 27%, transparent 74%, #112080 75%, #112080 76%, transparent 77%)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
            {data.kicker}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#112080] mb-3">
            {data.headline}
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">{data.sub}</p>
        </div>

        <div className="bg-white border-2 border-[#112080]/15 rounded-lg shadow-[0_20px_60px_-15px_rgba(17,32,128,0.15)] overflow-hidden">
          {/* Befund-Top-Bar */}
          <div className="bg-[#112080] text-white px-6 py-4 flex items-center justify-between font-mono">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#ffb347] mb-0.5">
                {data.befundTitel}
              </div>
              <div className="text-sm">
                Patient:in: <span className="text-white/80">{data.patient}</span>
              </div>
            </div>
            <div className="text-right text-xs text-white/60">
              <div>Datum:</div>
              <div>{data.datum}</div>
            </div>
          </div>

          {/* Schritte */}
          <div className="px-6 md:px-10 py-8 divide-y divide-dashed divide-[#112080]/15">
            {data.steps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-4 py-6 first:pt-0 last:pb-0"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#112080] text-white flex items-center justify-center text-xl font-bold font-mono">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <span className="text-lg font-bold text-[#112080] uppercase tracking-wide">
                      {step.title}
                    </span>
                    <span className="text-[10px] text-[#ff8a00] font-mono uppercase tracking-widest">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stempel-Zeile */}
          <div className="bg-[#faf7f2] border-t-2 border-dashed border-[#112080]/15 px-6 py-4 flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400">Stempel:</span>
            <span className="text-[#112080] font-semibold">{data.stamp}</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href={data.ctaHref}
            className="inline-flex items-center gap-2 text-[#ff8a00] hover:text-orange-600 text-sm font-semibold transition-colors"
          >
            {data.ctaText} →
          </a>
        </div>
      </div>
    </section>
  )
}
