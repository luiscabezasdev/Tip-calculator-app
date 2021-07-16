import React from 'react';

const Button = ({value, style}) => {
  return (
    <button className={`btn ${style}`}>
      {value}
    </button>
  )
}

export default Button
