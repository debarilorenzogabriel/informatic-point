import {
  Globe,
  LifeBuoy,
  Share2,
  PenTool,
  DraftingCompass,
  AppWindow,
} from "lucide-react";

/* ------------------------------------------------------------------
   CONTENUTI DEL SITO — modifica solo questo file per aggiornare testi,
   contatti, servizi, testimonianze e privacy policy.
------------------------------------------------------------------- */

export const BUSINESS = {
  name: "Informatic Point",
  claim: "Servizi informatici e digitali",
  city: "Molfetta",
  province: "(BA)",
  region: "Puglia",
  phoneDisplay: "+39 366 436 6208",
  phoneHref: "+393664366208",
  whatsappNumber: "393664366208",
  // NOTE: email segnaposto — sostituisci con la tua casella reale
  email: "info@informaticpoint.it",
  // NOTE: dati segnaposto — completa con i tuoi riferimenti fiscali
  piva: "P.IVA / C.F. — da inserire",
  legalOwner: "Titolare: [Nome Cognome] — da completare",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Servizi", path: "/servizi" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Chi sono", path: "/chi-sono" },
  { label: "Contatti", path: "/contatti" },
];

export const MARQUEE_ITEMS = [
  "Siti Web",
  "Assistenza Informatica",
  "Social Media",
  "Grafica & Loghi",
  "CAD 2D / 3D",
  "Gestionali Custom",
  "Molfetta · Puglia",
];

export const SERVICES = [
  {
    id: "siti-web",
    icon: Globe,
    title: "Realizzazione Siti Web",
    short: "Siti moderni, veloci e ottimizzati SEO per farsi trovare dai clienti.",
    subtitle: "Vetrine aziendali, landing page e progetti ad alta conversione.",
    description:
      "Progetto siti web moderni, ultra-veloci e completamente responsive, ottimizzati per i motori di ricerca. Un design su misura che racconta la tua attività e trasforma i visitatori in clienti.",
    features: [
      "Design responsive e mobile-first",
      "Ottimizzazione SEO e velocità",
      "Pannello di gestione semplice",
      "Integrazione Google Maps e WhatsApp",
    ],
  },
  {
    id: "assistenza-it",
    icon: LifeBuoy,
    title: "Assistenza Informatica",
    short: "Supporto rapido per PC, reti e sicurezza, a casa o in ufficio.",
    subtitle: "Supporto tecnico hardware, software e sicurezza delle reti.",
    description:
      "Diagnosi rapida, riparazione computer, configurazione reti aziendali, backup sicuri e rimozione malware per privati e studi professionali.",
    features: [
      "Riparazione hardware e upgrade SSD/RAM",
      "Reti Wi-Fi e LAN sicure",
      "Backup automatici cloud e locali",
      "Assistenza remota in tempo reale",
    ],
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Gestione Social Media",
    short: "Contenuti e campagne che aumentano visibilità e contatti.",
    subtitle: "Social media marketing e campagne pubblicitarie mirate.",
    description:
      "Strategie di contenuto ingaggianti su Instagram, Facebook e LinkedIn per far crescere la visibilità del tuo brand e generare contatti qualificati.",
    features: [
      "Piano editoriale mensile su misura",
      "Grafiche e reel professionali",
      "Campagne Meta Ads e lead generation",
      "Reportistica e analisi dei risultati",
    ],
  },
  {
    id: "grafica-loghi",
    icon: PenTool,
    title: "Grafica e Loghi",
    short: "Loghi e immagine coordinata che trasmettono autorevolezza.",
    subtitle: "Brand identity, logotipi e materiale pubblicitario.",
    description:
      "Progettazione di loghi unici, immagini coordinate, biglietti da visita, brochure e banner digitali che trasmettono autorevolezza e stile.",
    features: [
      "Studio grafico del logo e brand manual",
      "Biglietti da visita, volantini e pieghevoli",
      "Banner pubblicitari e grafiche web",
      "Vettorializzazione e formati pronti all'uso",
    ],
  },
  {
    id: "cad-tecnica",
    icon: DraftingCompass,
    title: "Disegni CAD e Documentazione Tecnica",
    short: "Tavole 2D, modelli 3D e documentazione per studi e aziende.",
    subtitle: "Modellazione 2D/3D, disegni tecnici e schede prodotto.",
    description:
      "Supporto tecnico specializzato per studi tecnici, artigiani e aziende industriali: tavole CAD 2D, modelli 3D e documentazione di progetto.",
    features: [
      "Disegno CAD 2D civile e industriale",
      "Modellazione 3D parametrica",
      "Digitalizzazione di schizzi e planimetrie",
      "Documentazione tecnica e schede prodotto",
    ],
  },
  {
    id: "applicazioni-custom",
    icon: AppWindow,
    title: "Applicazioni e Gestionali Personalizzati",
    short: "Software su misura per automatizzare il lavoro della tua azienda.",
    subtitle: "Software web e desktop costruiti sui tuoi flussi di lavoro.",
    description:
      "Sviluppo gestionali personalizzati, database, CRM e web app pensati esattamente per i flussi di lavoro specifici della tua azienda.",
    features: [
      "Software cloud accessibile ovunque",
      "Automazione di flussi e fatturazione",
      "Integrazione API e database sicuri",
      "Interfaccia intuitiva, senza canoni inutili",
    ],
  },
];

