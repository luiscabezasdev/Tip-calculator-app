import React from 'react';
import Input from './Input';
import Button from './Button';

const App = () => {
  return (
    <>
      <h1>SPLI <br/> TTER</h1>
      <div className="container">
        <div className="container__content">
          <div className="container__content--left">
            <Input />
            <p className="container__text">Select Tip %</p>
            <div className="container__btn">
              <Button/>
              <Button/>
              <Button/>
              <Button/>
              <Button/>
              <Button/>
            </div>
            <Input />
          </div>
          <div className="container__content--right">
            <div className="container__content--right-text">
              <p>
                Tip Amount
              </p>
              <span>/ person</span>
              <p>
                Total
              </p>
              <span>/ person</span>
            </div>
            <Button/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;