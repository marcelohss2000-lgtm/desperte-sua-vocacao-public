import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Router, Route } from "wouter";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

// APP.TSX WITH ROUTING
// Timestamp: 2026-05-05T23:30:00Z
// Routes: / (Home) and /obrigado (Thank You page)

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/obrigado" component={ThankYou} />
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
