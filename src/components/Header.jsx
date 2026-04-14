export default function Header() {
    return (
        <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[min(80vw,72rem)] items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
                
                <a href="#inicio">
                    <img src="/Favicon-mj.svg" alt="Andres Maldonado logo" className="h-10 w-10 rounded-full object-cover bg-white" />
                </a>

                <nav>
                    <ul className="flex items-center gap-2">
                        <li>
                            <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10" href="#inicio">
                                Inicio</a>
                        </li>
                        <li>
                            <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10" href="#proyectos">
                                Proyectos</a>
                        </li>
                        <li>
                            <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10" href="#contacto">
                                Contacto</a>
                        </li>
                    </ul>
                </nav>


            </div>
        </header>
    )
}
