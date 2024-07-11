import React from "react";

const ApplicationProvider = React.createContext();

export function ApplicationContext({children}) {
  const [edit, setEdit] = React.useState({id: null, isShow: false});
  const [data, setData] = React.useState([]);
  const initialState = {
    name: "",
    gender: "",
    address: "",
    age: 0,
    rating: 0,
    condition: false,
    color: "#000000",
    experience: "",
    dob: "",
  };
  const [properties, setProperties] = React.useState(initialState);
  return (
    <ApplicationProvider.Provider
      value={{
        edit,
        setEdit,
        data,
        setData,
        initialState,
        properties,
        setProperties,
      }}
    >
      {children}
    </ApplicationProvider.Provider>
  );
}

export function useAppContext() {
  return React.useContext(ApplicationProvider);
}
