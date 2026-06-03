import { ExternalLink, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--agro-bone)]/10 bg-[var(--agro-ink)] py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div>
            <a href="#inicio" className="mb-3 flex items-center gap-2">
              <img src="/agro/logo/brocoagro-logo.svg" alt="BrocoAgro" className="h-10 w-auto" />
            </a>
            <p className="max-w-xs text-sm text-[var(--agro-bone-dim)]">El primer ERP agro conversacional. Una solución de Broco Solutions.</p>
          </div>

          <div>
            <div className="mb-4 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">NAVEGACIÓN</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#producto" className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-violet)]">
                  Producto
                </a>
              </li>
              <li>
                <a href="#por-que" className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-violet)]">
                  Por qué ahora
                </a>
              </li>
              <li>
                <a href="#stack" className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-violet)]">
                  Stack
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-violet)]">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">CONTACTO</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-[var(--agro-violet)]" />
                <a href="mailto:contacto@brocosolutions.com" className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-violet)]">
                  contacto@brocosolutions.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="size-4 text-[var(--agro-blue-bright)]" />
                <a
                  href="https://www.linkedin.com/company/brocosolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-blue-bright)]"
                >
                  /company/brocosolutions
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 text-[var(--agro-whatsapp)]" />
                <a href="https://wa.me/5493412795326" target="_blank" rel="noopener noreferrer" className="text-[var(--agro-bone)] transition-colors hover:text-[var(--agro-whatsapp)]">
                  +54 9 341 279 5326
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--agro-bone)]/10 pt-8 text-center">
          <p className="font-[family-name:var(--font-agro-mono)] text-xs text-[var(--agro-bone-dim)]">© 2026 BROCO SOLUTIONS · TODOS LOS DERECHOS RESERVADOS</p>
        </div>
      </div>
    </footer>
  );
}
