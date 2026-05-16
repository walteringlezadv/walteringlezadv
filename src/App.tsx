import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ROUTES } from "@/lib/routes";
import Index from "./pages/Index.tsx";
import ComoFunciona from "./pages/ComoFunciona.tsx";
import Sobre from "./pages/Sobre.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ProximoPasso from "./pages/ProximoPasso.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={ROUTES.home} element={<Index />} />
          <Route path={ROUTES.comoFunciona} element={<ComoFunciona />} />
          <Route path={ROUTES.sobre} element={<Sobre />} />
          <Route path={ROUTES.blog} element={<Blog />} />
          <Route path={ROUTES.blogPost} element={<BlogPost />} />
          <Route path={ROUTES.proximoPasso} element={<ProximoPasso />} />
          <Route path={ROUTES.contato} element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
// Thu May 14 16:17:11 -03 2026
// deploy Sat May 16 10:10:49 -03 2026
