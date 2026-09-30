import { Target, MapPin, GraduationCap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { VALUES, STACK_CHIPS, IMAGES } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { LogoMark } from "@/components/Logo";

export const ChiSonoPage = () => {
  useSEO({
    title: "Chi Sono | Informatic Point — Servizi Informatici a Molfetta",
    description:
      "Conosci la persona dietro Informatic Point: un tecnico informatico di Molfetta che aiuta privati, professionisti e piccole imprese con soluzioni digitali su misura.",
  });

  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-[72px]">
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Chi sono"
              title="La persona dietro lo schermo"
              subtitle="Un referente unico, dalla prima chiacchierata alla consegna finale."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  Sono il fondatore di <strong className="text-ink">Informatic Point</strong>,
                  un'attività di servizi informatici e digitali con sede a
                  Molfetta, nel cuore della Puglia. Aiuto privati, professionisti
                  e piccole imprese a usare la tecnologia in modo semplice:
                  dai siti web ai gestionali, dall'assistenza quotidiana alla
                  grafica e ai disegni tecnici CAD.
                </p>
                <p>
                  Credo in un approccio diretto e umano: prima ti ascolto, poi
                  ti propongo la soluzione più adatta — spiegata in parole
                  chiare, senza gergo tecnico inutile. Il mio obiettivo è che tu
                  ottenga un risultato concreto e durevole, non solo un servizio
                  ma una relazione di fiducia costruita nel tempo.
                </p>
                <p>
                  [Testo segnaposto: personalizza questa biografia con la tua
                  storia, le tue certificazioni e la tua esperienza.]
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {STACK_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-[11px] font-medium text-slate-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/35 to-iris/35 opacity-70 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={IMAGES.workspace}
                alt="Postazione di lavoro di Informatic Point"
                loading="lazy"
                width="1200"
                height="800"
                className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover"
              />
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-ink/10">
                <LogoMark className="h-11 w-11" />
                <div>
                  <p className="font-display text-sm font-bold text-ink">
                    Informatic Point
                  </p>
                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3 text-brand" />
                    Molfetta (BA) · Puglia
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:py-24">
          <Reveal>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                <Target className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                I miei valori
              </h2>
              <ul className="mt-4 space-y-3">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-iris-light text-iris">
                <GraduationCap className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                Il mio metodo
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Ascolto, preventivo chiaro, realizzazione con aggiornamenti
                costanti e supporto dopo la consegna. Ogni soluzione è costruita
                sui tuoi flussi di lavoro reali, per farti risparmiare tempo e
                preoccupazioni.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                <MapPin className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                Molfetta &amp; Puglia
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Opero a Molfetta e in tutta la provincia di Bari, con possibilità
                di interventi a domicilio e in azienda. Per i lavori digitali —
                siti, grafica, gestionali e CAD — collaboro con clienti anche a
                distanza, in tutta Italia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ChiSonoPage;
