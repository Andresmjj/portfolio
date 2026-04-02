const studies = [
  {
    title: 'Tecnólogo en análisis y desarrollo de sistemas',
    detail: 'Formación enfocada en construcción de software, creación de bases de datos y desarrollo de aplicaciones web.',
  },
  {
    title: 'Técnico en sistemas',
    detail: 'Base técnica en informática, con conocimiento en hardware, software, soporte técnico y redes.',
  },
]

export default function Education() {
  return (
    <section className="py-0">
      <article className="rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 sm:p-6">
        <header>
          <h2 className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Estudios</h2>
        </header>
        <div className="mt-4 space-y-3">
          {studies.map((study) => (
            <div key={study.title} className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
              <h3 className="text-base font-medium text-white">{study.title}</h3>
              <p className="mt-1 text-sm leading-5.5 text-slate-200/76">{study.detail}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
