import { 
  ClipboardCheck, 
  Star, 
  Clock, 
  Building2, 
  Users, 
  Shield 
} from "lucide-react";

const diferenciais = [
  {
    icon: ClipboardCheck,
    title: "Processo claro do início ao fim",
    description: "Planejamento detalhado e transparente em cada etapa da sua obra."
  },
  {
    icon: Star,
    title: "Padrão construtivo elevado",
    description: "Acabamentos e execução no mais alto padrão de qualidade."
  },
  {
    icon: Clock,
    title: "Gestão e prazos com transparência",
    description: "Cronogramas respeitados com comunicação constante."
  },
  {
    icon: Building2,
    title: "Projetos completos integrados",
    description: "Arquitetônico, estrutural, hidrossanitário e elétrico."
  },
  {
    icon: Users,
    title: "Consultoria em terreno e financiamento",
    description: "Apoio completo desde a escolha do terreno até o financiamento."
  },
  {
    icon: Shield,
    title: "Atendimento próximo e personalizado",
    description: "Relacionamento direto e acompanhamento dedicado."
  }
];

export const Diferenciais = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher a <span className="text-gold">MRP Engenharia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossos diferenciais garantem tranquilidade e qualidade superior em cada projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-card hover:shadow-elegant transition-shadow duration-300 group"
            >
              <div className="bg-gradient-gold w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <diferencial.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {diferencial.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {diferencial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};