import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export const ContatoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Orçamento solicitado com sucesso!",
      description: "Nossa equipe retornará em breve. Obrigado pelo contato.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Conte sobre sua <span className="text-gold">Obra</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em poucos passos, entendemos seu objetivo e retornamos com o melhor caminho para construir com tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Vamos conversar</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gold mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Telefone</div>
                    <div className="text-white/80">(53) 9999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gold mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium">E-mail</div>
                    <div className="text-white/80">contato@mrpengenharia.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gold mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Atendimento</div>
                    <div className="text-white/80">Pelotas e Rio Grande/RS</div>
                  </div>
                </div>
              </div>

              <Button variant="gold" className="w-full mt-8">
                <Phone className="h-4 w-4" />
                WhatsApp Direto
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input id="nome" required className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" required className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pelotas">Pelotas/RS</SelectItem>
                      <SelectItem value="rio-grande">Rio Grande/RS</SelectItem>
                      <SelectItem value="outra">Outra cidade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="tipo-obra">Tipo de obra</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="reforma">Reforma</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="area">Área estimada (m²)</Label>
                  <Input id="area" placeholder="Ex: 180" className="mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="quartos">Número de quartos</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Quartos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 quartos</SelectItem>
                      <SelectItem value="3">3 quartos</SelectItem>
                      <SelectItem value="4">4 quartos</SelectItem>
                      <SelectItem value="5+">5+ quartos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="orcamento">Orçamento estimado</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Faixa de orçamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="200-400">R$ 200k - 400k</SelectItem>
                      <SelectItem value="400-600">R$ 400k - 600k</SelectItem>
                      <SelectItem value="600-800">R$ 600k - 800k</SelectItem>
                      <SelectItem value="800+">R$ 800k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="mensagem">Conte mais sobre seu projeto</Label>
                <Textarea 
                  id="mensagem" 
                  rows={4} 
                  placeholder="Descreva suas necessidades, terreno, prazos, ou tire suas dúvidas..."
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    <Send className="h-5 w-5" />
                    Solicitar Orçamento
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Ao enviar, você concorda com nossa política de privacidade e em receber contato da nossa equipe.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};