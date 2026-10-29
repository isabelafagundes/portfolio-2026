import { useLang } from '../i18n/LangContext'
import { projects, type Project } from '../i18n/projects'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { useFanOnScroll } from '../hooks/useScrollMorph'
import { Link, projectPath } from '../router'
import { SectionHeader } from './SectionHeader'
import { ArrowIcon } from './icons'
import { thumb } from './Mockups'

/** Prints que aparecem no card: até 3 celulares no destaque (ou com `full`), 2 nos demais (ou desktop + celular). */
function shotsOf(p: Project, full = false) {
  const browser = p.mockups.find((m) => m.kind === 'browser')
  const phones = p.mockups.filter((m) => m.kind === 'phone')
  if (browser) return [browser, ...phones.slice(0, 1)]
  return phones.slice(p.featured || full ? 0 : 1, 3)
}

/** Celulares em leque (ou desktop + celular) de um projeto; `decorative` some para leitores de tela. */
export function ProjectShots({ project, full, decorative }: { project: Project; full?: boolean; decorative?: boolean }) {
  const { lang } = useLang()
  const shots = shotsOf(project, full)
  return (
    <div className={`project__shots project__shots--${shots.length}`} aria-hidden={decorative || undefined}>
      {shots.map((m) => (
        <span key={m.src} className={`project__shot project__shot--${m.kind}`}>
          <img
            src={thumb(m.src, m.kind === 'browser' ? 800 : 360)}
            alt={decorative ? '' : m.alt[lang]}
            loading="lazy"
            decoding="async"
          />
        </span>
      ))}
    </div>
  )
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
                <ProjectShots project={p} />
                <div className="project__body">
                  <p className="project__tagline">{c.tagline}</p>
                  <h3 className="project__name">{c.name}</h3>
                  <p className="project__desc">{c.summary}</p>
                  {/* Só o botão abre o projeto: tocar no resto do card não atrapalha o scroll */}
                  <Link href={projectPath(p.slug)} className="project__cta" aria-label={`${t.projects.viewCase}: ${c.name}`}>
                    {t.projects.viewCase} <ArrowIcon />
                  </Link>
                  <ul className="project__stack" aria-label={t.projects.stack}>
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
