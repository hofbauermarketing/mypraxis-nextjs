'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BlogPostMeta {
  slug: string
  title: string
  date: string
  description: string
  author: string
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('de-AT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categoryColors: Record<string, string> = {
  'was-kostet-website-arzt': 'bg-blue-100 text-blue-700',
  'website-wechsel-bedenken': 'bg-orange-100 text-orange-700',
  'ki-sichtbarkeit-aerzte': 'bg-purple-100 text-purple-700',
  'brauche-ich-website-als-arzt': 'bg-green-100 text-green-700',
  'dsgvo-arzt-website': 'bg-red-100 text-red-700',
  'barrierefreiheitsgesetz-aerzte': 'bg-yellow-100 text-yellow-700',
  'kmu-digital-foerderung-aerzte': 'bg-blue-100 text-blue-700',
  'docfinder-herold-google-vergleich': 'bg-orange-100 text-orange-700',
  'ki-telefonassistent-arztpraxis': 'bg-purple-100 text-purple-700',
}

const categoryLabels: Record<string, string> = {
  'was-kostet-website-arzt': 'Kosten & Förderung',
  'website-wechsel-bedenken': 'Website-Relaunch',
  'ki-sichtbarkeit-aerzte': 'KI-Sichtbarkeit',
  'brauche-ich-website-als-arzt': 'Website & Online-Präsenz',
  'dsgvo-arzt-website': 'DSGVO & Recht',
  'barrierefreiheitsgesetz-aerzte': 'DSGVO & Recht',
  'kmu-digital-foerderung-aerzte': 'Kosten & Förderung',
  'docfinder-herold-google-vergleich': 'Vergleich & Analyse',
  'ki-telefonassistent-arztpraxis': 'KI-Tools',
}

const gradients: Record<string, string> = {
  'KI-Sichtbarkeit': 'from-violet-600 to-purple-800',
  'Kosten & Förderung': 'from-blue-500 to-blue-700',
  'Website-Relaunch': 'from-orange-500 to-orange-700',
  'Website & Online-Präsenz': 'from-emerald-500 to-teal-700',
  'DSGVO & Recht': 'from-red-500 to-rose-700',
  'Vergleich & Analyse': 'from-amber-500 to-orange-700',
  'KI-Tools': 'from-indigo-500 to-violet-700',
}

export default function BlogGrid({ posts }: { posts: BlogPostMeta[] }) {
  const [search, setSearch] = useState('')

  const filtered = search.trim()
    ? posts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        (categoryLabels[p.slug] ?? '').toLowerCase().includes(search.toLowerCase())
      )
    : posts

  return (
    <>
      {/* Search */}
      <div className="mb-10 flex flex-col items-center gap-3">
        <div className="relative w-full max-w-lg">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Artikel suchen – z. B. KI, DSGVO, Kosten …"
            value={search}
            onChange={(e: { target: { value: string } }) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
        {search.trim() && (
          <p className="text-sm text-gray-400">
            {filtered.length} {filtered.length === 1 ? 'Ergebnis' : 'Ergebnisse'} für „{search}"
            {' · '}
            <button onClick={() => setSearch('')} className="text-blue-600 hover:underline">
              zurücksetzen
            </button>
          </p>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg mb-3">Keine Artikel gefunden.</p>
          <button onClick={() => setSearch('')} className="text-sm text-blue-600 hover:underline">
            Suche zurücksetzen
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => {
            const label = categoryLabels[post.slug] ?? 'Artikel'
            const gradient = gradients[label] ?? 'from-blue-600 to-blue-800'
            return (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group flex flex-col"
              >
                {/* Thumbnail placeholder with category */}
                <div className={`h-36 bg-gradient-to-br ${gradient} flex items-end p-4`}>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.slug] ?? 'bg-gray-100 text-gray-700'} bg-white/90`}>
                    {label}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1 p-5">
                  <p className="text-gray-400 text-xs mb-2">{formatDate(post.date)}</p>
                  <h2 className="text-[15px] font-bold text-gray-900 mb-2 group-hover:text-[#1e3ab8] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#1e3ab8] font-semibold text-xs">
                    <span>Artikel lesen</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      )}
    </>
  )
}
