import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { WA_DEFAULT } from "@/lib/contact";

/* Banner finale di conversione, presente su tutte le pagine */
export const CTABanner = () => (
  <section className="relative overflow-hidden bg-ink">
    <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
    <div
      className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/25 blur-[110px]"
      aria-hidden="true"
    />
    <div
      className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-iris/25 blur-[110px]"
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="max-w-3xl">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Parliamone
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
          Pronto a portare la tua attività al livello successivo?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Raccontami il tuo progetto: riceverai un preventivo gratuito, chiaro e
          senza impegno.
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
          <Link
            to="/contatti"
            data-testid="cta-banner-quote-button"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:bg-brand-light active:scale-95"
          >
            Richiedi un preventivo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-banner-whatsapp-button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-500/60 px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:border-brand hover:text-brand active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Scrivimi su WhatsApp
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTABanner;
