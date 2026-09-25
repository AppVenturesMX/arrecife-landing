import { Reveal } from "@/components/reveal"
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

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Agenda tu visita privada y conoce esta residencia frente al mar.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-slate-600">
            Descubre en persona los tres niveles, las vistas al Pacífico y las
            amenidades del fraccionamiento San Antonio del Mar.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105 hover:bg-emerald-600"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Solicitar Más Información
          </a>
        </Reveal>
      </div>
    </section>
  )
}
