import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          Julio Muñoz -->
        </a>
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-400">Sobre mí</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Proyectos</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
