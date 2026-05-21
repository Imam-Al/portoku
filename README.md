# Personal Portfolio — Next.js + Tailwind + Vercel

A professional academic portfolio for a mathematics student.

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (font, navbar, footer)
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles + Tailwind
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/page.tsx # Individual post
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionHeader.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ResearchSection.tsx
│   ├── PublicationsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── CertificatesSection.tsx
│   ├── BlogSection.tsx
│   └── ContactSection.tsx
└── lib/
    └── data.ts             # ← EDIT THIS FILE with your real info
```

## ✏️ Personalise

All content lives in **`lib/data.ts`**. Edit:

- `personal` — name, bio, links, email
- `skills` — skill categories and items
- `projects` — your projects
- `experience` — work, research, education timeline
- `research` — research topics
- `publications` — papers and talks
- `certificates` — credentials
- `blogPosts` — blog entries
  `.

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js

No environment variables needed for the base portfolio.

## 🎨 Customise Design

- **Colors** — edit `tailwind.config.js` (`ink` neutral palette, `accent` navy blue)
- **Fonts** — edit `app/layout.tsx` (change `next/font/google` import)
- **Sections** — add/remove imports in `app/page.tsx`

## 📝 Adding Real Blog Posts

Replace the placeholder in `app/blog/[slug]/page.tsx` with one of:

- **MDX** — install `@next/mdx` and write `.mdx` files in `/content/blog/`
- **Contentlayer** — structured MDX with type safety
- **Notion / Sanity / Contentful** — CMS-driven posts via API
