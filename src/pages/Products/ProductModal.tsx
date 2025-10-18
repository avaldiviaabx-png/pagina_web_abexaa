import React from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    image: string;
    name: string;
    description: string;
    price: number;
    category: string;
    longDescription?: string;
    specifications?: string[];
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <div 
        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 relative">
            <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              {product.category}
            </span>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {product.longDescription && (
              <p className="text-gray-700 mb-4">{product.longDescription}</p>
            )}
            {product.specifications && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Specifications:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="text-gray-600">{spec}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6"> 
              <span className="text-3xl font-bold text-blue-600">{product.price}</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;