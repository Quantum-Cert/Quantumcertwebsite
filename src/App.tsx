import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { AboutPage } from "./components/AboutPage";
import { DashboardPage } from "./components/DashboardPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<"home" | "login" | "about" | "dashboard">("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("home");
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (currentPage === "login") {
    return (
      <LoginPage
        onBack={() => setCurrentPage("home")}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (currentPage === "about") {
    return <AboutPage onBack={() => setCurrentPage("home")} />;
  }

  if (currentPage === "dashboard" && isAuthenticated) {
    return <DashboardPage onLogout={handleLogout} />;
  }

  return (
    <HomePage
      onLogin={() => setCurrentPage("login")}
      onAbout={() => setCurrentPage("about")}
    />
  );
}
