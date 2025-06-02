import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface NewsContent {
  [key: string]: {
    title: string;
    description: string;
    content: string;
    image: string;
    date: string;
    author: string;
  };
}

const newsContent: NewsContent = {
  'operator-feedback': {
    title: 'Comentarios de operadores',
    description: 'Enterate de lo que piensan nuestros operadores del servicio y como les ha ayudado en su laburo diario',
    content: `Los operadores de transporte son la columna vertebral de nuestro servicio. Sus experiencias y comentarios nos ayudan a mejorar constantemente...`,
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/6b90cf47-f7cf-7593-2e0e-6f7b511415be.jpg',
    date: '15 de Marzo, 2024',
    author: 'Equipo ABEXA'
  },
  'affiliated-companies': {
    title: 'Empresas Afiliadas',
    description: 'Conoce todas las Empresas afiliadas que se unieron este 2024!',
    content: `Este año hemos tenido el placer de dar la bienvenida a nuevas empresas que confían en nuestra tecnología...`,
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/be967ba2-c5ba-e582-9ec7-ae769793c3a9.jpeg',
    date: '10 de Marzo, 2024',
    author: 'Equipo ABEXA'
  },
  'user-feedback': {
    title: 'Comentarios de Usuarios',
    description: 'Nos importa mucho la experiencia de nuestros usuarios',
    content: `La satisfacción de nuestros usuarios es nuestra principal prioridad. Aquí compartimos algunas de sus experiencias...`,
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a5fb3f08-4552-bda3-83aa-3121e8216d67.jpg',
    date: '5 de Marzo, 2024',
    author: 'Equipo ABEXA'
  },
  'latest-innovations': {
    title: 'Descubre lo nuevo',
    description: 'No paramos de innovar! conoce nuestros ultimos proyectos',
    content: `La innovación está en nuestro ADN. Constantemente trabajamos en nuevas soluciones para mejorar el transporte...`,
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/49d69f8c-7465-58b5-1fca-e82e19a52af6.jpg',
    date: '1 de Marzo, 2024',
    author: 'Equipo ABEXA'
  }
};

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = id ? newsContent[id] : null;

  if (!news) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-2xl font-bold text-gray-800">Noticia no encontrada</h1>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Volver a noticias
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 relative">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
              <p className="text-lg text-white/90">{news.description}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center text-gray-600 mb-8">
              <span>{news.date}</span>
              <span className="mx-2">•</span>
              <span>{news.author}</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{news.content}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Comparte esta noticia</h2>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Compartir en Facebook
                </button>
                <button className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
                  Compartir en Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;