import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  
  category: string;
}

const ProductCard = ({ id, image, name, description, category }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full ">
      <div className="h-60 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"> 
            {category}
          </span>
        </div>
        <p className="text-gray-900 mb-4 font-light  ring-indigo-500  ">{description}</p>
        <div className="flex justify-between items-center">
         
          <button 
            onClick={() => navigate(`/products/${id}`)}
            className="px-4 py-2 w-full bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>  
  );
};

export default ProductCard;