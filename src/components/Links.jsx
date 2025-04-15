// Links.jsx
import React, { useState, useEffect } from 'react';
import Console from "./Console";

const App = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Console isBlinking={isBlinking} />
    </div>
  );
};

const Links = ({ onToggleConsole }) => {
  return (
    <div className="bg-black text-green-400 ml-4 font-mono p-5 h-screen overflow-auto w-1/2">
      <span className="mr-2">xjm@xjm:$</span>

        <h1>
          Bienvenidos a mi Portafolio <span className="blinking-dot">|</span>
        </h1>
        <p id="texto"></p>
        <p>xgm@xgm ~/documents/info $ ls -l</p>
        <p>total 04</p>
        <p>drwxr--r-- 1 xgm xgm 4096 Feb 2 2019 <a href="#">Github/</a></p>
        <p>drwxr--r-- 1 xgm xgm 4096 Feb 2 2019 <a href="#">Linkedin/</a></p>
        <p>drwxr--r-- 1 xgm xgm 4096 Apr 02 2024 <a href="#">CV_Web/</a></p>
        <p>-rwxr--r-- 1 xgm xgm 120K Apr 02 2024 <a href="#">CV_Julio_Muñoz_SD.pdf</a></p>
    </div>
  );
};

export { App };
export default Links;
