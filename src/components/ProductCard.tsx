
interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  applications?: string;
}

const ProductCard = ({ title, description, imageUrl, applications }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-bold text-primary mb-3 uppercase tracking-wide">
          {title}
        </h3>
        
        <p className="font-sans text-gray-600 leading-relaxed mb-4 text-sm flex-1">
          {description}
        </p>
        
        {applications && (
          <div className="border-t pt-4 mt-auto">
            <p className="font-sans text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
              Aplicações:
            </p>
            <p className="font-sans text-sm text-gray-500">
              {applications}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
