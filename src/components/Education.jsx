import Reveal from './Reveal'
import { certifications, education } from '../data/profile'

export default function Education() {
  return (
    <section id="formacion" aria-labelledby="formacion-titulo" className="border-t border-line py-20 sm:py-28">
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal as="p" className="section-label">
              Formación
            </Reveal>
            <Reveal as="h2" id="formacion-titulo" delay={60} className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Base técnica, aprendida en la práctica.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-5 max-w-md text-base leading-7 text-muted">
              SENA me dio el oficio. La Ingeniería de Software y los proyectos propios
              me dieron el criterio para sostenerlo en producción.
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="surface-card divide-y divide-line px-6 sm:px-8">
            {education.map((item, index) => (
              <Reveal key={item.title} as="div" delay={index * 60} className="py-6">
                <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-2 text-xs text-muted">{item.period}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Reveal as="div" className="surface-card p-6" delay={180}>
              <p className="section-label">Certificación</p>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="surface-card p-6" delay={240}>
              <p className="section-label">Idiomas</p>
              <p className="mt-3 text-sm text-ink">Español nativo · Inglés B1</p>
              <p className="mt-2 text-xs text-muted">
                Lectura de documentación técnica y comunicación escrita.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
