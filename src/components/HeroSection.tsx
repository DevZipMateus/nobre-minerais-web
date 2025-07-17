
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto animate-slide-in">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          QUALIDADE E INOVAÇÃO EM
          <span className="block text-secondary mt-2">MINERAÇÃO</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Conectando a terra às suas mãos, com a pureza e a nobreza que só a natureza oferece. 
          Comprometidos com a excelência e sustentabilidade em cada processo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProducts}
            className="bg-secondary text-black hover:bg-secondary/90 font-sans text-base font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105 uppercase tracking-wide"
          >
            Nossos Produtos
          </Button>
          
          <Button 
            onClick={scrollToAbout}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary font-sans text-base font-semibold px-8 py-4 rounded-sm transition-all duration-300 uppercase tracking-wide"
          >
            Saiba Mais
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
