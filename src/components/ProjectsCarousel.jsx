import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { projects } from '../data/profile'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function ProjectsCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const track = trackRef.current
    if (!track || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(Number(visible.target.dataset.slide))
      },
      { root: track, threshold: [0.35, 0.6, 0.85] },
    )

    track.querySelectorAll('[data-slide]').forEach((slide) => observer.observe(slide))

    return () => observer.disconnect()
  }, [])

  const goTo = (index) => {
    const track = trackRef.current
    if (!track) return

    const next = Math.max(0, Math.min(projects.length - 1, index))
    const slides = track.querySelectorAll('[data-slide]')
    const target = slides[next]
    if (!target) return

    const left =
      target.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft

    track.scrollTo({ left, behavior: reducedMotion ? 'auto' : 'smooth' })
    setActive(next)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(active - 1)
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(active + 1)
    }
  }

  const current = projects[active]

  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="border-t border-line py-20 sm:py-28">
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal as="p" className="section-label">
              Proyectos
            </Reveal>
            <Reveal as="h2" id="proyectos-titulo" delay={60} className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Tres proyectos, una misma forma de trabajar.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-5 max-w-md text-base leading-7 text-muted">
              Desliza para recorrerlos. En los tres repiten las mismas decisiones:
              cuidar el dato, hacer visible el error y desplegar sin sorpresas.
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <ul
              ref={trackRef}
              className="snap-row -mx-5 flex gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
              aria-label="Proyectos"
              aria-roledescription="carrusel"
              tabIndex={0}
              onKeyDown={onKeyDown}
            >
              {projects.map((project, index) => (
                <li
                  key={project.id}
                  data-slide={index}
                  className="snap-item w-[min(84vw,34rem)] shrink-0"
                  aria-label={`${index + 1} de ${projects.length}: ${project.title}`}
                >
                  <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-3xl font-semibold tracking-[-0.04em] text-line">
                        {project.number}
                      </span>
                      <span className="section-label">{project.kicker}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                    <p className="mt-4 text-base leading-7 text-ink/85">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-accent-soft px-3 py-1.5 text-xs text-ink">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-7 w-fit text-sm font-medium text-ink"
                    >
                      {project.link.label} ↗
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xs text-muted" aria-live="polite">
              {active + 1} / {projects.length}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Proyecto anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-accent-soft disabled:opacity-40"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === projects.length - 1}
                aria-label="Siguiente proyecto"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-accent-soft disabled:opacity-40"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-2" role="group" aria-label="Elegir proyecto">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a ${project.title}`}
                aria-current={active === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-200 ${
                  active === index ? 'w-6 bg-accent' : 'w-2 bg-line'
                }`}
              />
            ))}
          </div>

          <Reveal className="mt-10 border-t border-line pt-6">
            <p className="section-label">Lo que me llevo de cada proyecto</p>
            <p key={current.id} className="mt-3 max-w-2xl text-base leading-7 text-ink/85">
              {current.takeaway}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
