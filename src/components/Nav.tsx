import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { Link } from '../router'

export function Nav() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    ['about', t.nav.about],
    ['experience', t.nav.experience],
    ['projects', t.nav.projects],
    ['contact', t.nav.contact],
  ] as const

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label={lang === 'pt' ? 'Principal' : 'Main'}>
      <Link href="/" className="nav__logo" aria-label="Isabela Fagundes">
        IF
      </Link>
      <ul className="nav__links">
        {items.map(([id, label]) => (
          <li key={id}>
            <Link href={`/#${id}`}>{label}</Link>
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
    </nav>
  )
}
