
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AreiaLavada from "./pages/AreiaLavada";
import AreiaEnsacada from "./pages/AreiaEnsacada";
import BritaEnsacada from "./pages/BritaEnsacada";
import Brita1 from "./pages/Brita1";
import Brita0 from "./pages/Brita0";
import PoDePedra from "./pages/PoDePedra";
import BicaCorreia from "./pages/BicaCorreia";
import Saibro from "./pages/Saibro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/areia-lavada" element={<AreiaLavada />} />
          <Route path="/areia-ensacada" element={<AreiaEnsacada />} />
          <Route path="/brita-ensacada" element={<BritaEnsacada />} />
          <Route path="/brita-1" element={<Brita1 />} />
          <Route path="/brita-0" element={<Brita0 />} />
          <Route path="/po-de-pedra" element={<PoDePedra />} />
          <Route path="/bica-corrida" element={<BicaCorreia />} />
          <Route path="/saibro" element={<Saibro />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
