import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { PRIVACY_SECTIONS, BUSINESS } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const PrivacyPolicyPage = () => {
  useSEO({
    title: "Privacy Policy | Informatic Point",
    description:
      "Informativa sul trattamento dei dati personali di Informatic Point — Molfetta (BA): dati raccolti, finalità, cookie, diritti dell'interessato (GDPR).",
  });

  return (
    <section className="pt-[72px]">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="Informativa Privacy"
          title="Privacy Policy"
          subtitle="Come vengono trattati i tuoi dati personali quando visiti il sito o mi contatti."
        />

        <Reveal delay={0.1}>
          <nav
            aria-label="Indice della pagina"
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6"
          >
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
              Indice
            </p>
            <ul className="space-y-2 text-sm">
              {PRIVACY_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-slate-600 transition-colors hover:text-brand-dark"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <div className="mt-10 space-y-10 pb-8">
          {PRIVACY_SECTIONS.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 0.05, 0.2)}>
              <article id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  {s.title}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-3 text-sm leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}

          <Reveal>
            <p className="rounded-2xl border border-brand/30 bg-brand-light/50 p-5 text-sm text-slate-700">
              Per qualsiasi domanda sulla privacy scrivi a{" "}
              <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-brand-dark underline">
                {BUSINESS.email}
              </a>{" "}
              oppure torna alla{" "}
              <Link to="/contatti" className="font-semibold text-brand-dark underline">
                pagina contatti
              </Link>
              . Titolare del trattamento: {BUSINESS.legalOwner}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
