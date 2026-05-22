import { Briefcase, GraduationCap, FlaskConical } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const icons = {
  research: <FlaskConical size={14} />,
  work: <Briefcase size={14} />,
  education: <GraduationCap size={14} />,
} as const;

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding border-b border-ink-200"
    >
      <div className="container-max">
        <SectionHeader label="Background" title="Experience" />
        <ol className="relative border-l border-ink-200 ml-4 space-y-10">
          {experience.map((e, i) => (
            <li key={i} className="ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white">
                {icons[e.type as keyof typeof icons]}
              </span>
              <div>
                <h3 className="font-serif text-lg font-medium text-ink-900">
                  {e.role}
                </h3>
                <p className="font-mono text-xs text-accent mb-1">{e.org}</p>
                <p className="font-mono text-xs text-ink-400 mb-2">
                  {e.period}
                </p>
                <p className="text-sm text-ink-600 leading-relaxed max-w-xl">
                  {e.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
