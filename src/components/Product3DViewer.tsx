import React, { Suspense, useRef, useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Mesh } from 'three';
import { AlertCircle } from 'lucide-react';

interface Product3DModelProps {
  url: string;
}

const Product3DModel: React.FC<Product3DModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  const meshRef = useRef<Mesh>(null);

  // Optional: Add rotation animation
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
};

interface Product3DViewerProps {
  modelUrl: string;
  className?: string;
}

const Product3DViewer: React.FC<Product3DViewerProps> = ({ modelUrl, className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Environment for reflections */}
          <Environment preset="studio" />
          
          {/* 3D Model */}
          <Product3DModel url={modelUrl} />
          
          {/* Ground shadow */}
          <ContactShadows 
            position={[0, -1.4, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={1.5} 
            far={4.5} 
          />
          
          {/* Controls */}
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

export const Product3DError: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="text-center max-w-md px-6">
      <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Modelo 3D no disponible</h3>
      <p className="text-gray-600 mb-4">
        El archivo del modelo 3D no se encuentra disponible en este momento.
      </p>
      <p className="text-sm text-gray-500">
        Por favor, contacta con soporte para obtener acceso a los modelos 3D.
      </p>
    </div>
  </div>
);

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('3D Model Error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export const Product3DViewerWithErrorHandling: React.FC<Product3DViewerProps> = (props) => {
  return (
    <ErrorBoundary fallback={<Product3DError />}>
      <Product3DViewer {...props} />
    </ErrorBoundary>
  );
};

export default Product3DViewer;