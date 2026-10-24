import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const KEY = 'theme'

/** Tema escolhido salvo no navegador; o padrão é o escuro, a identidade original do site. */
function initial(): Theme {
  try {
    return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f0ec' : '#050508')
    try {
      localStorage.setItem(KEY, theme)
    } catch {}
  }, [theme])

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}
