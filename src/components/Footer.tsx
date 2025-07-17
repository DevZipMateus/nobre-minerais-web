
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="font-serif text-2xl font-bold mb-6">
            NOBRE MINERAIS
          </div>
          
          <nav className="flex justify-center space-x-8 mb-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Produtos', id: 'products' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-secondary transition-colors duration-300 font-sans"
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-white hover:text-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-secondary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          
          <p className="font-sans text-sm text-gray-400">
            © 2025 Nobre Minerais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
