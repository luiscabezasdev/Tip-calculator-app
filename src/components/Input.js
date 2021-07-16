import React from 'react';

const Input = ({value, images, numbers, changeState}) => {

  const onChange = (e) => {
    changeState(e.target.value)
  }

  console.log(changeState.value);

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
            name="bill"
            value={numbers}
            onChange={onChange}
            />
        </div>
      </label>
    </div>
  )
}

export default Input;
