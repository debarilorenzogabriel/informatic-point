import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { SERVICES, WHY_POINTS, TESTIMONIALS, IMAGES } from "@/data/site";
import { WA_DEFAULT } from "@/lib/contact";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const heroLines = ["La tecnologia che", "fa crescere", "la tua attività."];

const lineVariants = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => (
  <section className="relative overflow-hidden pt-[72px]">
    {/* Scena 3D Spline come sfondo dell'hero */}
    <div className="absolute inset-0 z-0" data-testid="hero-spline-background">
      <spline-viewer
        url="https://prod.spline.design/UWA8yeiXo12erFOG/scene.splinecode"
        class="block h-full w-full"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-paper/85 lg:hidden"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-paper via-paper/70 to-transparent lg:block"
        aria-hidden="true"
      />
      <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
	
<div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:min-h-[calc(100vh-72px)] lg:pb-24 lg:pt-20">
      <div className="max-w-2xl">
	  <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/70 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Informatic Point · Molfetta (BA)
          </motion.p>

          <h1
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            data-testid="hero-title"
          >
            {heroLines.map((line, i) => (
              <span key={line} className="line-mask">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className={i === 2 ? "text-gradient" : undefined}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg"
          >
            Siti web, assistenza informatica, grafica, CAD e software su misura
            per privati, professionisti e piccole imprese. Un unico punto di
            riferimento digitale — semplice, solido e affidabile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <Link
              to="/contatti"
              data-testid="hero-cta-quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper shadow-lg shadow-ink/20 transition-all duration-300 hover:bg-brand hover:text-ink active:scale-95"
            >
              Richiedi un preventivo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-[#25D366] hover:text-[#128C4B] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Contattami su WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-6 flex items-center gap-2 text-sm text-slate-600"
          >
            <ShieldCheck className="h-4 w-4 text-brand" />
            Preventivo gratuito e senza impegno · Risposta rapida garantita
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const Why = () => (
  <section className="relative overflow-hidden bg-ink">
    <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
      <div>
        <SectionHeading
          light
          eyebrow="Perché Informatic Point"
          title="Un referente tecnico locale, non un help desk anonimo"
          subtitle="Mi trovi a Molfetta: lavoro con chi ha fiducia in un servizio umano, diretto e professionale."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {WHY_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-ink-600 bg-ink-700/70 p-5 backdrop-blur transition-colors hover:border-brand/50">
                <h3 className="font-display text-base font-bold text-paper">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="relative">
          <div
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/40 to-iris/40 opacity-70 blur-2xl"
            aria-hidden="true"
          />
          <img
            src={IMAGES.molfetta}
            alt="Vista del lungomare di Molfetta, Puglia"
            loading="lazy"
            width="1200"
            height="800"
            className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-ink/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper backdrop-blur">
            Molfetta · Puglia
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
    <SectionHeading
      align="center"
      eyebrow="Testimonianze"
      title="Dicono di Informatic Point"
      subtitle="Clienti privati, professionisti e piccole imprese della nostra zona."
    />
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.1} className="h-full">
          <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10">
            <div className="flex gap-1 text-amber-400" aria-label="Recensione a 5 stelle">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 0 0-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 0 0-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69L9.05 2.93Z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-iris font-display text-sm font-bold text-white">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </section>
);

export const HomePage = () => {
  useSEO({
    title: "Informatic Point | Servizi Informatici e Digitali a Molfetta",
    description:
      "Siti web, assistenza informatica, social media, grafica, CAD e gestionali personalizzati a Molfetta, Puglia. Richiedi un preventivo gratuito su misura.",
  });

  return (
    <>
      <Hero />
      <Marquee />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Servizi"
            title="Tutto ciò di cui la tua attività ha bisogno, in un solo punto"
            subtitle="Dalla vetrina online al gestionale su misura: tecnologia che lavora per te."
          />
          <Reveal delay={0.1}>
            <Link
              to="/servizi"
              data-testid="home-all-services-link"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-dark transition-colors hover:text-iris"
            >
              Tutti i servizi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      <Why />
      <Testimonials />
      <CTABanner />
    </>
  );

export default HomePage;
