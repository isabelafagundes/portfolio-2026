import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { useTheme } from '../hooks/useTheme'
import { Link } from '../router'

export function Nav() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  // No celular os links ficam num menu que abre dentro da própria pílula
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha com Esc, com clique fora e ao voltar para o layout de desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onDown = (e: PointerEvent) => !navRef.current?.contains(e.target as Node) && setOpen(false)
    const mq = window.matchMedia('(min-width: 721px)')
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

  const items = [
    ['about', t.nav.about],
    ['experience', t.nav.experience],
    ['projects', t.nav.projects],
    ['contact', t.nav.contact],
  ] as const

  const themeLabel =
    lang === 'pt'
      ? theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
      : theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  const menuLabel = lang === 'pt' ? (open ? 'Fechar menu' : 'Abrir menu') : open ? 'Close menu' : 'Open menu'

  return (
    <nav
      ref={navRef}
      className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}
      aria-label={lang === 'pt' ? 'Principal' : 'Main'}
    >
      <Link href="/" className="nav__logo" aria-label="Isabela Fagundes" onClick={() => setOpen(false)}>
        IF
      </Link>
      <ul className="nav__links" id="nav-links">
        {items.map(([id, label]) => (
          <li key={id}>
            <Link href={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lang-toggle" role="group" aria-label="Idioma / Language" data-pos={lang}>
        {(['pt', 'en'] as const).map((l) => (
          <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>
      <button type="button" className="nav__theme" aria-label={themeLabel} title={themeLabel} onClick={toggle}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
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
    </nav>
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
