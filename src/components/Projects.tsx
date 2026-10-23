import { useLang } from '../i18n/LangContext'
import { projects, type Project } from '../i18n/projects'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { useFanOnScroll } from '../hooks/useScrollMorph'
import { Link, projectPath } from '../router'
import { SectionHeader } from './SectionHeader'
import { ArrowIcon } from './icons'
import { thumb } from './Mockups'

/** Prints que aparecem no card: até 3 celulares no destaque, 2 nos demais (ou desktop + celular). */
function shotsOf(p: Project) {
  const browser = p.mockups.find((m) => m.kind === 'browser')
  const phones = p.mockups.filter((m) => m.kind === 'phone')
  if (browser) return [browser, ...phones.slice(0, 1)]
  return phones.slice(p.featured ? 0 : 1, p.featured ? 3 : 3)
}

export function Projects() {
  const { t, lang } = useLang()
  useFanOnScroll('.project__shots')
  return (
    <section className="section" id="projects">
      <SectionHeader index="03" label={t.projects.label} title={t.projects.title} />
      <div className="projects">
        {projects.map((p, i) => {
          const c = p.copy[lang]
          return (
            <article
              key={p.slug}
              className={`project project--${p.hue} ${p.featured ? 'project--featured' : ''} reveal`}
              onPointerMove={onPointerGlow}
            >
              <div className="project__aura" aria-hidden="true" />
              <div className="project__glass">
                <div className="project__top">
                  <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="project__badge">{c.badge}</span>
                </div>
                <div className={`project__shots project__shots--${shotsOf(p).length}`}>
                  {shotsOf(p).map((m) => (
                    <span key={m.src} className={`project__shot project__shot--${m.kind}`}>
                      <img
                        src={thumb(m.src, m.kind === 'browser' ? 800 : 360)}
                        alt={m.alt[lang]}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ))}
                </div>
                <div className="project__body">
                  <p className="project__tagline">{c.tagline}</p>
                  <h3 className="project__name">
                    {/* O link cobre o card inteiro via ::after */}
                    <Link href={projectPath(p.slug)} className="project__link">
                      {c.name}
                    </Link>
                  </h3>
                  <p className="project__desc">{c.summary}</p>
                  <ul className="chips">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="project__cta" aria-hidden="true">
                    {t.projects.viewCase} <ArrowIcon />
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
