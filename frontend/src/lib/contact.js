import { BUSINESS } from "@/data/site";

/* Funzionalità di contatto: link WhatsApp e mailto precompilati */

export const waLink = (message) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT_MESSAGE =
  "Ciao Informatic Point, vorrei maggiori informazioni sui vostri servizi!";

export const WA_DEFAULT = waLink(WA_DEFAULT_MESSAGE);

export const telLink = `tel:${BUSINESS.phoneHref}`;

export const buildFormMessage = (form) =>
  [
    "Ciao Informatic Point, ti scrivo dal sito.",
    "",
    `Nome: ${form.name}`,
    `E-mail: ${form.email}`,
    form.phone ? `Telefono: ${form.phone}` : null,
    `Servizio: ${form.service}`,
    "",
    `Messaggio: ${form.message}`,
  ]
    .filter(Boolean)
    .join("\n");

export const mailtoLink = ({ subject, body }) =>
  `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const formMailto = (form) =>
  mailtoLink({
    subject: `Richiesta di preventivo — ${form.service}`,
    body: buildFormMessage(form),
  });
