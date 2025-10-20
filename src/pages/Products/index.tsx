import React from 'react';
import ProductCatalog from './ProductCatalog';
import About from '../../components/About';
import LogoSlider from '../../components/LogoSlider';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <div className="relative h-[75vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/a10a3858-cd30-dc2d-e2b5-1454b2fa39ba.jpg"
            alt="Products Hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent animate-fade-up animation-delay-200">
            NUESTROS VALIDADORES
            </h1>
            <p className="text-3xl text-white/90 max-w-9xl animate-fade-up animation-delay-200">
            "Optimización de rutas y monitoreo constante para maximizar la eficiencia del transporte."
            </p>
          </div>         
        </div>
        <LogoSlider/>
      </div>

      {/* Catalog Section */} 
      <div className="container mx-auto px-6 pt-20">
  <div className="mb-12 h-[100px]">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
      MODELOS
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center">
      Optimiza tus rutas y monitoreo constante para maximizar la eficiencia
    </p>
  </div>
</div>
        <div className=''>
        <ProductCatalog />
        </div>
      </div>
      <div className='pt-60'>
      <About />
      </div>
    </div>
  );
};

export default ProductsPage;