
import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Saibro = () => {
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
                  Saibro
                </h1>
                <div className="w-24 h-1 bg-secondary mb-8"></div>
                <p className="font-sans text-xl text-gray-600 mb-8 leading-relaxed">
                  Conte com a melhor empresa para a Venda de Saibro para sua obra
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Aterros
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Nivelamento
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-semibold">
                    Jardins
                  </span>
                </div>

                <Link 
                  to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Saibro&type=phone_number&app_absent=0"
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
                    Muitos são os materiais utilizados na construção de casas, prédios e demais estabelecimentos. Entre os agregados necessários, o saibro é um dos produtos que possui procura no mercado, uma vez que é empregado na cobertura de quadras e demais áreas.
                  </p>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Muitas são as finalidades do saibro e isso faz com que ele tenha ampla busca, afinal também pode ser incorporado com outros componentes no preparo de argamassa para a construção civil. Por conta disso, a melhor forma de obter um bom produto é contar com uma empresa de alto nível na Venda de Saibro, e a Nobre Comércio e Serviços de Minerais é a escolha certa.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Saibro01.png"
                alt="Saibro - Nobre Minerais"
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
              <p className="font-sans text-gray-600">Padrão de qualidade superior para todas as aplicações.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Entrega Eficiente</h3>
              <p className="font-sans text-gray-600">Logística otimizada para atender suas necessidades.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Atendimento Personalizado</h3>
              <p className="font-sans text-gray-600">Suporte especializado em todas as etapas do processo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Total Suporte na Venda de Saibro
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed mb-8">
              O nosso principal objetivo é garantir que nossos clientes tenham um atendimento personalizado e que recebam um produto adequado para a construção ou reforma de ambientes. Por conta disso, a Nobre Comércio e Serviços de Minerais se preocupa com o padrão de qualidade entregue não somente pelo material, mas também no atendimento feito na Venda de Saibro.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Nossa equipe de profissionais mantém a atenção em todas as etapas da Venda de Saibro, de modo que você obtenha exatamente o que procura. Além disso, a Nobre Comércio e Serviços de Minerais oferece preço justo compatível com o produto, garantindo assim o excelente custo benefício do material para o emprego em diversos projetos.
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
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Cobertura de Quadras</h3>
                <p className="font-sans text-gray-600">Ideal para cobertura de quadras esportivas e áreas de lazer.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Aterros</h3>
                <p className="font-sans text-gray-600">Perfeito para aterros e nivelamento de terrenos diversos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Preparo de Argamassa</h3>
                <p className="font-sans text-gray-600">Componente para preparo de argamassa na construção civil.</p>
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
            Entre em contato conosco e receba o melhor preço para Saibro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Saibro&type=phone_number&app_absent=0"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-secondary/90 transition-colors"
            >
              WhatsApp: (21) 96569-1913
            </Link>
            <Link 
              to="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Saibro&type=phone_number&app_absent=0"
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

export default Saibro;
