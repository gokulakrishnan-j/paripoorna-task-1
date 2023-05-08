import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Form.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import NumbersIcon from "@mui/icons-material/Numbers";
import FormControl from "../Formcontrol/FormControl";
import { initialState, reducer } from "../Redux/Redux";
import { useReducer } from "react";
import { getData, deleteUser, editUser, createUser } from "../../Api/User/User";

// Using yup for deep validation
const formValidationSchema = yup.object({
  name: yup.string().required("Fill the user name"),
  email: yup.string().email("Enter a valid email").required("Fill the age"),
  age: yup.number().required("Fill the age"),
  branch: yup.string().required("Select branch"),
  gender: yup.string().required("Select gender"),
  department: yup
    .array()
    .min(1, "Seletct department")
    .required("Select department"),
});

let state;

function Form() {
  // Subscribing
  const [reduxState, dispaich] = useReducer(reducer, initialState);
  // Setting boolean value for edit
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    state = {
      dispaich: dispaich,
      reduxState: reduxState,
    };
  }, []);

  // UseEffect is used to call the function at first render that will help to get old data from server
  useEffect(() => {
    getData();
  }, []);

  // calling delete function when delete state is true
  if (reduxState.deleteData !== null) {
    deleteUser(reduxState.deleteData._id);
  }

  //Formik for validation

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: reduxState.editData,
    onSubmit: (value, { resetForm }) => {
      if (edit) {
        // edit operation
        const editValues = {
          name: value.name,
          email: value.email,
          age: value.age,
          branch: value.branch,
          gender: value.gender,
          department: value.department,
        };
        setEdit(editUser(value._id, editValues));
      } else {
        // Posting a data to data base by using fetch
        createUser(value);
      }
      // After submission of data the form will reset
      resetForm({});
    },
    validationSchema: formValidationSchema,
  });

  // Setting edit value to field when an edit  state is true
  useEffect(() => {
    if (reduxState.editData.name) {
      setValues(reduxState.editData);
      setEdit(true);
    }
  }, [reduxState.editData]);

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
    "S.No",
    "Name",
    "Email id",
    "Age",
    "Branch",
    "Department",
    "Gender",
    "Edit & Delete",
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
        <FormControl
          type={"submit"}
          value={edit ? "Edit" : "Submit"}
          condition={"button"}
        />
      </form>
      <div className="tableBox">
        {/* Table field*/}
        <FormControl
          condition={"tablehead"}
          tableHeadData={tableHead}
          tableBodyData={reduxState.getData}
          edit={dispaich}
          deletes={dispaich}
        />
      </div>
    </div>
  );
}
export { state };
export default Form;
