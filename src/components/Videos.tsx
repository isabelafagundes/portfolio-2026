import { useEffect, useRef, useState } from 'react'
import type { Project } from '../i18n/projects'
import { SoundOffIcon, SoundOnIcon } from './icons'

type Video = NonNullable<Project['videos']>[number]

const ORIGIN = 'https://www.youtube-nocookie.com'

/** Vídeos do YouTube: horizontal à esquerda e Shorts ao lado, todos na mesma altura.
 *  Tocam sozinhos, sem som e em loop; só um pode estar com som por vez. */
export function Videos({ videos, title, note, labels, name }: { videos: Video[]; title: string; note: string; labels: { unmute: string; mute: string }; name: string }) {
  const [withSound, setWithSound] = useState<string | null>(null)

  return (
    <section className="videos reveal" aria-label={title}>
      <div className="videos__head">
        <h2 className="case__label">{title}</h2>
        <p className="videos__note">{note}</p>
      </div>
      <ul className="videos__grid">
        {videos.map((v, i) => (
          <li key={v.id} className={`videos__item videos__item--${v.kind}`}>
            <VideoEmbed
              video={v}
              title={`${name} (${i + 1}/${videos.length})`}
              sound={withSound === v.id}
              onToggleSound={() => setWithSound((s) => (s === v.id ? null : v.id))}
              labels={labels}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

/** O player só carrega quando chega perto da tela e pausa quando sai dela, para três vídeos não pesarem juntos.
 *  Com movimento reduzido, não toca sozinho e mostra os controles do YouTube. */
function VideoEmbed({ video, title, sound, onToggleSound, labels }: { video: Video; title: string; sound: boolean; onToggleSound: () => void; labels: { unmute: string; mute: string } }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)
  const [still] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)

  // Comando para o player via postMessage (API de iframe do YouTube)
  const command = (func: string) => frameRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), ORIGIN)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) setLoaded(true)
      },
      { rootMargin: '200px 0px', threshold: 0.2 },
    )
    io.observe(box)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (ready && !still) command(visible ? 'playVideo' : 'pauseVideo')
  }, [ready, visible, still])

  useEffect(() => {
    if (ready) command(sound ? 'unMute' : 'mute')
  }, [ready, sound])

  const params = new URLSearchParams({
    autoplay: still ? '0' : '1',
    mute: '1',
    loop: '1',
    playlist: video.id,
    controls: still ? '1' : '0',
    playsinline: '1',
    rel: '0',
    iv_load_policy: '3',
    disablekb: '1',
    enablejsapi: '1',
  })

  return (
    <div ref={boxRef} className={`videos__frame${still ? ' is-still' : ''}`}>
      {loaded && (
        <iframe
          ref={frameRef}
          src={`${ORIGIN}/embed/${video.id}?${params}`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          tabIndex={still ? 0 : -1}
          onLoad={() => setReady(true)}
        />
      )}
      {!still && (
        <button type="button" className={`videos__sound${sound ? ' is-on' : ''}`} onClick={onToggleSound} aria-pressed={sound} aria-label={`${sound ? labels.mute : labels.unmute}: ${title}`}>
          {sound ? <SoundOnIcon /> : <SoundOffIcon />}
        </button>
      )}
    </div>
  )
}
