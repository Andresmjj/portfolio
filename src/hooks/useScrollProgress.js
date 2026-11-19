import { useEffect } from 'react'

/** Escribe el progreso de lectura en --scroll-progress sin setState por frame. */
export function useScrollProgress() {
  useEffect(() => {
    const root = document.documentElement
    let frame = null

    const update = () => {
      frame = null
      const scrollable = root.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      root.style.setProperty('--scroll-progress', Math.min(1, Math.max(0, progress)).toFixed(4))
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])
}
