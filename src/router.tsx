import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

type RouterValue = { path: string; navigate: (to: string) => void }

const RouterContext = createContext<RouterValue | null>(null)

function scrollToHash(hash: string) {
  if (!hash) return false
  const el = document.getElementById(decodeURIComponent(hash.slice(1)))
  el?.scrollIntoView()
  return !!el
}

/** Router mínimo baseado na History API: rotas `/` e `/projetos/:slug`. */
export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState({ path: window.location.pathname, hash: window.location.hash, key: 0 })

  useEffect(() => {
    history.scrollRestoration = 'manual'
    const onPop = () => setLocation((l) => ({ path: window.location.pathname, hash: window.location.hash, key: l.key + 1 }))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Após trocar de página: vai para a âncora (se houver) ou para o topo.
  useLayoutEffect(() => {
    if (!scrollToHash(location.hash)) window.scrollTo(0, 0)
  }, [location.key, location.path])

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin)
    if (url.pathname === window.location.pathname && url.hash) {
      history.pushState(null, '', url.pathname + url.hash)
      document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    history.pushState(null, '', url.pathname + url.hash)
    setLocation((l) => ({ path: url.pathname, hash: url.hash, key: l.key + 1 }))
  }, [])

  return <RouterContext.Provider value={{ path: location.path, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used inside RouterProvider')
  return ctx
}

/** Link interno: navega sem recarregar; mantém ctrl/cmd+clique abrindo em nova aba. */
export function Link({ href, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { navigate } = useRouter()
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(href)
  }
  return <a href={href} onClick={handle} {...rest} />
}

export const projectPath = (slug: string) => `/projetos/${slug}`
