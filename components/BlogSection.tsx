import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding border-b border-ink-200">
      <div className="container-max">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            label="Writing"
            title="Blog"
            subtitle="Notes on mathematics, computing, and learning."
          />
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline mb-4"
          >
            All posts <ArrowRight size={13} />
          </Link>
        </div>

        <div className="space-y-px border border-ink-200 rounded-xl overflow-hidden">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 bg-white hover:bg-ink-50 transition-colors group border-b border-ink-100 last:border-0"
            >
              <div className="flex-1">
                <h3 className="font-serif text-base font-medium text-ink-900 group-hover:text-accent transition-colors mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-500 line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 flex-shrink-0">
                <span className="font-mono text-xs text-ink-400">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="font-mono text-xs text-ink-400">
                  {post.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
          >
            All posts <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
