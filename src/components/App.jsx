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
            <Button/>
            <Input />
          </div>
          <div className="container__content--right">
            <div>
              <p>
                Tip Amount
              </p>
              <span>/ person</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;