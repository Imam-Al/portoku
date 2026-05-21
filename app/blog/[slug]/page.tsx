import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return { title: `${post.title} — Blog` }
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="section-padding">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-400 hover:text-accent transition-colors mb-10">
          <ArrowLeft size={13} /> All posts
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs text-ink-400">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="font-mono text-xs text-ink-300">·</span>
          <span className="font-mono text-xs text-ink-400">{post.readingTime} read</span>
        </div>

        <h1 className="font-serif text-4xl font-medium text-ink-900 mb-4 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap gap-1.5 mb-10">
          {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="prose prose-ink text-ink-700 leading-relaxed space-y-4">
          <p className="text-lg text-ink-600">{post.excerpt}</p>
          <p className="text-ink-500 italic border-l-2 border-ink-200 pl-4">
            This is a placeholder. Replace the content in <code className="text-sm bg-ink-100 px-1 rounded">app/blog/[slug]/page.tsx</code> with your real post content, or use a CMS / MDX.
          </p>
        </div>
      </div>
    </div>
  )
}
