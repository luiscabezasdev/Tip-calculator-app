import React from 'react';

const Input = () => {
  return (
    <div className="input">
      <label>
        <span className="input__title">Bill</span>
        <div>
          <p>$</p>
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
