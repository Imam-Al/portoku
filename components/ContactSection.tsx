"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { personal } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollAnimation from "./ScrollAnimation";

export default function ContactSection() {
  return (
    <ScrollAnimation>
      <section id="contact" className="section-padding">
        <div className="container-max">
          <SectionHeader
            label="Say hello"
            title="Contact"
            subtitle="Open to research collaborations, internship opportunities, and interesting conversations about mathematics or computing."
          />

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Kotak Email */}
            <Link
              href={`mailto:${personal.email}`}
              className="group flex flex-col gap-3 p-6 border border-ink-200 rounded-xl bg-white hover:border-accent/50 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-0.5">
                  Email
                </p>
                <p className="text-sm font-medium text-ink-800 group-hover:text-accent transition-colors break-all">
                  {personal.email}
                </p>
              </div>
            </Link>

            {/* Kotak GitHub */}
            <Link
              href={personal.github}
              target="_blank"
              className="group flex flex-col gap-3 p-6 border border-ink-200 rounded-xl bg-white hover:border-accent/50 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Github size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-0.5">
                  GitHub
                </p>
                <p className="text-sm font-medium text-ink-800 group-hover:text-accent transition-colors">
                  @Imam-Al
                </p>
              </div>
            </Link>

            {/* Kotak LinkedIn */}
            <Link
              href={personal.linkedin}
              target="_blank"
              className="group flex flex-col gap-3 p-6 border border-ink-200 rounded-xl bg-white hover:border-accent/50 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Linkedin size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-0.5">
                  LinkedIn
                </p>
                <p className="text-sm font-medium text-ink-800 group-hover:text-accent transition-colors">
                  Muhammad Imam Al Paqih
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
