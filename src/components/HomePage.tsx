import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import logo from "figma:asset/a193dcea5c017d729537e1e9c23d30dbccfd591e.png";

interface HomePageProps {
  onLogin: () => void;
  onAbout: () => void;
}

export function HomePage({ onLogin, onAbout }: HomePageProps) {
  const services = [
    {
      title: "Empresas",
      description:
        "Certificação de contratos, documentos corporativos, propriedade intelectual e rastreabilidade de produtos.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxODc5NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Educação & Arte",
      description:
        "Autenticação de diplomas, certificados educacionais, obras de arte e criações digitais (NFTs).",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2MTg3OTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Uso Pessoal",
      description:
        "Proteção de documentos pessoais, testamentos, procurações e registros importantes para eternidade.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjE4Nzk3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const projects = [
    {
      title: "Tokenização de Créditos de Carbono",
      description:
        "Plataforma revolucionária para tokenizar créditos de carbono, garantindo transparência e rastreabilidade no mercado de compensação ambiental. Utilizamos blockchain e criptografia quântica para certificar cada crédito de forma inalterável.",
      image: "https://images.unsplash.com/photo-1753645267760-0bf347785b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBjcmVkaXRzJTIwZm9yZXN0fGVufDF8fHx8MTc2MTg3OTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true,
    },
    {
      title: "Certificação de Energia Renovável",
      description:
        "Sistema de certificação para garantir a origem e autenticidade de energia produzida por fontes renováveis.",
      image: "https://images.unsplash.com/photo-1675116731363-c17d957f3444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjE4NzMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
    {
      title: "Rede de Validação Distribuída",
      description:
        "Infraestrutura descentralizada para validação e verificação de certificados em tempo real.",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MTA2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Quantum.Cert Logo" className="w-10 h-10" />
            <span className="tracking-wider bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              QUANTUM.CERT
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, "#sobre")}
              className="text-sm hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, "#servicos")}
              className="text-sm hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleNavClick(e, "#projetos")}
              className="text-sm hover:text-primary transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="text-sm hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          <Button
            onClick={onLogin}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="sobre" className="pt-32 pb-20 px-4 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
              Uma Nova Era de Confiança Digital
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Certificação inviolável com validade jurídica permanente. Elimine a dependência de cartórios
              e proteja seus ativos contra falsificações e até ataques da computação quântica.
            </p>
            <p className="text-lg text-primary/90 max-w-3xl mx-auto mb-8">
              Democratizamos o acesso à certificação segura e confiável para pessoas, empresas e instituições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Comece Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={onAbout}
              >
                Saiba Mais
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Principais Soluções
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Produtos inovadores que conectam o mundo digital ao físico com segurança permanente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border p-6 hover:border-primary transition-all h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl mb-2">Certificação Quântica Universal</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Registro digital imutável de documentos, contratos, obras, NFTs e certificados com validade jurídica permanente
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-card border-border p-6 hover:border-primary transition-all h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🏷️</span>
                  </div>
                  <h3 className="text-xl mb-2">QTAGs Inteligentes</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Etiquetas com NFC quântico para autenticação física:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <span className="text-primary">QTAG Física:</span> Produtos e obras</li>
                  <li>• <span className="text-primary">QTAG Life:</span> ID médica de emergência</li>
                  <li>• <span className="text-primary">QTAG Pet:</span> Identificação de animais</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card border-border p-6 hover:border-primary transition-all h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl mb-2">QTRACK</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sistema completo de rastreabilidade de produtos e cadeias produtivas com transparência total
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-card border-primary/40 p-6 hover:border-primary transition-all h-full border-2">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl mb-2">Programa de Afiliados</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="text-primary">10 certificações gratuitas</span> + <span className="text-primary">5% de comissão vitalícia</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Adoção antecipada garante vantagens no pré-lançamento
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Benefícios Exclusivos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl mb-3">Validade Jurídica Permanente</h3>
              <p className="text-muted-foreground">
                Certificados com validade legal eterna, sem necessidade de renovações ou recertificações
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl mb-3">Zero Custos de Renovação</h3>
              <p className="text-muted-foreground">
                Elimine gastos recorrentes com cartórios e certificadoras tradicionais. Pague uma vez, válido para sempre
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl mb-3">Proteção Quântica</h3>
              <p className="text-muted-foreground">
                Segurança preparada para o futuro, resistente a ataques da computação quântica
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-gradient-to-b from-black to-secondary/30 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-center bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Aplicações
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Soluções versáteis para diferentes necessidades e setores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-16 px-4 bg-black border-y border-primary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl mb-2">🔐</div>
              <p className="text-sm text-muted-foreground">Blockchain<br/>Descentralizada</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-3xl mb-2">⚛️</div>
              <p className="text-sm text-muted-foreground">Criptografia<br/>Quântica</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm text-muted-foreground">NFC<br/>Inteligente</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-3xl mb-2">⚖️</div>
              <p className="text-sm text-muted-foreground">Validade<br/>Jurídica</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-center bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Nossos Projetos
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Soluções inovadoras que estão transformando indústrias
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 ${
                    project.featured ? "border-primary shadow-lg shadow-primary/20" : ""
                  }`}
                >
                  <div
                    className={`grid ${
                      project.featured ? "md:grid-cols-2" : "md:grid-cols-3"
                    } gap-0`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        project.featured ? "md:col-span-1" : ""
                      }`}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover min-h-[250px]"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded">
                          Em Destaque
                        </div>
                      )}
                    </div>
                    <div
                      className={`p-6 md:p-8 flex flex-col justify-center ${
                        project.featured ? "md:col-span-1" : "md:col-span-2"
                      }`}
                    >
                      <h3 className={project.featured ? "text-2xl mb-4" : "text-xl mb-3"}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10 w-fit"
                        onClick={onAbout}
                      >
                        Saiba Mais
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopter Banner */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/20 via-emerald-400/10 to-primary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm mb-4">
              🚀 Pré-Lançamento
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Seja um Early Adopter
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se ao Programa de Afiliados e receba <span className="text-primary">10 certificações gratuitas</span>{" "}
              + <span className="text-primary">5% de comissão vitalícia</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={onAbout}
              >
                Conhecer o Programa
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-b from-black to-secondary/30 scroll-mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Pronto para Certificar Seus Ativos?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua organização com certificação permanente
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Quantum.Cert Logo" className="w-10 h-10" />
                <span className="tracking-wider bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  QUANTUM.CERT
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Certificação de ativos com blockchain e criptografia quântica
              </p>
            </div>

            <div>
              <h4 className="mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#sobre" className="hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <button onClick={onAbout} className="hover:text-primary transition-colors">
                    Programa de Afiliados
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#servicos" className="hover:text-primary transition-colors">
                    QTAGs Inteligentes
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-primary transition-colors">
                    QTRACK
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="hover:text-primary transition-colors">
                    Créditos de Carbono
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Quantum.Cert. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
