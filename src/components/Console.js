import React from "react";


const Console = ({ isBlinking }) => {
  return (
    <div className="console">
      <h1>
        Bienvenidos a mi Portafolio {isBlinking && <span className="blinking-dot">|</span>}
      </h1>
      <p id="texto"></p>
    </div>
  );
};


export default Console;