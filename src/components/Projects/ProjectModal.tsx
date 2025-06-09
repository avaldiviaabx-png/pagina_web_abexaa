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

  // Project-specific related images
  const projectImages = {
    'Comentarios de operadores': [
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/6b90cf47-f7cf-7593-2e0e-6f7b511415be.jpg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/be967ba2-c5ba-e582-9ec7-ae769793c3a9.jpeg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a5fb3f08-4552-bda3-83aa-3121e8216d67.jpg'
    ],
    'Empresas Afiliadas': [
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/be967ba2-c5ba-e582-9ec7-ae769793c3a9.jpeg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/49d69f8c-7465-58b5-1fca-e82e19a52af6.jpg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/6b90cf47-f7cf-7593-2e0e-6f7b511415be.jpg'
    ],
    'Comentarios de Usuarios': [
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a5fb3f08-4552-bda3-83aa-3121e8216d67.jpg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/49d69f8c-7465-58b5-1fca-e82e19a52af6.jpg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/be967ba2-c5ba-e582-9ec7-ae769793c3a9.jpeg'
    ],
    'Descubre lo nuevo': [
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/49d69f8c-7465-58b5-1fca-e82e19a52af6.jpg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a5fb3f08-4552-bda3-83aa-3121e8216d67.jpg',
      'https://mcusercontent.com/c379e3356454ef2a14873d293/images/6b90cf47-f7cf-7593-2e0e-6f7b511415be.jpg'
    ]
  };

  const relatedImages = projectImages[project.title as keyof typeof projectImages] || [];

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

            {/* Related Images Grid */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Imágenes relacionadas</h4>
              <div className="grid grid-cols-3 gap-3">
                {relatedImages.map((img, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={img}
                      alt={`Related ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Detalles</h4>
              <p className="text-gray-600 text-sm">{project.content}</p>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Información adicional</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Actualizado recientemente</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Disponible para consultas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Soporte técnico incluido</span>
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