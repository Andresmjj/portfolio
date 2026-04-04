const projects = [
  {
    name: 'DoClio',
    summary:
      'Aplicativo web para el sector salud que conecta pacientes y profesionales de la salud.',
    detail:
      'Permite agendar citas con distintos prestadores de servicios con una experiencia clara y ordenada.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Docker'],
    accent:
      'from-sky-500/35 via-cyan-400/20 to-slate-950/60',
  },
  {
    name: 'QuerermeKatiar',
    summary:
      'E-commerce para la venta de productos helados y comidas rápidas.',
    detail:
      'Incluye carrito de compras, inventarios, roles, gestión de personal y administración de pedidos.',
    tech: ['React', 'Java', 'Spring Boot', 'MySQL', 'RabbitMQ'],
    accent:
      'from-yellow-500/30 via-teal-400/20 to-slate-950/60',
  },
]

export default function Experience() {
  return (
    <section id="proyectos" className="py-2">
      <article className="rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 sm:p-6">
        <header>
          <h2 className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Proyectos</h2>
        </header>
        <div className="mt-4 space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
              <div className={`h-1.5 w-24 rounded-full bg-linear-to-r ${project.accent}`} />
              <h3 className="mt-3 text-[1.65rem] font-semibold tracking-[-0.04em] text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-100">{project.summary}</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-200/76">{project.detail}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm text-slate-100/90 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
