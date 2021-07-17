import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import dollar from '../images/dollar-symbol.svg';
import user from '../images/Group.svg'

const App = () => {
  const [ bill, setBill ] = useState(0);
  const [ people, setPeople ] = useState(0);

  let calculo = (bill * 5) / 100;
  let total = (bill / people) + Number(calculo / people);
  let totalPeople = total.toFixed(2);
  let amount = (calculo / people);
  let amountFix = amount.toFixed(2);




  console.log(calculo)
  console.log("porcentaje " +  (bill * 15) / 100);
  console.log(calculo / people);
  console.log((bill / people) + Number(calculo / people));
  /* console.log((bill + calculo) / people); */

  return (
    <>
      <h1>SPLI <br/> TTER</h1>
      <div className="container">
        <div className="container__content">
          <div className="container__content--left">
            <Input
              value='Bill'
              images={dollar}
              estado={bill}
              cambioEstado={setBill}
              />
            <p className="container__text">Select Tip %</p>
            <div className="container__btn">
              <Button value={5} />
              <Button value={10} />
              <Button value={15} />
              <Button value={25} />
              <Button value={50} />
              <input className="input__into" type="number" placeholder="Custom" />
            </div>
            <Input
              value='Number of People'
              images={user}
              estado={people}
              cambioEstado={setPeople}
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
                  ${amountFix === NaN && amountFix === Infinity ? 0 : amountFix}
                </div>
                <br/>
                <br/>
                <div className="container__content--right-value">
                  ${totalPeople == 'NaN' && totalPeople == 'Infinity' ? 0 : totalPeople}
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