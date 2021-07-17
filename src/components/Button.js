import React from 'react';

const Button = ({value, style, porcentaje, cambioPorcentaje}) => {
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    cambioPorcentaje(porcentaje, e.target.value);
    if (porcentaje === "RESET") {
      cambioPorcentaje(0)
    }

    console.log();
  }

  return (
    <button
      className={`btn ${style}`}
      value={porcentaje = value}
      onClick={handleSubmit}
      >
      {typeof(value) === 'string' ? value : value+`%`}
    </button>
  )
}

export default Button
