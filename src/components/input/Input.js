import React from 'react'
import TextField from '@mui/material/TextField';
import "./input.css"
import { InputAdornment } from '@mui/material';

function Input({rest}) {

  return (
    <div>
  
      <TextField className='inputFeild' sx={{marginBottom:"16px"}}  name={rest.name} type={rest.type} id={rest.name} label={rest.label} error={rest.touched[rest.name] && rest.errors[rest.name]}  onChange={rest.handleChange}  helperText={rest.errors[rest.name] && rest.touched[rest.name] ?rest.errors[rest.name] :null} onBlur={rest.handleBlur} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
             {rest.icon}
            </InputAdornment>
           )}}
      />
      

    </div>
  )
}

export default Input