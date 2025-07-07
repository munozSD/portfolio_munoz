import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    alert("Formulario enviado!");
    setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
  };

  return (
    <div id="Contact" className="contact bg-gray-900 p-6 w-3/4 mx-auto my-8 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="text-white block mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md"
          />
        </div>

        {/* Correo Electrónico */}
        <div>
          <label htmlFor="email" className="text-white block mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="text-white block mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 bg-gray-800 text-white rounded-md"
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
