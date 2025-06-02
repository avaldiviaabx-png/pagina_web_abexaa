import React from 'react';
import { X, MessageCircle, CheckCircle2 } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  details: string;
  gradient: string;
}

const ServiceModal = ({ isOpen, onClose, image, title, description, details, gradient }: ServiceModalProps) => {
  if (!isOpen) return null;

  const handleContactClick = () => {
    const message = `Hola , estoy muy interesado en el servicio ${title} . me podrían brindar más información?`;
    const whatsappUrl = `https://wa.me/977704777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden w-full max-w-5xl my-4 shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 h-[200px] lg:h-auto relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${gradient} opacity-30`}></div>
          </div>

          {/* Right Section - Content */}
          <div className="lg:w-1/2 p-6 relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {title}
              </h2>
              <p className="text-base lg:text-lg text-gray-600 font-medium">{description}</p>
            </div>

            {/* Details */}
            <div className="bg-gray-50 rounded-xl p-4 lg:p-6 mb-6">
              <h3 className="text-base lg:text-lg font-semibold mb-3 text-gray-800">Detalles del Servicio</h3>
              <div className="space-y-2">
                {details.split('. ').map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm lg:text-base text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-base lg:text-lg font-semibold mb-3 text-gray-800">Beneficios ABEXA</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="block font-medium text-blue-700 text-sm">Soporte Profesional</span>
                 
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="block font-medium text-blue-700 text-sm">Soluciones Personalizadas</span>
                 
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="block font-medium text-blue-700 text-sm">Innovacion Constante</span>
              
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="block font-medium text-blue-700 text-sm">Seguridad de Datos</span>
                 
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContactClick}
              className="w-full py-3 lg:py-4 bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar por este servicio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;