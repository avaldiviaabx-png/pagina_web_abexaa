import React, { useState, useEffect } from 'react';

const images = [
  'https://mcusercontent.com/c379e3356454ef2a14873d293/images/e034be35-26ca-2e34-df3a-1398b5990cd7.png',
  'https://mcusercontent.com/c379e3356454ef2a14873d293/images/56b96d94-f63c-5f1c-cc98-6251d4e9c996.png',
  'https://mcusercontent.com/c379e3356454ef2a14873d293/images/6ff36252-0893-990b-18ef-d74ae406fb89.png',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh]" id="home">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-blue-900/50" />
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover md:object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        </div>
      ))}
      <div className="h-[75vh] flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 md:px-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 opacity-0 translate-y-8 animate-fade-up"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            "SOLUCIONES TECNOLOGICAS
            <br />
            PENSADAS EN EL TRANSPORTE DE LOS PERUANOS"
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 opacity-0 translate-y-8 animate-fade-up animation-delay-200"
            style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
          >
            ABEXA - Confiamos en Dios
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;