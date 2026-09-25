"use client"

import { Waves } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/links"

/* Icono de WhatsApp para dejar claro el canal del boton */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.121 1.523 5.853L.06 23.925a.5.5 0 0 0 .612.612l6.072-1.463A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Zm0 21.818a9.78 9.78 0 0 1-4.99-1.363l-.358-.213-3.617.872.887-3.53-.234-.363A9.799 9.799 0 0 1 2.182 12C2.182 6.582 6.582 2.182 12 2.182S21.818 6.582 21.818 12 17.418 21.818 12 21.818Z" />
    </svg>
  )
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-emerald-950">
            <Waves className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            ARRECIFE SAM.
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo("ubicacion")}
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            Ubicación
          </button>
          <button
            onClick={() => scrollTo("espacios")}
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            La propiedad
          </button>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 shadow-md transition-colors hover:bg-emerald-400"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Agendar visita
        </a>
      </nav>
    </header>
  )
}
