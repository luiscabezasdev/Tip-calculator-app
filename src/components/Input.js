import React from 'react';

const Input = ({estado, cambioEstado, value, images, leyendaError, desicion}) => {

  const prueba = () => {
    desicion === 0 ? true : false;
  }

  return (
    <div className="input">
      <label>
        <div className="errorInput">
          <span className="input__title">{value}</span>
          {
          desicion === 0 ? <p className="error">{leyendaError} </p> : ''
          }
        </div>
        <div>
          <p>
            <img src={images} alt=""/>
          </p>
          <input
            className="input__into"
            type="number"
            value={estado}
            onChange={e => (cambioEstado(e.target.value))}
            onKeyUp={prueba}
            />
        </div>
      </label>
    </div>
  )
}

export default Input;
