// src/pages/blog/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../data/BlogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) return <p>Post no encontrado</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><small>{post.date}</small></p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
