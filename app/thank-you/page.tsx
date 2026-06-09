import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ThankYouPageProps = {
  searchParams: Promise<{
    eid?: string | string[]
    q?: string | string[]
    val?: string | string[]
  }>
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  await searchParams

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0D0D] px-4 text-white">
      <div className="animated-bg pointer-events-none absolute inset-0">
        <div className="floating-orbs" />
        <div className="grid-pattern" />
      </div>

      <section className="glass-card relative z-10 w-full max-w-2xl rounded-2xl p-8 text-center md:p-12">
        <Image
          src="/brand/bs-mark-neg.svg"
          alt="Broco"
          width={48}
          height={48}
          className="mx-auto mb-8"
          priority
        />
        <CheckCircle2 className="mx-auto mb-6 h-12 w-12 text-[#7F5AF0]" aria-hidden="true" />
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Gracias por <span className="gradient-text-section">contactarnos</span>
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-white/70">
          Recibimos tu mensaje. Nuestro equipo se va a comunicar con vos a la brevedad.
        </p>
        <Button asChild className="hero-cta">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </section>
    </main>
  )
}
