import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

const Home = ({ onToggleConsole }) => {
  return (
    <div className="bg-black text-green-400 ml-4 font-mono p-5 overflow-auto w-1/2">
      <span className="mr-2">xjm@xjm:$</span>
      
      <p>xgm@xgm ~/documents/info $ ls -l</p>
      <p>total 04</p>
      <p>drwxr--r-- 1 xgm xgm 4096 Feb 2 2024 <a href="https://github.com/munozSD" target="_blank" rel="noopener noreferrer" className="text-red-500">Github/</a></p>
      <p>drwxr--r-- 1 xgm xgm 4096 Feb 2 2024 <a href="https://www.linkedin.com/in/munozdev/" target="_blank" rel="noopener noreferrer" className="text-red-500">Linkedin/</a></p>
      <p>-rwxr--r-- 1 xgm xgm 120K Apr 02 2024 <a href="/CV_JulioMunoz.pdf" rel="noopener noreferrer" target="_blank" className="text-red-500">CV_Julio_Muñoz_SD.pdf</a></p>
      <p>drwxr--r-- 1 xgm xgm 4096 Apr 02 2024 <Link to="./CV_Web" className="text-red-500">CV_Web/</Link></p>
    </div>
  );
};

export default Home;