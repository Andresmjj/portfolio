import mainSkills from '../data/mainSkills.json'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-10">
      <article className="">
        <div className="grid gap-10  lg:items-start">
          <div>
            <p className='text-sm uppercase tracking-[0.28em] text-slate-300/75'>
              !Bienvenido, es un placer tener Aqui!</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
              Soy Andrés Maldonado Jiménez
            </h1>

            <h2 className="mt-3 text-xl font-medium text-slate-200/90 sm:text-2xl">
              Desarrollador Backend
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg">
              Con experiencia en la contruccion y mantenimiento de aplicaciones web, especialmente en el backend
              utilizando tecnologias como node.js, java o C#, ademas de poseer fundamentos en Frontend con React y Angular
              y DevOps Con Docker.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-6 text-slate-200/78">
              Me apasiona la contrucción de sofware, poder apaortar soluciónes a problemas reales y aprender en base a nuevos restos.
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
