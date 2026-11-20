import Reveal from './Reveal'
import { mailtoUrl, profile, whatsappUrl } from '../data/profile'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="page-shell grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal as="p" className="section-label">
            Full Stack · enfoque en backend · Medellín
          </Reveal>

          <Reveal as="h1" id="hero-titulo" delay={60} className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[4.1rem]">
            {profile.name}
          </Reveal>

          <Reveal as="h2" delay={120} className="mt-6 text-xl font-medium tracking-[-0.02em] text-ink sm:text-2xl">
            {profile.headline}
          </Reveal>

          <Reveal as="p" delay={180} className="mt-5 max-w-2xl text-lg leading-8 text-ink/85">
            {profile.intro}
          </Reveal>

          <Reveal as="p" delay={240} className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Colaboro con DoClio desde junio de 2025 y, desde julio de 2026, como freelancer. En paralelo, creo e-commerce, 
            landing pages y soluciones con IA enfocadas en arquitecturas limpias y automatización.
          </Reveal>

          <Reveal delay={300} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.cv}
              download="Andres-Maldonado-CV.pdf"
              className="rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent"
            >
              Descargar CV
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent hover:bg-accent-soft"
            >
              Escribir por WhatsApp
            </a>
            <a href="#proyectos" className="px-2 py-3 text-sm text-muted transition-colors duration-150 hover:text-ink">
              Ver proyectos ↓
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="surface-card p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
              Disponible para proyectos
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Medellín, Colombia · {profile.availability.replace('Disponible para trabajo ', '')}
            </p>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Contacto directo</p>
              <a href={mailtoUrl} className="link-underline mt-2 block break-all text-sm text-ink">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="link-underline mt-1 block text-sm text-ink">
                {profile.phone}
              </a>
            </div>
            <p className="mt-6 text-xs leading-5 text-muted">
              Una página, la misma historia: la que cuenta mi hoja de vida.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
