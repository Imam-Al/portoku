"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "Publications", href: "/#publications" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Achievemenets", href: "/#achievements" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink-50/95 backdrop-blur border-b border-ink-200 shadow-sm" : "bg-transparent"}`}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-14">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-base font-medium text-ink-900 tracking-tight hover:text-accent transition-colors"
        >
          {personal.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-1 text-ink-600 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ink-50 border-b border-ink-200 px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-mono text-ink-600 hover:text-accent border-b border-ink-100 last:border-0 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
