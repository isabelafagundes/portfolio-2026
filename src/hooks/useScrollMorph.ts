import { useEffect, type RefObject } from 'react'

const clamp = (n: number) => Math.min(1, Math.max(0, n))
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Roda `update` a cada scroll/resize, no máximo uma vez por frame. */
function onScrollFrame(update: () => void, measure?: () => void) {
  let raf = 0
  const tick = () => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(update)
  }
  const resize = () => {
    measure?.()
    tick()
  }
  measure?.()
  update()
  window.addEventListener('scroll', tick, { passive: true })
  window.addEventListener('resize', resize)
  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('scroll', tick)
    window.removeEventListener('resize', resize)
  }
}

/**
 * As duas linhas do nome se afastam conforme a página rola: "Isabela" desliza para a
 * esquerda e "Fagundes" para a direita, enquanto o nome esmaece saindo do hero.
 */
export function useNameSplit(nameRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const name = nameRef.current
    if (!name || reduced()) return
    const [first, second] = Array.from(name.children) as HTMLElement[]
    if (!first || !second) return

    const update = () => {
      const p = clamp(window.scrollY / (window.innerHeight * 0.6))
      const d = p * Math.min(window.innerWidth * 0.1, 130)
      first.style.transform = p ? `translateX(${-d}px)` : ''
      second.style.transform = p ? `translateX(${d}px)` : ''
      name.style.opacity = p ? String(1 - p * 0.85) : ''
    }

    const stop = onScrollFrame(update)
    return () => {
      stop()
      first.style.transform = ''
      second.style.transform = ''
      name.style.opacity = ''
    }
  }, [nameRef])
}

/** Os celulares de cada card começam empilhados e abrem em leque conforme o card entra na tela. */
export function useFanOnScroll(selector: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length) return
    if (reduced()) {
      els.forEach((el) => el.style.setProperty('--fan', '1'))
      return
    }
    const update = () => {
      const vh = window.innerHeight
      els.forEach((el) => {
        const top = el.getBoundingClientRect().top
        el.style.setProperty('--fan', clamp((vh - top) / (vh * 0.55)).toFixed(3))
      })
    }
    return onScrollFrame(update)
  }, [selector])
}

/**
 * Parallax: define --par em cada elemento, de -1 (centro dele acima do centro da tela)
 * a 1 (abaixo). O CSS usa o valor para mover cada peça numa velocidade diferente.
 */
export function useParallax(selector: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length || reduced()) return
    const update = () => {
      const vh = window.innerHeight
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        const par = Math.min(1, Math.max(-1, (r.top + r.height / 2 - vh / 2) / vh))
        el.style.setProperty('--par', par.toFixed(3))
      })
    }
    return onScrollFrame(update)
  }, [selector])
}
