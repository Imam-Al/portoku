import { Award, GraduationCap, Users } from "lucide-react";

import { achievements } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const icons = {
  academic: <GraduationCap size={14} />,
  organization: <Users size={14} />,
  teaching: <Award size={14} />,
} as const;

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-padding border-b border-ink-200"
    >
      <div className="container-max">
        <SectionHeader label="Recognition" title="Achievements" />

        <ol className="relative border-l border-ink-200 ml-4 space-y-10">
          {achievements.map((a, i) => (
            <li key={i} className="ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white">
                {icons[a.type as keyof typeof icons]}
              </span>

              <div>
                <h3 className="font-serif text-lg font-medium text-ink-900">
                  {a.title}
                </h3>

                <p className="font-mono text-xs text-accent mb-1">{a.org}</p>

                <p className="font-mono text-xs text-ink-400 mb-2">
                  {a.period}
                </p>

                <p className="text-sm text-ink-600 leading-relaxed max-w-xl">
                  {a.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
