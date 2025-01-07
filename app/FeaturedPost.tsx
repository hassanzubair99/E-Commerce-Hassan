

import React from 'react';

const posts = [
  {
    id: 1,
    image: '/images/y1.png', // Replace with the actual image path
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments',
    tag: 'NEW',
  },
  {
    id: 2,
    image: '/images/y2.png', // Replace with the actual image path
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments',
    tag: 'NEW',
  },
  {
    id: 3,
    image: '/images/y3.png', // Replace with the actual image path
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments',
    tag: 'NEW',
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-blue-500 font-medium mb-2">Practice Advice</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Posts</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative">
                <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">{post.tag}</span>
              </div>
              {/* Content Section */}
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-1">
                  <span className="text-blue-500 mr-2">Google</span>
                  Trending <span className="ml-2">New</span>
                </p>
                <h3 className="text-gray-800 font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-xs">
                  <p>{post.date}</p>
                  <p>💬 {post.comments}</p>
                </div>
                <a href="/blog" className="text-blue-500 font-medium mt-4 inline-block hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
