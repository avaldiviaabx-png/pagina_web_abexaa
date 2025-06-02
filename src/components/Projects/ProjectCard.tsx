import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105 hover:bg-blue-100">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;