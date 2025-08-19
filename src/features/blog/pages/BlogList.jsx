import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogGrid from './BlogGrid'; // Ajusta la ruta según tu estructura

const BlogList = ({ terminalMode = false }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/posts")
      .then(res => {
        const sortedPosts = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogPosts(sortedPosts);
      })
      .catch(err => {
        console.error("Error al obtener posts:", err);
        // Datos mock de respaldo
        const mockPosts = [
          { 
            _id: 1, 
            title: "Post de Error en Carga<", 
            content: "Contenido de ejemplo...", 
            createdAt: new Date() 
          }
        ];
        setBlogPosts(mockPosts);
      });
  }, []);

  if (!terminalMode) {
    return <BlogGrid posts={blogPosts} />;
  }

  return (
    <div className="bg-gray-900 border-l border-green-500 p-4 h-full min-h-screen ml-auto w-80">
      <div className="space-y-3 sticky top-4">
        <h2 className="text-green-400 font-mono text-lg mb-4">~/blog$ ls -l</h2>
        
        {blogPosts.map(post => (
          <Link
            key={post._id}
            to={`/BlogPost/${post._id}`}
            className="block p-3 hover:bg-gray-800 transition rounded"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-green-300 font-mono text-sm">-rw-r--r-- 1 user group</h2>
              <span className="text-gray-400 font-mono text-xs">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-white mt-1 ml-4 font-mono">{post.title}</p>
          </Link>
        ))}

        <div className="mt-4 pt-4 border-t border-green-800">
          <p className="text-green-400 font-mono text-sm">$ _</p>
        </div>
      </div>
    </div>
  );
};

export default BlogList;