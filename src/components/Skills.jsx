import Reveal from './Reveal'
import { skillGroups } from '../data/profile'

export default function Skills() {
  return (
    <section aria-labelledby="stack-titulo" className="pb-20 sm:pb-28">
      <div className="page-shell">
        <Reveal as="p" className="section-label">
          Herramientas
        </Reveal>
        <Reveal as="h2" id="stack-titulo" delay={60} className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
          El stack que sostiene esos proyectos.
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} as="article" delay={index * 60} className="surface-card p-6">
              <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
