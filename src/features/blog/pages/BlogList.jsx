import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ terminalMode = true }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Inteligencia Artificial 2024",
      date: "2024-06-15",
      slug: "/BlogPost/1",
      description: "Tendencias actuales en IA",
      content: `Contenido del post...`
    },
    // Agrega más posts aquí
  ];

  return (
    <div className={`ml-auto w-80 ${terminalMode ? 
      'bg-gray-900 border-l border-green-500 p-4 h-full min-h-screen' : 
      'max-w-5xl mx-auto px-4 py-10'}`}>

      <div className={terminalMode ? "space-y-3 sticky top-4" : "grid gap-6"}>
        {terminalMode && (
          <h2 className="text-green-400 font-mono text-lg mb-4">~/blog$ ls -l</h2>
        )}
        
        {blogPosts.map(post => (
          terminalMode ? (
            <Link
              key={post.id}
              to={post.slug}
              className="block p-3 hover:bg-gray-800 transition rounded"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-green-300 font-mono text-sm">-rw-r--r-- 1 user group</h2>
                <span className="text-gray-400 font-mono text-xs">{post.date}</span>
              </div>
              <p className="text-white mt-1 ml-4 font-mono">{post.title}</p>
            </Link>
          ) : (
            <Link
              key={post.id}
              to={post.slug}
              className="block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-600">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.description}</p>
            </Link>
          )
        ))}

        {terminalMode && (
          <div className="mt-4 pt-4 border-t border-green-800">
            <p className="text-green-400 font-mono text-sm">$ _</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;