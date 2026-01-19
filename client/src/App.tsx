import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLanguageStore } from "@/lib/languageStore";
import Home from "@/pages/Home";
import Team from "@/pages/Team";
import Products from "@/pages/Products";
import Research from "@/pages/Research";
import Publications from "@/pages/Publications";
import News from "@/pages/News";
import Partnership from "@/pages/Partnership";
import Services from "@/pages/Services";
import NotFound from "@/pages/not-found";

// Placeholder for minor pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500">Halaman ini sedang dalam pengembangan.</p>
      <a href="/" className="mt-8 inline-block text-primary hover:underline">Kembali ke Beranda</a>
    </div>
  </div>
);

function Router() {
  const [location] = useLocation();
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Force re-render when language changes
  useEffect(() => {
    // This effect will trigger whenever language changes
  }, [language]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/products" component={Products} />
      <Route path="/research" component={Research} />
      <Route path="/publications" component={Publications} />
      <Route path="/news" component={News} />
      <Route path="/partnership" component={Partnership} />
      <Route path="/services" component={Services} />
      <Route path="/media" component={() => <PlaceholderPage title="Publikasi Media" />} />
      <Route path="/jmdt" component={() => <PlaceholderPage title="JMDT Journal" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
