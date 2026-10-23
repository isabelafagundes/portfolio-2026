export function SectionHeader({ label, title, index }: { label: string; title: string; index: string }) {
  return (
    <header className="section-header reveal">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
    </header>
  )
}
