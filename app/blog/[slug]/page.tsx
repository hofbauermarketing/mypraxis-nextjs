import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostData, formatDate } from '@/lib/blog'
import Navigation from '@/components/Navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  try {
    const post = await getPostData(slug)
    return {
      title: `${post.title} – mypraxis.at`,
      description: post.description,
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://www.mypraxis.at/blog/${slug}`,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        siteName: 'mypraxis.at',
      },
    }
  } catch {
    return { title: 'Artikel nicht gefunden – mypraxis.at' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = await getPostData(slug)
  } catch {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-14">
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Alle Artikel
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-blue-200 text-sm">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 mt-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <article
              className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-800 prose-a:text-[#1e3ab8] prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-gray-50 prose-th:text-gray-700 prose-td:text-gray-600 prose-hr:border-gray-200 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>

          {/* CTA below article */}
          <div className="mt-10 bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Kostenloses Erstgespräch vereinbaren</h3>
            <p className="text-blue-100 mb-6">
              30 Minuten, unverbindlich. Wir analysieren Ihre Online-Präsenz und zeigen, was konkret möglich ist.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Beratung vereinbaren
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-[#1e3ab8] hover:underline font-medium">
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 mypraxis.at – Hofbauer Marketing</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
