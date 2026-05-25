import mainSkills from '../data/mainSkills.json'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-10">
      <article>
        <div className="grid gap-10 lg:items-start">
          <div>
            <p className='text-sm uppercase tracking-[0.28em] text-slate-300/75'>
              !Bienvenido, es un placer tener Aqui!</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
              Soy Andrés Maldonado Jiménez
            </h1>

            <h2 className="mt-3 text-xl font-medium text-slate-200/90 sm:text-2xl">
              Desarrollador Full Stack
            </h2>

            <figure className="mt-6 mx-auto mb-4 md:mt-0 md:float-right md:ml-6 md:mb-4">
              <img
                src="AndresPlastilina.png"
                alt="Andrés Maldonado, desarrollador Full Stack"
                loading="lazy"
                width={288}
                height={288}
                className="w-20 h-20 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border border-white/10 shadow-sm"
                style={{ shapeOutside: 'circle(50% at 50% 50%)', WebkitShapeOutside: 'circle(50% at 50% 50%)', clipPath: 'circle(50%)' }}
              />
              <figcaption className="sr-only">Andrés Maldonado, desarrollador Full Stack</figcaption>
            </figure>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg">
              Desarrollador de software enfocado en la construcción de aplicaciones web modernas y escalables, con experiencia principalmente en backend utilizando tecnologías como Node.js, Java y C#. Complemento mi perfil con conocimientos en frontend con React y Angular, además de fundamentos en DevOps y despliegue de aplicaciones con Docker.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-6 text-slate-200/78">
              Me apasiona el desarrollo de software y la creación de soluciones que aporten valor a problemas reales. Disfruto aprender constantemente, enfrentar nuevos retos y mejorar tanto a nivel técnico como profesional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {mainSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium tracking-wide text-slate-100/92 backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {skill.img && (
                    <img
                      src={skill.img}
                      alt={skill.name}
                      loading="lazy"
                      className="h-5 w-5 rounded-sm object-contain"
                    />
                  )}
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
