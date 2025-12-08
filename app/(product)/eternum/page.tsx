"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
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
  Menu,
  Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function EternumPage() {
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
      phone: "5493412795326",
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
        <div
          className="
            glass-nav
            flex lg:inline-flex items-center rounded-full
            px-4 lg:px-8 py-3
            w-[92vw] lg:w-auto
            justify-between lg:justify-start
            gap-0 lg:gap-4
          "
        >
          {/* Logo - Updated to Broco Solutions */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
            aria-label="Ir al inicio"
          >
            <Image src="/brand/bs-mark-neg.svg" alt="Eternum" width={28} height={28} />
            <span
              className="text-lg lg:text-xl font-bold tracking-wider"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Eter<span className="gradient-text">num</span>
            </span>
          </button>

          {/* Links desktop */}
          <div className="hidden lg:flex items-center space-x-8 text-sm ml-4">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap"
            >
              Planes
            </button>
          </div>

          {/* CTA desktop - Updated WhatsApp message to Eternum */}
          <div className="hidden lg:block ml-auto">
            <Button
              className="gradient-primary hover:opacity-90 transition-opacity text-sm px-6 py-2 rounded-full"
              onClick={() => openWhatsApp("Hola! Me interesa solicitar una demo de Eternum")}
            >
              Solicitar Demo
            </Button>
          </div>

          {/* Hamburguesa mobile */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Dropdown mobile - Updated WhatsApp message to Eternum */}
        <div
          className={`lg:hidden transition-all duration-200 overflow-hidden mt-2 rounded-2xl glass-nav ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-4 py-3 gap-2">
            <button
              onClick={() => {
                scrollToSection("features")
                setIsMenuOpen(false)
              }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Características
            </button>
            <button
              onClick={() => {
                scrollToSection("benefits")
                setIsMenuOpen(false)
              }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Beneficios
            </button>
            <button
              onClick={() => {
                scrollToSection("testimonials")
                setIsMenuOpen(false)
              }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Testimonios
            </button>
            <button
              onClick={() => {
                scrollToSection("pricing")
                setIsMenuOpen(false)
              }}
              className="py-2 text-left hover:text-[#7F5AF0]"
            >
              Planes
            </button>
            <div className="pt-2">
              <Button
                className="w-full gradient-primary hover:opacity-90 transition-opacity text-sm rounded-full"
                onClick={() => {
                  openWhatsApp("Hola! Me interesa solicitar una demo de Eternum")
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
        {/* Hero Section - Updated all references to Eternum */}
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
              Eternum revoluciona la forma en que administrás tu empresa con un sistema integral, intuitivo y potente.
              Diseñado para empresas que buscan crecer con eficiencia.
            </p>
            <div
              className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => openWhatsApp("Hola! Me gustaría comenzar ahora con Eternum")}
              >
                Comenzar ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Elemento decorativo */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        </section>

        {/* Features Section - Updated to Eternum */}
        <section id="features" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="gradient-text">Todas las herramientas</span> que necesitas
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Eternum integra todas las funcionalidades esenciales para la gestión eficiente de tu empresa.
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

        {/* Benefits Section - Updated to Eternum */}
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
                ¿Por qué elegir <span className="gradient-text">Eternum</span>?
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

        {/* Testimonials Section - Updated to Eternum */}
        <section id="testimonials" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Qué dicen las <span className="gradient-text">pymes</span> que usan Eternum
              </h2>
              <p className="mt-4 text-lg text-gray-400">Casos reales de rubros bien distintos en Argentina.</p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Teníamos precios y stock repartidos entre Excel y el grupo de WhatsApp. Con Eternum unificamos todo, bajaron fuerte los faltantes y la reposición sale sola. Nos ahorra horas todos los días."
                author="Mariana A."
                company="Ferretería y construcción"
                delay={0}
                addToRefs={addToRefs}
              />

              <TestimonialCard
                quote="Pasamos de papelitos y planillas a órdenes de producción, compras e insumos en un mismo lugar. Ahora vemos márgenes por trabajo y cuándo nos conviene producir. Nos ordenó la fábrica."
                author="Sergio P."
                company="Taller y fabricación"
                delay={0.2}
                addToRefs={addToRefs}
              />

              <TestimonialCard
                quote="Tenemos varias cajas y distintas cotizaciones durante el día. Ahora armamos cajas, billeteras virtuales y bancos, hacemos el arqueo en dos clics y vemos el spread de cada operación. Queda todo registrado y el cierre de turno sale sin drama."
                author="Gaston M."
                company="Financiera minorista"
                delay={0.4}
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>

        {/* CTA Section - Updated to Eternum */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          <div className="container mx-auto relative z-10 text-center px-4">
            <div className="reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {"Impulsá la transformación de tu empresa"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg">
                {
                  "Sumate a las organizaciones que ya optimizaron su gestión con Eternum. Solicitá una demostración personalizada y conocé todo su potencial."
                }
              </p>
              <Button
                size="lg"
                className="mt-8 bg-black hover:bg-gray-900 border border-white/20"
                onClick={() => openWhatsApp("Hola! Me interesa una demostración gratuita de Eternum")}
              >
                Solicitar demostración gratuita
              </Button>
            </div>
          </div>

          {/* Elementos decorativos animados */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </section>

        {/* Pricing Section - Updated plan messages to Eternum */}
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
                <span className="gradient-text">Planes</span> para cada necesidad
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Elegí el plan que mejor se adapte a tu empresa y comenzá a transformar tu gestión.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <PricingCard
                title="Basic"
                description="Para emprendedores y pequeños negocios"
                features={[
                  "Hasta 500 productos",
                  "1 usuario",
                  "Gestión de inventario",
                  "Facturación básica",
                  "Soporte por email",
                ]}
                delay={0}
                addToRefs={addToRefs}
                openWhatsApp={openWhatsApp}
              />
              <PricingCard
                title="Pro"
                description="Para empresas en crecimiento"
                features={[
                  "Productos ilimitados",
                  "5 usuarios",
                  "Todas las funciones Basic",
                  "Reportes avanzados",
                  "API integración",
                  "Soporte prioritario",
                ]}
                highlighted={true}
                delay={0.1}
                addToRefs={addToRefs}
                openWhatsApp={openWhatsApp}
              />
              <PricingCard
                title="Enterprise"
                description="Solución personalizada"
                features={[
                  "Usuarios ilimitados",
                  "Todas las funciones Pro",
                  "Implementación dedicada",
                  "Desarrollo personalizado",
                  "SLA garantizado",
                  "Soporte 24/7",
                ]}
                delay={0.2}
                addToRefs={addToRefs}
                openWhatsApp={openWhatsApp}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center reveal" ref={addToRefs}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="gradient-text">Preguntas</span> frecuentes
              </h2>
              <p className="mt-4 text-lg text-gray-400">Resolvemos tus dudas sobre Eternum.</p>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
              <FAQItem
                question="¿Qué es Eternum?"
                answer="Eternum es un sistema de gestión empresarial (ERP) diseñado para centralizar y automatizar todas las operaciones de tu empresa, desde la gestión de inventario hasta la facturación electrónica."
                addToRefs={addToRefs}
              />
              <FAQItem
                question="¿Puedo probarlo antes de contratar?"
                answer="Sí, ofrecemos una demostración gratuita donde podrás conocer todas las funcionalidades del sistema y cómo puede adaptarse a las necesidades específicas de tu negocio."
                addToRefs={addToRefs}
              />
              <FAQItem
                question="¿Cómo funciona el soporte técnico?"
                answer="Contamos con un equipo de soporte técnico disponible según tu plan. Desde soporte por email en el plan Basic hasta asistencia 24/7 para clientes Enterprise."
                addToRefs={addToRefs}
              />
              <FAQItem
                question="¿Puedo migrar mis datos existentes?"
                answer="Absolutamente. Ofrecemos servicios de migración de datos desde otros sistemas o archivos Excel. Nuestro equipo te acompañará durante todo el proceso de transición."
                addToRefs={addToRefs}
              />
              <FAQItem
                question="¿El sistema cumple con las normativas fiscales?"
                answer="Sí, Eternum está diseñado para cumplir con todas las normativas fiscales vigentes, incluyendo facturación electrónica y reportes requeridos por las autoridades tributarias."
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Updated logo and WhatsApp message to Eternum */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-2">
              <Image src="/brand/bs-mark-neg.svg" alt="Eternum" width={24} height={24} />
              <span
                className="text-lg font-bold tracking-wider"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Eter<span className="gradient-text">num</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.tiktok.com/@broco.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-blue transition-colors p-2 hover:bg-gray-800/50 rounded-full"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/broco.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-blue transition-colors p-2 hover:bg-gray-800/50 rounded-full"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.668.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/broco-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-blue transition-colors p-2 hover:bg-gray-800/50 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Eternum. Un producto de Broco Solutions.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button - Updated message to Eternum */}
      <a
        href="https://wa.me/5493412795326?text=Hola! Me interesa conocer más sobre Eternum"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function FeatureCard({ icon, title, description, delay, addToRefs }: FeatureCardProps) {
  return (
    <div className="feature-card reveal" ref={addToRefs} style={{ animationDelay: `${delay}s` }}>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg gradient-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

// Benefit Card Component
interface BenefitCardProps {
  number: string
  title: string
  description: string
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function BenefitCard({ number, title, description, delay, addToRefs }: BenefitCardProps) {
  return (
    <div className="benefit-card reveal" ref={addToRefs} style={{ animationDelay: `${delay}s` }}>
      <span className="text-5xl font-bold gradient-text opacity-50">{number}</span>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  )
}

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

function TestimonialCard({ quote, author, company, delay, addToRefs }: TestimonialCardProps) {
  return (
    <div className="testimonial-card reveal" ref={addToRefs} style={{ animationDelay: `${delay}s` }}>
      <p className="text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  )
}

// Pricing Card Component - Updated WhatsApp messages to Eternum
interface PricingCardProps {
  title: string
  description: string
  features: string[]
  highlighted?: boolean
  delay: number
  addToRefs: (el: HTMLElement | null) => void
  openWhatsApp: (text: string) => void
}

function PricingCard({ title, description, features, highlighted, delay, addToRefs, openWhatsApp }: PricingCardProps) {
  const handleClick = () => {
    const planMessages: Record<string, string> = {
      Basic: "Hola! Me interesa una cotización del plan Basic de Eternum",
      Pro: "Hola! Quiero conocer más sobre el plan Pro de Eternum",
      Enterprise: "Hola! Necesito hablar sobre el plan Enterprise de Eternum",
    }
    const msg = planMessages[title] ?? "Hola! Me interesa conocer más sobre Eternum"
    openWhatsApp(msg)
  }

  return (
    <div
      className={`pricing-card reveal ${highlighted ? "highlighted" : ""}`}
      ref={addToRefs}
      style={{ animationDelay: `${delay}s` }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7F5AF0] to-[#3E6FA8] text-white text-xs font-semibold px-4 py-1 rounded-full">
          Más popular
        </div>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="mt-6 text-4xl font-bold gradient-text">Consultar</div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <svg className="h-5 w-5 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`mt-8 w-full ${highlighted ? "gradient-primary" : "bg-gray-800 hover:bg-gray-700"}`}
        onClick={handleClick}
      >
        Solicitar cotización
      </Button>
    </div>
  )
}

// FAQ Item Component
interface FAQItemProps {
  question: string
  answer: string
  addToRefs: (el: HTMLElement | null) => void
}

function FAQItem({ question, answer, addToRefs }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item reveal border-b border-gray-800" ref={addToRefs}>
      <button className="w-full py-4 flex justify-between items-center text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  )
}
