import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Button.css'
import Button from './components/Button'; // Importar el botón


function App() {
  const [clicks, setClicks] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  // Cambiar el estado del punto parpadeante cada 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 500); // Cambiar cada 500ms

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="App">
      <div className="console">
        <h1>Julio Muñoz{isBlinking && <span className="blinking-dot">!!!</span>}</h1>
        <p>Bienvenido a mi portfolio.</p>
      <Button label="Haz clic aquí" onClick={handleClick} />
      <p>Has hecho clic {clicks} veces.</p>

      </div>
    </div>
  );
}

export default App;
