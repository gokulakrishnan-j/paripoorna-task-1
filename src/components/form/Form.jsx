import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Form.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import NumbersIcon from "@mui/icons-material/Numbers";
import FormControl from "../Formcontrol/FormControl";
import { API } from "../../Api/connect";

// Using yup for deep validation
const formValidationSchema = yup.object({
  name: yup.string().required("Fill the user name"),
  email: yup.string().email("Enter a valid email").required("Fill the age"),
  age: yup.number().required("Fill the age"),
  branch: yup.string().required("Select branch"),
  gender: yup.string().required("Select gender"),
  department: yup.array().required("Select term"),
});

function Form() {
  // Created useState to get data from server then send it to the table
  const [state, setState] = useState([]);

  //Function to get data
  const getData = () => {
    // Using fetch(promise) to get data
    fetch(`${API}/userData`)
      .then((data) => data.json())
      .then((userData) => setState(userData));
  };
  // UseEffect is used to call the function at first render that will help to get old data from server
  useEffect(() => {
    getData();
  }, []);

  //Formik for validation
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        age: "",
        branch: "",
        gender: "",
        department: "",
      },
      onSubmit: (value, { resetForm }) => {
        // Posting a data to data base by using fetch
        fetch(`${API}/userData`, {
          method: "POST",
          body: JSON.stringify(value),
          headers: { "Content-Type": "application/json" },
        }) // After completion of posting data get function will call
          .then(() => getData());

        // After submission of data form will reset
        resetForm({});
      },
      validationSchema: formValidationSchema,
    });
  // Branch
  const options = [
    "-- Select --",
    "Full Stack",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
  ];
  //Gender
  const genders = ["Female", "Male", "Other"];
  // Table heading
  const tableHead = [
    "Name",
    "Email id",
    "Age",
    "Branch",
    "Department",
    "Gender",
    "Edit",
    "Delete",
  ];
  // Department
  const department = ["ECE", "ME", "EEE", "CE"];
  return (
    <div className="formBox">
      <form onSubmit={handleSubmit} className="form">
        {/* Name  input field*/}
        <FormControl
          condition={"input"}
          type={"name"}
          name={"name"}
          label={"UserName"}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          value={values}
          icon={<PersonIcon />}
        />
        {/* Email  input field*/}
        <FormControl
          condition={"input"}
          type={"email"}
          name={"email"}
          label={"Email"}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          value={values}
          icon={<EmailIcon />}
        />
        {/* Age  input field*/}
        <FormControl
          condition={"input"}
          type={"number"}
          name={"age"}
          label={"Age"}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          value={values}
          icon={<NumbersIcon />}
        />
        {/* Branch  input field*/}
        <FormControl
          condition={"select"}
          name={"branch"}
          options={options}
          label={"Branch"}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors}
          value={values}
          touched={touched}
        />
        {/* Gender  input field*/}
        <FormControl
          condition={"radio"}
          genders={genders}
          type={"radio"}
          name={"gender"}
          label={"Gender :"}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors}
          value={values}
          touched={touched}
        />
        {/* Department  input field*/}
        <FormControl
          condition={"checkbox"}
          type={"checkbox"}
          name={"department"}
          label={"Department :"}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          value={values}
          department={department}
          lengthErr={"Select only two department"}
        />
        {/* Button field*/}
        <FormControl type={"submit"} condition={"button"} />
      </form>
      <div className="tableBox">
        {/* Table field*/}
        <FormControl
          condition={"tablehead"}
          tableHeadData={tableHead}
          tableBodyData={state}
        />
      </div>
    </div>
  );
}

export default Form;
