interface Props {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="mb-12">
      <p className="section-label">{label}</p>
      <h2 className="font-serif text-3xl font-medium text-ink-900 mb-3">{title}</h2>
      {subtitle && <p className="text-ink-500 max-w-xl leading-relaxed">{subtitle}</p>}
      <div className="mt-4 w-10 h-0.5 bg-accent rounded-full" />
    </div>
  )
}
