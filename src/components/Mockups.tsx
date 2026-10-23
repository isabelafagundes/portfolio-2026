import type { Lang } from '../i18n/content'
import type { Mockup } from '../i18n/projects'
import { imageSizes } from '../i18n/imageSizes'

/** srcset com as versões pré-redimensionadas (nome-360.webp, nome-540.webp...). */
function srcSet(src: string) {
  const widths = imageSizes[src]
  if (!widths || widths.length < 2) return undefined
  const base = src.replace(/\.webp$/, '')
  // A maior largura é o próprio arquivo base, sem sufixo
  return widths.map((w, i) => `${i === widths.length - 1 ? src : `${base}-${w}.webp`} ${w}w`).join(', ')
}

/** Versão pequena do print quando existir (nome-<largura>.webp); senão, o arquivo original. */
export function thumb(src: string, width: number) {
  return imageSizes[src]?.includes(width) ? src.replace(/.webp$/, `-${width}.webp`) : src
}

/** Texto claro sobre fundos escuros e vice-versa. */
function isDark(hex: string) {
  const n = parseInt(hex.slice(1), 16)
  return ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114 < 140
}

type PhoneProps = { src: string; alt: string; ratio?: number; tone: string }

/**
 * Moldura de celular. Os prints não têm barra de status, então a moldura desenha
 * uma (hora, sinal, bateria e ilha) acima da tela para a câmera não cobrir o app.
 */
export function PhoneFrame({ src, alt, ratio, tone }: PhoneProps) {
  const style = { '--tone': tone, '--status-ink': isDark(tone) ? '#f7ece6' : '#1a1626', ...(ratio && { '--ratio': ratio }) }
  return (
    <figure className="phone" style={style as React.CSSProperties}>
      <div className="phone__body">
      <div className="phone__screen">
        <div className="phone__status" aria-hidden="true">
          <span className="phone__time">9:41</span>
          <span className="phone__island" />
          <span className="phone__icons">
            <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
            <svg viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".45" /><rect x="2.5" y="2.5" width="16" height="7" rx="2" /><rect x="24" y="4" width="1.6" height="4" rx=".8" opacity=".45" /></svg>
          </span>
        </div>
        <div className="phone__content">
          <img src={src} srcSet={srcSet(src)} sizes="(max-width: 720px) 80vw, 340px" alt={alt} loading="lazy" decoding="async" />
        </div>
      </div>
      <span className="phone__glare" aria-hidden="true" />
      </div>
    </figure>
  )
}

/** Janela de navegador estilizada para prints de desktop. */
export function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <figure className="browser">
      <div className="browser__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p className="browser__url">{url}</p>
      </div>
      <img src={src} srcSet={srcSet(src)} sizes="(max-width: 720px) 92vw, 1000px" alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

export function MockupView({ mockup, lang, tone }: { mockup: Mockup; lang: Lang; tone: string }) {
  const alt = mockup.alt[lang]
  if (mockup.kind === 'browser') return <BrowserFrame src={mockup.src} alt={alt} url={mockup.url} />
  return <PhoneFrame src={mockup.src} alt={alt} ratio={mockup.ratio} tone={mockup.tone ?? tone} />
}

/** Grade com as telas extras e suas legendas (prints de desktop ocupam a linha inteira). */
export function Gallery({ items, lang, title, tone }: { items: Mockup[]; lang: Lang; title: string; tone: string }) {
  return (
    <section className="gallery reveal" aria-label={title}>
      <h2 className="case__label">{title}</h2>
      <ul className="gallery__grid">
        {items.map((m, i) => (
          <li key={i} className={`gallery__item gallery__item--${m.kind}`}>
            <MockupView mockup={m} lang={lang} tone={tone} />
            <p className="gallery__caption">
              <span>{String(i + 1).padStart(2, '0')}</span> {m.alt[lang]}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
