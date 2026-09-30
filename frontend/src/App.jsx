import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Component, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLenis } from "@/hooks/useLenis";
import HomePage from "@/pages/HomePage";
import ServiziPage from "@/pages/ServiziPage";
import PortfolioPage from "@/pages/PortfolioPage";
import ChiSonoPage from "@/pages/ChiSonoPage";
import ContattiPage from "@/pages/ContattiPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError)
      return (
        <div className="flex min-h-screen items-center justify-center p-8 text-center">
          <p className="font-display text-lg text-ink">
            Qualcosa è andato storto. Ricarica la pagina o contattami su WhatsApp.
          </p>
        </div>
      );
    return this.props.children;
  }
}

const App = () => {
  useLenis();

  return (
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Salta al contenuto
        </a>
        <Header />
        <main id="contenuto" className="min-h-screen">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servizi" element={<ServiziPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/chi-sono" element={<ChiSonoPage />} />
              <Route path="/contatti" element={<ContattiPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
      </HashRouter>
    </ErrorBoundary>
  );
};

export default App;


