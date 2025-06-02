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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex flex-col items-center">
            {/* Main image */}
            <div className="w-full max-w-2xl h-64 relative rounded-lg overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Title and description */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">{project.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{project.description}</p>
            </div>

            {/* Related images */}
            <div className="w-full max-w-2xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Imágenes relacionadas</h3>
              <div className="grid grid-cols-3 gap-4">
                {relatedImages.map((img, index) => (
                  <div key={index} className="h-32 rounded-lg overflow-hidden shadow-md">
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
            <div className="w-full max-w-2xl bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-center">Detalles</h3>
              <p className="text-gray-700 leading-relaxed text-center">{project.content}</p>
            </div>

            {/* Additional information */}
            <div className="w-full max-w-2xl bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Información adicional</h3>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Actualizado recientemente
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Disponible para consultas
                </div>
                <div className="flex items-center text-gray-700">
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