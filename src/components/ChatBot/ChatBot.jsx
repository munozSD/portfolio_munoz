import { useState } from "react";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
      className="fixed bottom-24 right-6 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M12 3C6.48 3 2 6.99 2 12c0 1.84.54 3.54 1.46 5.01L2 21l4.19-1.45C7.7 20.46 9.77 21 12 21c5.52 0 10-3.99 10-9s-4.48-9-10-9z" />
        </svg>
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col z-[9999]">
          <div className="bg-blue-600 text-white p-3 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold">Asistente Virtual</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto text-sm">
            <p className="text-gray-500">Hola 👋, ¿en qué puedo ayudarte?</p>
            {/* Aquí irían los mensajes */}
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className="flex-1 text-sm border rounded-l-lg px-2 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
