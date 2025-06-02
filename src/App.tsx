import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Projects = React.lazy(() => import('./components/Projects'));
const Services = React.lazy(() => import('./components/Services'));
const FloatingImage = React.lazy(() => import('./components/FloatingImage'));
const Footer = React.lazy(() => import('./components/Footer'));
const ProductsPage = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/Products/ProductDetail'));
const LogoSlider = React.lazy(() => import('./components/LogoSlider'));
const Nosotros = React.lazy(() => import('./pageNosotros/Nosotros'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader isLoading={isLoading} />;
  }

  return (
    <Router>
      <Suspense fallback={<Preloader isLoading={true} />}>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Testimonials />
                  <Projects />
                  <LogoSlider />
                </>
              }
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;