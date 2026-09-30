const Marquee = () => {
  const items = [
    "Siti web",
    "Assistenza informatica",
    "Social media",
    "Grafica e loghi",
    "Disegni CAD",
    "Gestionali personalizzati",
  ];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-sm font-bold uppercase tracking-[0.18em] text-slate-500"
          >
            {item}
            <span className="ml-8 text-brand" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;