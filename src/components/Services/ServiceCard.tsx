import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  gradient: string;
  onClick: () => void;
}

const ServiceCard = ({ image, title, description, gradient, onClick }: ServiceCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`group h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${gradient} cursor-pointer`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-white/90 backdrop-blur-sm transition-colors duration-500 group-hover:bg-white/95 h-[calc(100%-192px)] flex flex-col">
        <h3 className="text-xl text-center font-bold mb-3 bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600  leading-relaxed group-hover:text-gray-800 transition-colors duration-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;