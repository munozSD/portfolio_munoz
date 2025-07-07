// src/App.jsx
import React from "react";

const posts = [
  {
    title: "Mi primer post",
    date: "2025-05-17",
    content: "¡Bienvenido a mi blog! Este es el primer artículo de muchos que vendrán.",
  },
  {
    title: "Aprendiendo React con Tailwind",
    date: "2025-05-18",
    content: "Hoy estuve trabajando en una pequeña aplicación usando React y Tailwind CSS. ¡Va muy bien!",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Mi Blog Personal</h1>
        <p className="text-gray-600 mt-2">Escribiendo sobre tecnología, ideas y desarrollo web</p>
      </header>
      <main className="max-w-3xl mx-auto space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-4 text-gray-700">{post.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}
