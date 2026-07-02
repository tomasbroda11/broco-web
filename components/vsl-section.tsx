"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Play } from "lucide-react"

const YOUTUBE_ID = "X0tP7M6QpgQ"
const YOUTUBE_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`

export function VslSection() {
  const [showVideo, setShowVideo] = useState(false)

  const handleCtaClick = () => {
    const el = document.getElementById("contacto")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[880px] mx-auto space-y-10 animate-on-scroll fade-in">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 glass-badge px-3 py-1 rounded-full text-sm">
              <Play className="h-4 w-4 text-[#7F5AF0]" />
              <span>Conocé Broco en 51 segundos</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text-section">51 segundos</span>
              <br />
              <span className="text-white">para entender qué hacemos</span>
            </h2>
          </div>

          <div className="relative aspect-video rounded-[12px] overflow-hidden border border-white/10 bg-white/5 shadow-lg">
            {showVideo ? (
              <iframe
                src={YOUTUBE_URL}
                title="Broco Solutions - 51 segundos para entender qué hacemos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 w-full h-full group cursor-pointer"
                aria-label="Reproducir video"
              >
                <Image
                  src="/vsl-thumbnail.png"
                  alt="Broco Solutions - Video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 880px) 100vw, 880px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7F5AF0]/90 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[#7F5AF0] shadow-lg shadow-[#7F5AF0]/30">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className="text-center">
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="hero-cta hero-cta-primary group cursor-pointer"
            >
              <span>Habla con nosotros</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
