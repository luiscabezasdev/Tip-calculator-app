import React from 'react';

const Input = ({value, images}) => {
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
            name="bill"/>
        </div>
      </label>
    </div>
  )
}

export default Input;
