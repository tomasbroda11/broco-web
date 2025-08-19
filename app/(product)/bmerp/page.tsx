"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  BarChart3,
  Box,
  CreditCard,
  FileText,
  Layers,
  Package,
  ShoppingCart,
  Users,
  MessageCircle,
  Menu,
  Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BusinessManagerPage() {
  // Referencia para animaciones de scroll
  const revealRefs = useRef<HTMLElement[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navigateWithTransition = (href: string) => {
    setIsTransitioning(true)
    document.body.classList.add("page-transitioning")
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  // Helper para abrir WhatsApp con mensaje
  const openWhatsApp = (text: string) => {
    const base = "https://api.whatsapp.com/send/"
    const params = new URLSearchParams({
      phone: "5493464442676",
      text,
      type: "phone_number",
      app_absent: "0",
    })
    window.open(`${base}?${params.toString()}`, "_blank")
  }

  // Función para añadir elementos a la lista de referencias
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  // Efecto para manejar las animaciones de scroll
  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Verificar elementos visibles al cargar

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para desplazamiento suave a secciones
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      document.body.classList.add("is-scrolling")
      window.scrollTo({
        top: section.offsetTop - 80, // Ajuste para el header
        behavior: "smooth",
      })
      setTimeout(() => {
        document.body.classList.remove("is-scrolling")
      }, 1000)
    }
  }

  return (
    <div className={`flex min-h-screen flex-col bg-black ${isTransitioning ? "transitioning" : ""}`}>
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-600 to-blue-600 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-2xl font-bold animate-pulse">Cargando...</div>
        </div>
      )}

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        {/* pill del navbar (solo lo que se ve siempre) */}
        <div className="glass-nav inline-flex items-center gap-4 px-4 lg:px-8 py-3 rounded-full">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
            aria-label="Ir al inicio"
          >
            <Image src="/brand/bm-mark-neg.svg" alt="BusinessManager" width={28} height={28} />
            <span
              className="text-lg lg:text-xl font-bold tracking-wider"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Business<span className="gradient-text">Manager</span>
            </span>
          </button>

          {/* Links desktop */}
          <div className="hidden lg:flex items-center space-x-8 text-sm ml-4">
            <button onClick={() => scrollToSection("features")} className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Características</button>
            <button onClick={() => scrollToSection("benefits")} className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Beneficios</button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Testimonios</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Planes</button>
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block ml-auto">
            <Button
              className="gradient-primary hover:opacity-90 transition-opacity text-sm px-6 py-2"
              onClick={() => openWhatsApp("Hola! Me interesa solicitar una demo de BusinessManager")}
            >
              Solicitar Demo
            </Button>
          </div>

          {/* Hamburguesa mobile */}
          <button className="lg:hidden ml-auto" onClick={() => setIsMenuOpen((o) => !o)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Dropdown mobile - fuera del pill para evitar el círculo */}
        <div
          className={`lg:hidden transition-all duration-200 overflow-hidden mt-2 rounded-2xl glass-nav ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-4 py-3 gap-2">
            <button
              onClick={() => { scrollToSection("features"); setIsMenuOpen(false); }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Características
            </button>
            <button
              onClick={() => { scrollToSection("benefits"); setIsMenuOpen(false); }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Beneficios
            </button>
            <button
              onClick={() => { scrollToSection("testimonials"); setIsMenuOpen(false); }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Testimonios
            </button>
            <button
              onClick={() => { scrollToSection("pricing"); setIsMenuOpen(false); }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Planes
            </button>
            <div className="pt-2">
              <Button
                className="w-full gradient-primary hover:opacity-90 transition-opacity text-sm"
                onClick={() => {
                  openWhatsApp("Hola! Me interesa solicitar una demo de BusinessManager")
                  setIsMenuOpen(false)
                }}
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>


      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden py-40 bg-black">
          {/* Elementos de fondo animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary opacity-50 rounded-full filter blur-3xl animate-float"></div>
            <div
              className="absolute top-20 right-20 w-80 h-80 bg-primary-blue opacity-40 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-10 left-1/3 w-60 h-60 bg-purple-600 opacity-35 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-left max-w-4xl">
              Menos operación <br />
              <span className="gradient-text">Mas decisión</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300 animate-slide-right text-center">
              BusinessManager revoluciona la forma en que administras tu empresa con un sistema integral, intuitivo y
              potente. Diseñado para el empresario moderno.
            </p>
            <div
              className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => openWhatsApp("Hola! Me gustaría comenzar ahora con BusinessManager")}
              >
                Comenzar ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Elemento decorativo */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="gradient-text">Todas las herramientas</span> que necesitas
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                BusinessManager integra todas las funcionalidades esenciales para la gestión eficiente de tu empresa.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Box className="h-10 w-10" />}
                title="Gestión de Productos"
                description="Administra tu catálogo de productos con facilidad. Añade, edita y organiza tus productos con información detallada."
                delay={0}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<ShoppingCart className="h-10 w-10" />}
                title="Control de Pedidos"
                description="Seguimiento completo del ciclo de pedidos, desde la creación hasta la entrega y facturación."
                delay={0.1}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<Package className="h-10 w-10" />}
                title="Gestión de Proveedores"
                description="Mantén organizada toda la información de tus proveedores y optimiza tus relaciones comerciales."
                delay={0.2}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10" />}
                title="Control de Stock"
                description="Monitorea tu inventario en tiempo real con alertas automáticas y gestión de múltiples almacenes."
                delay={0.3}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<Users className="h-10 w-10" />}
                title="Gestión de Clientes"
                description="Base de datos completa de clientes con historial de compras, preferencias y comunicaciones."
                delay={0.4}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<CreditCard className="h-10 w-10" />}
                title="Sistema de Pagos"
                description="Procesa pagos de forma segura y mantén un registro detallado de todas las transacciones."
                delay={0.5}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10" />}
                title="Reportes Avanzados"
                description="Analiza el rendimiento de tu negocio con informes detallados y personalizables."
                delay={0.6}
                addToRefs={addToRefs}
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10" />}
                title="Facturación Electrónica"
                description="Genera facturas electrónicas que cumplen con todas las normativas fiscales vigentes."
                delay={0.7}
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-black relative overflow-hidden">
          {/* Elementos de fondo animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 -right-20 w-96 h-96 bg-primary opacity-25 rounded-full filter blur-3xl animate-float"></div>
            <div
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-blue opacity-20 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                ¿Por qué elegir <span className="gradient-text">BusinessManager</span>?
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Diseñado pensando en la eficiencia y facilidad de uso para transformar la gestión de tu negocio.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                number="01"
                title="Interfaz Intuitiva"
                description="Diseño minimalista y moderno que facilita la navegación y reduce la curva de aprendizaje."
                delay={0}
                addToRefs={addToRefs}
              />
              <BenefitCard
                number="02"
                title="Todo Integrado"
                description="Todas las funciones que necesitas en un solo lugar, eliminando la necesidad de múltiples plataformas."
                delay={0.1}
                addToRefs={addToRefs}
              />
              <BenefitCard
                number="03"
                title="Ahorro de Tiempo"
                description="Automatiza tareas repetitivas y optimiza procesos para que puedas enfocarte en lo importante."
                delay={0.2}
                addToRefs={addToRefs}
              />
              <BenefitCard
                number="04"
                title="Decisiones Informadas"
                description="Datos y análisis en tiempo real para tomar decisiones estratégicas basadas en información precisa."
                delay={0.3}
                addToRefs={addToRefs}
              />
              <BenefitCard
                number="05"
                title="Escalabilidad"
                description="Crece con tu negocio, adaptándose a tus necesidades cambiantes sin complicaciones."
                delay={0.4}
                addToRefs={addToRefs}
              />
              <BenefitCard
                number="06"
                title="Soporte Premium"
                description="Asistencia técnica especializada disponible cuando la necesites, garantizando la continuidad de tu operación."
                delay={0.5}
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Lo que dicen <span className="gradient-text">nuestros clientes</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Empresas de diversos sectores han transformado su gestión con BusinessManager.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="BusinessManager ha revolucionado la forma en que gestionamos nuestro inventario. Ahora tenemos control total y en tiempo real."
                author="María Rodríguez"
                company="Distribuidora Tecnológica"
                delay={0}
                addToRefs={addToRefs}
              />
              <TestimonialCard
                quote="La facilidad para generar reportes nos permite tomar decisiones estratégicas basadas en datos concretos. Imprescindible."
                author="Carlos Méndez"
                company="Retail Innovación"
                delay={0.2}
                addToRefs={addToRefs}
              />
              <TestimonialCard
                quote="El módulo de facturación electrónica nos ha ahorrado incontables horas y ha eliminado errores en nuestros procesos contables."
                author="Laura Sánchez"
                company="Consultora Financiera"
                delay={0.4}
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          <div className="container mx-auto relative z-10 text-center px-4">
            <div className="reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Transforma tu negocio hoy</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg">
                Únete a las empresas que ya han optimizado su gestión con BusinessManager. Solicita una demostración
                personalizada y descubre todo su potencial.
              </p>
              <Button
                size="lg"
                className="mt-8 bg-black hover:bg-gray-900 border border-white/20"
                onClick={() => openWhatsApp("Hola! Me interesa una demostración gratuita de BusinessManager")}
              >
                Solicitar demostración gratuita
              </Button>
            </div>
          </div>

          {/* Elementos decorativos animados */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-black relative overflow-hidden">
          {/* Elementos de fondo animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/3 w-96 h-96 bg-primary opacity-25 rounded-full filter blur-3xl animate-float"></div>
            <div
              className="absolute bottom-20 right-20 w-80 h-80 bg-primary-blue opacity-20 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Planes <span className="gradient-text">diseñados para ti</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Elige el plan que mejor se adapte a las necesidades de tu empresa. Contáctanos para conocer precios
                personalizados.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <PricingCard
                title="Basic"
                description="Ideal para emprendedores y pequeñas empresas que están comenzando."
                features={[
                  "Gestión de productos (hasta 500)",
                  "Control de pedidos básico",
                  "Gestión de clientes",
                  "Reportes mensuales",
                  "1 usuario incluido",
                  "Soporte por email",
                ]}
                buttonText="Solicitar cotización"
                popular={false}
                delay={0}
                addToRefs={addToRefs}
              />
              <PricingCard
                title="Pro"
                description="Perfecto para empresas en crecimiento que necesitan más funcionalidades."
                features={[
                  "Gestión de productos ilimitados",
                  "Control de pedidos avanzado",
                  "Gestión de proveedores",
                  "Control de stock en tiempo real",
                  "Reportes avanzados y personalizables",
                  "Facturación electrónica",
                  "Hasta 5 usuarios",
                  "Soporte prioritario",
                ]}
                buttonText="Contactar para precio"
                popular={true}
                delay={0.2}
                addToRefs={addToRefs}
              />
              <PricingCard
                title="Enterprise"
                description="Solución completa para grandes empresas con necesidades específicas."
                features={[
                  "Todo lo incluido en Pro",
                  "API personalizada",
                  "Integraciones a medida",
                  "Soporte dedicado 24/7",
                  "Capacitación personalizada",
                  "Usuarios ilimitados",
                  "Copias de seguridad automáticas",
                  "Consultoría especializada",
                ]}
                buttonText="Hablar con ventas"
                popular={false}
                delay={0.4}
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image src="/brand/bm-mark-neg.svg" alt="BusinessManager" width={24} height={24} />
              <span
                className="text-xl font-bold tracking-wider"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Business<span className="gradient-text">Manager</span>
              </span>
            </button>

            {/* Social media icons section */}
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a
                  href="https://www.tiktok.com/@broco.solutions?_t=ZM-8yyzffLfq6Q&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-blue transition-colors p-2 hover:bg-gray-800 rounded-full"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/broco.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-blue transition-colors p-2 hover:bg-gray-800 rounded-full"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/brocosolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-blue transition-colors p-2 hover:bg-gray-800 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-end">
              <p className="text-center text-sm text-gray-500 md:text-right">
                © {new Date().getFullYear()} Broco Solutions. Todos los derechos reservados.
              </p>
              <div className="flex gap-4 md:items-end">
              <Button
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault()
                  navigateWithTransition("/#contacto")
                }}
              >
                Contacto
              </Button>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/5493464442676?text=Hola! Me interesa conocer más sobre BusinessManager"
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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function FeatureCard({ icon, title, description, delay, addToRefs }: FeatureCardProps) {
  return (
    <div
      className="feature-card rounded-lg border border-gray-800 bg-gray-900/50 p-6 reveal"
      ref={addToRefs}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-4 gradient-text">{icon}</div>
      <h3 className="mb-2 text-xl font-medium" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

interface BenefitCardProps {
  number: string
  title: string
  description: string
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function BenefitCard({ number, title, description, delay, addToRefs }: BenefitCardProps) {
  return (
    <div
      className="benefit-card rounded-lg border border-gray-800 bg-gray-900/30 p-6 reveal"
      ref={addToRefs}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-4 text-4xl font-bold gradient-text">{number}</div>
      <h3 className="mb-2 text-xl font-medium" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function TestimonialCard({ quote, author, company, delay, addToRefs }: TestimonialCardProps) {
  return (
    <div
      className="rounded-lg border border-gray-800 bg-gray-900/30 p-6 reveal"
      ref={addToRefs}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-4 text-4xl gradient-text">"</div>
      <p className="mb-6 text-gray-300">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  )
}

interface PricingCardProps {
  title: string
  description: string
  features: string[]
  buttonText: string
  popular: boolean
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function PricingCard({
  title,
  description,
  features,
  buttonText,
  popular,
  delay,
  addToRefs,
}: PricingCardProps) {
  // Mensaje por plan
  const planMessages: Record<string, string> = {
    Basic: "Hola! Me interesa una cotización del plan Basic de BusinessManager",
    Pro: "Hola! Quiero conocer más sobre el plan Pro de BusinessManager",
    Enterprise: "Hola! Necesito hablar sobre el plan Enterprise de BusinessManager",
  }

  const handleClick = () => {
    const msg = planMessages[title] ?? "Hola! Me interesa conocer más sobre BusinessManager"
    const base = "https://api.whatsapp.com/send/"
    const params = new URLSearchParams({
      phone: "5493464442676",
      text: msg,
      type: "phone_number",
      app_absent: "0",
    })
    window.open(`${base}?${params.toString()}`, "_blank")
  }

  return (
    <div
      className={`pricing-card rounded-lg border ${
        popular ? "border-primary" : "border-gray-800"
      } bg-gray-900/30 p-6 reveal relative ${
        popular ? "transform hover:-translate-y-4" : "transform hover:-translate-y-2"
      } transition-all duration-300`}
      ref={addToRefs}
      style={{ transitionDelay: `${delay}s` }}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 text-xs font-medium text-white gradient-primary rounded-full">
          Más popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {title}
        </h3>
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-medium gradient-text">Consultar precio</span>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2 text-primary-blue flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          popular ? "gradient-primary hover:opacity-90" : "bg-gray-800 hover:bg-gray-700"
        } transition-colors`}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  )
}
