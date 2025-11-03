import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import logo from "figma:asset/a193dcea5c017d729537e1e9c23d30dbccfd591e.png";

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export function LoginPage({ onBack, onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Check credentials
    if (email === "admin@gmail.com" && password === "12345678") {
      onLoginSuccess();
    } else {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center flex flex-col items-center">
          <img src={logo} alt="Quantum.Cert Logo" className="w-20 h-20 mb-4" />
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
            QUANTUM.CERT
          </h1>
          <p className="text-muted-foreground">
            Certificação de Ativos com Blockchain
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-input-background border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-input-background border-border focus:border-primary"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded p-3">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={onBack}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Voltar para página inicial
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>Não tem uma conta? Entre em contato conosco</p>
        </div>
      </div>
    </div>
  );
}
