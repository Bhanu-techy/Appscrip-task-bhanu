import React from 'react'
import './index.css'

function Filters() {
  return (
    <div className='filter-container'>
        <div className='dis-flex filter'>
            <input id="checkbox" type='checkbox'/>
            <label htmlFor='checkbox' className='bold-txt'>Customizable</label>
        </div>
        <hr/>
        <details>
      <summary>IDEAL FOR
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
        </details>
        <hr/>
        <details>
      <summary>OCCASION
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    <details>
      <summary>Work
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    <details>
      <summary>Fabric
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    <details>
      <summary>SEGMENT
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    <details>
      <summary>SUITABLE FOR
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    <details>
      <summary>RAW MATERIAL
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    <details>
      <summary>PATTERN
        <br/><span>All</span>
      </summary>
      <div>
        <button className='select-all-btn'>Unselect all</button>
        <br/>
        <label>
          <input type="checkbox" value="men" /> Men
        </label>
        <br />
        <label>
          <input type="checkbox" value="women" /> Women
        </label>
        <br />
        <label>
          <input type="checkbox" value="kids" /> Baby & Kids
        </label>
      </div>
    </details>
    <hr/>
    </div>
  )
}

export default Filters