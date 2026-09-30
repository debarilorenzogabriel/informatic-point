import { useState } from "react";
import { MousePointer2 } from "lucide-react";

/* Scena 3D Spline incorporata con caricamento e fallback elegante */
export const SplineScene = ({
  url = "https://my.spline.design/boxeshover-RWgMverNRPd9V1CxpbIhXeKE/",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink-600 bg-ink shadow-2xl shadow-ink/30">
      <iframe
        src={url}
        title="Scena 3D interattiva Informatic Point"
        loading="lazy"
        allow="fullscreen"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-ink-600 border-t-brand" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            Caricamento scena 3D…
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-ink-600 bg-ink/80 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
        <MousePointer2 className="h-3.5 w-3.5 text-brand" />
        Scena 3D interattiva — muoviti sopra i cubi
      </div>
    </div>
  );
};

export default SplineScene;
