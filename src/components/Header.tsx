
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToProduct = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const productPages = [
    { name: 'Venda de Areia para Aterro', path: '/areia-lavada' },
    { name: 'Venda de Areia Lavada', path: '/areia-lavada' },
    { name: 'Venda de Areia Fina Lavada', path: '/areia-lavada' },
    { name: 'Venda de Areia Ensacada', path: '/areia-ensacada' },
    { name: 'Venda de Bica Corrida', path: '/bica-corrida' },
    { name: 'Venda de Brita 0', path: '/brita-0' },
    { name: 'Venda de Brita 1', path: '/brita-1' },
    { name: 'Venda de Brita Ensacada', path: '/brita-ensacada' },
    { name: 'Venda de Pó de Pedra', path: '/po-de-pedra' },
    { name: 'Venda de Saibro', path: '/saibro' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/7606a579-97fd-4ed2-8da9-ac62a1942e20.png" 
            alt="Nobre Minerais Logo" 
            className="h-20 w-auto md:h-24"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide"
          >
            Sobre
          </button>
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide">
              Produtos
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white border shadow-lg">
              {productPages.map((product, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => navigateToProduct(product.path)}
                  className="text-primary hover:text-secondary hover:bg-secondary/10 cursor-pointer transition-colors duration-200"
                >
                  {product.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => scrollToSection('contact')}
            className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide py-3 px-4 text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide py-3 px-4 text-left"
              >
                Sobre
              </button>
              
              {/* Mobile Products Section */}
              <div className="px-4 py-2">
                <div className="text-primary font-sans font-medium text-sm uppercase tracking-wide mb-2">
                  Produtos
                </div>
                <div className="pl-4 space-y-1">
                  {productPages.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToProduct(product.path)}
                      className="block text-primary/80 hover:text-secondary transition-colors duration-300 font-sans text-xs py-1 text-left w-full"
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-primary hover:text-secondary transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-wide py-3 px-4 text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
