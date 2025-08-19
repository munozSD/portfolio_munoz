import React, { useState } from "react";
import axios from "axios";
export default function PostForm({ closeModal }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/api/posts", {
        title, content, category,
      });

      setMessage(`Post creado con ID: ${res.data._id}`);
      setTitle(""); setContent(""); setCategory("");

      // Cerrar modal automáticamente si existe la prop
      if (closeModal) closeModal();

    } catch (err) {
      console.error(err);
      setMessage("Error al crear el post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-2">Crear nuevo post</h2>
      <input
        type="text" placeholder="Título" value={title}
        onChange={e => setTitle(e.target.value)} className="border p-2 rounded" required
      />
      <textarea
        placeholder="Contenido" value={content}
        onChange={e => setContent(e.target.value)} className="border p-2 rounded" rows="5"
      />
      <input
        type="text" placeholder="Categoría" value={category}
        onChange={e => setCategory(e.target.value)} className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Crear Post
      </button>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </form>
  );
}

