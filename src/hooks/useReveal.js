import { useEffect } from 'react'

/**
 * Revela los elementos [data-reveal] una sola vez cuando entran en viewport.
 * Un único observer para toda la página evita un listener por elemento.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.setAttribute('data-visible', 'true'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])
}
