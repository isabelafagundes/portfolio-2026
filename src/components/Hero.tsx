import { useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { useNameSplit } from '../hooks/useScrollMorph'
import { GlassButton } from './GlassButton'
import { ArrowIcon, SparkIcon } from './icons'

export function Hero() {
  const { t } = useLang()
  const nameRef = useRef<HTMLHeadingElement>(null)
  useNameSplit(nameRef)
  return (
    <section className="hero" id="top">
      <div className="hero__main">
      <figure className="hero__photo">
        {/* Janela de terminal atrás da foto; o recorte passa por cima da borda superior */}
        <span className="hero__window" aria-hidden="true">
          <span className="hero__window-bar">
            <i />
            <i />
            <i />
            <span>~/isabela</span>
          </span>
          <code className="hero__window-code">
            <span>$ flutter run</span>
            <span>✓ Built app.apk</span>
            <span>$ go run ./api</span>
            <span>listening on :8080</span>
            <span>
              $ <b />
            </span>
          </code>
        </span>
        <img
          src="/me/cutout-800.webp"
          srcSet="/me/cutout-480.webp 480w, /me/cutout-800.webp 800w, /me/cutout-1200.webp 1200w"
          sizes="(max-width: 720px) 210px, 400px"
          alt={t.hero.photoAlt}
          width={1200}
          height={1600}
          fetchPriority="high"
        />
        {/* Elementos flutuando em volta da foto: etiqueta, peças de UI e cursor (decorativos) */}
        <span className="hero__tag" aria-hidden="true">
          <span className="hero__tag-dot" />
          Full-stack
        </span>
        <span className="hero__ui hero__ui--1" aria-hidden="true">
          <span className="hero__toggle" />
        </span>
        <span className="hero__ui hero__ui--2" aria-hidden="true">
          <span className="hero__swatches">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="hero__ui-label">#9B5CFF</span>
        </span>
        <span className="hero__ui hero__ui--3" aria-hidden="true">
          <span className="hero__type">Aa</span>
          <span className="hero__ui-label">Instrument Serif</span>
        </span>
        <svg className="hero__cursor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 3l14 7.5-6.2 1.6L10 18.5z" />
        </svg>
      </figure>
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">
          <SparkIcon size={12} /> {t.hero.eyebrow}
        </p>
        <h1 className="hero__name" ref={nameRef}>
          <span className="chrome-text">Isabela</span>
          <span className="chrome-text hero__name--italic">Fagundes</span>
        </h1>
        <p className="hero__role">{t.hero.role}</p>
        <p className="hero__intro">{t.hero.intro}</p>
        <div className="hero__actions">
          <GlassButton href="#projects" variant="fluid" icon={<ArrowIcon />}>
            {t.hero.ctaProjects}
          </GlassButton>
          <GlassButton href="#contact">{t.hero.ctaContact}</GlassButton>
        </div>
      </div>
      </div>
      <div className="hero__meta">
        <span>{t.hero.location}</span>
        <span className="hero__scroll" aria-hidden="true" />
        <span>Flutter · Go · Java · SQL</span>
      </div>
    </section>
  )
}
