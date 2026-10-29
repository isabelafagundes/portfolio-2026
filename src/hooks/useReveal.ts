import { useEffect } from 'react'

/** Adiciona `.is-visible` aos elementos `.reveal` quando entram na tela. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      // Revela assim que o topo do bloco entra na tela (não 15% dele): em blocos altos no
      // celular, isso fazia o conteúdo só ficar nítido depois de passar da metade da tela
      { threshold: 0, rootMargin: '0px 0px -6% 0px' },
    )
    const observe = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    observe()
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
