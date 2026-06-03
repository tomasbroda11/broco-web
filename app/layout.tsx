import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans, Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"
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
const bricolage = Bricolage_Grotesque({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-agro-display",
})
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-agro-body",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-agro-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://brocosolutions.com"),
  title: "Broco Solutions - Menos operación, mas decisión",
  description:
    "Sistemas a medida, automatización, IA y soluciones en la nube para empresas que buscan resultados reales.",
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
      <body className={`${inter.className} ${montserrat.variable} ${openSans.variable} ${bricolage.variable} ${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  )
}
