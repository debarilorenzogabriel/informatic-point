import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/site";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-paper/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          data-testid="nav-logo"
          aria-label="Informatic Point — Home"
          className="shrink-0"
        >
          <Logo />
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={({ isActive }) =>
                    `relative text-sm font-semibold tracking-tight transition-colors ${
                      isActive ? "text-brand-dark" : "text-slate-600 hover:text-ink"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contatti"
            data-testid="nav-cta-quote"
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper transition-all duration-300 hover:bg-brand hover:text-ink active:scale-95 sm:inline-flex"
          >
            Preventivo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            data-testid="nav-mobile-toggle"
            aria-expanded={open}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-ink transition-colors hover:border-brand hover:text-brand-dark lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Menu mobile"
            className="overflow-hidden border-b border-slate-200 bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 pb-6 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={link.path}
                    data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-display text-2xl font-bold tracking-tight ${
                        isActive ? "text-brand-dark" : "text-ink hover:text-brand-dark"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="pt-3">
                <Link
                  to="/contatti"
                  data-testid="nav-cta-quote-mobile"
                  className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper active:scale-95"
                >
                  Richiedi un preventivo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
