import { achievements } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollAnimation from "./ScrollAnimation";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const icons = {
  academic: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 10-10-5L2 10l10 5 10-5Z" />
      <path d="M6 12v5c3.3 2.7 8.7 2.7 12 0v-5M22 10v6" />
    </svg>
  ),
  organization: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  teaching: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 15 2 2 4-4" />
      <circle cx="12" cy="8" r="6" />
      <path d="M8.2 13.3 7 22l5-3 5 3-1.2-8.7" />
    </svg>
  ),
} as const;

export default function AchievementsSection() {
  return (
    <ScrollAnimation
      children={
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

                    <p className="font-mono text-xs text-accent mb-1">
                      {a.org}
                    </p>

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
      }
    />
  );
}
