import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[min(90vw,72rem)] md:max-w-[min(80vw,72rem)] items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-3 py-3 sm:px-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl">

                {/* Logo */}
                <a href="#inicio" onClick={closeMenu}>
                    <img src="/Favicon-mj.svg" alt="Andres Maldonado logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover bg-white flex-shrink-0" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2">
                        <li>
                            <a className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10" href="#inicio">
                                Inicio</a>
                        </li>
                        <li>
                            <a className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10" href="#proyectos">
                                Proyectos</a>
                        </li>
                        <li>
                            <a className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10" href="#contacto">
                                Contacto</a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    aria-label="Toggle menu"
                >
                    <svg className="w-5 h-5 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 sm:left-6 sm:right-6 rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl p-4">
                    <nav>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a className="block rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 text-center" href="#inicio" onClick={closeMenu}>
                                    Inicio</a>
                            </li>
                            <li>
                                <a className="block rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 text-center" href="#proyectos" onClick={closeMenu}>
                                    Proyectos</a>
                            </li>
                            <li>
                                <a className="block rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 text-center" href="#contacto" onClick={closeMenu}>
                                    Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}
