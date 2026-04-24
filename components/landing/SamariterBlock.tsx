import type { StartseitenContent } from '@/lib/content-types'

type Props = {
  data: StartseitenContent['samariterFraming']
}

// Nur rendern wenn data.active === true (Kevin-Direktive: erst aktivieren, wenn Ärztekammer sich meldet)
export default function SamariterBlock({ data }: Props) {
  if (!data.active) return null

  return (
    <section className="px-6 py-16 bg-[#faf7f2]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
          {data.kicker}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#112080] mb-5 leading-snug max-w-2xl mx-auto">
          {data.headline}
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {data.text}
        </p>
      </div>
    </section>
  )
}