export const WHY_POINTS = [
  {
    title: "Radicato a Molfetta",
    text: "Conosco il territorio e le imprese della Puglia: parliamo faccia a faccia, senza call center.",
  },
  {
    title: "Risposte rapide",
    text: "Ogni messaggio riceve risposta in tempi brevi, con soluzioni chiare e concrete.",
  },
  {
    title: "Prezzi trasparenti",
    text: "Preventivi chiari e dettagliati, senza sorprese in fattura né costi nascosti.",
  },
  {
    title: "Supporto continuo",
    text: "Non sparisco dopo la consegna: resto il tuo punto di riferimento nel tempo.",
  },
];

/* Testimonianze di esempio — sostituiscile con recensioni reali dei clienti */
export const TESTIMONIALS = [
  {
    quote:
      "Rapido, preciso e chiaro nelle spiegazioni. Il sito della mia attività ora si vede bene da telefono e porta davvero nuovi clienti.",
    name: "Marco L.",
    role: "Ristoratore, Molfetta",
  },
  {
    quote:
      "Assistenza risoluta in giornata quando il computer dello studio si è bloccato. Un punto di riferimento serio e affidabile.",
    name: "Anna B.",
    role: "Studio commerciale",
  },
  {
    quote:
      "Il gestionale su misura ci ha fatto risparmiare ore di lavoro ogni settimana. Consigliatissimo a chi ha bisogno di ordine.",
    name: "Giuseppe R.",
    role: "Piccola impresa edile",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Ti ascolto",
    text: "Raccontami la tua attività e il tuo obiettivo: analizziamo insieme la soluzione giusta.",
  },
  {
    step: "02",
    title: "Preventivo chiaro",
    text: "Ricevi un preventivo dettagliato, gratuito e senza impegno, in tempi rapidi.",
  },
  {
    step: "03",
    title: "Realizzazione",
    text: "Lavoro con aggiornamenti costanti, finché il risultato non ti soddisfa.",
  },
  {
    step: "04",
    title: "Supporto",
    text: "Dopo la consegna resto al tuo fianco per aggiornamenti e assistenza.",
  },
];

export const VALUES = [
  "Chiarezza prima della tecnologia",
  "Soluzioni su misura, mai pacchetti preconfezionati",
  "Puntualità e rispetto delle scadenze",
  "Formazione: il cliente capisce ciò che usa",
];

