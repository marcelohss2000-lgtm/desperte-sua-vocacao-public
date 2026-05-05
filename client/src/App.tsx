import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// FORCE BUILD v10 - APP.TSX REWRITTEN FROM ZERO
// Timestamp: 2026-05-05T02:30:00Z
// This is the ONLY component that renders - Home page ONLY
// No routing, no other pages, no form rendering

function App() {
  // CONSOLE LOG TO VERIFY BUILD
  console.log("%c🔥 APP v10 LOADED - ONLY HOME PAGE RENDERED", "color: #ff6b6b; font-size: 16px; font-weight: bold;");
  console.log("%c✅ No routing, no other pages, no email form", "color: #51cf66; font-size: 14px;");

  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Home />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
