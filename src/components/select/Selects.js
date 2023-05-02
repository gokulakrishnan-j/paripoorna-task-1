import React from 'react'
import "./select.css"

function Selects({rest}) {
  return (
    <div>
       <select name={rest.name} onChange={rest.handleChange} onBlur={rest.handleBlur} className='dropdown'>
        {
          rest.options.map((b,i)=>(
        <option key={i} value={b}>{b}</option >
        ))
}
       </select>
       <p className='error'>{rest.errors[rest.name] && rest.touched[rest.name] ?rest.errors[rest.name] :null}</p>
    </div>
  )
}

export default Selects