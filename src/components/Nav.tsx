import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { useTheme } from '../hooks/useTheme'
import { Link, useRouter } from '../router'
import { ArrowIcon } from './icons'

const SECTIONS = ['about', 'experience', 'projects', 'stack'] as const
type Section = (typeof SECTIONS)[number] | 'contact'

/** Barra em três zonas: marca à esquerda, seções num vidro no centro, idioma, tema e contato à direita. */
export function Nav() {
  const { t, lang, setLang } = useLang()
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  // O nome completo só entra quando o nome grande do hero sai da tela (ou em páginas sem hero)
  const [named, setNamed] = useState(false)
  // Seção que está na leitura agora, para acender o neon do link
  const [active, setActive] = useState<Section | null>(null)
  // No celular os links ficam num painel de vidro que abre embaixo da barra
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 24)
      const hero = document.querySelector('.hero__name')
      setNamed(!hero || hero.getBoundingClientRect().bottom < 72)
      // Última seção cujo topo já passou de 40% da tela
      const line = window.innerHeight * 0.4
      let current: Section | null = null
      for (const id of [...SECTIONS, 'contact'] as const) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [path])

  // Fecha com Esc, com clique fora e ao voltar para o layout de desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onDown = (e: PointerEvent) => !navRef.current?.contains(e.target as Node) && setOpen(false)
    const mq = window.matchMedia('(min-width: 901px)')
    const onMq = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const themeLabel =
    lang === 'pt'
      ? theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
      : theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  const menuLabel = lang === 'pt' ? (open ? 'Fechar menu' : 'Abrir menu') : open ? 'Close menu' : 'Open menu'
  const close = () => setOpen(false)

  return (
    <header ref={navRef} className={`nav ${scrolled ? 'nav--scrolled' : ''} ${named ? 'nav--named' : ''} ${open ? 'nav--open' : ''}`}>
      <Link href="/" className="nav__brand" aria-label="Isabela Fagundes" onClick={close}>
        <span className="nav__mono" aria-hidden="true">IF</span>
        <span className="nav__name" aria-hidden="true">
          Isabela <i>Fagundes</i>
        </span>
      </Link>

      <nav className="nav__glass" aria-label={lang === 'pt' ? 'Principal' : 'Main'}>
        <ul className="nav__links" id="nav-links">
          {SECTIONS.map((id) => (
            <li key={id}>
              <Link href={`/#${id}`} aria-current={active === id ? 'location' : undefined} onClick={close}>
                {t.nav[id]}
              </Link>
            </li>
          ))}
          <li className="nav__links-contact">
            <Link href="/#contact" aria-current={active === 'contact' ? 'location' : undefined} onClick={close}>
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav__actions">
        <div className="nav__lang" role="group" aria-label="Idioma / Language">
          <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>
            PT
          </button>
          <span aria-hidden="true">/</span>
          <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
            EN
          </button>
        </div>
        <button type="button" className="nav__theme" aria-label={themeLabel} title={themeLabel} onClick={toggle}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <Link href="/#contact" className="nav__cta" onClick={close}>
          {t.hero.ctaContact}
          <ArrowIcon />
        </Link>
        <button
          type="button"
          className="nav__menu"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={menuLabel}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </svg>
)
