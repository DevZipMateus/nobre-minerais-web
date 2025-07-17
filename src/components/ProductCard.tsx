
interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ title, description, imageUrl }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">
          {title}
        </h3>
        <p className="font-sans text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
