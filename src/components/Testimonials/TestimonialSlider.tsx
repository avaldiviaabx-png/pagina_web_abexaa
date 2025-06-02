import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a0a3f82b-055c-0296-7976-158510adc871.png',
    title: 'TMAN',
    description: 'SOFTWARE DE BUS'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/0fdffa12-8947-19cb-1004-ae76b1bf8252.png',
    title: 'Software Abexa',
    description: 'SOFTWARE DE BUS'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/eaaddf44-67b1-3f88-32eb-32f39e4864e5.png',
    title: 'Software abexa',
    description: 'SOFTWARE DE BUS'
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-auto  max-w-2xl mx-auto h-[340px] overflow-hidden rounded-xl bg-black/60">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 transform ${
            index === current ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-white/90">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;