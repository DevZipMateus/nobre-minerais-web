
import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BritaEnsacada = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para produtos
          </Link>
        </div>
      </div>

      {/* Hero Section with Two Columns */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-wide">
                  Brita Ensacada
                </h1>
                <div className="w-24 h-1 bg-secondary mb-8"></div>
                <p className="font-sans text-xl text-gray-600 mb-8 leading-relaxed">
                  Procurando por Venda de Brita Ensacada? A Nobre Comércio e Serviços de Minerais tem a solução!
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Concreto
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Fundações
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Estruturas
                  </span>
                </div>

                <Link 
                  to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Brita Ensacada&type=phone_number&app_absent=0"
                  className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-sans font-semibold hover:bg-primary/90 transition-colors"
                >
                  <span>Solicitar Orçamento</span>
                </Link>
              </div>

              {/* About Section */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
                  Sobre Nosso Produto
                </h2>
                <div className="space-y-4">
                  <p className="font-sans text-gray-600 leading-relaxed">
                    O uso de agregados graúdos e miúdos na área de construção civil é indispensável, afinal eles são responsáveis pelo preparo de massa e também são utilizados em demais etapas.
                  </p>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    O produto possui uma ampla forma de utilização e é bastante comum nos pátios de construção, afinal a brita pode ser empregada nas vigas, lajes, blocos de concreto e outros projetos. Tendo em vista a importância do produto, a Nobre Comércio e Serviços de Minerais mantém o compromisso com os clientes para que a Venda de Brita Ensacada seja eficaz e tenha excelente custo-benefício.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/95d8d14d-21c9-4979-8332-d9e963e07be6.png"
                alt="Brita Ensacada - Nobre Minerais"
                className="w-full max-w-md h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Qualidade Garantida</h3>
              <p className="font-sans text-gray-600">Materiais de primeira linha, testados e aprovados para construção civil.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Entrega Rápida</h3>
              <p className="font-sans text-gray-600">Logística eficiente para atender seus prazos de obra.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Atendimento Ágil</h3>
              <p className="font-sans text-gray-600">Suporte técnico especializado para suas necessidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Atendimento Profissional
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed mb-8">
              A Venda de Brita Ensacada atende as necessidades de todos os projetos de construção. Os sacos que contêm a brita são pesados e possuem quantidade expressiva de material. Nesse sentido, o número de sacos necessários para a construção ou reforma varia de acordo com as necessidades de cada cliente.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Mesmo que você tenha dúvidas em relação a isso, a Nobre Comércio e Serviços de Minerais possui uma equipe completa para te ajudar e garantir a eficiência da Venda de Brita Ensacada. Garantimos a qualidade de nossos produtos porque nos preocupamos em atingir a satisfação de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Principais Aplicações
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Vigas e Lajes</h3>
                <p className="font-sans text-gray-600">Ideal para estruturas de concreto armado com alta resistência.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Blocos de Concreto</h3>
                <p className="font-sans text-gray-600">Perfeita para fabricação de blocos estruturais duráveis.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Fundações</h3>
                <p className="font-sans text-gray-600">Essencial para bases sólidas e resistentes de edificações.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Solicite Seu Orçamento
          </h2>
          <p className="font-sans text-xl mb-8 opacity-90">
            Entre em contato conosco e receba o melhor preço para Brita Ensacada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Brita Ensacada&type=phone_number&app_absent=0"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-secondary/90 transition-colors"
            >
              WhatsApp: (21) 96569-1913
            </Link>
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Brita Ensacada&type=phone_number&app_absent=0"
              className="bg-white text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-gray-100 transition-colors"
            >
              WhatsApp: (21) 99538-5789
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BritaEnsacada;
