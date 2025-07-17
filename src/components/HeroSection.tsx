
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
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/lovable-uploads/dacf19f1-5707-467d-bb34-7394754b1fda.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left text-white animate-slide-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            VENDA DE
            <span className="block text-secondary mt-2">SAIBRO NO</span>
            <span className="block text-secondary">RIO DE JANEIRO</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl mb-8 max-w-2xl leading-relaxed text-white/90">
            Conectando a terra às suas mãos, com a pureza e a nobreza que só a natureza oferece. 
            Comprometidos com a excelência e sustentabilidade em cada processo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToProducts}
              className="bg-secondary text-white hover:bg-secondary/90 font-sans text-base font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105 uppercase tracking-wide"
            >
              Saiba mais
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-sans text-base font-semibold px-8 py-4 rounded-sm transition-all duration-300 uppercase tracking-wide"
            >
              Nossos Produtos
            </Button>
          </div>
        </div>

        {/* Right Content - Hexagonal Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Hexagonal container */}
            <div 
              className="w-80 h-80 md:w-96 md:h-96 bg-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
              }}
            >
              <img 
                src="/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Saibro01.png"
                alt="Saibro - Material de construção"
                className="w-72 h-72 md:w-80 md:h-80 object-cover"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                }}
              />
            </div>
          </div>
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
