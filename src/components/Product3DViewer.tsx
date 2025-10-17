import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface SplineViewerProps {
  sceneUrl: string;
  onError?: () => void;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ sceneUrl, onError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (onError) onError();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isMouseOver) {
        e.preventDefault();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isMouseOver]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando modelo 3D...</p>
          </div>
        </div>
      )}
      <Spline
        scene={sceneUrl}
        onLoad={handleLoad}
        onError={handleError}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

interface Product3DViewerProps {
  modelUrl: string;
  className?: string;
}

const Product3DViewer: React.FC<Product3DViewerProps> = ({ modelUrl, className = "" }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 ${className}`}>
        <div className="text-center p-6">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <p className="text-gray-700 font-medium mb-2">No se pudo cargar el modelo 3D</p>
          <p className="text-gray-500 text-sm">El modelo 3D no está disponible en este momento</p>
        </div>
      </div>
    );
  }

  if (!modelUrl) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 ${className}`}>
        <div className="text-center p-6">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 font-medium mb-2">Modelo 3D no disponible</p>
          <p className="text-gray-500 text-sm">Este producto no tiene un modelo 3D configurado</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <SplineViewer sceneUrl={modelUrl} onError={() => setHasError(true)} />
    </div>
  );
};

export const Product3DLoader: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando modelo 3D...</p>
    </div>
  </div>
);

export default Product3DViewer;