export const STACK_CHIPS = [
  "HTML · CSS · JavaScript",
  "React",
  "WordPress",
  "Python",
  "AutoCAD",
  "Adobe Creative Suite",
  "Meta Business Suite",
  "MySQL",
];

export const PORTFOLIO_CATEGORIES = [
  "Siti Web",
  "Gestionali",
  "Grafica & Loghi",
  "Social Media",
  "CAD & Tecnica",
];

export const PRIVACY_SECTIONS = [
  {
    id: "titolare",
    title: "1. Titolare del trattamento",
    body: [
      "Il titolare del trattamento dei dati personali è Informatic Point — [Nome Cognome], con sede a Molfetta (BA), contattabile all'indirizzo e-mail e ai recapiti indicati nella sezione «Contatti» del presente sito. [Completa questa sezione con i tuoi riferimenti fiscali.]",
    ],
  },
  {
    id: "dati-raccolti",
    title: "2. Dati raccolti e finalità",
    body: [
      "Il presente sito non utilizza database propri né moduli di invio automatico dei dati. I dati personali (nome, e-mail, numero di telefono e contenuto del messaggio) vengono comunicati dall'utente esclusivamente tramite i canali di contatto diretti (postа elettronica e WhatsApp) e utilizzati dal titolare al solo fine di rispondere alle richieste ricevute, fornire preventivi ed erogare i servizi richiesti.",
      "L'accettazione è facoltativa; tuttavia, senza fornire i dati necessari non sarà possibile ricevere risposta alle richieste inviate.",
    ],
  },
  {
    id: "base-giuridica",
    title: "3. Base giuridica del trattamento",
    body: [
      "Il trattamento è effettuato sulla base dell'esecuzione di misure precontrattuali e contrattuali (art. 6, lett. b del Regolamento UE 2016/679) nonché del legittimo interesse del titolare a gestire le richieste ricevute.",
    ],
  },
  {
    id: "conservazione",
    title: "4. Modalità e durata della conservazione",
    body: [
      "I dati sono trattati con strumenti informatici e cartacei, con logiche strettamente correlate alle finalità sopra indicate. I dati relativi alle richieste di contatto sono conservati per il tempo necessario a gestirle e, in caso di rapporto contrattuale, per gli obblighi di legge e fiscali eventualmente applicabili.",
    ],
  },
  {
    id: "cookie",
    title: "5. Cookie",
    body: [
      "Il sito non utilizza cookie di profilazione né strumenti di tracciamento di terze parti. Possono essere utilizzati esclusivamente cookie tecnici necessari al corretto funzionamento delle pagine, che non richiedono consenso.",
    ],
  },
  {
    id: "diritti",
    title: "6. Diritti dell'interessato",
    body: [
      "Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 l'interessato ha il diritto di: accedere ai propri dati personali, chiederne la rettifica o la cancellazione, limitarne il trattamento, opporvisi per motivi legittimi, richiederne la portabilità e proporre reclamo al Garante per la protezione dei dati personali.",
      "Per esercitare i propri diritti è possibile scrivere al titolare tramite i recapiti indicati nella pagina «Contatti».",
    ],
  },
  {
    id: "aggiornamenti",
    title: "7. Aggiornamenti della policy",
    body: [
      "La presente informativa può essere modificata in qualsiasi momento. Le modifiche verranno pubblicate su questa pagina con indicazione della data di aggiornamento. Ultimo aggiornamento: [data].",
    ],
  },
];

export const IMAGES = {
  molfetta:
    "https://images.unsplash.com/photo-1579795793974-50a421b4811b?auto=format&fit=crop&w=1200&q=80",
  workspace:
    "https://images.unsplash.com/photo-1787839193855-766a9d729b91?auto=format&fit=crop&w=1200&q=80",
  desk:
    "https://images.pexels.com/photos/16307279/pexels-photo-16307279.jpeg?auto=compress&cs=tinysrgb&w=1200",
};
