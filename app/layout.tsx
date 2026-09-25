import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Residencia frente al mar en San Antonio del Mar, Tijuana | $380,000 USD — Arrecife SAM',
  description:
    'Residencia de 410 m² de construcción sobre 182 m² de terreno en el fraccionamiento privado San Antonio del Mar, Tijuana. 4 recámaras, vistas al Pacífico en tres niveles, alberca y seguridad 24/7. Agenda tu visita con el asesor.',
  openGraph: {
    title: 'Residencia frente al mar en San Antonio del Mar, Tijuana | $380,000 USD',
    description:
      'Residencia de 410 m² de construcción sobre 182 m² de terreno en el fraccionamiento privado San Antonio del Mar, Tijuana. 4 recámaras, vistas al Pacífico en tres niveles. Agenda tu visita con el asesor.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Arrecife SAM',
    images: [
      {
        url: '/images/fachada.jpg',
        width: 652,
        height: 489,
        alt: 'Fachada de la residencia con muro de piedra volcánica y acceso principal',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
