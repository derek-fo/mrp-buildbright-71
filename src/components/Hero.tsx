import { Button } from "@/components/ui/button";
import { ArrowRight, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Casa de alto padrão MRP Engenharia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl text-left text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="h-4 w-4 text-gold mr-2" />
            <span className="text-sm font-medium text-gold">Excelência em Construção</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            MRP Engenharia: excelência que transforma 
            <span className="text-gold"> projetos em obras de alto padrão</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Construção com qualidade, transparência e domínio técnico do início ao fim. 
            Encomende sua obra ou escolha um projeto arquitetônico pronto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
            <Button variant="gold" size="lg" className="text-lg">
              Solicitar Orçamento
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline-gold" size="lg" className="text-lg bg-white/10 backdrop-blur-sm">
              Explorar Projetos Online
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/80 animate-fade-in">
            <div className="flex items-center">
              <Award className="h-5 w-5 text-gold mr-2" />
              <span className="text-sm">CREA/ART</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gold mr-2" />
              <span className="text-sm">Pelotas e Rio Grande/RS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};