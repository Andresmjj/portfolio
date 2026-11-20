import Reveal from './Reveal'
import { stats } from '../data/profile'

export default function Evidence() {
  return (
    <section aria-labelledby="evidencia-titulo" className="border-y border-line bg-surface">
      <div className="page-shell py-12 sm:py-16">
        <h2 id="evidencia-titulo" className="section-label">
          Evidencia verificada
        </h2>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} as="div" className="flex flex-col">
              <dt className="order-2 mt-2 text-sm font-medium text-ink">{stat.label}</dt>
              <dd className="order-1 text-3xl font-semibold text-ink sm:text-4xl">
                {stat.value}
                <span className="mt-2 block text-xs font-normal leading-5 ">
                  {stat.detail}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
