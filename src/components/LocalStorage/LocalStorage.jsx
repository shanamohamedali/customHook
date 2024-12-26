import React, { useEffect, useRef, useState } from "react";
import { useAddInput } from "../../hooks/useAddInput";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./LocalStorage.css";
import Navbar from "../../Navbar";

export function LocalStorage() {
  const { fields,handleChange} = useAddInput(
    { 
      name: "", age: "" 
    }
  );

  const { setData, localStorageState } = useLocalStorage("userData");

  const inputref = useRef();

  useEffect(() => {
    setData(fields);
  }, [fields]);

  const onHandleSave = (e) => {
    e.preventDefault();
    //clearFields;
     inputref.current.focus();
  };

  console.log("...fields", fields);
  console.log("...localgetState...", localStorageState);

  return (
    <div className="localStorage-container">
      <Navbar/>
      <h3>Localstorage using Custom Hook</h3>
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
          ref={inputref}
          value={fields.age}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button onClick={onHandleSave}>Save</button>
      </div>
      {localStorageState && (
        <h3>
          Name: {localStorageState.name}, Age:{localStorageState.age}
        </h3>
      )}
    </div>
  );
}


