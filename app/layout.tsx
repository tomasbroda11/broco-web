import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Broco Solutions - Tecnología que funciona",
  description:
    "Automatización, IA y cloud para empresas que buscan resultados reales. Somos un equipo tech de Rosario que transforma empresas con soluciones que funcionan.",
    generator: 'v0.dev',
    icons: {
    icon: [
      // raíz (autodetect)
      { url: "/favicon.svg", type: "image/svg+xml" },
      // carpeta /public/favicon/ (por si preferís esta ruta)
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${montserrat.variable} ${openSans.variable}`}>{children}</body>
    </html>
  )
}
