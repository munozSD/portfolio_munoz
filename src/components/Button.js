import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}Aceptar
    </button>
  );
};

export default Button;
