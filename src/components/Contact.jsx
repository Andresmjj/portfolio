import Reveal from './Reveal'
import { faqs, mailtoUrl, profile, whatsappUrl } from '../data/profile'

const channels = [
  {
    label: 'Descargar CV',
    value: 'Una página, la misma historia',
    href: profile.cv,
    download: 'Andres-Maldonado-CV.pdf',
  },
  {
    label: 'WhatsApp',
    value: profile.phone,
    href: whatsappUrl,
    external: true,
  },
  {
    label: 'Correo',
    value: profile.email,
    href: mailtoUrl,
  },
]

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="py-20 sm:py-28">
      <div className="page-shell">
        <Reveal className="rounded-xl border border-line bg-surface px-6 py-10 sm:px-10 sm:py-14">
          <p className="section-label">Contacto</p>
          <h2 id="contacto-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Hablemos de tu producto.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Si buscas alguien que cuide el dato y la interfaz, estoy disponible para
            conversar. Presencial, híbrido o remoto; lo que mejor funcione para el equipo.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                download={channel.download}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group rounded-lg border border-line p-5 transition-colors duration-150 hover:border-accent hover:bg-accent-soft"
              >
                <p className="section-label">{channel.label}</p>
                <p className="mt-3 break-words text-sm font-medium text-ink">{channel.value}</p>
                <span aria-hidden="true" className="mt-5 block text-accent transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-muted hover:text-ink">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-underline text-muted hover:text-ink">
              GitHub
            </a>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="text-sm font-semibold text-ink">Preguntas rápidas</h3>
            <dl className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-sm font-medium text-ink">{faq.question}</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
