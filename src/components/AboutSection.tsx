
import { Leaf, Settings, Gem, Award, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-secondary" />,
      title: "Sustentabilidade",
      description: "Práticas responsáveis com o meio ambiente"
    },
    {
      icon: <Settings className="w-8 h-8 text-secondary" />,
      title: "Inovação",
      description: "Tecnologia de ponta em todos os processos"
    },
    {
      icon: <Gem className="w-8 h-8 text-secondary" />,
      title: "Qualidade",
      description: "Materiais de alta pureza e excelência"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Experiência",
      description: "Anos de expertise no mercado mineral"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Equipe",
      description: "Profissionais altamente qualificados"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Alcance",
      description: "Atendimento nacional e internacional"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-wide">
            Sobre a Nobre Minerais
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=4928&auto=format&fit=crop"
              alt="Mineração sustentável"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="font-sans text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>Nobre Minerais</strong> é uma empresa líder dedicada à extração, beneficiamento e 
              comercialização de minerais de alta qualidade. Com um compromisso inabalável com a 
              sustentabilidade e a inovação, garantimos a pureza e a excelência em cada etapa do processo.
            </p>
            
            <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa missão é fornecer matéria-prima essencial para diversas indústrias, impulsionando 
              o progresso com responsabilidade e respeito ao meio ambiente, sempre priorizando a 
              qualidade e a satisfação de nossos clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-sans font-bold text-primary text-lg mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
