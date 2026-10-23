import { useLang } from '../i18n/LangContext'
import { projects } from '../i18n/projects'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { useParallax } from '../hooks/useScrollMorph'
import { SectionHeader } from './SectionHeader'
import { thumb } from './Mockups'

/** A tela inicial de cada projeto (celular), para ilustrar o Sobre. */
const covers = projects.map((p) => {
  const phones = p.mockups.filter((m) => m.kind === 'phone')
  return { slug: p.slug, src: (phones.find((m) => m.src.includes('/home')) ?? phones[0]).src }
})

export function About() {
  const { t } = useLang()
  useParallax('.about__shots')
  return (
    <section className="section" id="about">
      <SectionHeader index="01" label={t.about.label} title={t.about.title} />
      <div className="about">
        <div className="glass-card glass-card--frost about__text reveal" onPointerMove={onPointerGlow}>
          <div className="about__copy">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {/* Fora do card e sobrepondo a borda; cada celular anda numa velocidade no scroll */}
        <div className="about__shots reveal" aria-hidden="true">
          {covers.map((c) => (
            <span key={c.slug} className="about__shot">
              <img src={thumb(c.src, 360)} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
