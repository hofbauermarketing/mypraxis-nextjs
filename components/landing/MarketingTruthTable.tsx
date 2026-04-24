import type { StartseitenContent } from '@/lib/content-types'

type Props = {
  data: StartseitenContent['marketingTruth']
}

export default function MarketingTruthTable({ data }: Props) {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
            {data.kicker}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#112080] mb-3 leading-snug max-w-3xl mx-auto">
            {data.headline}
          </h2>
          <p className="text-lg md:text-xl text-[#ff8a00] font-semibold">
            {data.sub}
          </p>
          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            {data.leadIn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
          {/* Header-Zeilen */}
          <div className="bg-[#0a0f1e] text-gray-300 px-6 py-4">
            <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
              Was Ärzt:innen denken
            </div>
            <div className="text-sm italic">Die Suche läuft so:</div>
          </div>
          <div className="bg-[#ff8a00] text-white px-6 py-4">
            <div className="text-[10px] uppercase tracking-widest text-white/80 mb-1">
              Was Patient:innen wirklich googeln
            </div>
            <div className="text-sm italic">So läuft sie tatsächlich:</div>
          </div>

          {/* Paare */}
          {data.pairs.flatMap((p, i) => [
            <div
              key={`a${i}`}
              className="bg-white border-t border-gray-100 px-6 py-3 text-gray-500 text-sm font-mono"
            >
              „{p.arzt}"
            </div>,
            <div
              key={`b${i}`}
              className="bg-[#fffaf3] border-t border-gray-100 px-6 py-3 text-[#112080] text-sm font-mono font-semibold"
            >
              „{p.patient}"
            </div>,
          ])}
        </div>

        <p className="text-gray-700 text-center mt-10 max-w-3xl mx-auto leading-relaxed italic">
          {data.closer}
        </p>
      </div>
    </section>
  )
}
