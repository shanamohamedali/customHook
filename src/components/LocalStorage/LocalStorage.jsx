import React, { useEffect, useState } from "react";
import { useAddInput } from "../../hooks/useAddInput";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./LocalStorage.css";

function LocalStorage() {
  const { fields, setFields, handleChange,clearFields } = useAddInput({
    name: "",
    age: "",
  });

  const { setData, localStorageState } = useLocalStorage("userData");
  
  useEffect(()=>{
    setData(fields);
  },[fields])

  const onHandleSave =(e) => {
    e.preventDefault();
    clearFields;
  
  };

  console.log("...fields", fields.name);
  console.log("...localState...", localStorageState);


  return (
    <div className="localStorage-container">
      <h3>Local storage sample</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          value={fields.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          name="age"
          id="age"
          value={fields.age}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button onClick={onHandleSave}>Save</button>
      </div>
      {/* {/* {localStorageState && (
        <h3>
          Name: {userData.name},Age:{userData.age}
        </h3>
      )} */}
    </div>
  );
}

export default LocalStorage;
