
import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoDePedra = () => {
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
                  Pó de Pedra
                </h1>
                <div className="w-24 h-1 bg-secondary mb-8"></div>
                <p className="font-sans text-xl text-gray-600 mb-8 leading-relaxed">
                  Garanta o preparo adequado de massas nas construções com a Venda de Pó de Pedra
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Nivelamento
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Calçamento
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Base
                  </span>
                </div>

                <Link 
                  to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Pó de Pedra&type=phone_number&app_absent=0"
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
                    O pó de pedra é um agregado muito importante nas construções porque, além do excelente custo-benefício, também é utilizado em diversos processos. Apesar de ser um subproduto obtido na etapa de extração de britas, o pó de pedra possui grande funcionalidade nos projetos.
                  </p>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Semelhante a uma areia fina, o pó de pedra possui grande facilidade de manuseio por conta da sua menor granulometria. Quando o negócio é feito com uma empresa certificada no ramo e que preza pelo alto padrão dos produtos, a Venda de Pó de Pedra é caracterizada pelo atendimento eficiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Po-de-Pedra01.png"
                alt="Pó de Pedra - Nobre Minerais"
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
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Facilidade de Manuseio</h3>
              <p className="font-sans text-gray-600">Granulometria fina que facilita o manuseio e aplicação.</p>
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
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Versatilidade</h3>
              <p className="font-sans text-gray-600">Múltiplas aplicações em diversos processos construtivos.</p>
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
              A Nobre Comércio e Serviços de Minerais possui profissionais à disposição para te auxiliar na Venda de Pó de Pedra. Temos uma equipe de profissionais prontos para te atender da melhor forma para esclarecer dúvidas em relação ao processo.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Com a Nobre Comércio e Serviços de Minerais você encontra preço justo e totalmente compatível com a qualidade do produto. Desse modo, não tenha dúvidas de que somos a empresa certa para obter agregados para a construção civil de pequeno a grande porte.
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
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Nivelamento</h3>
                <p className="font-sans text-gray-600">Ideal para nivelamento de superfícies e terrenos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Calçamento</h3>
                <p className="font-sans text-gray-600">Perfeito para base de calçadas e pisos externos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Preparo de Massas</h3>
                <p className="font-sans text-gray-600">Excelente para preparo de massas especiais.</p>
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
            Entre em contato conosco e receba o melhor preço para Pó de Pedra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Pó de Pedra&type=phone_number&app_absent=0"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-secondary/90 transition-colors"
            >
              WhatsApp: (21) 96569-1913
            </Link>
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Pó de Pedra&type=phone_number&app_absent=0"
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

export default PoDePedra;
