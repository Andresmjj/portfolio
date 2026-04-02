export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/5 bg-slate-950/30 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex items-center">
        <nav>
          <ul className="flex gap-1 sm:gap-2">
            <li>
              <a href="#inicio" className="text-xs sm:text-sm font-medium text-slate-200 transition hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#proyectos" className="text-xs sm:text-sm font-medium text-slate-200 transition hover:text-white">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-xs sm:text-sm font-medium text-slate-200 transition hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
