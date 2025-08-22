import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";

// Placeholder project data - would be dynamic in real implementation
const projetos = [
  {
    id: 1,
    nome: "Casa Moderna Térrea",
    area: "180m²",
    quartos: 3,
    suites: 1,
    vagas: 2,
    preco: "R$ 2.500",
    image: "/placeholder.svg",
    estilo: "Moderno"
  },
  {
    id: 2,
    nome: "Sobrado Contemporâneo",
    area: "240m²",
    quartos: 4,
    suites: 2,
    vagas: 2,
    preco: "R$ 3.200",
    image: "/placeholder.svg",
    estilo: "Contemporâneo"
  },
  {
    id: 3,
    nome: "Casa Minimalista",
    area: "160m²",
    quartos: 3,
    suites: 1,
    vagas: 2,
    preco: "R$ 2.800",
    image: "/placeholder.svg",
    estilo: "Minimalista"
  }
];

export const MarketplaceTeaser = () => {
  return (
    <section id="marketplace" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projetos Arquitetônicos <span className="text-gold">Prontos para Construir</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seleções assinadas pela MRP Engenharia. Compra segura, entrega digital imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={projeto.image}
                  alt={projeto.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-gold text-primary px-2 py-1 rounded text-xs font-medium">
                  {projeto.estilo}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
                  <Star className="h-4 w-4 text-gold" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {projeto.nome}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                  <div>Área: {projeto.area}</div>
                  <div>Quartos: {projeto.quartos}</div>
                  <div>Suítes: {projeto.suites}</div>
                  <div>Vagas: {projeto.vagas}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {projeto.preco}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Projeto completo
                    </div>
                  </div>
                  
                  <Button variant="gold" size="sm">
                    <Download className="h-4 w-4" />
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gold" size="lg">
            Ver Todos os Projetos
            <ArrowRight className="h-5 w-5" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            <Download className="h-4 w-4 inline mr-2" />
            Entrega digital imediata • Suporte incluso • Licença para uma obra
          </p>
        </div>
      </div>
    </section>
  );
};