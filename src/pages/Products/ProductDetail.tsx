import React, { useState, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './ProductCatalog';
import { ChevronLeft, ChevronRight, MessageCircle, Box, ImageIcon } from 'lucide-react';
import Product3DViewer, { Product3DLoader } from '../../components/Product3DViewer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'features' | 'specifications'>('features');
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');

  const INITIAL_ITEMS_COUNT = 3;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-2xl font-bold text-gray-800">Producto no encontrado</h1>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Regresar a los productos
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${product.name}. Could you provide more information?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  const displayedItems = showAll
    ? (activeTab === 'features' ? product.features : product.specifications)
    : (activeTab === 'features' ? product.features : product.specifications).slice(0, INITIAL_ITEMS_COUNT);

  const hasMore = (activeTab === 'features' ? product.features : product.specifications).length > INITIAL_ITEMS_COUNT;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/products')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Regresar a los productos
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative p-8">
              {product.model3DUrl && product.model3DUrl.trim() !== '' && (
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setViewMode('2d')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      viewMode === '2d'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Imagenes</span>
                  </button>
                  <button
                    onClick={() => setViewMode('3d')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      viewMode === '3d'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Box className="w-4 h-4" />
                    <span>Vista 3D</span>
                  </button>
                </div>
              )}
              <div className="h-[400px] rounded-lg overflow-hidden bg-gray-50">
                {viewMode === '2d' ? (
                  <div className="relative h-full">
                    <img
                      src={product.gallery[currentImage]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    {product.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-all shadow-lg"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-all shadow-lg"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>
                ) : product.model3DUrl && product.model3DUrl.trim() !== '' ? (
                  <div className="relative h-full">
                    <Suspense fallback={<Product3DLoader />}>
                      <Product3DViewer modelUrl={product.model3DUrl} className="h-full" />
                    </Suspense>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
                      Interactúa con el modelo 3D
                    </div> 
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>Modelo 3D no disponible</p>
                  </div>
                )}
              </div>

              {product.gallery.length > 1 && (
                <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                  {product.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImage === index ? 'border-blue-600 shadow-md' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{product.longDescription}</p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => {
                      setActiveTab('features');
                      setShowAll(false);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'features'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Especificaciones
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('specifications');
                      setShowAll(false);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'specifications'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Características
                  </button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <ul className="space-y-3">
                    {displayedItems.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          activeTab === 'features' ? 'bg-red-500' : 'bg-blue-500'
                        }`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="flex items-center transition-colors gap-1 mt-4 text-blue-600 hover:text-blue-800"
                    >
                      {showAll ? 'Mostrar menos' : 'Mostrar mas'}
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full py-4 bg-white shadow-lg hover:bg-green-600 text-green rounded-xl flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Contactar via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
