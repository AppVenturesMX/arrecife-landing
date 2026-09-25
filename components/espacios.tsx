import { BedDouble, Landmark, Warehouse, Droplets, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: BedDouble,
    title: "4 Recámaras + 4.5 Baños",
    description:
      "La recámara principal está en la planta alta, con chimenea propia, walk-in closet y terraza privada.",
  },
  {
    icon: Landmark,
    title: "Arquitectura con carácter",
    description:
      "Dos chimeneas de piedra volcánica, puertas de madera talladas con vitrales artesanales y arcos de ladrillo en toda la casa.",
  },
  {
    icon: Warehouse,
    title: "Cochera para 3 autos",
    description:
      "Cochera techada con acceso doble, por el frente y por la calle de atrás de la propiedad.",
  },
  {
    icon: Droplets,
    title: "Plus técnico",
    description:
      "Aire acondicionado en toda la casa, cisterna de agua con bomba y cisterna de gas.",
  },
  {
    icon: Building2,
    title: "Fraccionamiento privado tipo resort",
    description:
      "Casa club con alberca, cancha de tenis y fútbol, parque infantil y caseta de vigilancia con seguridad 24/7.",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Espacios con carácter, en tres niveles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            410 m² de construcción con arquitectura mediterránea y vistas al
            mar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
