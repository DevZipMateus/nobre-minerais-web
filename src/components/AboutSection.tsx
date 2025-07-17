
import { Leaf, Settings, Gem } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=4928&auto=format&fit=crop"
              alt="Minerais da natureza"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Sobre Nós
            </h2>
            <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
              A Nobre Minerais é uma empresa dedicada à extração, beneficiamento e comercialização de minerais de alta qualidade. Com um compromisso inabalável com a sustentabilidade e a inovação, garantimos a pureza e a excelência em cada etapa do processo. Nossa missão é fornecer matéria-prima essencial para diversas indústrias, impulsionando o progresso com responsabilidade e respeito ao meio ambiente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-primary">Sustentabilidade</h3>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-primary">Inovação</h3>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gem className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-primary">Qualidade</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
