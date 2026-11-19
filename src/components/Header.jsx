import { useCallback, useEffect, useRef, useState } from 'react'
import { profile, whatsappUrl } from '../data/profile'

const links = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#trayectoria', label: 'Trayectoria', id: 'trayectoria' },
  { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  { href: '#formacion', label: 'Formación', id: 'formacion' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
        buttonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusables = menuRef.current?.querySelectorAll('a, button')
      if (!focusables?.length) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 768) closeMenu()
    }

    const onPointerDown = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', closeMenu, { passive: true })

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', closeMenu)
    }
  }, [isOpen, closeMenu])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="page-shell flex h-16 items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-[-0.01em] text-ink sm:text-base"
        >
          {profile.shortName}
          <span className="hidden text-muted sm:inline"> · Full Stack</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={active === link.id ? 'page' : undefined}
                  className={`text-sm transition-colors duration-150 hover:text-ink ${
                    active === link.id ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download="Andres-Maldonado-CV.pdf"
            className="hidden rounded-lg border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:bg-accent-soft sm:inline-flex"
          >
            Descargar CV
          </a>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          id="menu-movil"
          className="absolute inset-x-0 top-full border-b border-line bg-surface px-5 pb-5 pt-2 shadow-lift md:hidden"
        >
          <nav aria-label="Navegación móvil">
            <ul className="divide-y divide-line">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-base text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 grid gap-2">
            <a
              href={profile.cv}
              download="Andres-Maldonado-CV.pdf"
              onClick={closeMenu}
              className="rounded-lg bg-ink px-4 py-3 text-center text-sm font-medium text-white"
            >
              Descargar CV
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="rounded-lg border border-line px-4 py-3 text-center text-sm font-medium text-ink"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
