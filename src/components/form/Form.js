import React, { useState } from 'react'
import {  useFormik } from 'formik'
import * as yup from "yup"
import "./form.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NumbersIcon from '@mui/icons-material/Numbers';
import FormControl from '../formcontrol/FormControl'

const formValidationSchema = yup.object({
    name:yup
    .string()
    .required("Fill the user name"),
    email:yup
    .string()
    .email("Enter a valid email")
    .required("Fill the age"),
    age:yup
    .number()
    .required("Fill the age"),
    branch:yup
    .string()
    .required("Select branch"),
    gender:yup
    .string()
    .required("Select gender"),
    term:yup
    .array()
    .required("Select term")
  })

function Form() {

  const [state,setState] = useState([])

    const {handleBlur,handleChange,handleSubmit,errors,touched} = useFormik({
        initialValues:{
            name:"",
            email:"",
            age:"",
            branch:"",
            gender:"",
            term:""
        },
        onSubmit :(value)=>{
            setState([...state,value])
        },
        validationSchema : formValidationSchema
    })

    const options=["-- Select --","Full Stack","Data Science","Machine Learning","Artificial Intelligence"]
    const genders = ["Female","Male","Other"]
    const tableHead = ["Name","Email id","Age","Branch","Gender"]

  return (
    <div className='formBox'>
        <form onSubmit={handleSubmit} className='form'>
       <FormControl condition={"input"} type={"name"} name={"name"} label={"UserName"} handleBlur={handleBlur} handleChange={handleChange} errors={errors} touched={touched} icon={<PersonIcon/>}/>
       <FormControl condition={"input"} type={"email"} name={"email"} label={"Email"} handleBlur={handleBlur} handleChange={handleChange} errors={errors} touched={touched} icon={<EmailIcon/>}/>
       <FormControl condition={"input"} type={"number"} name={"age"} label={"Age"} handleBlur={handleBlur} handleChange={handleChange} errors={errors} touched={touched} icon={<NumbersIcon/>}/>
       <FormControl condition={"select"} name={"branch"} options={options} label={"Branch"} handleBlur={handleBlur} handleChange={handleChange} errors={errors} touched={touched}/>
       <FormControl condition={"radio"} genders={genders} type={"radio"} name={"gender"} label={"Gender :"} handleBlur={handleBlur} handleChange={handleChange} errors={errors} touched={touched}/>
       <FormControl condition={"checkbox"} type={"checkbox"}  name={"term"} label={"Terms and conditions :"} handleBlur={handleBlur} handleChange={handleChange} errors={errors} touched={touched}/>
       <FormControl type={"submit"} condition={"button"}/>
       
    
       </form>
        <div className='tableBox'>
       <FormControl  condition={"tablehead"} tableHeadData={tableHead} tableBodyData={state}/>
       </div>
    </div>
  )
}

export default Form