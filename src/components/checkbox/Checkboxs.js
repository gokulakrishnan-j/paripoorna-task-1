import React from 'react'
import "./checkbox.css"


function Checkboxs({rest}) {
  return (
    <div>
    <div className='checkBox'>
      <label htmlFor={rest.name}>{rest.label}</label>
      <input id={rest.name} type={rest.type} name={rest.name}  onChange={rest.handleChange} onBlur={rest.handleBlur} />
     
    </div>
    <p className='error'>{rest.errors[rest.name] && rest.touched[rest.name] ?rest.errors[rest.name] :null} </p>
    </div>
  )
}

export default Checkboxs