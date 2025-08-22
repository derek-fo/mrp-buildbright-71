import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Servicos } from "@/components/Servicos";
import { MarketplaceTeaser } from "@/components/MarketplaceTeaser";
import { ContatoForm } from "@/components/ContatoForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <MarketplaceTeaser />
        <ContatoForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
