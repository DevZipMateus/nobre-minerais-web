
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: 'Quartzo',
      description: 'Mineral de alta pureza essencial para indústrias de tecnologia, vidro e eletrônicos. Garantimos qualidade superior em todos os nossos processos de extração.',
      imageUrl: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=3024&auto=format&fit=crop',
      applications: 'Tecnologia, Vidro, Eletrônicos'
    },
    {
      title: 'Feldspato',
      description: 'Componente fundamental para produção de cerâmicas, vidros e materiais refratários. Oferecemos diferentes tipos conforme necessidade específica.',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=4896&auto=format&fit=crop',
      applications: 'Cerâmica, Vidro, Refratários'
    },
    {
      title: 'Manganês',
      description: 'Elemento crucial utilizado na siderurgia e fabricação de ligas metálicas especiais. Extraído com técnicas avançadas e sustentáveis.',
      imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop',
      applications: 'Siderurgia, Ligas Metálicas'
    },
    {
      title: 'Ouro',
      description: 'Metal precioso extraído com as mais altas práticas de sustentabilidade e pureza. Atendemos mercados nacionais e internacionais.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=7372&auto=format&fit=crop',
      applications: 'Joalheria, Eletrônicos, Investimento'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-wide">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de minerais de alta qualidade, extraídos com responsabilidade 
            e processados com tecnologia de ponta para atender às demandas mais exigentes do mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              applications={product.applications}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
