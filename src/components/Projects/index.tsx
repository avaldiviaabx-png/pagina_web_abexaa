import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/6b90cf47-f7cf-7593-2e0e-6f7b511415be.jpg',
    title: 'Comentarios de operadores',
    description: 'Enterate de lo que piensan nuestros operadores del servicio y como les ha ayudado en su laburo diario',
    link: '/news/operator-feedback'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/be967ba2-c5ba-e582-9ec7-ae769793c3a9.jpeg',
    title: 'Empresas Afiliadas',
    description: 'Conoce todas las Empresas afiliadas que se unieron este 2024!',
    link: '/news/affiliated-companies'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a5fb3f08-4552-bda3-83aa-3121e8216d67.jpg',
    title: 'Comentarios de Usuarios',
    description: 'Nos importa mucho la experiencia de nuestros usuarios',
    link: '/news/user-feedback'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/49d69f8c-7465-58b5-1fca-e82e19a52af6.jpg',
    title: 'Descubre lo nuevo',
    description: 'No paramos de innovar! conoce nuestros ultimos proyectos',
    link: '/news/latest-innovations'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            NOTICIAS ABEXA
          </h2>
          <p className="text-xl text-gray-600">Mira las ultimas novedades</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;