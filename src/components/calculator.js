import React, { useState } from 'react'


function Calculator() {
  const [prevAnswer, setPrevAnswer] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;

    // set operaands inputs
    setOperand(operand => operand + value);
  }

  const handleOperator = (e) => {
    const value = e.target.value;


    if (value === "=") {
      if (operand === "") return;
    }

    // if no value in operand stop 
    if (value === "ac") {
      setOperand("");
      setAnswer(0);

      // Check if we have a prev answer > 0
      if (answer > 0)
        setPrevAnswer(answer);
      return;
    }

    // handle plush and minus sign
    if (value === "pm") {
      if (operand === "") return;
      //get the last char
      let calculated;
      if (Number(operand.slice(-1))) {
        calculated = eval(operand);

        if (Math.sign(calculated) < 0) {
          calculated = Math.abs(calculated);
          setOperand(calculated.toString());
        } else {
          setOperand(`-` + calculated.toString());
        }

      } else {
        calculated = (eval(operand.slice(0, -1)));
        if (Math.sign(calculated)) {
          setOperand((`-` + calculated.toString()))
        } else {
          setOperand((calculated.toString()))
        }
      }
      return;
    }


    /* last test for users */
    if (value === "%") {
      if (operand === "") return;
    }

    let newOperand;
    // get last operand value
    if (operand.slice(-1) === value) {
      newOperand = operand.slice(0, -1);
      setOperand(newOperand + value);
    } else {
      // get the last input operator & check if is a number
      if (!Number(operand.slice(-1))) {
        // remove the last selected char
        newOperand = operand.slice(0, -1);

        // checks if the last operand contains a zero
        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value); return
        } else {
          setOperand(newOperand + value);
          return;
        }

      } else if (operand.slice(-1) === "ac") {

        setOperand("");
        // Check if we have a prev answer > 0
        if (answer > 0)
          setAnswer(0)
      }
      else if (operand.includes("/")) {
        newOperand = eval(operand);
        setOperand(newOperand);
      }
    }


    // if the last inputed digit is not a number stop
    const lastDigit = operand.slice(-1);
    if (!Number(lastDigit)) return;

    // if Dot(.) exists don't add again
    if (!(operand === "." || operand.includes("."))) {
      setOperand(operand => operand + value);
    }

    // Swicth for some arithmetic operations
    switch (value) {
      case "ac":
        setOperand("");
        break;
      case "+":
        setOperand(eval(operand) + value)
        break;
      case "-":
        setOperand(`${eval(operand)}${value}`)
        break;
      case "*":
        setOperand(`${eval(operand)}${value}`)
        break;
      case "%":
        console.log('percentage + Test for all viewers')
        break;
      case "/":
        setOperand(`${eval(operand)}${value}`);
        break;
      case "=":
        setOperand("");
        setAnswer(eval(operand));
        if (answer > 0)
          setPrevAnswer(answer);
        break;
      default:
        return;
    }

  }

  // Delete last char from operand
  const handleDelete = () => {
    if (operand.length > 0) {
      setOperand(op => op.slice(0, -1));
    }
  }

  return (
    <div className='calculator'>
      <div className='c-wrapper'>

        <div className='ctc c-type'>
          <button className='active'>Calcuator</button>
          <button className=''>Converter</button>
        </div>

        <div className='ctc c-screen'>
          <div className='c-history-answer'>
            <i className="fa-solid fa-clock"></i> <span>
              {/* 1,234 */}
              {prevAnswer}
            </span> </div>
          <div className='c-answer'>
            <span>
              {/* 0 */}
              {answer}
            </span>
          </div>
        </div>

        <div className='ctc c-compute'>

          <button className='c-reverse' value="rv" onClick={handleDelete}>
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <span>
            {/* 1234 + 5678 */}
            {operand ? operand : '0'}
          </span>
        </div>

        <div className='c-grid'>
          <button type="button" className="top-btn" value="ac" onClick={handleOperator}>ac</button>
          <button type="button" className="top-btn" value="pm" onClick={handleOperator}>&plusmn;</button>
          <button type="button" className="top-btn" value="%" onClick={handleOperator}>%</button>
          <button type="button" className="top-btn special" value="/" onClick={handleOperator}>/</button>

          <button className="normal" value="7" onClick={handleOperand}>7</button>
          <button className="normal" value="8" onClick={handleOperand}>8</button>
          <button className="normal" value="9" onClick={handleOperand}>9</button>


          <button className="special" value="*" onClick={handleOperator}>x</button>
          <button className="normal" value="4" onClick={handleOperand}>4</button>
          <button className="normal" value="5" onClick={handleOperand}>5</button>
          <button className="normal" value="6" onClick={handleOperand}>6</button>


          <button className="special" value="-" onClick={handleOperator}>-</button>
          <button className="normal" value="1" onClick={handleOperand}>1</button>
          <button className="normal" value="2" onClick={handleOperand}>2</button>
          <button className="normal" value="3" onClick={handleOperand}>3</button>
          <button className="special" value="+" onClick={handleOperator}>+</button>

          <button className="span-two normal" value="0" onClick={handleOperand}>0</button>
          <button className="normal" value="." onClick={handleOperator}>.</button>
          <button className="special" value="=" onClick={handleOperator}>=</button>
        </div>
      </div>
    </div >
  )
}

export default Calculator