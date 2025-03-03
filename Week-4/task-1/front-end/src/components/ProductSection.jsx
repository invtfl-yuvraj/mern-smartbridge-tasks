import React from "react";

const ProductSection = ({ onProductClick }) => {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299.99,
      description:
        "Noise-cancelling wireless headphones with superior sound quality and 20-hour battery life. Featuring premium materials and the latest Bluetooth technology.",
      image: "https://assets.nikshanonline.com/wp-content/uploads/2024/10/a.jpg",
    },
    {
      id: 2,
      name: "Smartwatch Pro",
      price: 199.99,
      description:
        "Track fitness, receive notifications, and more with this waterproof smartwatch. Includes heart rate monitoring and sleep tracking capabilities.",
      image: "https://m.media-amazon.com/images/I/71E7VpaS9VL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Portable Speaker",
      price: 89.99,
      description:
        "Compact, waterproof, and powerful Bluetooth speaker with 360° sound. Perfect for outdoor adventures with 12 hours of playtime.",
      image: "https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1.png?v=1709717404",
    },
    {
      id: 4,
      name: "Wireless Charger",
      price: 49.99,
      description:
        "Fast-charging wireless pad compatible with all Qi-enabled devices. Sleek design with LED indicators and overheating protection.",
      image: "https://www.costco.com.au/medias/sys_master/images/h21/h2e/83635960053790.jpg",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 p-6 bg-white border border-gray-200 rounded-md flex justify-center items-center overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold  text-gray-700">
                    {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                    {product.name}
                  </h3>
                </div>
                <p className="text-xl font-semibold text-green-600">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <div className="">
                <button
                  onClick={() => onProductClick(product)}
                  className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
