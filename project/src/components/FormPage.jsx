import React from "react";
import Form from "./Form";
import DataTable from "./DataTable";
import {useAppContext} from "@/hook/ApplicationContext";

export default function FormPage() {
  const {
    initialState,
    data,
    edit,
    setEdit,
    setData,
    properties,
    setProperties,
  } = useAppContext();
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

  const handleChanges = (event) => {
    const {name, value, type, checked} = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setProperties({...properties, [name]: newValue});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(edit);
    if (edit.isShow) {
      event.preventDefault();
      if (validate(properties)) {
        setEdit({...edit, isShow: !edit.isShow});
        const tmpData = [...data];
        tmpData[edit.id] = properties;
        setData(tmpData);
        setProperties(initialState);
      }
    } else {
      if (validate(properties)) {
        console.log(properties);
        setData([...data, properties]);
        setProperties(initialState);
      }
    }
  };
  return (
    <main className="grid grid-cols-2 gap-5 p-5">
      <Form
        handleSubmit={handleSubmit}
        properties={properties}
        error={error}
        handleChanges={handleChanges}
      />
      <DataTable />
    </main>
  );
}
