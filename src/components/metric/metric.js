import React from 'react'

function Metric() {
  return (
    <div className='metric'>
      <div className='c-wrapper converter'>
        <div className='ctc c-type'>
          <button className='btn-d'>Calcuator</button>
          <button className='btn-d active'>Converter</button>
        </div>

        <div className='ctc c-screen'>
          <select name="metic-type" id="metrictype">
            <option value="length">Length</option>
            <option value="height">Height</option>
            <option value="width">Width</option>
          </select>

          <div className='inputs'>
            <div className='input-select'>
              <input type="text" placeholder="10" />
              <select>
                <option value="">ft</option>
                <option value="">ft</option>
                <option value="">ft</option>
              </select>
            </div>

            <div className='input-select'>
              <input type="text" placeholder="10" />
              <select>
                <option value="">ft</option>
                <option value="">ft</option>
                <option value="">ft</option>
              </select>
            </div>


          </div>
        </div>

        <div className='ctc btn-cn'>
          <button className='btn-d'>AC</button>
          <button className='btn-d'><i class="fa-solid fa-arrows-rotate"></i></button>
        </div>
        <div className='ctc btn-op'>
          <button className="btn-d operator" type="button" value="7">7</button>
          <button className="btn-d operator" type="button" value="8">8</button>
          <button className="btn-d operator" type="button" value="9">9</button>


          <button className="btn-d special" type="button" value="x">x</button>

          <button className="btn-d operator" type="button" value="4">4</button>
          <button className="btn-d operator" type="button" value="5">5</button>
          <button className="btn-d operator" type="button" value="6">6</button>
          <button className="btn-d operator" type="button" value="6">6</button>
          <button className="btn-d operator" type="button" value="6">6</button>

        </div>
      </div>
    </div>
  )
}

export default Metric