"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Cloud,
  Database,
  Mail,
  MapPin,
  Phone,
  BarChart3,
  Zap,
  Code,
  Brain,
  Menu,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  MessageCircle,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function BrocoSolutionsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<null | "ok" | "error">(null);

  const navigateWithTransition = (href: string) => {
    setIsTransitioning(true)
    const html = document.documentElement
    html.classList.add("page-transitioning")
    document.body.classList.add("page-transitioning")
    const t = setTimeout(() => router.push(href), 300)
    // opcional: si el componente desmonta en esos 300ms
    return () => clearTimeout(t)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false) // cerrar menú al navegar
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    router.prefetch("/bmerp")
    router.prefetch("/automatizaciones")
  }, [router])
  
  // Animaciones al hacer scroll
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("animate-in"))
    }, observerOptions)
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Liberar cualquier lock heredado de otra ruta
    const html = document.documentElement
    html.classList.remove("page-transitioning", "is-scrolling")
    document.body.classList.remove("page-transitioning", "is-scrolling")
  }, [])

  const services = [
    { icon: <Database className="h-6 w-6" />, title: "Business Manager ERP", description: "Sistema modular que centraliza y automatiza todas las operaciones de tu empresa.", highlight: "Producto estrella",link: "/bmerp" },
    { icon: <Zap className="h-6 w-6" />, title: "Process Automation", description: "Automatización inteligente que elimina tareas repetitivas.",link: "/automatizaciones" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud Migration", description: "Infraestructura en la nube con arquitectura segura y escalable." },
    { icon: <Brain className="h-6 w-6" />, title: "AI Integration", description: "Inteligencia artificial aplicada a procesos de negocio reales." },
    { icon: <Code className="h-6 w-6" />, title: "Custom Development", description: "Desarrollo web y aplicaciones a medida con tecnología moderna." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Data Visualization", description: "Dashboards inteligentes para decisiones basadas en datos." },
  ]

  return (
    <div className={`min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden overflow-y-auto touch-pan-y ios-smooth-scroll ${isTransitioning ? "transitioning" : ""}`}>
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#7F5AF0] to-[#3E6FA8] transition-opacity duration-300 flex items-center justify-center ">
          <div className="text-white text-2xl font-bold animate-pulse">Cargando...</div>
        </div>
      )}

      {/* NAV: barra + dropdown mobile */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-nav inline-flex items-center gap-6 px-6 py-3 rounded-full">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 hover:opacity-90 transition"
            aria-label="Ir al inicio"
          >
            <Image src="/brand/bs-mark-neg.svg" alt="Broco" width={28} height={28} priority />
            <span className="text-lg font-bold">Broco</span>
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollToSection("inicio")} className="hover:text-[#7F5AF0] transition-colors">Inicio</button>
            <button onClick={() => scrollToSection("servicios")} className="hover:text-[#7F5AF0] transition-colors">Servicios</button>
            <button onClick={() => scrollToSection("nosotros")} className="hover:text-[#7F5AF0] transition-colors">Nosotros</button>
            <button onClick={() => scrollToSection("contacto")} className="hover:text-[#7F5AF0] transition-colors">Contacto</button>
          </div>

          {/* Hamburguesa */}
          <button
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center rounded p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(o => !o)}
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
            <button onClick={() => scrollToSection("inicio")} className="py-2 text-left hover:text-[#7F5AF0]">Inicio</button>
            <button onClick={() => scrollToSection("servicios")} className="py-2 text-left hover:text-[#7F5AF0]">Servicios</button>
            <button onClick={() => scrollToSection("nosotros")} className="py-2 text-left hover:text-[#7F5AF0]">Nosotros</button>
            <button onClick={() => scrollToSection("contacto")} className="py-2 text-left hover:text-[#7F5AF0]">Contacto</button>
          </div>
        </div>
      </nav>


      {/* Hero */}
      <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 animated-bg pointer-events-none">
          <div className="floating-orbs" />
          <div className="grid-pattern" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 glass-badge px-4 py-2 rounded-full text-sm leading-6">
              <Sparkles className="h-4 w-4 text-[#7F5AF0]" />
              <span>Tecnología que transforma empresas</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-white">Menos operación</span>
              <span className="block neon-text-large">mas decisión</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Automatización, IA y cloud para empresas que buscan resultados reales, no promesas vacías.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 mb-12">
              <Button onClick={() => navigateWithTransition("/bmerp")} className="hero-cta group cursor-pointer">
                <span>Ver Business Manager</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection("servicios")} variant="ghost" className="text-white/80 hover:text-white border border-white/20 hover:border-[#7F5AF0]/50 cursor-pointer">
                Explorar servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 relative">
        <div className="absolute inset-0 diagonal-bg pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 animate-on-scroll slide-in-left">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 glass-badge px-3 py-1 rounded-full text-sm">
                  <Target className="h-4 w-4 text-[#3E6FA8]" />
                  <span>Nuestros servicios</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  <span className="gradient-text-section">Tecnología</span>
                  <br />
                  <span className="text-white">aplicada</span>
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  No vendemos humo. Cada solución está diseñada para generar valor medible en tu empresa.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 animate-on-scroll slide-in-right">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const clickable = Boolean(service.link)
                  const go = () => service.link && navigateWithTransition(service.link!)

                  return (
                    <div key={index} className="relative">
                      {service.highlight && (
                        <div className="absolute -top-4 -right-4 z-50 bg-gradient-to-r from-[#7F5AF0] to-[#3E6FA8] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-2xl border border-white/20">
                          <span className="flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Estrella
                          </span>
                        </div>
                      )}

                      {/* CARD */}
                      <div
                        className={`service-card group rounded-xl
                                    p-5 min-h-[9.5rem] flex flex-col justify-start
                                    ${service.highlight ? "featured-service" : ""}
                                    ${clickable ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20" : ""}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={go}
                        onKeyDown={(e) => (clickable && (e.key === "Enter" || e.key === " ")) && go()}
                        role={clickable ? "button" : undefined}
                        tabIndex={clickable ? 0 : -1}
                        aria-label={clickable ? `Abrir ${service.title}` : undefined}
                      >
                        <div className="flex items-start gap-4">
                          <div className="service-icon flex-shrink-0">{service.icon}</div>

                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-2 group-hover:text-[#7F5AF0] transition-colors">
                              {service.title}
                            </h3>

                            <p className="text-sm text-white/60 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Indicador de click: sólo si tiene link */}
                            {clickable && (
                              <span
                                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium
                                          text-white/80 border border-white/15 rounded-full px-3 py-1
                                          transition-all group-hover:text-white group-hover:border-[#7F5AF0]/50"
                              >
                                Conocé más
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text-section">Equipo</span>
                <span className="text-white"> compacto,</span>
                <br />
                <span className="neon-text">resultados grandes</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-in-left space-y-6">
                <div className="glass-card p-8 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Rocket className="h-6 w-6 text-[#7F5AF0]" />
                    <h3 className="text-xl font-semibold">Nuestra realidad</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Somos un equipo chico de desarrolladores y consultores tech en Rosario. No tenemos oficinas gigantes
                    ni marketing inflado. Tenemos código que funciona y clientes que crecen.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="h-6 w-6 text-[#3E6FA8]" />
                    <h3 className="text-xl font-semibold">Nuestro enfoque</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Automatización inteligente, infraestructura moderna, desarrollo ágil. Sin buzzwords, sin promesas imposibles. Solo tecnología que resuelve problemas reales.
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll slide-in-right">
                <div className="relative">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="text-3xl font-bold neon-text">2+</div>
                      <div className="text-sm text-white/60">Años de experiencia</div>
                    </div>
                    <div className="stat-item">
                      <div className="text-3xl font-bold neon-text">10+</div>
                      <div className="text-sm text-white/60">Proyectos completados</div>
                    </div>
                    <div className="stat-item">
                      <div className="text-3xl font-bold neon-text">100%</div>
                      <div className="text-sm text-white/60">Enfoque en resultados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">¿Listo para</span>
                <br />
                <span className="gradient-text-section">transformar</span>
                <span className="text-white"> tu empresa?</span>
              </h2>
              <p className="text-xl text-white/70">Hablemos de tu proyecto</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-on-scroll slide-in-left">
                <div className="glass-card p-8 rounded-2xl">
                  <form
                      className="space-y-6"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.currentTarget as HTMLFormElement;
                        const data = new FormData(form);

                        const payload = {
                          name: String(data.get("name") || ""),
                          email: String(data.get("email") || ""),
                          company: String(data.get("company") || ""),
                          message: String(data.get("message") || ""),
                          hp: String(data.get("hp") || ""), // honeypot
                        };

                        setSending(true);
                        setSendStatus(null);
                        try {
                          const res = await fetch("/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(payload),
                          });
                          const json = await res.json();
                          if (!res.ok || !json.ok) throw new Error(json.error || "Error");
                          setSendStatus("ok");
                          form.reset();
                        } catch (err) {
                          setSendStatus("error");
                        } finally {
                          setSending(false);
                        }
                      }}
                    >
                      {/* Honeypot anti-bots (oculto a usuarios) */}
                      <input name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input name="name" placeholder="Nombre" className="modern-input" required />
                        <Input name="email" type="email" placeholder="Email" className="modern-input" required />
                      </div>

                      <Input name="company" placeholder="Empresa" className="modern-input" />
                      <Textarea name="message" placeholder="Contanos sobre tu proyecto..." rows={4} className="modern-input" required />

                      {sendStatus === "ok" && (
                        <div className="text-sm text-green-400">¡Gracias! Te escribimos a la brevedad.</div>
                      )}
                      {sendStatus === "error" && (
                        <div className="text-sm text-red-400">Ups, no pudimos enviar el mensaje. Probá de nuevo.</div>
                      )}

                      <Button className="w-full hero-cta" disabled={sending}>
                        {sending ? "Enviando..." : "Enviar mensaje"}
                      </Button>
                    </form>
                </div>
              </div>

              <div className="animate-on-scroll slide-in-right space-y-8">
                <div className="contact-item">
                  <Mail className="h-6 w-6 text-[#7F5AF0]" />
                  <div>
                    <div className="font-semibold text-[#3E6FA8]">Email</div>
                    <div className="text-white/80">contacto@brocosolutions.com</div>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone className="h-6 w-6 text-[#7F5AF0]" />
                  <div>
                    <div className="font-semibold text-[#3E6FA8]">WhatsApp</div>
                    <div className="text-white/80">+54 9 3464 442676</div>
                  </div>
                </div>

                <div className="contact-item">
                  <MapPin className="h-6 w-6 text-[#7F5AF0]" />
                  <div>
                    <div className="font-semibold text-[#3E6FA8]">Ubicación</div>
                    <div className="text-white/80">Rosario, Santa Fe, Argentina</div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="text-sm text-white/60 mb-4">Seguinos en</div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/brocosolutions/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/broco.solutions/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.tiktok.com/@broco.solutions?_t=ZM-8yyzffLfq6Q&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/brand/bs-mark-neg.svg" alt="Broco Solutions" width={24} height={24} />
              <span className="text-2xl font-bold neon-text">Broco Solutions</span>
            </div>
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="flex gap-4">
                {/* Íconos sociales */}
                <a href="https://www.tiktok.com/@broco.solutions?_t=ZM-8yyzffLfq6Q&_r=1" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7F5AF0] transition-colors p-2 hover:bg-white/10 rounded-full" aria-label="TikTok">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                </a>
                <a href="https://www.instagram.com/broco.solutions/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7F5AF0] transition-colors p-2 hover:bg-white/10 rounded-full" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/brocosolutions/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7F5AF0] transition-colors p-2 hover:bg-white/10 rounded-full" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} Broco Solutions. Tecnología que funciona.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5493464442676?text=Hola! Me interesa conocer más sobre sus servicios"
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
