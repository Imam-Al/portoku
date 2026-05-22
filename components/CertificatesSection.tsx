import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollAnimation from "./ScrollAnimation";

export default function CertificatesSection() {
  return (
    <ScrollAnimation>
      <section
        id="certificates"
        className="section-padding border-b border-ink-200 bg-white"
      >
        <div className="container-max">
          <SectionHeader label="Credentials" title="Certificates" />
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((c, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 border border-ink-200 rounded-xl hover:border-accent/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award size={16} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-sm font-medium text-ink-900 group-hover:text-accent transition-colors mb-0.5">
                    {c.title}
                  </h3>
                  <p className="text-xs text-ink-500 mb-1">{c.issuer}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-400">
                      {c.year}
                    </span>
                    {c.url && (
                      <Link
                        href={c.url}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
                      >
                        <ExternalLink size={10} /> Verify
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
