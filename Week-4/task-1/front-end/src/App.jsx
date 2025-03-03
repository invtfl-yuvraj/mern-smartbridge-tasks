import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ProductDetails from './components/ProductDetails';
import UserManagement from './components/UserManagement.jsx';
import Footer from './components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activePage, setActivePage] = useState('home'); // 'home' or 'users'
  
  const handleProductClick = (product) => {
    console.log(product);
    setSelectedProduct(product);
  };
  
  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  const handleNavigation = (page) => {
    setActivePage(page);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} activePage={activePage} />
      
      {activePage === 'home' ? (
        selectedProduct ? (
          <ProductDetails product={selectedProduct} onBackClick={handleBackClick} />
        ) : (
          <>
            <Hero />
            <ProductSection onProductClick={handleProductClick} />
          </>
        )
      ) : (
        <UserManagement />
      )}
      
      <Footer />
    </div>
  );
}

export default App;