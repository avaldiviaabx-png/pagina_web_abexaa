import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Mesh } from 'three';

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

export default Product3DViewer;