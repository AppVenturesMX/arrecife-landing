"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { PREAPRUEBA_URL, WHATSAPP_URL } from "@/lib/links"

/* Marca de 7 puntos (SOC / Sinergia), dibujada como SVG para que se vea nitida a cualquier tamano */
function SocMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 121 133"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <circle cx="60.2" cy="19.2" r="19.2" />
      <circle cx="19.3" cy="42.7" r="19.2" />
      <circle cx="101" cy="42.6" r="19.2" />
      <circle cx="60.1" cy="66.3" r="19.2" />
      <circle cx="19.3" cy="89.9" r="19.2" />
      <circle cx="101" cy="89.9" r="19.2" />
      <circle cx="60.2" cy="113.4" r="19.2" />
    </svg>
  )
}

/* Icono de WhatsApp para dejar claro el canal del boton */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.121 1.523 5.853L.06 23.925a.5.5 0 0 0 .612.612l6.072-1.463A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Zm0 21.818a9.78 9.78 0 0 1-4.99-1.363l-.358-.213-3.617.872.887-3.53-.234-.363A9.799 9.799 0 0 1 2.182 12C2.182 6.582 6.582 2.182 12 2.182S21.818 6.582 21.818 12 17.418 21.818 12 21.818Z" />
    </svg>
  )
}

/* Los dos botones comparten exactamente el mismo estilo */
const ctaClass =
  "inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-950/40 transition-colors hover:bg-emerald-400 sm:w-auto sm:min-w-[270px]"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950">
      <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-32">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400"
          >
            <MapPin className="h-4 w-4" />
            San Antonio del Mar · Arrecife, Tijuana
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Residencia frente al mar de 410 m² de construcción con vistas panorámicas al Pacífico en tres niveles.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-pretty text-lg leading-relaxed text-slate-200"
          >
            Casa de 4 recámaras y 4.5 baños en el fraccionamiento privado San
            Antonio del Mar, tipo resort, con alberca, seguridad 24/7 y
            acceso a la playa a unos pasos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-baseline gap-2"
          >
            <span className="text-4xl font-extrabold text-white sm:text-5xl">
              $380,000
            </span>
            <span className="text-lg font-semibold text-emerald-400">USD</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-2 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar cita
            </a>
            <a
              href={PREAPRUEBA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              <SocMark className="h-6 w-auto" />
              Precalifícate gratis
            </a>
          </motion.div>

          <p className="text-xs text-slate-400">
            Precio en USD y condiciones de crédito sujetos a evaluación y a cambio sin previo aviso.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50 ring-1 ring-white/15">
            <img
              src="/images/fachada.jpg"
              alt="Fachada de la residencia con muro de piedra volcánica y acceso principal"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
