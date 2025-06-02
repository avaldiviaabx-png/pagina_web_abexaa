import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/5ad346a8-12a4-dc92-f032-7045234ab6e2.png"
        alt="Loading..."
        className="w-60 h-40 animate-pulse"
      />
    </div>
  );
};

export default Preloader;