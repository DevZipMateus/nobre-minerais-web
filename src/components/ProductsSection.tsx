
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: 'Areia Ensacada',
      description: 'Obter insumos para a construção civil é uma etapa muito importante para a reforma ou construção de qualquer estabelecimento. Nossa areia ensacada oferece praticidade e qualidade.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Areia-Ensacada-01.png',
      applications: 'Construção Civil, Reformas, Acabamentos',
      slug: '/areia-ensacada'
    },
    {
      title: 'Brita Ensacada',
      description: 'O uso de agregados graúdos e miúdos na área de construção civil é indispensável, afinal eles são responsáveis por garantir resistência e durabilidade às estruturas.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Brita-Ensacada01.webp',
      applications: 'Concreto, Fundações, Estruturas',
      slug: '/brita-ensacada'
    },
    {
      title: 'Areia Lavada',
      description: 'Fazer a edificação de estabelecimentos não é um processo simples e exige o suporte de profissionais qualificados e materiais de primeira qualidade como nossa areia lavada.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Areia-Lavada01.png',
      applications: 'Argamassa, Reboco, Assentamento',
      slug: '/areia-lavada'
    },
    {
      title: 'Brita 1',
      description: 'A construção civil é um ramo que exige o uso de diversos materiais para garantir a segurança da edificação. Nossa brita 1 oferece a granulometria ideal para diversas aplicações.',
      imageUrl: '/lovable-uploads/Nobre-Minerais-Venda-de-Brita-1-01.png',
      applications: 'Concreto Armado, Lajes, Pilares',
      slug: '/brita-1'
    },
    {
      title: 'Brita 0',
      description: 'O uso de agregados graúdos e miúdos faz toda a diferença em uma obra, pois são eles que integram a composição do concreto e garantem sua resistência.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Brita-0-01.png',
      applications: 'Concreto Fino, Regularização, Acabamentos',
      slug: '/brita-0'
    },
    {
      title: 'Pó de Pedra',
      description: 'O pó de pedra é um agregado muito importante nas construções porque, além de ser resistente, oferece aderência e facilita o nivelamento de superfícies.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Po-de-Pedra01.png',
      applications: 'Nivelamento, Calçamento, Base',
      slug: '/po-de-pedra'
    },
    {
      title: 'Bica Corrida',
      description: 'Conhecida por ser um conjunto de pedra britada, pedrisco e pó-de-pedra que proporciona excelente compactação e estabilidade para bases e pavimentação.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Bica-Corrida01.png',
      applications: 'Pavimentação, Base de Calçadas, Aterros',
      slug: '/bica-corrida'
    },
    {
      title: 'Saibro',
      description: 'Muitos são os materiais utilizados na construção de casas, prédios e demais estabelecimentos. O saibro é essencial para aterros e nivelamento de terrenos.',
      imageUrl: '/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Saibro01.png',
      applications: 'Aterros, Nivelamento, Jardins',
      slug: '/saibro'
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
            Oferecemos uma ampla gama de materiais para construção civil de alta qualidade, 
            processados com tecnologia de ponta para atender às demandas mais exigentes do mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              applications={product.applications}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
