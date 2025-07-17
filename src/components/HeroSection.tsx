
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=7372&auto=format&fit=crop')`
      }}
    >
      <div className="text-center text-white px-4 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-secondary mb-6">
          NOBRE MINERAIS
        </h1>
        <h2 className="font-sans text-lg md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Conectando a terra às suas mãos, com a pureza e a nobreza que só a natureza oferece.
        </h2>
        <Button 
          onClick={scrollToProducts}
          className="bg-secondary text-black hover:bg-secondary/90 font-sans text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Conheça Nossos Produtos
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
