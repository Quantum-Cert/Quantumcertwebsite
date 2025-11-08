import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import logo from "figma:asset/a193dcea5c017d729537e1e9c23d30dbccfd591e.png";
import { ArrowLeft, Shield, Lock, Network, Zap } from "lucide-react";

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const features = [
    {
      icon: Shield,
      title: "Validade Jurídica Permanente",
      description:
        "Certificados com validade legal eterna, eliminando a necessidade de renovações, recertificações e custos recorrentes com cartórios.",
    },
    {
      icon: Lock,
      title: "Resistente a Ataques Quânticos",
      description:
        "Proteção preparada para o futuro com algoritmos resistentes à computação quântica, garantindo segurança por décadas.",
    },
    {
      icon: Network,
      title: "Ancoragem em Blockchain",
      description:
        "Registro imutável em blockchain descentralizada, tornando cada certificado único, rastreável e impossível de falsificar.",
    },
    {
      icon: Zap,
      title: "Elo Digital-Físico",
      description:
        "QTAGs inteligentes com NFC quântico conectam produtos e identidades físicas ao mundo digital com autenticação instantânea.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="QUANTUM CERT Logo" className="w-10 h-10" />
            <span className="tracking-wider bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              QUANTUM CERT
            </span>
          </div>

          <Button
            onClick={onBack}
            variant="ghost"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
              Provas Digitais Eternas e Auditáveis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A QUANTUM CERT elimina a dependência de cartórios e certificadoras tradicionais,
              oferecendo um sistema de certificação inviolável com validade jurídica permanente.
              Democratizamos o acesso à confiança digital para todos.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative rounded-lg overflow-hidden border border-primary/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644343262170-e40d72e19a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzYxNzk0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnologia Blockchain"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <Card className="bg-secondary/50 border-primary/20 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Nossa Missão
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  A <span className="text-primary">QUANTUM CERT</span> propõe uma nova era de confiança digital,
                  criando um sistema de certificação inviolável e com{" "}
                  <span className="text-primary">validade jurídica permanente</span>. Eliminamos a dependência
                  de cartórios e certificadoras tradicionais, oferecendo segurança contra falsificações e até
                  contra ataques da computação quântica.
                </p>
                <p className="text-lg">
                  Nossa missão é <span className="text-primary">democratizar o acesso à certificação segura e confiável</span>{" "}
                  para pessoas, empresas e instituições. Buscamos nos tornar referência global em provas digitais
                  eternas e auditáveis, criando um elo permanente entre o mundo digital e o físico.
                </p>
                <p className="text-lg">
                  Combinamos <span className="text-primary">blockchain</span>,{" "}
                  <span className="text-primary">criptografia quântica</span> e{" "}
                  <span className="text-primary">ancoragem em redes descentralizadas</span> para garantir que cada
                  certificado seja único, rastreável, impossível de falsificar e{" "}
                  <span className="text-primary">válido para sempre</span> — sem custos de renovação.
                </p>
                <p className="text-lg">
                  Seja para documentos, contratos, obras de arte, NFTs, produtos físicos ou identidades,
                  a QUANTUM CERT oferece soluções completas para empresas, educação, arte e uso pessoal.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-center bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Tecnologia de Última Geração
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="bg-secondary/50 border-primary/20 p-6 h-full hover:border-primary/40 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-emerald-400/10 border-primary/20 p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    Eterna
                  </div>
                  <div className="text-muted-foreground">Validade Jurídica</div>
                  <div className="text-xs text-muted-foreground mt-1">Sem renovações necessárias</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    R$ 0
                  </div>
                  <div className="text-muted-foreground">Custos de Renovação</div>
                  <div className="text-xs text-muted-foreground mt-1">Pague uma vez, válido para sempre</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-muted-foreground">À Prova de Quantum</div>
                  <div className="text-xs text-muted-foreground mt-1">Resistente a ataques futuros</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-center bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-secondary/50 border-primary/20 p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">1</span>
                </div>
                <h3 className="text-xl mb-3">Registro Digital</h3>
                <p className="text-muted-foreground">
                  Registre documentos, contratos, obras, NFTs ou produtos com todas as
                  características únicas e metadados relevantes
                </p>
              </Card>
              <Card className="bg-secondary/50 border-primary/20 p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">2</span>
                </div>
                <h3 className="text-xl mb-3">Ancoragem Quântica</h3>
                <p className="text-muted-foreground">
                  Aplicamos criptografia quântica e ancorage em blockchain resistente,
                  criando um certificado imutável com validade jurídica permanente
                </p>
              </Card>
              <Card className="bg-secondary/50 border-primary/20 p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">3</span>
                </div>
                <h3 className="text-xl mb-3">Prova Eterna</h3>
                <p className="text-muted-foreground">
                  Seu certificado é auditável e verificável instantaneamente, para sempre,
                  sem intermediários ou custos de renovação
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Affiliate Program Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-primary/20 to-emerald-400/20 border-primary/40 p-8 md:p-12 border-2">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Programa de Afiliados
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Seja um dos primeiros e ganhe vantagens exclusivas no pré-lançamento
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card/50 rounded-lg p-6 border border-primary/20">
                  <div className="text-4xl mb-3">🎁</div>
                  <h3 className="text-xl mb-2">10 Certificações Gratuitas</h3>
                  <p className="text-muted-foreground">
                    Receba 10 certificações sem custo para você ou seus clientes ao aderir ao programa
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-lg p-6 border border-primary/20">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="text-xl mb-2">5% de Comissão Vitalícia</h3>
                  <p className="text-muted-foreground">
                    Ganhe 5% de comissão para sempre em todas as certificações de clientes indicados por você
                  </p>
                </div>
              </div>

              <div className="text-center bg-card/30 rounded-lg p-6 border border-primary/20">
                <p className="text-primary mb-2">🚀 Vantagens de Pré-Lançamento</p>
                <p className="text-muted-foreground text-sm">
                  A adoção antecipada garante benefícios exclusivos e acesso prioritário às novas funcionalidades
                </p>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-emerald-400/10 border-primary/20 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Pronto para Certificar Seus Ativos?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Junte-se às organizações que confiam na QUANTUM CERT para proteger e
                autenticar seus ativos mais valiosos — sem renovações, sem intermediários, para sempre
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" onClick={onBack}>
                  Voltar ao Início
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logo} alt="QUANTUM CERT Logo" className="w-10 h-10" />
            <span className="tracking-wider bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              QUANTUM CERT
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 QUANTUM CERT. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
