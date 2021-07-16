import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import dollar from '../images/dollar-symbol.svg';
import user from '../images/Group.svg'

const App = () => {
  const [ numbers, setNumbers ] = useState('');
  const [ people, setPeople ] = useState(1);

  console.log(setNumbers.value);

  return (
    <>
      <h1>SPLI <br/> TTER</h1>
      <div className="container">
        <div className="container__content">
          <div className="container__content--left">
            <Input 
              images={dollar}
              numbers={numbers}
              changeState={setNumbers}
              />
            <p className="container__text">Select Tip %</p>
            <div className="container__btn">
              <Button value="5%" />
              <Button value="10%" />
              <Button value="15%" />
              <Button value="25%" />
              <Button value="50%" />
              <input className="input__into" type="number" placeholder="Custom" />
            </div>
            <Input
              images={user}
              numbers={people}
              changeState={setPeople}
              />
          </div>
          <div className="container__content--right">
            <div className="container__content--right-text">
              <div className="container__content--right-field">
                <div>
                  <p>
                    Tip Amount
                  </p>
                  <span>/ person</span>
                </div>
                <br/>
                <br/>
                <div>
                  <p>
                    Total
                  </p>
                  <span>/ person</span>
                </div>

              </div>
              <div className="container__content--right-field">
                <div className="container__content--right-value">
                  $4.27
                </div>
                <br/>
                <br/>
                <div className="container__content--right-value">
                  $32.79
                </div>
              </div>
              </div>
            <Button value="RESET" style="right" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;