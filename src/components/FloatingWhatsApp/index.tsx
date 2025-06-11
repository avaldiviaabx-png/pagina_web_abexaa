import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa conocer más sobre los servicios de ABEXA Cloud. ¿Podrían brindarme más información?";
    const phoneNumber = "977704777"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Contáctanos por WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Mobile-friendly larger touch target */}
      <style jsx>{`
        @media (max-width: 768px) {
          .floating-whatsapp {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;