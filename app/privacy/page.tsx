"use client"

import { Button } from "@/components/ui/button"
import { Menu, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const sections = [
  { id: "introduction", label: "Introducción" },
  { id: "information-collected", label: "Información que Recopilamos" },
  { id: "how-we-use", label: "Uso de la Información" },
  { id: "data-sharing", label: "Compartir Datos" },
  { id: "data-security", label: "Seguridad de Datos" },
  { id: "your-rights", label: "Tus Derechos" },
  { id: "policy-changes", label: "Cambios a esta Política" },
  { id: "contact", label: "Contacto" },
]

export default function PrivacyPolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false)
  const router = useRouter()

  const navigateWithTransition = (href: string) => {
    const html = document.documentElement
    html.classList.add("page-transitioning")
    document.body.classList.add("page-transitioning")
    setTimeout(() => router.push(href), 300)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
      setIsMobileTocOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove("page-transitioning", "is-scrolling")
    document.body.classList.remove("page-transitioning", "is-scrolling")
  }, [])

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* NAV: barra + dropdown mobile */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-nav inline-flex items-center gap-6 px-6 py-3 rounded-full">
          <button
            onClick={() => navigateWithTransition("/")}
            className="flex items-center gap-3 hover:opacity-90 transition"
            aria-label="Ir al inicio"
          >
            <Image src="/brand/bs-mark-neg.svg" alt="Broco" width={28} height={28} priority />
            <span className="text-lg font-bold">Broco</span>
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => navigateWithTransition("/#inicio")} className="hover:text-[#7F5AF0] transition-colors">
              Inicio
            </button>
            <button onClick={() => navigateWithTransition("/#servicios")} className="hover:text-[#7F5AF0] transition-colors">
              Servicios
            </button>
            <button onClick={() => navigateWithTransition("/#nosotros")} className="hover:text-[#7F5AF0] transition-colors">
              Nosotros
            </button>
            <button onClick={() => navigateWithTransition("/#contacto")} className="hover:text-[#7F5AF0] transition-colors">
              Contacto
            </button>
          </div>

          {/* Hamburguesa */}
          <button
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center rounded p-2 focus:outline-none"
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Dropdown móvil */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 overflow-hidden mt-2 rounded-2xl glass-nav ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-4 py-3 gap-2">
            <button onClick={() => navigateWithTransition("/#inicio")} className="py-2 text-left hover:text-[#7F5AF0]">
              Inicio
            </button>
            <button onClick={() => navigateWithTransition("/#servicios")} className="py-2 text-left hover:text-[#7F5AF0]">
              Servicios
            </button>
            <button onClick={() => navigateWithTransition("/#nosotros")} className="py-2 text-left hover:text-[#7F5AF0]">
              Nosotros
            </button>
            <button onClick={() => navigateWithTransition("/#contacto")} className="py-2 text-left hover:text-[#7F5AF0]">
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Política de <span className="gradient-text-section">Privacidad</span>
          </h1>
          <p className="text-white/60 text-lg">
            Última actualización: 24 de mayo de 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Mobile TOC Dropdown */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                className="w-full glass-card p-4 rounded-xl flex items-center justify-between"
              >
                <span className="font-semibold">Tabla de Contenidos</span>
                <svg
                  className={`w-5 h-5 transition-transform ${isMobileTocOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMobileTocOpen && (
                <div className="glass-card mt-2 p-4 rounded-xl">
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                            activeSection === section.id
                              ? "bg-[#7F5AF0]/20 text-[#7F5AF0]"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {section.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop Sidebar TOC */}
            <aside className="hidden lg:block lg:w-1/4">
              <div className="sticky top-28">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4 text-white">Tabla de Contenidos</h3>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left py-2 px-3 rounded-lg transition-colors text-sm ${
                            activeSection === section.id
                              ? "bg-[#7F5AF0]/20 text-[#7F5AF0] font-medium"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {section.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
              <div className="glass-card p-8 md:p-10 rounded-2xl space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Introducción</h2>
                  <p className="text-white/80 leading-relaxed">
                    En Broco Solutions, nos comprometemos a proteger tu privacidad y a ser transparentes sobre cómo recopilamos, 
                    utilizamos y compartimos tu información personal. Esta Política de Privacidad describe nuestras prácticas 
                    relacionadas con la información que recopilamos a través de nuestros sitios web, aplicaciones y servicios.
                  </p>
                  <p className="text-white/80 leading-relaxed mt-4">
                    Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política. Te recomendamos leerla 
                    detenidamente para comprender cómo manejamos tu información.
                  </p>
                </section>

                {/* Information We Collect */}
                <section id="information-collected" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Información que Recopilamos</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white mt-6">Información Personal</h3>
                  <p className="text-white/80 leading-relaxed">
                    Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, 
                    número de teléfono, nombre de la empresa y cualquier otra información que decidas compartir cuando te 
                    comunicas con nosotros o utilizas nuestros servicios.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-white mt-6">Datos de Uso y Cookies</h3>
                  <p className="text-white/80 leading-relaxed">
                    Automáticamente recopilamos cierta información cuando visitas nuestro sitio web, incluyendo tu dirección IP, 
                    tipo de navegador, páginas visitadas, tiempo de permanencia en las páginas y otros datos de navegación. 
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia y analizar el uso del sitio.
                  </p>
                </section>

                {/* How We Use Your Information */}
                <section id="how-we-use" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Uso de la Información</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Utilizamos la información recopilada para los siguientes propósitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                    <li>Procesar transacciones y enviar notificaciones relacionadas</li>
                    <li>Responder a tus consultas, comentarios y solicitudes de soporte</li>
                    <li>Enviarte información técnica, actualizaciones y alertas de seguridad</li>
                    <li>Comunicarnos contigo sobre productos, servicios y eventos</li>
                    <li>Monitorear y analizar tendencias, uso y actividades</li>
                    <li>Detectar, investigar y prevenir actividades fraudulentas</li>
                  </ul>
                </section>

                {/* Data Sharing and Disclosure */}
                <section id="data-sharing" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Compartir Datos</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    No vendemos tu información personal. Podemos compartir tu información en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li><strong>Proveedores de servicios:</strong> Con terceros que nos ayudan a operar nuestro negocio</li>
                    <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
                    <li><strong>Transferencias comerciales:</strong> En conexión con fusiones, adquisiciones o ventas de activos</li>
                    <li><strong>Con tu consentimiento:</strong> Cuando nos hayas autorizado expresamente</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section id="data-security" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Seguridad de Datos</h2>
                  <p className="text-white/80 leading-relaxed">
                    Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger tu información 
                    personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen cifrado 
                    de datos, firewalls, controles de acceso y auditorías de seguridad regulares.
                  </p>
                  <p className="text-white/80 leading-relaxed mt-4">
                    Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. 
                    Aunque nos esforzamos por proteger tu información, no podemos garantizar su seguridad absoluta.
                  </p>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Tus Derechos</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tu información personal:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li><strong>Acceso:</strong> Solicitar una copia de la información que tenemos sobre ti</li>
                    <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                    <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información personal</li>
                    <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y legible</li>
                    <li><strong>Oposición:</strong> Oponerte al procesamiento de tu información en ciertas circunstancias</li>
                  </ul>
                  <p className="text-white/80 leading-relaxed mt-4">
                    Para ejercer cualquiera de estos derechos, contáctanos a través de los medios indicados al final de esta política.
                  </p>
                </section>

                {/* Changes to This Policy */}
                <section id="policy-changes" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Cambios a esta Política</h2>
                  <p className="text-white/80 leading-relaxed">
                    Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas 
                    o por otras razones operativas, legales o regulatorias. Te notificaremos sobre cambios significativos 
                    publicando la nueva política en nuestro sitio web y actualizando la fecha de "Última actualización".
                  </p>
                  <p className="text-white/80 leading-relaxed mt-4">
                    Te recomendamos revisar esta política regularmente para mantenerte informado sobre cómo protegemos tu información.
                  </p>
                </section>

                {/* Contact Us */}
                <section id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-section">Contacto</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Si tienes preguntas, comentarios o inquietudes sobre esta Política de Privacidad o nuestras prácticas 
                    de privacidad, no dudes en contactarnos:
                  </p>
                  <div className="glass-card p-6 rounded-xl bg-white/5">
                    <p className="text-white/80">
                      <strong className="text-white">Email:</strong> privacy@brocosolutions.com
                    </p>
                    <p className="text-white/80 mt-2">
                      <strong className="text-white">Dirección:</strong> Rosario, Santa Fe, Argentina
                    </p>
                  </div>
                </section>

              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/brand/bs-mark-neg.svg" alt="Broco" width={24} height={24} />
              <span className="text-white/60 text-sm">
                © {new Date().getFullYear()} Broco Solutions. Tecnología que funciona.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-[#7F5AF0] text-sm transition-colors">
                Política de Privacidad
              </Link>
              <a
                href="https://www.linkedin.com/company/brocosolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7F5AF0] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/broco.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7F5AF0] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5493412795326?text=Hola! Me interesa conocer más sobre sus servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
