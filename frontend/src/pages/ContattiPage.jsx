import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock3, Send } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useSEO } from "@/hooks/useSEO";
import { BUSINESS, SERVICES } from "@/data/site";
import { WA_DEFAULT, telLink, waLink, formMailto } from "@/lib/contact";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  service: SERVICES[0].title,
  message: "",
  consent: false,
};

const validate = (form) => {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Inserisci il tuo nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Inserisci un indirizzo e-mail valido.";
  if (form.phone.trim() && !/^[+\d][\d\s.-]{5,}$/.test(form.phone.trim()))
    errors.phone = "Il numero di telefono non è valido.";
  if (form.message.trim().length < 10)
    errors.message = "Scrivi un messaggio di almeno 10 caratteri.";
  if (!form.consent)
    errors.consent = "È necessario accettare l'informativa privacy.";
  return errors;
};

const inputClass = (error) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/60 ${
    error ? "border-red-400 focus:ring-red-300" : "border-slate-300 focus:border-brand"
  }`;

export const ContattiPage = () => {
  useSEO({
    title: "Contatti | Informatic Point — Preventivo Gratuito a Molfetta",
    description:
      "Contatta Informatic Point per un preventivo gratuito: siti web, assistenza informatica, grafica, CAD e gestionali. Telefono, WhatsApp ed e-mail — Molfetta (BA).",
  });

  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    const value = key === "consent" ? e.target.checked : e.target.value;
    setForm({ ...form, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const dispatch = (mode) => {
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      toast.error("Controlla i campi evidenziati nel modulo.");
      return;
    }
    if (mode === "whatsapp") {
      window.open(waLink(formMessage(form)), "_blank");
      toast.success("WhatsApp aperto con il messaggio precompilato: premi invio!");
    } else {
      window.location.href = formMailto(form);
      toast.success("Il tuo client e-mail si aprirà con il messaggio pronto.");
    }
  };

  const formMessage = (f) =>
    [
      "Ciao Informatic Point, ti scrivo dal sito.",
      "",
      `Nome: ${f.name}`,
      `E-mail: ${f.email}`,
      f.phone ? `Telefono: ${f.phone}` : null,
      `Servizio: ${f.service}`,
      "",
      `Messaggio: ${f.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("whatsapp");
  };

  const contacts = [
    { icon: Phone, label: "Telefono", value: BUSINESS.phoneDisplay, href: telLink, testid: "contact-phone-link" },
    { icon: Mail, label: "E-mail", value: BUSINESS.email, href: `mailto:${BUSINESS.email}`, testid: "contact-email-link" },
    { icon: MessageCircle, label: "WhatsApp", value: BUSINESS.phoneDisplay, href: WA_DEFAULT, testid: "contact-whatsapp-link" },
  ];

  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-[72px]">
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
          <SectionHeading
            eyebrow="Contatti"
            title="Raccontami il tuo progetto"
            subtitle="Compila il modulo: scegli se inviare la richiesta via WhatsApp o e-mail. Riceverai un preventivo gratuito e senza impegno."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              data-testid="contact-form"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Nome *
                  </label>
                  <input
                    id="name"
                    data-testid="input-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Lorenzo"
                    value={form.name}
                    onChange={set("name")}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p data-testid="error-name" className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    data-testid="input-email"
                    type="email"
                    autoComplete="email"
                    placeholder="debari.lorenzogabriel@gmail.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p data-testid="error-email" className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
                    Telefono <span className="font-normal text-slate-400">(facoltativo)</span>
                  </label>
                  <input
                    id="phone"
                    data-testid="input-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+393664366208"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && (
                    <p data-testid="error-phone" className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink">
                    Servizio di interesse
                  </label>
                  <select
                    id="service"
                    data-testid="select-service"
                    value={form.service}
                    onChange={set("service")}
                    className={`${inputClass(null)} appearance-none`}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Altro">Altro / non lo so ancora</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  data-testid="input-message"
                  rows={5}
                  placeholder="Descrivi brevemente di cosa hai bisogno…"
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputClass(errors.message)} resize-y`}
                />
                {errors.message && (
                  <p data-testid="error-message" className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-5 flex items-start gap-3">
                <input
                  id="consent"
                  data-testid="input-consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={set("consent")}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#06B6D4]"
                />
                <label htmlFor="consent" className="text-xs leading-relaxed text-slate-500">
                  Ho letto e accetto l'{" "}
                  <a href="/privacy-policy" className="font-semibold text-brand-dark underline">
                    informativa sulla privacy
                  </a>{" "}
                  e acconsento al trattamento dei miei dati per essere ricontattato.
                </label>
              </div>
              {errors.consent && (
                <p data-testid="error-consent" className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.consent}
                </p>
              )}

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <button
                  type="submit"
                  data-testid="submit-whatsapp-button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Invia via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => dispatch("email")}
                  data-testid="submit-email-button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-all duration-300 hover:bg-brand hover:text-ink active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  Invia via E-mail
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="flex h-full flex-col gap-6 rounded-3xl bg-ink p-7 text-slate-300 sm:p-9">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-paper">
                  Recapiti diretti
                </h3>
                <ul className="mt-6 space-y-4">
                  {contacts.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.label === "WhatsApp" ? "_blank" : undefined}
                        rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        data-testid={c.testid}
                        className="group flex items-center gap-4 rounded-2xl border border-ink-600 bg-ink-700/60 p-4 transition-colors hover:border-brand/60"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                          <c.icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                            {c.label}
                          </span>
                          <span className="text-sm font-semibold text-paper group-hover:text-brand">
                            {c.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-ink-600 pt-6 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {BUSINESS.city} {BUSINESS.province}, {BUSINESS.region} — interventi a
                  domicilio e in azienda
                </p>
                <p className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  Lavoro su appuntamento: scrivimi quando vuoi, ti rispondo in tempi brevi
                </p>
              </div>

              <p className="mt-auto rounded-2xl border border-brand/25 bg-brand/10 p-4 text-xs leading-relaxed text-slate-300">
                I dati che invii vengono utilizzati solo per rispondere alla tua
                richiesta. Nessuno spam, mai.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <Toaster position="bottom-center" richColors closeButton />
      <CTABanner />
    </>
  );
};

export default ContattiPage;
