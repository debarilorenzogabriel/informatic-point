import { useSEO } from "@/hooks/useSEO";
import { SERVICES, PROCESS_STEPS } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const ServiziPage = () => {
  useSEO({
    title: "Servizi | Informatic Point — Siti Web, Assistenza IT, CAD e Software",
    description:
      "Scopri i servizi di Informatic Point a Molfetta: realizzazione siti web, assistenza informatica, social media, grafica e loghi, disegni CAD e gestionali personalizzati.",
  });

  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-[72px]">
        <div
          className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-iris/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
          <SectionHeading
            eyebrow="I miei servizi"
            title="Sei aree di competenza, un unico interlocutore"
            subtitle="Ogni progetto è diverso: trovo la soluzione giusta per il tuo obiettivo e il tuo budget, senza pacchetti preconfezionati."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} detailed index={i} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Come lavoro"
            title="Dal primo contatto al supporto continuo"
            subtitle="Un metodo semplice e trasparente, pensato per chi non vuole perdere tempo."
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <li className="group relative border-t-2 border-slate-200 pt-6 transition-colors hover:border-brand">
                  <span className="font-mono text-sm font-semibold text-brand">
                    {p.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ServiziPage;
