import React from "react";
import guerraImage from '../assets/images/guerra.jpg';

const Projects = () => {
  return (
    <div id="Projects" className="flex space-x-4 p-4 ml-3 items-center justify-center">
<div className="Projects bg-sky-900 p-4 rounded-lg shadow-lg w-1/5 cursor-pointer hover:bg-red-700">
        <img src={guerraImage} alt="Guerra" className="w-7/8 h-auto mb-4 rounded-md " />
        <div className="text-center">
          <strong className="text-white text-xl block">Julio Muñoz</strong>
          <span className="text-white text-sm block">Software Developer</span>
        </div>
      </div>

      <div className="Projects bg-sky-900 p-4 rounded-lg shadow-lg w-1/5 cursor-pointer hover:bg-red-700">
        <img src={guerraImage} alt="Guerra" className="w-7/8 h-auto mb-4 rounded-md " />
        <div className="text-center">
          <strong className="text-white text-xl block">Julio Muñoz</strong>
          <span className="text-white text-sm block">Software Developer</span>
        </div>
      </div>
      <div className="Projects bg-sky-900 p-4 rounded-lg shadow-lg w-1/5 cursor-pointer hover:bg-red-700">
        <img src={guerraImage} alt="Guerra" className="w-7/8 h-auto mb-4 rounded-md " />
        <div className="text-center">
          <strong className="text-white text-xl block">Julio Muñoz</strong>
          <span className="text-white text-sm block">Software Developer</span>
        </div>
      </div>
      <div className="Projects bg-sky-900 p-4 rounded-lg shadow-lg w-1/5 cursor-pointer hover:bg-red-700">
        <img src={guerraImage} alt="Guerra" className="w-7/8 h-auto mb-4 rounded-md " />
        <div className="text-center">
          <strong className="text-white text-xl block">Julio Muñoz</strong>
          <span className="text-white text-sm block">Software Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
