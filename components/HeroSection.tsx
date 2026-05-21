import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personal } from '@/lib/data'

export default function HeroSection() {
  return (
    <section id="about" className="section-padding border-b border-ink-200">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="section-label fade-up">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-ink-900 leading-tight mb-3 fade-up fade-up-1">
              {personal.name}
            </h1>
            <p className="font-mono text-sm text-accent mb-5 fade-up fade-up-2 tracking-wide">
              {personal.title} — {personal.subtitle}
            </p>
            <p className="text-ink-600 leading-relaxed mb-6 max-w-md fade-up fade-up-2">
              {personal.bio}
            </p>

            <div className="flex items-center gap-1.5 text-sm text-ink-400 mb-8 fade-up fade-up-3">
              <MapPin size={14} />
              <span>{personal.university}, {personal.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 fade-up fade-up-3">
              <Link href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-mono rounded hover:bg-accent-light transition-colors">
                <Mail size={14} /> Get in touch
              </Link>
              <Link href={personal.github} target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 border border-ink-300 text-ink-700 text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors">
                <Github size={14} /> GitHub
              </Link>
              <Link href={personal.linkedin} target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 border border-ink-300 text-ink-700 text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors">
                <Linkedin size={14} /> LinkedIn
              </Link>
            </div>
          </div>

          {/* Avatar / Decorative */}
          <div className="flex justify-center md:justify-end fade-up fade-up-2">
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              {personal.avatar ? (
                <img src={personal.avatar} alt={personal.name}
                  className="w-full h-full object-cover rounded-2xl border-2 border-ink-200 shadow-sm" />
              ) : (
                /* Decorative placeholder grid */
                <div className="w-full h-full rounded-2xl border border-ink-200 bg-ink-100 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="border border-ink-300" />
                    ))}
                  </div>
                  <span className="relative font-serif text-5xl text-ink-300 select-none">
                    {personal.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
              )}
              {/* Accent corner decoration */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-lg border-2 border-accent opacity-30" />
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded border-2 border-accent-muted opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
