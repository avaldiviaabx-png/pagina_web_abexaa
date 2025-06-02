
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Services from './components/Services';
import FloatingImage from './components/FloatingImage';
import Footer from './components/Footer';
import ProductsPage from './pages/Products';
import ProductDetail from './pages/Products/ProductDetail';
import LogoSlider from './components/LogoSlider';
import Nosotros from './pageNosotros/Nosotros';
import ScrollToTop from './components/ScrollToTop';





function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen">
      
        <Navbar />
        <Routes>
          
          
          <Route path="/" element={
            <>
              
              <Hero />
              <Services />
              <Testimonials />
              
              
              <Projects />
             <LogoSlider/>
              {/* <FloatingImage /> */}
            </>
          } />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/nosotros" element={<Nosotros />} />
      
          
          

      
 
   

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;