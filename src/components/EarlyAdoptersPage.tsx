import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import logo from "figma:asset/a193dcea5c017d729537e1e9c23d30dbccfd591e.png";
import { useState } from "react";

interface EarlyAdoptersPageProps {
  onBack: () => void;
}

export function EarlyAdoptersPage({ onBack }: EarlyAdoptersPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo seu interesse! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", company: "", phone: "", interest: "" });
  };

  const benefits = [
    {
      title: "10 Certificações Gratuitas",
      description: "Receba 10 certificações gratuitas para testar nossa plataforma e certificar seus primeiros ativos.",
      image: "https://images.unsplash.com/photo-1750816204148-5d02aff367cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZpbGlhdGUlMjBwcm9ncmFtfGVufDF8fHx8MTc2MjU3MTYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "5% de Comissão Vitalícia",
      description: "Ganhe 5% de comissão vitalícia em todas as vendas geradas através do seu link de afiliado.",
      image: "https://images.unsplash.com/photo-1589829068065-20154e8f9642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcmV3YXJkc3xlbnwxfHx8fDE3NjI1NzE2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Acesso Antecipado",
      description: "Seja um dos primeiros a ter acesso às novas funcionalidades e produtos antes do lançamento público.",
      image: "https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJseSUyMGFkb3B0ZXJzJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjI1NzE2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Suporte Prioritário",
      description: "Receba suporte prioritário de nossa equipe técnica para resolver qualquer questão rapidamente.",
      image: "https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMHRlYW18ZW58MXx8fHwxNzYyNTcxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const stats = [
    { number: "100+", label: "Early Adopters" },
    { number: "500+", label: "Certificações Emitidas" },
    { number: "98%", label: "Satisfação" },
    { number: "24/7", label: "Suporte" },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Cadastre-se no Programa",
      description: "Preencha o formulário abaixo com suas informações e área de interesse.",
      image: "https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI1MjA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      step: "2",
      title: "Receba Seu Kit de Boas-Vindas",
      description: "Acesse suas 10 certificações gratuitas e seu link de afiliado exclusivo.",
      image: "https://images.unsplash.com/photo-1704243962105-28a67b2271c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjI1NzE2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      step: "3",
      title: "Comece a Certificar",
      description: "Utilize suas certificações gratuitas e comece a divulgar a plataforma.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYyNTA5MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      step: "4",
      title: "Ganhe Comissões",
      description: "Receba 5% de comissão vitalícia em todas as vendas geradas pelo seu link.",
      image: "https://images.unsplash.com/photo-1639603683079-7398c604497a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNlbnRyYWxpemVkJTIwbmV0d29ya3xlbnwxfHx8fDE3NjI1NzE2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
            <img src={logo} alt="QUANTUM CERT Logo" className="w-10 h-10" />
            <span className="tracking-wider bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              QUANTUM CERT
            </span>
          </div>

          <Button
            onClick={onBack}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
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
            className="text-center"
          >
            <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm mb-6">
              🚀 Programa de Early Adopters
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
              Seja um dos Pioneiros da Revolução Digital
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Junte-se ao Programa de Afiliados QUANTUM CERT e faça parte da transformação
              da certificação digital. Receba benefícios exclusivos e ganhe comissões vitalícias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como Early Adopter, você terá acesso a vantagens únicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 group h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Em 4 passos simples, você se torna um Early Adopter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all h-full">
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xl text-primary-foreground">{item.step}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Inscreva-se Agora
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-primary/40 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa/Organização</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nome da sua empresa"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Por que você quer ser um Early Adopter? *</Label>
                  <Textarea
                    id="interest"
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    placeholder="Conte-nos sobre seu interesse e como você pretende utilizar a QUANTUM CERT"
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Enviar Inscrição
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossos{" "}
                  <span className="text-primary cursor-pointer hover:underline">Termos de Uso</span>{" "}
                  e{" "}
                  <span className="text-primary cursor-pointer hover:underline">Política de Privacidade</span>
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-emerald-400/10 to-primary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Vagas Limitadas
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos aceitando um número limitado de Early Adopters para garantir
              a melhor experiência e suporte personalizado.
            </p>
            <p className="text-primary mb-8">
              Não perca esta oportunidade única!
            </p>
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
            Certificação de ativos com blockchain e criptografia quântica
          </p>
        </div>
      </footer>
    </div>
  );
}
