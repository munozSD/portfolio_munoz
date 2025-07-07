import React from "react";
import { Link } from "react-router-dom"; // <-- Importa Link

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Julio Muñoz →
        </Link>
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">Inicio</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-400">Sobre mí</Link>
          </li>
          <li>
            <Link to="/Projects" className="hover:text-gray-400">Proyectos</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-gray-400">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
