import React from 'react'
import "./button.css"

function Button({rest}) {
  return (
    <div>
        <button className='button' type={rest.type}>{rest.type}</button>
    </div>
  )
}

export default Button