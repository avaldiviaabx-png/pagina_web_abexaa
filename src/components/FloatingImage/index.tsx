import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader2 } from 'lucide-react';

const words = [
  'Es Rapido',
  'Es Seguro',
  'Es Moderno',
  'Te Ayuda',
  'Te Guia',
  'Te Cuida',
  'Te Premia',
  'Descarga BiiX'
];

const FloatingImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  const handleSplineError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTransitioning(false);
      }, 500); 
    }, 3000); 

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="py-24 bg-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl h-[700px]    bg-white relative">
            {/* Floating Words - Now positioned further to the right */}
            <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 z-10">
              <div
                className={`text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 transform backdrop-blur-sm px-8 py-4  ${
                  isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
                }`}
              >
                {words[currentWord]}
              </div>
            </div>
         <div className="container  justify-center animate-float flex  pt-20">
            <img
              src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/890473da-7e53-d37d-2344-b8841675a559.png"
              alt="Building"
              className="w-80 h-100 object-contain"
            />
          </div>
        
          </div>
          

          <p className="text-gray-600 text-lg mt-8 text-center max-w-xl">
            
          </p>
        </div>
      </div>
       
    </section>
  );
};

export default FloatingImage;