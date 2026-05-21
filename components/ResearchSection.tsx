import { research } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function ResearchSection() {
  return (
    <section id="research" className="section-padding border-b border-ink-200 bg-white">
      <div className="container-max">
        <SectionHeader
          label="Academic"
          title="Research"
          subtitle="Current and completed research interests in mathematics and computation."
        />
        <div className="space-y-6">
          {research.map((r, i) => (
            <article key={i} className="border border-ink-200 rounded-xl p-6 hover:border-accent/40 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="font-serif text-lg font-medium text-ink-900 flex-1">{r.title}</h3>
                <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
                  r.status === 'In progress'
                    ? 'text-amber-700 bg-amber-50 border-amber-200'
                    : 'text-green-700 bg-green-50 border-green-200'
                }`}>
                  {r.status}
                </span>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed mb-3">{r.abstract}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-400">
                <span>{r.year}</span>
                {r.collaborators.length > 0 && (
                  <span>with {r.collaborators.join(', ')}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
