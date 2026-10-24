import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { useLang } from '../i18n/LangContext'
import { SectionHeader } from './SectionHeader'
import { techGlow, techIcons } from '../assets/tech'

type Key = { g: number; i: number }

export function Stack() {
  const { t } = useLang()
  // Uma tecnologia aberta por vez; a descrição flutua por cima, sem empurrar o grid
  const [open, setOpen] = useState<Key | null>(null)
  const tipRef = useRef<HTMLSpanElement>(null)

  // Mantém o pop-up dentro da tela quando a bolha está perto da borda
  useLayoutEffect(() => {
    const tip = tipRef.current
    if (!tip) return
    tip.style.setProperty('--shift', '0px')
    const r = tip.getBoundingClientRect()
    const pad = 16
    const shift = r.left < pad ? pad - r.left : r.right > innerWidth - pad ? innerWidth - pad - r.right : 0
    tip.style.setProperty('--shift', `${shift}px`)
  }, [open])

  const same = (a: Key | null, b: Key) => a?.g === b.g && a.i === b.i

  return (
    <section className="section" id="stack">
      <SectionHeader index="04" label={t.stack.label} title={t.stack.title} />
      {/* Esteira de logos: três cópias da lista lado a lado para o loop não ter emenda em telas largas */}
      <div className="stack__logos reveal">
        <div className="marquee">
          <div className="marquee__track">
            {[0, 1, 2].map((copy) => (
              <ul key={copy} className="marquee__list" aria-hidden={copy > 0 || undefined}>
                {Object.entries(techIcons).map(([name, src]) => (
                  <li key={name} className="marquee__item" data-tech={name} style={{ '--glow-c': techGlow[name] } as CSSProperties}>
                    <img src={src} alt="" width={44} height={44} />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="stack">
        {t.stack.groups.map((g, gi) => (
          <div
            key={gi}
            className={`stack__group reveal${open?.g === gi ? ' is-open' : ''}`}
            style={{ transitionDelay: `${gi * 100}ms` }}
          >
            <h3 className="stack__name">{g.name}</h3>
            <ul className="bubbles">
              {g.items.map((it, ii) => {
                const key = { g: gi, i: ii }
                const active = same(open, key)
                const tipId = `stack-tip-${gi}-${ii}`
                return (
                  <li
                    key={it.name}
                    className="bubbles__item"
                    onMouseEnter={() => setOpen(key)}
                    onMouseLeave={() => setOpen((o) => (same(o, key) ? null : o))}
                  >
                    <button
                      type="button"
                      className={`bubble${active ? ' is-active' : ''}`}
                      aria-describedby={active ? tipId : undefined}
                      onFocus={() => setOpen(key)}
                      onBlur={() => setOpen((o) => (same(o, key) ? null : o))}
                      onClick={() => setOpen(active ? null : key)}
                      onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}
                    >
                      {it.name}
                    </button>
                    {active && (
                      <span ref={tipRef} id={tipId} role="tooltip" className="stack__tip">
                        <strong>{it.name}</strong>
                        {it.desc}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <ul className="stack__extras reveal">
        {t.stack.extras.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  )
}
