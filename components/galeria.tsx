"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const fotos = [
  { src: "/images/fachada.jpg", alt: "Fachada de la residencia con muro de piedra volcánica y acceso principal" },
  { src: "/images/acceso-entrada.jpg", alt: "Acceso techado hacia la puerta principal, con piso de talavera y jardín interior" },
  { src: "/images/vestibulo.jpg", alt: "Vestíbulo de entrada con puertas de madera talladas y vitrales artesanales" },
  { src: "/images/sala-chimenea.jpg", alt: "Sala con chimenea de piedra volcánica y vista al mar de fondo" },
  { src: "/images/cocina.jpg", alt: "Cocina completa con alacena y acceso directo a la sala" },
  { src: "/images/cocina-detalle.jpg", alt: "Área de cocina con ventana y vista al mar" },
  { src: "/images/terraza-exterior.jpg", alt: "Terraza exterior con acabados de ladrillo en el segundo nivel" },
  { src: "/images/recibidor.jpg", alt: "Recibidor con arcos de ladrillo y acceso a medio baño" },
  { src: "/images/medio-bano.jpg", alt: "Medio baño con talavera azul y blanca" },
  { src: "/images/cochera.jpg", alt: "Cochera techada para 3 autos con acceso doble" },
  { src: "/images/escalera.jpg", alt: "Escalera interior con tragaluz y arcos de ladrillo" },
  { src: "/images/cocina-alacena.jpg", alt: "Cocina con alacena de madera y horno empotrado" },
  { src: "/images/walk-in-closet.jpg", alt: "Walk-in closet de la recámara principal" },
  { src: "/images/bano-principal.jpg", alt: "Baño principal con regadera de block de vidrio y doble tocador" },
  { src: "/images/recamara.jpg", alt: "Recámara con ventana amplia y vista al fraccionamiento" },
  { src: "/images/sala-vista-mar.jpg", alt: "Estancia de techos altos con chimenea y vista panorámica al mar" },
  { src: "/images/bano-talavera.jpg", alt: "Baño con talavera artesanal en tocador y muros" },
  { src: "/images/terraza-vista-mar.jpg", alt: "Terraza privada con chimenea y vista al atardecer sobre el Pacífico" },
  { src: "/images/estancia.jpg", alt: "Estancia con vigas de madera y chimenea, con acceso a terraza" },
]

export function Galeria() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback((dir: number) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + fotos.length) % fotos.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [go])

  const current = fotos[index]

  return (
    <section id="galeria" className="scroll-mt-20 bg-emerald-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Conoce cada rincón
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Un recorrido por los tres niveles y las vistas al Pacífico que te esperan.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
            <div className="relative aspect-[4/3] sm:aspect-[16/9]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={index}
                  src={current.src}
                  alt={current.alt}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 sm:p-6">
                <p className="text-sm font-medium text-emerald-50 sm:text-base">
                  {current.alt}
                </p>
              </div>

              <button
                onClick={() => go(-1)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-md backdrop-blur transition-colors hover:bg-white sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-md backdrop-blur transition-colors hover:bg-white sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Thumbnails */}
        <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-7 sm:gap-3">
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Ver ${foto.alt}`}
              className={`relative aspect-square overflow-hidden rounded-lg ring-2 transition-all ${
                i === index
                  ? "ring-emerald-500"
                  : "ring-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={foto.src} alt={foto.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
