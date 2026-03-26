import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import VideoDetail from './pages/VideoDetail';
import Checklist from './pages/Checklist';
import Progress from './pages/Progress';
import AuthCallback from './pages/AuthCallback';
import AuthError from './pages/AuthError';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/module/:id" element={<ModuleDetail />} />
          <Route path="/video/:moduleId/:videoId" element={<VideoDetail />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/error" element={<AuthError />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
