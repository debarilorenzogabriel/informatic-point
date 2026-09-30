import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, FolderOpen } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PORTFOLIO_CATEGORIES } from "@/data/site";
import { WA_DEFAULT } from "@/lib/contact";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { LogoMark } from "@/components/Logo";

export const PortfolioPage = () => {
  useSEO({
    title: "Portfolio | Informatic Point — Progetti e Case Study",
    description:
      "I progetti realizzati da Informatic Point: siti web, gestionali, grafica e lavori CAD. Case study in pubblicazione — richiedi un esempio dei miei lavori.",
  });

  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-[72px]">
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
          <SectionHeading
            eyebrow="Portfolio"
            title="Lavori e case study"
            subtitle="Una selezione dei progetti realizzati per privati, professionisti e aziende della zona."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <Reveal>
          <div className="flex flex-wrap gap-2.5" aria-label="Categorie dei progetti">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600"
              >
                {cat}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-iris">
                  in arrivo
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mt-10 flex flex-col items-center overflow-hidden rounded-[2rem] border-2 border-dashed border-slate-300 bg-white/60 px-6 py-20 text-center"
            data-testid="portfolio-empty-state"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-grid opacity-40"
              aria-hidden="true"
            />
            <div className="animate-float relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-ink/5">
              <LogoMark className="h-14 w-14" />
            </div>
            <FolderOpen className="mt-8 h-6 w-6 text-brand" />
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              I primi progetti arrivano a breve
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Sto preparando i case study dei lavori più significativi. Nel
              frattempo posso mostrarti esempi mirati in base a ciò che ti serve.
            </p>
            <div className="relative mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                to="/contatti"
                data-testid="portfolio-cta-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-all duration-300 hover:bg-brand hover:text-ink active:scale-95"
              >
                Richiedi un caso studio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="portfolio-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-[#25D366] hover:text-[#128C4B] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Chiedi su WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
};

export default PortfolioPage;
