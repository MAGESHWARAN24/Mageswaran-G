import React from "react";
import DataTable from "./components/DataTable";
import {ApplicationContext, useAppContext} from "./hook/ApplicationContext";
import Form from "./components/Form";
import FormPage from "./components/FormPage";
export default function App() {
  const validate = (values) => {
    const newError = {};
    let isValid = true;

    if (!values.name) {
      newError.name = "Name is required";
      isValid = false;
    }

    if (!values.gender) {
      newError.gender = "Gender is required";
      isValid = false;
    }

    if (!values.address) {
      newError.address = "Address is required";
      isValid = false;
    }

    if (values.age <= 0) {
      newError.age = "Age must be greater than 0";
      isValid = false;
    }

    if (values.rating < 1 || values.rating > 10) {
      newError.rating = "Rating must be between 1 and 10";
      isValid = false;
    }

    if (!values.condition) {
      newError.condition = "You must agree to the conditions";
      isValid = false;
    }

    if (!values.color) {
      newError.color = "Color is required";
      isValid = false;
    }

    if (!values.experience) {
      newError.experience = "Experience is required";
      isValid = false;
    }

    if (!values.dob) {
      newError.dob = "Date of birth is required";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };
  // const {validation} = useAppContext();
  const [inputValues, setInputValues] = React.useState({
    name: "",
    gender: "",
    address: "",
    age: 0,
    rating: 0,
    condition: false,
    color: "#000000",
    experience: "",
    dob: "",
  });
  const [isEdit, setEdit] = React.useState({id: null, isShow: false});
  const [editData, setEditData] = React.useState({
    name: "",
    gender: "",
    address: "",
    age: 0,
    rating: 0,
    condition: false,
    color: "#000000",
    experience: "",
    dob: "",
  });
  const [error, setError] = React.useState({
    name: "",
    gender: "",
    address: "",
    age: "",
    rating: "",
    condition: "",
    color: "",
    experience: "",
    dob: "",
  });
  const [data, setData] = React.useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(inputValues)) {
      setData([...data, inputValues]);
      setInputValues({
        name: "",
        gender: "",
        address: "",
        age: 0,
        rating: 0,
        condition: false,
        color: "#000000",
        experience: "",
        dob: "",
      });
    }
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (validate(editData)) {
      setEdit({...isEdit, isShow: !isEdit.isShow});
      const tmpData = [...data];
      tmpData[isEdit.id] = editData;
      setData(tmpData);
      console.log(data, editData);
      setEditData({
        name: "",
        gender: "",
        address: "",
        age: 0,
        rating: 0,
        condition: false,
        color: "#0000",
        experience: "",
        dob: "",
      });
    }
  };
  const handleChanges = (event) => {
    const {name, value, type, checked} = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setInputValues({...inputValues, [name]: newValue});
  };
  const handleEditChanges = (event) => {
    const {name, value, type, checked} = event.target;
    const newValue = type === "checkbox" ? checked : value;
    // setEdit((previous) => !previous);
    setEditData({...editData, [name]: newValue});
  };
  return (
    <ApplicationContext>
      <div className="flex relative">
        <FormPage />
      </div>
    </ApplicationContext>
  );
}
