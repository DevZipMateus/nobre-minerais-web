
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GramaRJ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-wide">
              Venda de Grama RJ
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              A melhor opção para transformar seus espaços verdes no Rio de Janeiro com grama natural de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lovable-uploads/de98ddad-1f20-4abd-a2ef-04ce4267371b.png"
                  alt="Tapetes de grama natural em preparação"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lovable-uploads/29a16767-cf18-4fee-b6b8-653f396aec14.png"
                  alt="Grama natural de alta qualidade"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Venda de Grama no RJ: O Que Você Precisa Saber
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  A venda de grama natural no Rio de Janeiro é uma solução cada vez mais buscada por quem deseja um espaço verde com aparência saudável e bem-cuidada. Seja para jardins residenciais, campos esportivos, áreas comerciais ou projetos paisagísticos, a escolha do tipo de grama e do fornecedor faz toda a diferença.
                </p>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Aqui, apresentamos informações essenciais sobre as opções disponíveis, cuidados e os diferenciais oferecidos pela Nobre Comércio e Serviço de Minerais.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Benefícios da Grama Natural para Diferentes Ambientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  A grama natural traz uma série de benefícios estéticos e funcionais. Em ambientes residenciais, ela transforma o quintal em um espaço agradável e propício para atividades ao ar livre. Para áreas comerciais, o uso de grama bem cuidada ajuda a criar uma imagem de sustentabilidade e valorização ambiental.
                </p>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Em projetos esportivos, como campos de futebol, a grama natural proporciona um piso seguro e confortável para a prática de atividades físicas. Seja qual for o objetivo, contar com grama de qualidade é um diferencial importante.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Principais Tipos de Grama Comercializados no RJ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  No mercado de grama natural do Rio de Janeiro, alguns tipos se destacam por suas características e resistência:
                </p>
                <ul className="list-disc list-inside font-sans text-gray-600 leading-relaxed mb-4 space-y-2">
                  <li><strong>Grama Esmeralda:</strong> Conhecida pela sua textura fina e resistência ao pisoteio, ideal para jardins residenciais e áreas de alto tráfego.</li>
                  <li><strong>Grama São Carlos:</strong> Adapta-se bem a climas úmidos e é altamente resistente a pragas.</li>
                  <li><strong>Grama Bermuda:</strong> Muito utilizada em campos esportivos devido à sua rápida recuperação e excelente tolerância ao sol.</li>
                </ul>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Cada tipo de grama possui suas particularidades, e a escolha deve levar em consideração o uso e as condições do solo.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Cuidados Essenciais para Manutenção da Grama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  Após a instalação, alguns cuidados são essenciais para que a grama mantenha sua aparência saudável e verdinha:
                </p>
                <ul className="list-disc list-inside font-sans text-gray-600 leading-relaxed space-y-2">
                  <li><strong>Irrigação regular:</strong> Fundamental, especialmente nos primeiros dias após o plantio, quando as raízes ainda estão se estabelecendo.</li>
                  <li><strong>Poda periódica:</strong> Para evitar o crescimento desordenado e promover a densidade da grama.</li>
                  <li><strong>Adubação:</strong> Importante para manter o solo rico em nutrientes. É recomendável utilizar fertilizantes específicos e consultar profissionais para saber a frequência adequada de aplicação.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Precisa de Grama Natural de Qualidade?
                </h3>
                <p className="font-sans text-gray-600 mb-6">
                  Entre em contato conosco e solicite um orçamento personalizado para seu projeto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center text-primary">
                    <span className="font-semibold">📱 (21) 96569-1913</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <span className="font-semibold">📧 contato@nobreminerais.com.br</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GramaRJ;
