import React, { useState } from "react";
import axios from "axios";

export default function PostForm({ closeModal }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null); // 👈 nueva state para la imagen
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Usamos FormData porque incluye archivos
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post("http://localhost:3001/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(`Post creado con ID: ${res.data._id}`);
      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);

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
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <textarea
        placeholder="Contenido"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="border p-2 rounded"
        rows="5"
      />

      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="border p-2 rounded"
      />

      {/* Nuevo input para subir imagen */}
      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
        className="border p-2 rounded"
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
