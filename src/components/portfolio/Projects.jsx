import React from "react";
import estadisticas from '../../assets/images/estadisticas.jpg';

const Projects = () => {
  return (
    <div id="Projects" className="flex items-center justify-center h-screen bg-slate-900">
      <a
        href="https://munoz.great-site.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/5"
      >
        <div className="Projects bg-sky-900 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-sky-400">
          <img src={estadisticas} alt="Estadisticas" className="w-full h-auto mb-4 rounded-md" />
          <div className="text-center">
            <strong className="text-white text-xl block">Software de Producción</strong>
            <span className="text-white text-sm block">Control Estadístico de Envasado</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
