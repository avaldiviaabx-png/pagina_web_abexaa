import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Mesh } from 'three';
import { AlertCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface Product3DModelProps {
  url: string;
  onError?: () => void;
}

const Product3DModel: React.FC<Product3DModelProps> = ({ url, onError }) => {
  try {
    const { scene } = useGLTF(url);
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
    });

    return (
      <primitive
        ref={meshRef}
        object={scene}
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
      />
    );
  } catch (error) {
    if (onError) onError();
    return null;
  }
};

const isSplineUrl = (url: string): boolean => {
  return url.includes('spline.design') || url.includes('spline');
};

interface SplineViewerProps {
  sceneUrl: string;
  onError?: () => void;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ sceneUrl, onError }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (onError) onError();
  };

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando modelo 3D de Spline...</p>
          </div>
        </div>
      )}
      <Spline
        scene={sceneUrl}
        onLoad={handleLoad}
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
  const isSpline = isSplineUrl(modelUrl);

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 ${className}`}>
        <div className="text-center p-6">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <p className="text-gray-700 font-medium mb-2">No se pudo cargar el modelo 3D</p>
          <p className="text-gray-500 text-sm">Verifica que la URL del modelo sea correcta y accesible</p>
        </div>
      </div>
    );
  }

  if (isSpline) {
    return (
      <div className={`w-full h-full ${className}`}>
        <SplineViewer sceneUrl={modelUrl} onError={() => setHasError(true)} />
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#f8fafc');
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Environment preset="studio" />

          <Product3DModel url={modelUrl} onError={() => setHasError(true)} />

          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.4}
            scale={10}
            blur={1.5}
            far={4.5}
          />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Loading fallback component
export const Product3DLoader: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando modelo 3D...</p>
    </div>
  </div>
);

export default Product3DViewer;