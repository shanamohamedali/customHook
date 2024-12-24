import React,{useEffect} from "react";
import { useAddInput } from "../../hooks/useAddInput";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function LocalStorage() {
  const { fields, handleChange } = useAddInput({ name: "", age: "" });
  const {getData,setData}=useLocalStorage("userData");
  console.log('...',fields)
  console.log('...fdhsaf',getData)
//   const useEffect(()=>{

//   },[])

  

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input name="name" id="name" value={fields.name} onChange={handleChange}></input>
      <label htmlFor="age">Age:</label>
      <input name="age" id="age" value={fields.age} onChange={handleChange}></input>
      <button onClick={()=>setData(fields)}>Save</button>
      <h3>{()=>getData()}</h3>
    </div>
  );
}

export default LocalStorage;
