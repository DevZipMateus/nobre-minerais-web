
import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Brita1 = () => {
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
                  Brita 1
                </h1>
                <div className="w-24 h-1 bg-secondary mb-8"></div>
                <p className="font-sans text-xl text-gray-600 mb-8 leading-relaxed">
                  Invista em empresas especializadas na Venda de Brita 1 e não tenha problemas com o produto
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Concreto Armado
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Lajes
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Pilares
                  </span>
                </div>

                <Link 
                  to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Brita 1&type=phone_number&app_absent=0"
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
                    A construção civil é um ramo que exige o uso de diversos materiais para garantir a segurança da edificação. Nesse sentido, o uso de agregados graúdos e miúdos é indispensável, por isso a Nobre Comércio e Serviços de Minerais é uma empresa especializada na Venda de Brita 1.
                  </p>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    A brita 1 possui suas características que a difere dos demais tipos de pedra, uma vez que possui entre 12,5mm e 22mm. Isso garante a aplicação eficiente em colunas, vigas, pontos e demais estruturas.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/Nobre-Minerais-Venda-de-Brita-1-01.png"
                alt="Brita 1 - Nobre Minerais"
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
              <p className="font-sans text-gray-600">Granulometria entre 12,5mm e 22mm para máxima eficiência.</p>
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
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Atendimento Especializado</h3>
              <p className="font-sans text-gray-600">Equipe de alta performance para auxiliar em todas as etapas.</p>
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
              Temos uma equipe de alta performance para te auxiliar nas etapas da Venda de Brita 1. O principal objetivo da Nobre Comércio e Serviços de Minerais é garantir que os clientes tenham o melhor atendimento para esclarecer dúvidas e demais questões relacionadas à Venda de Brita 1.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Apesar de ser um tipo pequeno de pedra, a brita 1 possui diferentes formas de utilização. Para que as construções de pequeno ou grande porte sejam eficazes, a Nobre Comércio e Serviços de Minerais está aqui para direcionar atenção na Venda de Brita 1 e também no pós-venda.
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
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Colunas e Vigas</h3>
                <p className="font-sans text-gray-600">Ideal para estruturas que exigem alta resistência.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Lajes</h3>
                <p className="font-sans text-gray-600">Perfeita para lajes de concreto armado duráveis.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Pilares</h3>
                <p className="font-sans text-gray-600">Essencial para pilares com máxima segurança estrutural.</p>
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
            Entre em contato conosco e receba o melhor preço para Brita 1
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Brita 1&type=phone_number&app_absent=0"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-secondary/90 transition-colors"
            >
              WhatsApp: (21) 96569-1913
            </Link>
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Brita 1&type=phone_number&app_absent=0"
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

export default Brita1;
