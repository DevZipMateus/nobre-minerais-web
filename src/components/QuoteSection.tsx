
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const QuoteSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/lovable-uploads/459602a3-9586-471e-a03b-6ab4413a6124.png"
                  alt="Profissional solicitando orçamento"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-wide">
                Solicite um
                <span className="block text-secondary mt-2">Orçamento</span>
              </h2>
              
              <div className="w-24 h-1 bg-secondary mb-8"></div>
              
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                Construir ou reforçar requer produtos de qualidade para garantir a eficiência da obra. 
                Disso a <strong>Nobre Comércio e Serviços de Minerais</strong> entende e por isso trabalha 
                com a comercialização de materiais de alto nível no ramo de construção civil. 
              </p>
              
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                Entre em contato e solicite um orçamento personalizado às suas necessidades!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-secondary text-black hover:bg-secondary/90 font-sans text-base font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105 uppercase tracking-wide group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-sans text-base font-semibold px-8 py-4 rounded-sm transition-all duration-300 uppercase tracking-wide"
                  onClick={() => window.open('tel:+5521999999999', '_self')}
                >
                  Ligar Agora
                </Button>
              </div>

              {/* Benefícios */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="font-sans text-sm text-gray-600">Orçamento gratuito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="font-sans text-sm text-gray-600">Entrega rápida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="font-sans text-sm text-gray-600">Produtos de qualidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="font-sans text-sm text-gray-600">Preços competitivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
