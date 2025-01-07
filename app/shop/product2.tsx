import React from "react";

const Product = () => {
  const products = [
    { src: "/images/d1.png", alt: "Product 1" },
    { src: "/images/h1.png", alt: "Product 2" },
    { src: "/images/h2.png", alt: "Product 3" },
    { src: "/images/d2.png", alt: "Product 4" },
    { src: "/images/d3.png", alt: "Product 5" },
    { src: "/images/d4.png", alt: "Product 6" },
    { src: "/images/d5.png", alt: "Product 7" },
    { src: "/images/h3.png", alt: "Product 8" },
    { src: "/images/d6.png", alt: "Product 9" },
    { src: "/images/d7.png", alt: "Product 10" },
    { src: "/images/d8.png", alt: "Product 11" },
    { src: "/images/h4.png", alt: "Product 12" },
  ];

  return (
    <div className="mx-auto px-4 py-8 bg-white">
      <section>
        <h2 className="text-center text-2xl font-bold text-black mb-4">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between the two major realms.
        </p>

        {/* Rows (3 rows of 4 products) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.src}
                alt={product.alt}
                className="w-full rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-black">Graphic Design</h3>
              <p className="text-sm text-gray-500">English Department</p>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
                <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          ))}

          
        </div>
      </section>
    </div>
  );
};

export default Product;
