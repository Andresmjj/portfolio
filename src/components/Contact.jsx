export default function Contact() {
    return (
        <section id="contacto" className="py-8 sm:py-10 px-4 sm:px-0">
            <article className="rounded-2xl sm:rounded-3xl border border-white/8 bg-white/5 p-5 sm:p-6 lg:p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15">
                <header>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-white">Contáctame</h2>
                    <p className="mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-200/76">
                        Estoy abierto a nuevas oportunidades y colaboraciones, No dudes en contactarme a través de cualquiera de los siguientes medios. ¡Espero con interés conectarme contigo!
                    </p>
                </header>

                <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <a
                        href="mailto:andresmaldonado1022@gmail.com"
                        className="group rounded-xl sm:rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5 transition hover:border-white/15 hover:bg-white/8"
                    >
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Email</p>
                        <p className="mt-2 text-sm sm:text-base font-medium text-white group-hover:text-slate-100 break-all">andresmaldonado1022@gmail.com</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/andresmaldonadoj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl sm:rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5 transition hover:border-white/15 hover:bg-white/8"
                    >
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-300/75">LinkedIn</p>
                        <p className="mt-2 text-sm sm:text-base font-medium text-white group-hover:text-slate-100">Andres Maldonado</p>
                    </a>

                    <a
                        href="https://github.com/Andresmjj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl sm:rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5 transition hover:border-white/15 hover:bg-white/8"
                    >
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-300/75">GitHub</p>
                        <p className="mt-2 text-sm sm:text-base font-medium text-white group-hover:text-slate-100">@Andresmjj</p>
                    </a>
                </div>
            </article>
        </section>
    )
}
