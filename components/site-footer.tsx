export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-lg font-bold text-slate-800">
          Casa Arrecife San Antonio del Mar
        </span>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Precio expresado en dólares americanos (USD). Las fotografías son
          de referencia. Precio, disponibilidad y condiciones están sujetos
          a cambio sin previo aviso.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          <a
            href="/docs/AVISO-DE-PRIVACIDAD-SISTEMA-SIS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-emerald-700"
          >
            Aviso de privacidad
          </a>
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Este sitio y su contenido son propiedad y responsabilidad de
          Sistema SIS, S. de R.L. de C.V.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          © 2026 Sistema SIS, S. de R.L. de C.V. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
