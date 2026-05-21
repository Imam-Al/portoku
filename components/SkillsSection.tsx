import { skills } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding border-b border-ink-200 bg-white">
      <div className="container-max">
        <SectionHeader label="Competencies" title="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(s => (
            <div key={s.category} className="border border-ink-200 rounded-xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">{s.category}</h3>
              <ul className="space-y-1.5">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
