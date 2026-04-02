const skills = ['Docker', 'NestJS', 'JAVA', 'SQL', 'React']

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-10">
      <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/7 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-white/15 sm:p-8 lg:p-10 lg:min-h-[75vh] lg:flex lg:flex-col lg:justify-center">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-300/75">Perfil profesional</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
              Full Stack Developer
            </h1>
            <h2 className="mt-3 text-xl font-medium text-slate-200/90 sm:text-2xl">
              Andres Maldonado Jimenez
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg">
              Soy un desarrollador full stack junior, con experiencia en la creación de aplicaciones web modernas, con tecnologías
              como React, NestJS, Java y SQL. Me apasiona construir soluciones técnicas que sean eficientes, escalables y
              fáciles de mantener.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-6 text-slate-200/78">
              Busco constantemente aprender nuevas tecnologías y mejorar mis habilidades para ofrecer el mejor resultado en
              cada proyecto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium tracking-wide text-slate-100/92 backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Resumen</p>
            <p className="mt-4 text-sm leading-7 text-slate-200/76 sm:text-base">
              Actualmente priorizo backend y arquitectura de software, con soporte en frontend cuando el proyecto lo requiere.
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Experiencia</p>
              <p className="mt-3 text-sm leading-7 text-slate-200/76">
                Desarrollo de aplicaciones web modernas con foco en estructura, escalabilidad y despliegue.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </section>
  )
}
