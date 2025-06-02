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
        className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl my-4 shadow-2xl transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative p-4 sm:p-6">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="flex flex-col items-center space-y-4">
            {/* Main image */}
            <div className="w-full h-48 sm:h-56 relative rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Title and description */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>

            {/* Related images */}
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-3 text-center">Imágenes relacionadas</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {relatedImages.map((img, index) => (
                  <div key={index} className="h-24 sm:h-28 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={img}
                      alt={`Related ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="w-full bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">Detalles</h3>
              <p className="text-gray-700 text-sm text-center">{project.content}</p>
            </div>

            {/* Additional information */}
            <div className="w-full bg-blue-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-center">Información adicional</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Actualizado recientemente
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Disponible para consultas
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Soporte técnico incluido
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