import type { VergleichPaar } from '@/lib/content-types'

type Props = {
  item: VergleichPaar
  flipOrder?: boolean
}

export default function VergleichsPaar({ item, flipOrder = false }: Props) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-[11px] uppercase tracking-widest text-gray-400 text-center mb-3">
        Vergleich {item.nr}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#112080] text-center mb-8 leading-snug max-w-3xl mx-auto">
        {item.title}
      </h3>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
        {/* Linkes Bild (vorher) */}
        <div className={flipOrder ? 'md:order-2' : ''}>
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imgLeft}
              alt={item.imgLeftAlt}
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-white/90 text-gray-500 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
              vorher
            </div>
          </div>
          <p className="text-xs text-gray-500 italic mt-3 text-center">
            {item.imgLeftCaption}
          </p>
        </div>

        {/* Rechtes Bild (mit mypraxis.at) */}
        <div className={flipOrder ? 'md:order-1' : ''}>
          <div className="relative rounded-lg overflow-hidden shadow-lg ring-2 ring-[#ff8a00]/30 bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imgRight}
              alt={item.imgRightAlt}
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-[#ff8a00] text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
              mit mypraxis.at
            </div>
          </div>
          <p className="text-xs text-[#112080] italic mt-3 text-center font-semibold">
            {item.imgRightCaption}
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        {item.text}
      </p>
    </div>
  )
}
