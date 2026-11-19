import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="page-shell flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.shortName} · {profile.location} · {profile.role}, con acento en backend.
        </p>
        <a href="#inicio" className="link-underline w-fit text-ink">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
