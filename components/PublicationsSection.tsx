import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { publications } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function PublicationsSection() {
  return (
    <section id="publications" className="section-padding border-b border-ink-200">
      <div className="container-max">
        <SectionHeader label="Scholarly" title="Publications" />
        <ol className="space-y-4">
          {publications.map((p, i) => (
            <li key={i} className="flex gap-4 items-start p-5 border border-ink-200 rounded-xl bg-white hover:border-accent/40 transition-colors">
              <span className="font-mono text-xs text-ink-300 mt-0.5 w-5 text-right flex-shrink-0">{i + 1}.</span>
              <div className="flex-1">
                <h3 className="font-serif text-base font-medium text-ink-900 mb-1">{p.title}</h3>
                <p className="text-sm text-ink-500 italic mb-2">{p.venue}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="tag">{p.type}</span>
                  <span className="font-mono text-xs text-ink-400">{p.year}</span>
                  {p.doi && (
                    <Link href={p.doi} target="_blank"
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline">
                      <ExternalLink size={11} /> DOI
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
