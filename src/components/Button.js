import React from 'react';
import '../styles/Button.css'; // Si tienes un archivo CSS para el botón

const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
