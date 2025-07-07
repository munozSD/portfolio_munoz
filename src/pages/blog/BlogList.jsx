// src/pages/blog/BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/BlogPosts';

const BlogList = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      {blogPosts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
          <p><small>{post.date}</small></p>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogList;
