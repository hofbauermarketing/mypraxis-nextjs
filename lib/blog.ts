import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  description: string
  author: string
  image?: string
  imageAlt?: string
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string
  readingTime: number
}

export function getSortedPostsData(): BlogPostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        author: data.author as string,
        image: data.image as string | undefined,
        imageAlt: data.imageAlt as string | undefined,
      }
    })
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostSlugs(): { slug: string }[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }))
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)

  const wordCount = content.trim().split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    author: data.author as string,
    image: data.image as string | undefined,
    imageAlt: data.imageAlt as string | undefined,
    contentHtml: processedContent.toString(),
    readingTime,
  }
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('de-AT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
