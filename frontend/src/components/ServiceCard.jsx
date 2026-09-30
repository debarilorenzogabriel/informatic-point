import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";

/* Card servizio riutilizzabile: compatta in home, dettagliata in /servizi */
export const ServiceCard = ({ service, detailed = false, index = 0 }) => {
  const Icon = service.icon;

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl hover:shadow-brand/10 sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-light to-iris-light text-brand-dark transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <span className="font-mono text-xs font-semibold tracking-widest text-slate-300 transition-colors group-hover:text-iris">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {detailed ? service.description : service.short}
        </p>

        {detailed && (
          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5">
          <Link
            to="/contatti"
            data-testid={`service-cta-${service.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition-colors hover:text-iris"
          >
            Richiedi informazioni
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
};

export default ServiceCard;
