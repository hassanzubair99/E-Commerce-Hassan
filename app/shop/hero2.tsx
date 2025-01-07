import React from "react";

const ShopPage = () => {
  const cards = [
    { id: 1, img: "/images/S1.png", text: "CLOTHS", items: 5 },
    { id: 2, img: "/images/S2.png", text: "CLOTHS", items: 5 },
    { id: 3, img: "/images/S3.png", text: "CLOTHS", items: 5 },
    { id: 4, img: "/images/S4.png", text: "CLOTHS", items: 5 },
    { id: 5, img: "/images/S5.png", text: "CLOTHS", items: 5 },
  ];

  const logos = [
    "/images/C1.png",
    "/images/C2.png",
    "/images/C3.png",
    "/images/C4.png",
    "/images/C5.png",
  ];

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="px-8 py-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
        {cards.map((card) => (
          <div key={card.id} className="relative group">
            <img
              src={card.img}
              alt={card.text}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <p className="text-white text-lg font-bold text-center">
                {card.text} <br /> {card.items} Items
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sorting and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-4 border-t bg-white">
        <span className="text-gray-600 mb-4 md:mb-0">
          Showing all 12 results
        </span>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Views:</span>
          <button className="p-2 border rounded hover:bg-gray-200">🔳</button>
          <button className="p-2 border rounded hover:bg-gray-200">☰</button>
          <select className="border px-3 py-2 rounded">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-around items-center py-8 bg-white">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} className="h-12" />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
