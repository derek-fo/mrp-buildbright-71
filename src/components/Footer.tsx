import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              MRP <span className="text-gold">Engenharia</span>
            </h3>
            <p className="text-white/80 mb-4">
              Excelência em construção de alto padrão. Qualidade, transparência e tranquilidade do início ao fim.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Empreitada Global</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Construção por Administração</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Projetos Completos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Gerenciamento de Obras</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Projetos Residenciais</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Projetos Comerciais</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Adaptações</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gold mr-3 flex-shrink-0" />
                <span>(53) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gold mr-3 flex-shrink-0" />
                <span>contato@mrpengenharia.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <span>Pelotas e Rio Grande/RS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <div>
              © 2024 MRP Engenharia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gold transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};