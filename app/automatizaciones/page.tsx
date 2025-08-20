"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Receipt,
  FileText,
  Banknote,
  Layers,
  BarChart3,
  Menu,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Truck,
} from "lucide-react"

export default function AutomatizacionesPage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigateWithTransition = (href: string) => {
    setIsTransitioning(true)
    document.body.classList.add("page-transitioning")
    setTimeout(() => router.push(href), 300)
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMenuOpen(false)
  }

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

  useEffect(() => {
    // liberar scroll si venís de otra página con transición
    document.body.classList.remove("page-transitioning", "is-scrolling");

    // animaciones on-scroll
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);


  // ===== Soluciones enfocadas en dolor del cliente =====
  const buckets: {
    title: string
    icon: JSX.Element
    items: string[]
  }[] = [
    {
      title: "Consultas que se acumulan",
      icon: <MessageCircle className="h-6 w-6" />,
      items: [
        "Respuestas instantáneas a preguntas frecuentes (WhatsApp / web) para bajar llamadas y mensajes repetidos.",
        "Derivación automática al área correcta y seguimiento sin olvidos.",
        "Agenda de turnos o tomas de pedidos simple, sin idas y vueltas.",
        "Resultado típico: menos tiempo al teléfono y respuestas más rápidas para el cliente.",
      ],
    },
    {
      title: "Pedidos desordenados",
      icon: <Receipt className="h-6 w-6" />,
      items: [
        "Ingreso de pedidos desde formularios o WhatsApp con validaciones básicas.",
        "Avisos al equipo y estados claros para no correr atrás de nada.",
        "Unificamos la info que hoy está en chats, mails y planillas.",
        "Resultado típico: menos errores y entregas más prolijas.",
      ],
    },
    {
      title: "Planillas que consumen horas",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Cargas repetitivas que pasan a ser automáticas (de mails o adjuntos a tu planilla/sistema).",
        "Recordatorios y tareas por fecha para que nada quede colgado.",
        "Cierres diarios/semanales listos sin quedarse fuera de horario.",
        "Resultado típico: más tiempo para vender y menos para copiar/pegar.",
      ],
    },
    {
      title: "Cobros atrasados",
      icon: <Banknote className="h-6 w-6" />,
      items: [
        "Avisos de vencimiento y seguimiento de cobranzas sin perseguir a nadie.",
        "Resumen de quién debe, cuánto y hace cuánto, sin abrir 10 archivos.",
        "Arqueo de cajas por turno y sucursal en minutos.",
        "Resultado típico: mejora de la cobranza y control simple del día a día.",
      ],
    },
    {
      title: "Stock que no coincide",
      icon: <Layers className="h-6 w-6" />,
      items: [
        "Sincronización de stock y precios entre tienda y sistema (TiendaNube, Woo, ML).",
        "Alertas cuando algo se queda sin stock o hay diferencias.",
        "Etiquetas y estados de despacho para avisar bien al cliente.",
        "Resultado típico: menos quiebres y menos reclamos.",
      ],
    },
    {
      title: "Reportes que llegan tarde",
      icon: <BarChart3 className="h-6 w-6" />,
      items: [
        "KPIs diarios automáticos (ventas, margen, mora, rotación).",
        "Tableros claros en Sheets o Looker, sin pedirle a nadie un informe.",
        "Alertas ante desvíos para reaccionar rápido, no a fin de mes.",
        "Resultado típico: decisiones con datos al día, sin humo.",
      ],
    },
  ]

  const steps = [
    { icon: <Sparkles className="h-5 w-5" />, title: "Relevamiento express", desc: "30–45 minutos para entender tu flujo y dónde se va el tiempo." },
    { icon: <Zap className="h-5 w-5" />, title: "MVP en días", desc: "Prototipo funcional atacando el 80% del dolor, sin romper nada." },
    { icon: <CheckCircle2 className="h-5 w-5" />, title: "Ahorro medible", desc: "Minutos ahorrados, errores evitados y plata recuperada." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Escalado & soporte", desc: "Monitoreo simple y mejoras iterativas, sin burocracia." },
  ]

  const faqs = [
    {
      q: "¿Por dónde arrancamos?",
      a: "Agendamos una llamada corta. Nos mostrás cómo lo hacen hoy, medimos tiempos y definimos el objetivo (qué dejar de hacer a mano).",
    },
    {
      q: "¿Qué necesito tener listo?",
      a: "Accesos a las herramientas que ya usan (mail, planillas, tienda, sistema) y un referente del proceso. No hace falta nada raro.",
    },
    {
      q: "¿Cuándo veo resultados?",
      a: "Suele haber un MVP en 3–10 días hábiles, según la complejidad. La idea es que veas valor rápido y después iteramos.",
    },
    {
      q: "¿Cómo presupuestan?",
      a: "Precio cerrado por caso o bolsa de horas. Elegimos juntos lo que mejor encaje para tu negocio y presupuesto.",
    },
  ]

  return (
    <div className={`min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden touch-pan-y overflow-y-auto ios-smooth-scroll ${isTransitioning ? "transitioning" : ""}`}>
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#7F5AF0] to-[#3E6FA8] transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-2xl font-bold animate-pulse">Cargando...</div>
        </div>
      )}

      {/* NAV (misma estética que la home, responsive estable) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-nav flex items-center rounded-full
                        px-4 sm:px-6 lg:px-8 py-3
                        w-[92vw] lg:w-auto max-w-[1200px]
                        justify-between gap-2 sm:gap-4 lg:gap-6 overflow-hidden">
          {/* Logo + marca */}
          <button
            onClick={() => navigateWithTransition("/")}
            className="flex items-center gap-3 hover:opacity-90 transition whitespace-nowrap"
            aria-label="Ir a inicio"
          >
            <Image src="/brand/bs-mark-neg.svg" alt="Broco" width={28} height={28} priority />
            <span className="text-lg font-bold">Broco</span>
          </button>

          {/* Links escritorio desde lg */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm ml-4">
            <button onClick={() => scrollTo("servicios")}  className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Servicios</button>
            <button onClick={() => scrollTo("casos")}      className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Casos comunes</button>
            <button onClick={() => scrollTo("proceso")}    className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">Cómo trabajamos</button>
            <button onClick={() => scrollTo("faq")}        className="hover:text-[#7F5AF0] transition-colors whitespace-nowrap">FAQ</button>
          </div>

          {/* CTA escritorio */}
          <div className="hidden lg:block ml-auto shrink-0">
            <Button
              className="gradient-primary rounded-full px-6 py-2 text-sm"
              onClick={() => openWhatsApp("Hola! Quiero automatizar procesos en mi empresa.")}
            >
              Hablemos
            </Button>
          </div>

          {/* Hamburguesa hasta lg */}
          <button
            className="lg:hidden p-2 ml-2 rounded-md hover:bg-white/5
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Dropdown mobile */}
        <div
          className={`lg:hidden transition-all duration-200 overflow-hidden mt-2 rounded-2xl glass-nav ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-4 py-3 gap-2">
            <button onClick={() => scrollTo("servicios")} className="py-2 text-left hover:text-[#7F5AF0]">Servicios</button>
            <button onClick={() => scrollTo("casos")}     className="py-2 text-left hover:text-[#7F5AF0]">Casos comunes</button>
            <button onClick={() => scrollTo("proceso")}   className="py-2 text-left hover:text-[#7F5AF0]">Cómo trabajamos</button>
            <button onClick={() => scrollTo("faq")}       className="py-2 text-left hover:text-[#7F5AF0]">FAQ</button>
            <div className="pt-2">
              <Button
                className="w-full gradient-primary rounded-full"
                onClick={() => openWhatsApp("Hola! Quiero automatizar procesos en mi empresa.")}
              >
                Hablemos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12"
        >
          <div className="absolute inset-0 animated-bg pointer-events-none">
            <div className="floating-orbs" />
            <div className="grid-pattern" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 glass-badge px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm leading-6">
              <Sparkles className="h-4 w-4 text-[#7F5AF0]" />
              <span>Menos tareas repetidas, más negocio</span>
            </div>

            {/* Título: más chico en mobile, ancho limitado y mejor interlineado */}
            <h1
              className="
                mt-6 font-black tracking-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                leading-[1.1] sm:leading-[1.05]
                max-w-[14ch] mx-auto
              "
            >
              Automatizaciones a medida <span className="gradient-text">para empresas</span>
            </h1>

            {/* Párrafo: también reduce en mobile */}
            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Te sacamos de encima lo manual y desordenado. Flujos simples, medibles y escalables.
            </p>

            {/* CTAs: un poco menos de margen en mobile */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="hero-cta"
                onClick={() => openWhatsApp('Hola! Quiero evaluar automatizaciones para mi empresa.')}
              >
                Quiero automatizar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white border border-white/20 hover:border-[#7F5AF0]/50"
                onClick={() => scrollTo('servicios')}
              >
                Ver soluciones
              </Button>
            </div>
          </div>
        </section>

        {/* SOLUCIONES por dolor */}
        <section id="servicios" className="py-24 relative">
          <div className="absolute inset-0 diagonal-bg pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto animate-on-scroll fade-in">
              <h2 className="text-3xl md:text-5xl font-bold">
                Soluciones para <span className="gradient-text-section">problemas de todos los días</span>
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Te mostramos cómo los resolvemos y qué cambia en tu operación. Nada de tecnicismos de más.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {buckets.map((b, i) => (
                <div
                  key={b.title}
                  className="glass-card p-6 rounded-2xl animate-on-scroll slide-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="service-icon">{b.icon}</div>
                    <h3 className="text-xl font-semibold">{b.title}</h3>
                  </div>
                  <ul className="space-y-2 text-white/80">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 text-[#7F5AF0]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS COMUNES (más narrativo) */}
        <section id="casos" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                Casos <span className="gradient-text-section">que vemos siempre</span>
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Tres clásicos donde el ROI aparece rápido.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <CaseCard
                icon={<Receipt className="h-6 w-6" />}
                title="Pedidos a las corridas"
                desc="Clientes que escriben por WhatsApp, mail y web. Unificamos todo, validamos y avisamos al equipo. Menos errores, más entregas claras."
              />
              <CaseCard
                icon={<Truck className="h-6 w-6" />}
                title="Logística sin avisos"
                desc="Estados y etiquetas automáticas, notificaciones y alertas si se clava un envío. El cliente sabe dónde está su pedido y vos también."
              />
              <CaseCard
                icon={<Banknote className="h-6 w-6" />}
                title="Cajas y cobranzas"
                desc="Arqueo por turno, deuda al día y recordatorios sin perseguir a nadie. Cierre de día en minutos, no en horas."
              />
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                Cómo <span className="gradient-text-section">trabajamos</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.title} className="glass-card p-6 rounded-2xl text-center">
                  <div className="mx-auto mb-3 service-icon">{s.icon}</div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-white/70 text-sm mt-2">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                className="hero-cta"
                onClick={() => openWhatsApp("Hola! Quiero una automatización piloto (MVP).")}
              >
                Quiero un MVP <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold">Preguntas <span className="gradient-text-section">frecuentes</span></h2>
            </div>

            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {faqs.map(({ q, a }) => (
                <details key={q} className="glass-card p-5 rounded-2xl">
                  <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                    <span>{q}</span>
                    <Clock className="h-4 w-4 opacity-60" />
                  </summary>
                  <p className="mt-3 text-white/80">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-90 pointer-events-none"></div>
          <div className="container mx-auto relative z-10 text-center px-4">
            <h3 className="text-2xl md:text-4xl font-bold">¿Listo para dejar de hacer todo a mano?</h3>
            <p className="mt-3 text-white/80">Contanos tu caso y armamos un piloto en días.</p>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 border border-white/20"
                onClick={() => openWhatsApp("Hola! Quiero automatizar un proceso, ¿coordinamos?")}
              >
                Coordinar por WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/5493464442676?text=Hola!%20Quiero%20automatizar%20procesos%20con%20Broco"
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

/* ---------- componentes auxiliares ---------- */
function CaseCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="service-icon">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
