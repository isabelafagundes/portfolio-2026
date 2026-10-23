import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { links } from '../i18n/content'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { GlassButton } from './GlassButton'
import { CopyIcon, GithubIcon, LinkedinIcon, MailIcon, SparkIcon } from './icons'

export function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact__card glass-card glass-card--frost reveal" onPointerMove={onPointerGlow}>
        <span className="contact__spark">
          <SparkIcon size={40} />
        </span>
        <p className="eyebrow">
          <span className="eyebrow__index">05</span>
          {t.contact.label}
        </p>
        <h2 className="contact__title chrome-text">{t.contact.title}</h2>
        <p className="contact__text">{t.contact.text}</p>
        <div className="contact__actions">
          <GlassButton href={`mailto:${links.email}`} variant="fluid" icon={<MailIcon />}>
            {t.contact.cta}
          </GlassButton>
          <GlassButton type="button" onClick={copy} icon={<CopyIcon />} aria-live="polite">
            {copied ? t.contact.copied : t.contact.copy}
          </GlassButton>
        </div>
        <ul className="socials">
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${links.email}`}>
              <MailIcon /> {links.email}
            </a>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <span>© 2026 Isabela Fagundes</span>
        <span>{t.footer}</span>
      </footer>
    </section>
  )
}
