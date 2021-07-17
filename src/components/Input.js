import React from 'react';

const Input = ({estado, cambioEstado, value, images}) => {

  return (
    <div className="input">
      <label>
        <span className="input__title">{value}</span>
        <div>
          <p>
            <img src={images} alt=""/>
          </p>
          <input
            className="input__into"
            type="number"
            value={estado}
            onChange={e => (cambioEstado(e.target.value))}
            />
        </div>
      </label>
    </div>
  )
}

export default Input;
