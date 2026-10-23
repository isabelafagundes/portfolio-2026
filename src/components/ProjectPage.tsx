import { useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import { projects, type Project } from '../i18n/projects'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { Link, projectPath } from '../router'
import { GlassButton } from './GlassButton'
import { Gallery, MockupView } from './Mockups'
import { ArrowIcon, GithubIcon, PlayIcon } from './icons'

export function ProjectPage({ project }: { project: Project }) {
  const { t, lang } = useLang()
  const c = project.copy[lang]
  const l = project.links
  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const browser = project.mockups.filter((m) => m.kind === 'browser')
  const others = project.mockups.filter((m) => m.kind !== 'browser')
  const ext = { target: '_blank', rel: 'noreferrer' }

  useEffect(() => {
    document.title = `${c.name} · Isabela Fagundes`
    return () => {
      document.title = 'Isabela Fagundes · Full-stack'
    }
  }, [c.name])

  return (
    <main className={`case case--${project.hue}`}>
      <header className="case__hero">
        <Link href="/#projects" className="case__back">
          <span aria-hidden="true">←</span> {t.projects.back}
        </Link>
        <div className="case__badges">
          <span className="project__badge">{c.badge}</span>
          <span className="case__tagline">{c.tagline}</span>
        </div>
        <h1 className="case__name chrome-text">{c.name}</h1>
        <p className="case__intro">{c.intro}</p>
        <div className="case__actions">
          {l.preview && (
            <GlassButton href={l.preview} {...ext} variant="fluid" icon={<ArrowIcon />}>
              {t.projects.preview}
            </GlassButton>
          )}
          {l.site && (
            <GlassButton href={l.site} {...ext} variant="fluid" icon={<ArrowIcon />}>
              {t.projects.site}
            </GlassButton>
          )}
          {l.store && (
            <GlassButton href={l.store} {...ext} icon={<PlayIcon />}>
              {t.projects.store}
            </GlassButton>
          )}
          {l.github?.map((g, i) => (
            <GlassButton key={g} href={g} {...ext} icon={<GithubIcon />}>
              {t.projects.code}
              {l.github!.length > 1 ? (i === 0 ? ' · Front' : ' · API') : ''}
            </GlassButton>
          ))}
        </div>
        <dl className="case__meta">
          {c.meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="showcase" aria-label={t.projects.gallery}>
        <div className="showcase__aura" aria-hidden="true" />
        {browser.length > 0 ? (
          <div className="showcase__combo">
            {browser.map((m, i) => (
              <MockupView key={i} mockup={m} lang={lang} tone={project.screenTone} />
            ))}
            {others.slice(0, 1).map((m, i) => (
              <MockupView key={i} mockup={m} lang={lang} tone={project.screenTone} />
            ))}
          </div>
        ) : (
          <div className="showcase__phones" data-count={others.length}>
            {others.map((m, i) => (
              <MockupView key={i} mockup={m} lang={lang} tone={project.screenTone} />
            ))}
          </div>
        )}
      </section>

      {project.gallery && <Gallery items={project.gallery} lang={lang} title={t.projects.gallery} tone={project.screenTone} />}

      <div className="case__content">
        <section className="case__block reveal">
          <h2 className="case__label">{c.context.title}</h2>
          <div className="case__text">
            {c.context.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="case__block reveal">
          <h2 className="case__label">{c.role.title}</h2>
          <div className="case__role">
            {c.role.intro && <p className="case__text">{c.role.intro}</p>}
            <ul className="case__list">
              {c.role.items.map((it, i) =>
                typeof it === 'string' ? (
                  <li key={i}>{it}</li>
                ) : (
                  <li key={i}>
                    <span>
                      <strong>{it.title}</strong>
                      {it.text}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        <section className="case__block case__block--wide reveal">
          <h2 className="case__label">{c.features.title}</h2>
          <ul className="case__cards">
            {c.features.items.map((f, i) => (
              <li key={i} className="glass-card case__card" onPointerMove={onPointerGlow}>
                <span className="highlight__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="case__block reveal">
          <h2 className="case__label">{c.decisions.title}</h2>
          <dl className="case__decisions">
            {c.decisions.items.map((d, i) => (
              <div key={i}>
                <dt>{d.title}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="case__block reveal">
          <h2 className="case__label">{t.projects.stack}</h2>
          <ul className="bubbles">
            {project.stack.map((s) => (
              <li key={s} className="bubble">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="case__block reveal">
          <h2 className="case__label">{c.outcome.title}</h2>
          <div className="case__text case__text--large">
            {c.outcome.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </div>

      <nav className="case__next reveal" aria-label={t.projects.next}>
        <Link href={projectPath(next.slug)} className={`next next--${next.hue}`} onPointerMove={onPointerGlow}>
          <span className="next__aura" aria-hidden="true" />
          <span className="eyebrow">{t.projects.next}</span>
          <span className="next__name">{next.copy[lang].name}</span>
          <span className="next__tagline">
            {next.copy[lang].tagline} <ArrowIcon />
          </span>
        </Link>
      </nav>

      <footer className="footer case__footer">
        <span>© 2026 Isabela Fagundes</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  )
}
