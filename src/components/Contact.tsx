import { useState, type FormEvent } from 'react'
import { useLang } from '../i18n/LangContext'
import { links } from '../i18n/content'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { GlassButton } from './GlassButton'
import { ArrowIcon, CopyIcon, DocIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons'

/** Mesmo formulário do Formspree usado no portfolio em Flutter: a mensagem chega no e-mail. */
const FORM_ENDPOINT = 'https://formspree.io/f/mwplegwr'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const { t } = useLang()
  const f = t.contact.form
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `${f.subject}: ${data.name}` }),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact__card glass-card glass-card--frost reveal" onPointerMove={onPointerGlow}>
        <div className="contact__intro">
          <p className="eyebrow">
            <span className="eyebrow__index">05</span>
            {t.contact.label}
          </p>
          <h2 className="contact__title chrome-text">{t.contact.title}</h2>
          <p className="contact__text">{t.contact.text}</p>
          <div className="contact__actions">
            <GlassButton type="button" onClick={copy} icon={<CopyIcon />} aria-live="polite">
              {copied ? t.contact.copied : t.contact.copy}
            </GlassButton>
            <GlassButton href={links.resume} target="_blank" rel="noreferrer" icon={<DocIcon />}>
              {t.contact.resume}
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

        <form className="contact__form" onSubmit={send}>
          <div className="contact__row">
            <label className="field">
              <span className="field__label">{f.name}</span>
              <input className="field__input" name="name" type="text" autoComplete="name" required maxLength={120} />
            </label>
            <label className="field">
              <span className="field__label">{f.email}</span>
              <input className="field__input" name="email" type="email" autoComplete="email" required maxLength={160} />
            </label>
          </div>
          <label className="field">
            <span className="field__label">{f.message}</span>
            <textarea
              className="field__input field__input--area"
              name="message"
              rows={5}
              required
              maxLength={4000}
              placeholder={f.messagePlaceholder}
            />
          </label>
          {/* Armadilha para robôs: pessoas não veem nem preenchem este campo */}
          <input className="contact__trap" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="contact__submit">
            <GlassButton type="submit" variant="fluid" icon={<ArrowIcon />} disabled={status === 'sending'}>
              {status === 'sending' ? f.sending : f.send}
            </GlassButton>
            <p className={`contact__status contact__status--${status}`} role="status" aria-live="polite">
              {status === 'sent' && f.sent}
              {status === 'error' && f.error}
            </p>
          </div>
        </form>
      </div>
      <footer className="footer">
        <span>© 2026 Isabela Fagundes</span>
        <span>{t.footer}</span>
      </footer>
    </section>
  )
}
