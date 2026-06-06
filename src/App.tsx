import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Gallery from "./pages/Gallery.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./components/pages/TermsAndConditions.tsx";
import PrimarySchool from "./pages/courses/PrimarySchool.tsx";
import MiddleHighSchool from "./pages/courses/MiddleHighSchool.tsx";
import JeeNeetXIXII from "./pages/courses/JeeNeetXIXII.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <WhatsAppButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/courses/primary-school" element={<PrimarySchool />} />
            <Route path="/courses/middle-high-school" element={<MiddleHighSchool />} />
            <Route path="/courses/jee-neet-xi-xii" element={<JeeNeetXIXII />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
