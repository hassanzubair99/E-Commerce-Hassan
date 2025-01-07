import React from "react";

const products2 = [
  {
    id: 1,
    image: "/images/bs1.png", // Replace with the actual image path
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 2,
    image: "/images/bs2.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 3,
    image: "/images/bs3.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 4,
    image: "/images/bs4.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 5,
    image: "/images/bs5.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 6,
    image: "/images/bs6.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 7,
    image: "/images/bs7.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 8,
    image: "/images/bs8.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
];

const BestsellerProducts = () => {
  return (
    <div className=" px-4 py-8 max-w-full max-w-7xl bg-white">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900">BESTSELLER PRODUCTS</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products2.map((product2) => (
          <div key={product2.id} className="bg-white shadow rounded-md overflow-hidden">
            {/* Product Image */}
            <img
              src={product2.image}
              alt={product2.title}
              className="w-full h-48 object-cover"
            />
            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{product2.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product2.department}</p>
              <div className="flex space-x-2 text-sm">
                <span className="text-gray-400 line-through">{product2.price}</span>
                <span className="text-green-500 font-semibold">{product2.discountPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;
