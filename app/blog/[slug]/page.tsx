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
        languages: { 'de-AT': `/blog/${slug}` },
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://www.mypraxis.at/blog/${slug}`,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        siteName: 'mypraxis.at',
        locale: 'de_AT',
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
  if (!post) notFound()

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://www.mypraxis.at/blog/${slug}#article`,
    headline: post.title,
    description: post.description,
    url: `https://www.mypraxis.at/blog/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'de-AT',
    author: {
      '@type': 'Person',
      '@id': 'https://www.mypraxis.at/#kevin-hofbauer',
      name: post.author,
      url: 'https://www.mypraxis.at',
      jobTitle: 'Digitalisierungsberater für Ärzte',
      worksFor: { '@id': 'https://www.mypraxis.at/#organization' },
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.mypraxis.at/#organization',
      name: 'mypraxis.at',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mypraxis.at/logo.webp',
        width: 140,
        height: 40,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.mypraxis.at/blog/${slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': 'https://www.mypraxis.at/blog#blog',
      name: 'mypraxis.at Blog – KI & Digitalisierung für Ärzte',
      url: 'https://www.mypraxis.at/blog',
    },
    timeRequired: `PT${post.readingTime}M`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'mypraxis.at', item: 'https://www.mypraxis.at' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mypraxis.at/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.mypraxis.at/blog/${slug}` },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-14">
          <div className="max-w-3xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-blue-200/70 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">mypraxis.at</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-blue-200 truncate max-w-[200px]">{post.title}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-blue-200 text-sm">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} Min. Lesezeit</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 mt-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <article
              aria-label={post.title}
              className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-800 prose-a:text-[#1e3ab8] prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-gray-50 prose-th:text-gray-700 prose-td:text-gray-600 prose-hr:border-gray-200 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>

          {/* CTA below article */}
          <div className="mt-10 bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Kostenloses Erstgespräch vereinbaren</h2>
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
          <span>© {new Date().getFullYear()} mypraxis.at – Hofbauer Marketing</span>
          <nav aria-label="Footer Navigation" className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
