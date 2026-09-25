import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Galeria } from "@/components/galeria"
import { Ubicacion } from "@/components/ubicacion"
import { Espacios } from "@/components/espacios"
import { Facilidades } from "@/components/facilidades"
import { Contacto } from "@/components/contacto"
import { FloatingButtons } from "@/components/floating-buttons"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Galeria />
        <Ubicacion />
        <Espacios />
        <Facilidades />
        <Contacto />
      </main>
      <SiteFooter />
      <FloatingButtons />
    </>
  )
}
