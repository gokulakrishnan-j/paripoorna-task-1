import React from 'react'
import Input from '../input/Input'
import Selects from '../select/Selects'
import RadioButton from '../radiobutton/RadioButton'
import Checkboxs from '../checkbox/Checkboxs'
import Button from '../button/Button'
import Table from "../table/Table"

function FormControl({condition,...rest}) {
   
  return (
    <div>
        {
            (()=>{
                switch(condition){
                    case "input":
                    return <Input rest={rest}/>
                    case "select":
                    return <Selects rest={rest}/>
                    case "radio":
                    return <RadioButton rest={rest}/>
                    case "checkbox":
                    return <Checkboxs rest={rest}/>
                    case "button":
                    return <Button rest={rest}/>
                    case "tablehead":
                      return <Table rest={rest}/>
                }
            })()
        }
    </div>
  )
}

export default FormControl