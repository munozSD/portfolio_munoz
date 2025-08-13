import React from 'react';

const TechStackBand = () => {
  const technologies = [
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 90 },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 75 },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 70 },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
  ];

  return (
    <div className="w-full py-6 bg-gray-900 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Mi Stack Tecnológico
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="relative group flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-28"
            >
              {/* Logo */}
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="h-12 w-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Nombre */}
              <span className="text-sm font-medium text-white">{tech.name}</span>
              
              {/* Barra de nivel */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-purple-600" 
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              
              {/* Tooltip con porcentaje */}
              <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap border border-gray-600">
                Dominio: {tech.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackBand;