import React, { useState } from 'react';

const ProductDetails = ({ product, onBackClick }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      
      // Reset button after showing success state
      setTimeout(() => {
        setIsAdded(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="bg-white py-12 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBackClick}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </button>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="w-full min-h-80 p-6 bg-white border border-gray-200 rounded-md flex justify-center items-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:max-w-lg">
            <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <p className="text-3xl font-semibold text-green-600">${product.price.toFixed(2)}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div className="mt-2">
                <p className="text-base text-gray-500">
                  {product.description}
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full rounded-md py-3 px-8 flex items-center justify-center text-base font-medium transition-all duration-300 ${
                  isAdded 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : isAdding 
                      ? "bg-blue-400 text-white" 
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isAdded ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Added to Cart
                  </span>
                ) : isAdding ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;