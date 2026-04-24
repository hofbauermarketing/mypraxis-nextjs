'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/content-types'

type Props = {
  items: FaqItem[]
  title?: string
  sub?: string
  columns?: 1 | 2
}

export default function UnterseiteFaq({ items, title, sub, columns = 2 }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const isTwoCol = columns === 2

  return (
    <section className="px-6 py-16 bg-white">
      <div className={isTwoCol ? 'max-w-5xl mx-auto' : 'max-w-3xl mx-auto'}>
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#112080] leading-snug mb-3">
              {title}
            </h2>
            {sub && <p className="text-gray-500 text-sm max-w-2xl mx-auto">{sub}</p>}
          </div>
        )}

        <div
          className={
            isTwoCol
              ? 'grid md:grid-cols-2 gap-3 md:gap-4 auto-rows-min'
              : 'space-y-3'
          }
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                open === i
                  ? 'border-[#112080]/25 bg-white shadow-md'
                  : 'border-gray-200 bg-white hover:border-[#112080]/25'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black transition-colors ${
                      open === i
                        ? 'bg-[#112080] text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-bold text-[13px] sm:text-[15px] leading-snug transition-colors ${
                      open === i ? 'text-[#112080]' : 'text-[#07090f]'
                    }`}
                  >
                    {item.q}
                  </span>
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? 'bg-[#112080]' : 'bg-gray-100'
                  }`}
                  style={{
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <line
                      x1="6.5"
                      y1="1"
                      x2="6.5"
                      y2="12"
                      stroke={open === i ? 'white' : '#9ca3af'}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="1"
                      y1="6.5"
                      x2="12"
                      y2="6.5"
                      stroke={open === i ? 'white' : '#9ca3af'}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: open === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.28s ease',
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 pt-1 text-gray-600 text-[13px] sm:text-[14px] leading-relaxed border-t border-gray-100">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
