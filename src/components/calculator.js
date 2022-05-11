import React, { useEffect, useState } from 'react'


function Calculator() {

  const [prevAnswer, setPrevAnswer] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");
  const [history, setHistory] = useState([]);

  const handleOperand = (e) => {
    const value = e.target.value;

    setOperand(operand => operand + value);

    /* Create operand history & new value */
    setHistory([[operand], value]);
  }

  const handleOperator = (e) => {
    const value = e.target.value;

    // if no value in operand stop 
    if (value === "ac") {
      setOperand("");
      setAnswer(0);
      setPrevAnswer(answer);
      return;
    }

    if (value === "pm") {
      console.log('pm')
      return;
    }

    // get last operand value
    if (operand.slice(-1) === value) {
      const newOperand = operand.slice(0, -1);
      setOperand(newOperand + value);
    } else {
      // get the last input operator
      if (!Number(operand.slice(-1))) {
        let newOperand = operand.slice(0, -1);
        // checks if the last operand contains a zero
        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value); return
        } else setOperand(newOperand + value); return
      } else if (operand.slice(-1) === "ac") {
        setOperand("");
        setAnswer(0)
      }
    }

    const lastDigit = operand.slice(-1);
    if (!Number(lastDigit)) return;

    // if Dot(.) exists don't add again
    if (!(operand === "." || operand.includes("."))) {
      setOperand(operand => operand + value);
    }

    const historyFirstInput = history[0].join("");
    switch (value) {
      case "ac":
        setOperand("");
        break;
      case "+":
        if (historyFirstInput !== "") {
          setOperand(eval(operand) + value)
          break;
        }
      case "-":
        setOperand(`${eval(operand)}${value}`)
        break;
      case "*":
        break;
      case ".":
        break;
      case "pm":
        // console.log('pm')
        break;
      case "%":
        break;
      case "=":
        setOperand("");
        setAnswer(eval(operand))
        setPrevAnswer(answer)
        break;
      default:
        return;
    }

  }

  const handleDelete = () => {
    if (operand.length > 0) {
      setOperand(op => op.slice(0, -1));
    }
  }

  useEffect(() => {
    if (operand.includes("=")) { setOperand(operand.replace(/=/gi, "")); return }
  }, [operand])

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