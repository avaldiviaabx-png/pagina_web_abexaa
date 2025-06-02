import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/2c3206bb-89c3-deb2-1e96-61c459fcf55c.png"
        alt="Loading..."
        className="w-32 h-32 animate-pulse"
      />
    </div>
  );
};

export default Preloader;