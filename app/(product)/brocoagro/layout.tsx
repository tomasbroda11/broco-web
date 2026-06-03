import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrocoAgro — El ERP agro conversacional",
  description: "Stock, gastos, cosecha y ventas. Desde WhatsApp. Con un agente de IA que entiende el campo argentino.",
  alternates: {
    canonical: "/brocoagro",
  },
  openGraph: {
    title: "BrocoAgro — El ERP agro conversacional",
    description: "Stock, gastos, cosecha y ventas. Desde WhatsApp. Con un agente de IA que entiende el campo argentino.",
    url: "/brocoagro",
    images: [
      {
        url: "/agro/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrocoAgro — El ERP agro conversacional",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrocoAgro — El ERP agro conversacional",
    description: "Stock, gastos, cosecha y ventas. Desde WhatsApp.",
    images: ["/agro/og-image.png"],
  },
};

export default function BrocoAgroLayout({ children }: { children: React.ReactNode }) {
  return <div className="theme-agro min-h-screen">{children}</div>;
}
