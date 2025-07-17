
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/dfc9911f-634b-4ec5-b915-aa5bf11d94fe.png" 
                alt="Nobre Minerais Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="font-sans text-gray-300 leading-relaxed mb-6 max-w-md">
              Conectando a terra às suas mãos, com a pureza e a nobreza que só a natureza oferece. 
              Comprometidos com a excelência e sustentabilidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary p-3 rounded-full hover:bg-secondary transition-colors group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a href="#" className="bg-primary p-3 rounded-full hover:bg-secondary transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-black" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 uppercase tracking-wide">
              Links Rápidos
            </h3>
            <nav className="space-y-3">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'Sobre', id: 'about' },
                { name: 'Produtos', id: 'products' },
                { name: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-secondary transition-colors duration-300 font-sans text-sm"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 uppercase tracking-wide">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="font-sans text-sm text-gray-300">(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="font-sans text-sm text-gray-300">contato@nobreminerais.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-sans text-sm text-gray-300">Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-sans text-sm text-gray-400">
            © 2025 Nobre Minerais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
