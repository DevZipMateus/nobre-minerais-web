
import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BicaCorreia = () => {
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
                  Bica Corrida
                </h1>
                <div className="w-24 h-1 bg-secondary mb-8"></div>
                <p className="font-sans text-xl text-gray-600 mb-8 leading-relaxed">
                  Invista em uma empresa experiente quando precisar de Venda de Bica Corrida
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Pavimentação
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Base de Calçadas
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Aterros
                  </span>
                </div>

                <Link 
                  to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Bica Corrida&type=phone_number&app_absent=0"
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
                    Conhecida por ser um conjunto de pedra britada, pedrisco e pó-de-pedra que não tem nenhuma graduação definida, a bica corrida é um componente obtido por meio do equipamento de britagem. Esse tipo de material é bastante utilizado no ramo de construção porque, em função da sua resistência, é aplicado no processo de pavimentação.
                  </p>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    A Nobre Comércio e Serviços de Minerais é referência na comercialização de agregados graúdos e miúdos para a construção civil, uma vez que prezamos pela qualidade dos produtos disponibilizados em nosso catálogo.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Bica-Corrida01.png"
                alt="Bica Corrida - Nobre Minerais"
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
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Alta Resistência</h3>
              <p className="font-sans text-gray-600">Material resistente ideal para pavimentação e bases sólidas.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Agilidade na Entrega</h3>
              <p className="font-sans text-gray-600">Entrega rápida sem atrasos para seus projetos.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Atendimento Completo</h3>
              <p className="font-sans text-gray-600">Supervisão profissional em todas as etapas da venda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Agilidade na Compra e Entrega
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed mb-8">
              O principal objetivo da nossa companhia é garantir que os clientes tenham o melhor atendimento e encontrem o que procuram para a sua obra. Por conta disso, todas as etapas da Venda de Bica Corrida acompanham a supervisão de profissionais qualificados para esclarecer dúvidas e preparar o orçamento de acordo com as suas necessidades.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Além disso, a agilidade na entrega também é algo importante, principalmente porque alguns clientes têm urgência quanto ao recebimento do produto. Desse modo, saiba que com a Nobre Comércio e Serviços de Minerais não há atrasos, uma vez que buscamos sempre atingir a sua satisfação na Venda de Bica Corrida.
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
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Pavimentação</h3>
                <p className="font-sans text-gray-600">Ideal para pavimentação de ruas e estradas com alta durabilidade.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Base de Calçadas</h3>
                <p className="font-sans text-gray-600">Perfeita para criar bases sólidas em calçadas e passeios.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Aterros</h3>
                <p className="font-sans text-gray-600">Excelente para aterros e nivelamento de terrenos.</p>
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
            Entre em contato conosco e receba o melhor preço para Bica Corrida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Bica Corrida&type=phone_number&app_absent=0"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-secondary/90 transition-colors"
            >
              WhatsApp: (21) 96569-1913
            </Link>
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Bica Corrida&type=phone_number&app_absent=0"
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

export default BicaCorreia;
