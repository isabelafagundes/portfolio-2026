import type { PointerEvent } from 'react'

/** Define --mx/--my no elemento para o brilho que segue o cursor. */
export function onPointerGlow(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
