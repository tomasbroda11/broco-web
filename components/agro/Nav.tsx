"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#por-que", label: "Por qué" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);

    if (pathname === "/brocoagro") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/brocoagro");
  };

  return (
    <nav className="fixed left-1/2 top-14 z-50 w-[min(calc(100%-1.5rem),72rem)] -translate-x-1/2 md:top-16">
      <div className="glass-nav flex min-h-16 items-center justify-between gap-4 rounded-full px-4 py-2 md:px-6">
        <Link
          href="/brocoagro"
          onClick={handleBrandClick}
          className="flex min-w-0 items-center gap-3 rounded-full px-1 py-1 text-[var(--agro-bone)] transition-opacity hover:opacity-90"
          aria-label="Ir al inicio de BrocoAgro"
        >
          <img src="/agro/logo/brocoagro-logo.svg" alt="BrocoAgro" className="h-9 w-auto shrink-0" />
          <span className="hidden truncate font-[family-name:var(--font-agro-body)] text-base font-semibold text-[var(--agro-bone)] sm:inline">
            BrocoAgro
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--agro-bone-dim)] transition-colors hover:text-[var(--agro-bone)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-[var(--agro-violet)] px-4 py-2 text-sm font-medium text-[var(--agro-bone)] transition-transform hover:scale-[1.02] active:scale-[0.97]"
          >
            Agendar demo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-[var(--agro-bone)] transition-colors hover:text-white md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="agro-mobile-menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="agro-mobile-menu"
        className={`glass-nav mt-2 overflow-hidden rounded-[1.5rem] transition-[max-height,opacity] duration-200 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-[var(--agro-bone)] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-full bg-[var(--agro-violet)] px-4 py-3 text-center text-sm font-medium text-[var(--agro-bone)] transition-transform active:scale-[0.97]"
          >
            Agendar demo
          </a>
        </div>
      </div>
    </nav>
  );
}
