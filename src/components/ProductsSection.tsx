
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: 'Quartzo',
      description: 'Alta pureza para indústrias de tecnologia, vidro e eletrônicos.',
      imageUrl: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=3024&auto=format&fit=crop'
    },
    {
      title: 'Feldspato',
      description: 'Essencial para a produção de cerâmicas, vidros e materiais refratários.',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=4896&auto=format&fit=crop'
    },
    {
      title: 'Manganês',
      description: 'Utilizado na siderurgia e na fabricação de ligas metálicas especiais.',
      imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop'
    },
    {
      title: 'Ouro',
      description: 'Extraído com as mais altas práticas de sustentabilidade e pureza.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=7372&auto=format&fit=crop'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-primary text-center mb-12">
          Nossos Produtos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
