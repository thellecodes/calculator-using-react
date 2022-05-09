import React from 'react'


function Calculator() {
  return (
    <div className='calculator'>
      <div className='c-wrapper'>

        <div className='ctc c-type'>
          <button className='active'>Calcuator</button>
          <button className=''>Converter</button>
        </div>

        <div className='ctc c-screen'>
          <div className='c-history-answer'>
            <i className="fa-solid fa-clock"></i> <span>1,234</span> </div>
          <div className='c-answer'>
            <span>0</span>
          </div>
        </div>

        <div className='ctc c-compute'>
          <button className='c-reverse'>
            <i className="fa-solid fa-rotate-left"></i>
          </button>

          <span>1234 + 5698</span>
        </div>

        <div className='c-actions'>
          <div className='cta cta-tp'>
            <button type="button" className="top-btn operator" value="ac">ac</button>
            <button type="button" className="top-btn operator" value="pm">&plusmn;</button>
            <button type="button" className="top-btn operator" value="%">%</button>
            <button type="button" className="top-btn special  operator" value="/">/</button>
          </div>

          <div className='cta cta-md'>
            <button className="normal number" value="7">7</button>
            <button className="normal number" value="8">8</button>
            <button className="normal number" value="9">9</button>


            <button className="special" value="x">x</button>
            <button className="normal number" value="4">4</button>
            <button className="normal number" value="5">5</button>
            <button className="normal number" value="6">6</button>


            <button className="special  operator" value="-">-</button>
            <button className="normal number" value="1">1</button>
            <button className="normal number" value="2">2</button>
            <button className="normal number" value="3">3</button>
            <button className="special operator" value="+">+</button>
          </div>

          <div className='cta cta-btm'>
            <button className="normal number" value="0">0</button>
            <button className="normal operator" value=".">.</button>
            <button className="special operator" value="=">=</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Calculator