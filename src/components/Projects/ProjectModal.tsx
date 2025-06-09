import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    image: string;
    title: string;
    description: string;
    content: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl my-4 shadow-2xl transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Header Section with Full Background Image */}
            <div 
              className="relative h-48 rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative h-full flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Contenido Destacado</h4>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{project.content}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-blue-800 mb-2">Impacto</h5>
                    <p className="text-sm text-gray-600">Mejorando la experiencia de transporte para miles de usuarios diariamente.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-blue-800 mb-2">Innovación</h5>
                    <p className="text-sm text-gray-600">Implementando tecnología de vanguardia en el sector del transporte público.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">Información Adicional</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Actualizado recientemente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Disponible para consultas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Soporte técnico incluido</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">¿Necesitas más información?</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Nuestro equipo está disponible para brindarte detalles adicionales sobre este proyecto y cómo puede beneficiar a tu organización.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Consultoría gratuita</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Implementación rápida</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;