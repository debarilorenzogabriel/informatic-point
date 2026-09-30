import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/data/site";
import { WA_DEFAULT, telLink } from "@/lib/contact";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="footer-container"
      className="border-t-2 border-brand/60 bg-ink text-slate-300"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {BUSINESS.claim} per privati, professionisti e piccole imprese.
            Tecnologia chiara, solida e su misura, {BUSINESS.city} {BUSINESS.province}.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-link"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-brand hover:text-brand"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <nav aria-label="Pagine del sito">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Pagine
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="transition-colors hover:text-brand"
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Servizi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to="/servizi" className="transition-colors hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Contatti
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a
                href={telLink}
                data-testid="footer-phone-link"
                className="flex items-start gap-2.5 transition-colors hover:text-brand"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                data-testid="footer-email-link"
                className="flex items-start gap-2.5 transition-colors hover:text-brand"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {BUSINESS.city} {BUSINESS.province}, {BUSINESS.region}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>
            © {year} {BUSINESS.name} · {BUSINESS.city} {BUSINESS.province} ·{" "}
            {BUSINESS.piva}
          </p>
          <Link
            to="/privacy-policy"
            data-testid="footer-privacy-link"
            className="transition-colors hover:text-brand"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
