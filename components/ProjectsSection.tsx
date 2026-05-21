import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding border-b border-ink-200">
      <div className="container-max">
        <SectionHeader
          label="Work"
          title="Projects"
          subtitle="Selected software projects combining mathematical ideas with practical implementation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <article key={p.id}
              className="group bg-white border border-ink-200 rounded-xl p-5 flex flex-col hover:border-accent/40 hover:shadow-sm transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs text-ink-400">{p.year}</span>
                {p.featured && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/8 px-2 py-0.5 rounded border border-accent/20">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg font-medium text-ink-900 mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-ink-100">
                {p.github && (
                  <Link href={p.github} target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500 hover:text-accent transition-colors">
                    <Github size={13} /> Code
                  </Link>
                )}
                {p.demo && (
                  <Link href={p.demo} target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500 hover:text-accent transition-colors">
                    <ExternalLink size={13} /> Live Demo
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
