import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/Button.css'
import Button from './Button'; // Importar el botón
import Console from "./Console";




const App = () => {
const [isBlinking, setIsBlinking] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setIsBlinking((prev) => !prev);
  }, 500);
  return () => clearInterval(interval);
}, []);return (
	<div className="App">
		<Console isBlinking={isBlinking} />
		</div>
	);
};
export default App;
