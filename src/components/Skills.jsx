import skills from '../data/skills.json'

export default function Skills() {
    return (
        <section className="py-0">
            <article className="rounded-3xl border border-white/8 bg-white/5 p-4.5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 sm:p-5">
                <header>
                    <h2 className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Tecnologias</h2>
                </header>

                <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
                    {skills.map((skill) => (
                        <li
                            key={skill.name}
                            className="group flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-2.5 py-2 transition duration-200 hover:border-white/16 hover:bg-white/10"
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                loading="lazy"
                                className="h-5.5 w-5.5 rounded-sm object-contain"
                            />
                            <span className="text-xs font-medium text-slate-100/90">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}