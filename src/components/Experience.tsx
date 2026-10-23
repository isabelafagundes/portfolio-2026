import { useLang } from '../i18n/LangContext'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  const { t } = useLang()
  const e = t.experience
  return (
    <section className="section" id="experience">
      <SectionHeader index="02" label={e.label} title={e.title} />
      <div className="experience">
        <aside className="experience__company reveal">
          <h3 className="experience__name">{e.company}</h3>
          <p className="muted">{e.place}</p>
          <ol className="timeline">
            {e.roles.map((r, i) => (
              <li key={r.period} className={i === 0 ? 'is-current' : ''}>
                <span className="timeline__dot" aria-hidden="true" />
                <span className="timeline__title">{r.title}</span>
                <span className="timeline__period">{r.period}</span>
              </li>
            ))}
          </ol>
          <div className="education glass-card">
            <p className="eyebrow">{e.education.label}</p>
            <p className="education__course">{e.education.course}</p>
            <p className="muted">{e.education.school}</p>
          </div>
        </aside>
        <ul className="highlights">
          {e.highlights.map((h, i) => (
            <li
              key={i}
              className="highlight glass-card reveal"
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              onPointerMove={onPointerGlow}
            >
              <span className="highlight__num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{h.title}</h4>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
