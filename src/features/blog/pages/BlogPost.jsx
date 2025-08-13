import React from "react";

const posts = [
  {
    title: "Inteligencia Artificial en 2024: Todo lo que Necesitas Saber",
    date: "2025-08-12",
    content: `
    Introducción 
La Inteligencia Artificial (IA) ha dejado de ser ciencia ficción para convertirse en una realidad que transforma industrias, empleos y nuestra vida cotidiana. Desde chatbots avanzados hasta sistemas que predicen enfermedades, la IA está revolucionando el mundo. Pero, ¿qué avances son los más importantes? ¿Cómo nos afectan? En este artículo, exploramos el estado actual de la IA, sus aplicaciones y lo que viene en el futuro.

1. ¿Qué es la Inteligencia Artificial? (Definición Actualizada)
La IA es la capacidad de las máquinas para aprender, razonar y tomar decisiones de manera similar a los humanos. Se divide en:

IA Débil (Narrow AI): Sistemas especializados (ej: ChatGPT, asistentes de voz).

IA General (AGI): Inteligencia humana artificial (aún en desarrollo).

Superinteligencia (ASI): Futuro teórico donde la IA supera al cerebro humano.

📌 Dato clave: El mercado global de IA crecerá a $1.5 billones de dólares para 2030 (Statista).

2. Los Grandes Avances de la IA en 2024
🔹 IA Generativa: Más Allá del Texto
ChatGPT-5 (OpenAI), Gemini 2.0 (Google) y Claude 3 (Anthropic) ofrecen respuestas más precisas y creativas.

Imágenes y videos generados por IA: MidJourney v6, Sora (OpenAI) y RunwayML permiten crear contenido hiperrealista.

🔹 IA en Medicina: Diagnósticos más Rápidos y Precisos
Sistemas como IBM Watson Health analizan radiografías mejor que algunos médicos.

Nanobots con IA para detectar cáncer en etapas tempranas (en fase experimental).

🔹 Robots Autónomos y Vehículos sin Conductor
Tesla Optimus (robot humanoide) y Waymo (autos autónomos) avanzan hacia la autonomía total.

🔹 IA en Negocios y Marketing
Asistentes virtuales que atienden clientes 24/7.

Análisis predictivo para ventas y logística (ej: Amazon usa IA para gestionar inventarios).

3. Los Grandes Debates Éticos de la IA
¿Reemplazará empleos? Se estima que para 2025, la IA afectará 85 millones de trabajos, pero creará 97 millones nuevos (World Economic Forum).

Sesgos algorítmicos: ¿Cómo evitar discriminación en contrataciones o préstamos bancarios?

Deepfakes y desinformación: ¿Deben regularse los videos falsos generados por IA?

4. El Futuro de la IA: ¿Hacia Dónde Vamos?
Cerebros artificiales: Proyectos como Neuralink buscan conectar IA con la mente humana.

Leyes de IA: Gobiernos como la UE ya preparan regulaciones (Ley de IA de la Unión Europea).

¿Superinteligencia? Expertos como Ray Kurzweil predicen que para 2045, la IA podría igualar la inteligencia humana (Singularidad Tecnológica).

Conclusión: ¿Estamos Listos para la Era de la IA?
La Inteligencia Artificial ya no es el futuro: es el presente. Su impacto en la salud, educación, trabajo y entretenimiento es innegable. La clave está en usarla de manera responsable, aprovechando sus beneficios sin perder de vista los riesgos.

¿Qué opinas? ¿Crees que la IA mejorará nuestras vidas o representa una amenaza? ¡Déjanos tu comentario y comparte este artículo con otros entusiastas de la tecnología!

💡 Bonus: ¿Quieres Aprender Más sobre IA?
Cursos recomendados: "AI For Everyone" (Coursera, Andrew Ng).

Libros: "Life 3.0" (Max Tegmark) – analiza el futuro de la IA.

Herramientas para probar IA gratis: ChatGPT, Gemini, Leonardo.AI (generador de imágenes).`,
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
