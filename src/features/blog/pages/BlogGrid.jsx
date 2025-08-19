import React from 'react';
import { Link } from 'react-router-dom';

const BlogGrid = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link
            key={post._id}
            to={`/BlogPost/${post._id}`}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              {post.imageUrl ? (
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <span className="text-4xl">📄</span>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-sm text-indigo-600 font-medium mb-4">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-600 line-clamp-3">
                {post.content.substring(0, 120)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;