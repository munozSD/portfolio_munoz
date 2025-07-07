import React from "react";
import Contact from "./Contact";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="../#" className="text-xl font-bold">
          Julio Muñoz -->
        </a>
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-400">Inicio</a>
          </li>
          <li>
            <a href="About" className="hover:text-gray-400">Sobre mí</a>
          </li>
          <li>
            <a href="Projects" className="hover:text-gray-400">Proyectos</a>
          </li>
          <li>
            <a href="Contact" className="hover:text-gray-400">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;