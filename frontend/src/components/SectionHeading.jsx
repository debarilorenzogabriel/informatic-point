import Reveal from "./Reveal";

/* Intestazione di sezione: eyebrow mono + titolo display + sottotitolo */
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}) => (
  <Reveal
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <p
        className={`mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] ${
          align === "center" ? "justify-center" : ""
        } ${light ? "text-brand" : "text-brand-dark"}`}
      >
        <span className="inline-block h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
    )}
    <h2
      className={`font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
        light ? "text-paper" : "text-ink"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-4 text-base leading-relaxed sm:text-lg ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
