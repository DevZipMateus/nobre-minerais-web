
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  applications?: string;
  slug?: string;
}

const ProductCard = ({ title, description, imageUrl, applications, slug }: ProductCardProps) => {
  const CardContent = (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 group h-full flex flex-col border border-white/20 backdrop-blur-sm">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-secondary/90 text-white text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver Mais
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col bg-white">
        <h3 className="font-serif text-xl font-bold text-primary mb-3 uppercase tracking-wide group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-sans text-gray-600 leading-relaxed mb-4 text-sm flex-1 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {applications && (
          <div className="border-t border-gray-100 pt-4 mt-auto">
            <p className="font-sans text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
              Aplicações:
            </p>
            <p className="font-sans text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              {applications}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link to={slug} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default ProductCard;
