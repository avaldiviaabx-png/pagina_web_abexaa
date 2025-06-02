import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4 flex items-center text-blue-600 font-medium">
            <span className="group-hover:underline">Ver más detalles</span>
            <svg
              className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;