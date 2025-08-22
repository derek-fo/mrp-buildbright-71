import { Button } from "@/components/ui/button";
import { 
  Home, 
  Settings, 
  PenTool, 
  ClipboardList, 
  Users,
  ArrowRight 
} from "lucide-react";

const servicos = [
  {
    icon: Home,
    title: "Empreitada Global",
    description: "Entregamos sua obra completa por um preço fechado, com qualidade garantida e prazo definido.",
    features: ["Preço fechado", "Prazo garantido", "Qualidade superior", "Gestão completa"]
  },
  {
    icon: Settings,
    title: "Construção por Administração",
    description: "Gerenciamos sua obra com total transparência nos custos e processos de execução.",
    features: ["Transparência total", "Controle de custos", "Flexibilidade", "Acompanhamento detalhado"]
  },
  {
    icon: PenTool,
    title: "Projetos Completos",
    description: "Desenvolvemos projetos arquitetônico, estrutural, hidrossanitário e elétrico integrados.",
    features: ["Projeto arquitetônico", "Projeto estrutural", "Projeto hidrossanitário", "Projeto elétrico"]
  },
  {
    icon: ClipboardList,
    title: "Gerenciamento de Obras",
    description: "Coordenamos e supervisionamos sua obra com rigor técnico e metodologia comprovada.",
    features: ["Supervisão técnica", "Controle de qualidade", "Cronograma", "Relatórios periódicos"]
  },
  {
    icon: Users,
    title: "Consultoria Especializada",
    description: "Orientamos na escolha do terreno ideal e no processo de financiamento mais adequado.",
    features: ["Análise de terrenos", "Viabilidade técnica", "Assessoria financeira", "Documentação"]
  }
];

export const Servicos = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu sonho em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-gold w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <servico.icon className="h-7 w-7 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {servico.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {servico.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {servico.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline-gold" size="sm">
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gold" size="lg">
            Solicitar Orçamento Personalizado
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};