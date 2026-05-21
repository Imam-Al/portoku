import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50 py-10 px-6 md:px-12 lg:px-20 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-ink-500">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <Link href={personal.github} target="_blank" aria-label="GitHub"
            className="text-ink-400 hover:text-accent transition-colors"><Github size={17} /></Link>
          <Link href={personal.linkedin} target="_blank" aria-label="LinkedIn"
            className="text-ink-400 hover:text-accent transition-colors"><Linkedin size={17} /></Link>
          <Link href={`mailto:${personal.email}`} aria-label="Email"
            className="text-ink-400 hover:text-accent transition-colors"><Mail size={17} /></Link>
        </div>
      </div>
    </footer>
  )
}
