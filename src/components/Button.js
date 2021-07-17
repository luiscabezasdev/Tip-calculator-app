import React from 'react';

const Button = ({value, style, porcentaje, cambioPorcentaje, estado}) => {
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    cambioPorcentaje(porcentaje, e.target.value);
    console.log('You clicked submit.');
    if (porcentaje === "RESET") {
      cambioPorcentaje(0)
    }
    console.log(porcentaje);
  }

  return (
    <button
      className={`btn ${style}`}
      value={porcentaje = value}
      onClick={handleSubmit}
      >
      {value}%
    </button>
  )
}

export default Button
