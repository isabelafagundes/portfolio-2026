import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { onPointerGlow } from '../hooks/usePointerGlow'
import { Link } from '../router'

type Common = { children: ReactNode; variant?: 'fluid' | 'pill'; icon?: ReactNode }
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

/** Botão de vidro com borda iridescente animada e brilho que segue o cursor. */
export function GlassButton(props: AsLink | AsButton) {
  const { children, variant = 'pill', icon, className = '', ...rest } = props
  const cls = `glass-btn glass-btn--${variant} ${className}`
  const inner = (
    <>
      <span className="glass-btn__label">{children}</span>
      {icon && <span className="glass-btn__icon">{icon}</span>}
    </>
  )
  if (rest.href !== undefined) {
    const a = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
    // Rotas internas (/... ou #...) navegam sem recarregar a página
    const Tag = !a.target && /^[/#]/.test(a.href) ? Link : 'a'
    return (
      <Tag className={cls} onPointerMove={onPointerGlow} {...a}>
        {inner}
      </Tag>
    )
  }
  return (
    <button className={cls} onPointerMove={onPointerGlow} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  )
}
