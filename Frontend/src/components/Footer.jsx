export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-white/8 py-8">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-slate-400">
          © {currentYear} Andres Maldonado. Todos los derechos reservados.
        </p>
        <p className="text-xs text-slate-500">
          Diseñado y desarrollado con React, Tailwind CSS y Vite.
        </p>
      </div>
    </footer>
  )
}
