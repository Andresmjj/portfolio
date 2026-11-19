import Reveal from './Reveal'
import { journey } from '../data/profile'

export default function Journey() {
  return (
    <section id="trayectoria" aria-labelledby="trayectoria-titulo" className="py-20 sm:py-28">
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal as="p" className="section-label">
              Trayectoria
            </Reveal>
            <Reveal as="h2" id="trayectoria-titulo" delay={60} className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Una misma historia, de la API a la interfaz.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-5 max-w-md text-base leading-7 text-muted">
              Producto en producción, datos bien modelados y despliegues que se pueden
              repetir. Es el hilo de los tres lugares donde he trabajado.
            </Reveal>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-8">
          {journey.map((item, index) => (
            <Reveal key={item.id} as="article" delay={index * 80} className="surface-card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="section-label">{item.type}</p>
                <p className="text-xs text-muted">{item.period}</p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
              <p className="mt-4 text-base leading-7 text-ink/85">{item.description}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologías de ${item.title}`}>
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-ink">
                    {tag}
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
