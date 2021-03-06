import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import dollar from '../images/icon-dollar.svg';
import user from '../images/icon-person.svg'

const App = () => {
  const [ bill, setBill ] = useState(0);
  const [ people, setPeople ] = useState(0);
  const [ value, setValue ] = useState(0);
  const [ numeric, setNumeric ] = useState();

  let calculo = (bill * value) / 100;
  let total = (bill / people) + (calculo / people);
  let totalPeople = total.toFixed(2);
  let amount = (calculo / people);
  let amountFix = amount.toFixed(2);
  let resultado = (value === 0) ? (0.00).toFixed(2) : (value !== 0) ? totalPeople : (0.00).toFixed(2);

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
              leyendaError=""
              />
            <p className="container__text">Select Tip %</p>
            <div className="container__btn">
              <Button
                value={5}
                porcentaje={value}
                cambioPorcentaje={setValue}
              />
              <Button
                value={10}
                porcentaje={value}
                cambioPorcentaje={setValue}
                />
              <Button
                value={15}
                porcentaje={value}
                cambioPorcentaje={setValue}
                />
              <Button
                value={25}
                porcentaje={value}
                cambioPorcentaje={setValue}
              />
              <Button
                value={50}
                porcentaje={value}
                cambioPorcentaje={setValue}
                />
              <input className="input__into" type="number" placeholder="Custom" value={numeric} onChange={e => (setNumeric(e.target.value))}/>
            </div>
            <Input
              value='Number of People'
              images={user}
              estado={people}
              cambioEstado={setPeople}
              desicion={people}
              leyendaError="Don't be zero"
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
                  ${isNaN(amountFix) ? (0.00).toFixed(2) : (amountFix == Infinity) ? (0.00).toFixed(2) : amountFix}
                </div>
                <br/>
                <br/>
                <div className="container__content--right-value">
                  ${isNaN(resultado) ? (0.00).toFixed(2) : (resultado === Infinity) ? (0.00).toFixed(2) : resultado}
                </div>
              </div>
              </div>
            <Button
              value="RESET"
              style="right"
              porcentaje={value}
              cambioPorcentaje={setValue}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;