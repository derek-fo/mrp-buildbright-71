import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              MRP <span className="text-gold">Engenharia</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-gold transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-gold transition-colors">
              Serviços
            </a>
            <a href="#marketplace" className="text-foreground hover:text-gold transition-colors">
              Marketplace
            </a>
            <a href="#portfolio" className="text-foreground hover:text-gold transition-colors">
              Portfólio
            </a>
            <a href="#sobre" className="text-foreground hover:text-gold transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-gold transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline-gold" size="sm">
              <Phone className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button variant="gold" size="sm">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-elegant">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#inicio" className="text-foreground hover:text-gold transition-colors py-2">
                Início
              </a>
              <a href="#servicos" className="text-foreground hover:text-gold transition-colors py-2">
                Serviços
              </a>
              <a href="#marketplace" className="text-foreground hover:text-gold transition-colors py-2">
                Marketplace
              </a>
              <a href="#portfolio" className="text-foreground hover:text-gold transition-colors py-2">
                Portfólio
              </a>
              <a href="#sobre" className="text-foreground hover:text-gold transition-colors py-2">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-gold transition-colors py-2">
                Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline-gold" size="sm">
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="gold" size="sm">
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};