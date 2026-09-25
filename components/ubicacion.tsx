import { Waves, Car, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  {
    icon: Waves,
    title: "Acceso a la playa a unos pasos",
    description:
      "El fraccionamiento privado San Antonio del Mar tiene salida directa a la playa, a solo unos pasos de la residencia.",
  },
  {
    icon: Car,
    title: "A minutos de Rosarito y la línea internacional",
    description:
      "Conectividad estratégica hacia el corredor costero de Rosarito, Playas de Tijuana y los cruces fronterizos con Estados Unidos.",
  },
  {
    icon: MapPin,
    title: "Restaurantes y comercios a la mano",
    description:
      "A un lado de los mejores restaurantes y comercios de la zona, con escuelas y parques cercanos.",
  },
]

export function Ubicacion() {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Una ubicación frente al mar, con todo cerca
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Conectividad estratégica y las comodidades de un fraccionamiento
            privado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=San%20Antonio%20del%20Mar%2C%20Arrecife%2C%20Tijuana%2C%20Baja%20California&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación aproximada: Fraccionamiento San Antonio del Mar, Tijuana"
              className="h-[320px] w-full sm:h-[400px]"
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            Ubicación aproximada (Fraccionamiento San Antonio del Mar). La dirección exacta se comparte al agendar tu cita.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
