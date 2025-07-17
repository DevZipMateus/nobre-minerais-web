
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-wide">
            Nobre Minerais
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Primeira seção com texto principal */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                Somos uma empresa com ampla experiência no ramo de materiais para a construção civil e promovemos o fornecimento adequado de agregados graúdos e miúdos para diversos projetos. Trabalhamos com uma ampla variedade de produtos em nosso catálogo para que todos os clientes encontrem aquilo que procuram.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                  Venda de Areia Ensacada - Rio de Janeiro
                </h3>
                <p className="font-sans text-sm text-gray-600">
                  Brita - Saibro - Pó de Pedra
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/8bb10210-7a19-432f-9803-bf7c464d6b22.png"
                alt="Caminhão de entrega Nobre Minerais"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Segunda seção com imagem da mineração */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="/lovable-uploads/b5340c30-a249-45ba-b743-248cc237d7df.png"
                alt="Processo de mineração - Areia"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4 uppercase tracking-wide">
                Venda de Areia Ensacada - Rio de Janeiro
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                Mantendo sempre o compromisso com a satisfação de nossos clientes, nós da Nobre Comércio e Serviços de Minerais trabalhamos com atenção e responsabilidade para criar uma parceria duradoura através de insumos de alto nível e excelente custo-benefício.
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                Por isso, saiba que pode contar conosco para obter o que procura para o seu projeto de construção ou reforma.
              </p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Projetos Atendidos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-gray-600 font-medium">Tipos de Produtos</div>
            </div>
          </div>

          {/* Características da empresa */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
              </div>
              <h4 className="font-serif font-bold text-primary mb-2 uppercase text-sm">Qualidade</h4>
              <p className="text-sm text-gray-600">Materiais de primeira qualidade</p>
            </div>
            
            <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
              </div>
              <h4 className="font-serif font-bold text-primary mb-2 uppercase text-sm">Experiência</h4>
              <p className="text-sm text-gray-600">Ampla experiência no setor</p>
            </div>
            
            <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
              </div>
              <h4 className="font-serif font-bold text-primary mb-2 uppercase text-sm">Variedade</h4>
              <p className="text-sm text-gray-600">Amplo catálogo de produtos</p>
            </div>
            
            <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
              </div>
              <h4 className="font-serif font-bold text-primary mb-2 uppercase text-sm">Compromisso</h4>
              <p className="text-sm text-gray-600">Satisfação do cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
