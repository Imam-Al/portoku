import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Blog — Your Name' }

export default function BlogPage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-400 hover:text-accent transition-colors mb-10">
          <ArrowLeft size={13} /> Back home
        </Link>

        <p className="section-label">Writing</p>
        <h1 className="font-serif text-4xl font-medium text-ink-900 mb-3">Blog</h1>
        <div className="w-10 h-0.5 bg-accent rounded-full mb-12" />

        <div className="space-y-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="border-b border-ink-100 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-ink-400">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="font-mono text-xs text-ink-300">·</span>
                  <span className="font-mono text-xs text-ink-400">{post.readingTime} read</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-ink-900 group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-ink-500 leading-relaxed max-w-2xl mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
