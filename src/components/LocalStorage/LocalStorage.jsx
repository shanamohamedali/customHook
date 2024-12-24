import React,{useEffect} from "react";
import { useAddInput } from "../../hooks/useAddInput";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import './LocalStorage.css'

function LocalStorage() {
  const { fields, handleChange } = useAddInput({ name: "", age: "" });
  const {getData,setData}=useLocalStorage("userData");
  console.log('...',fields)
  console.log('...fdhsaf',getData)
//   const useEffect(()=>{

//   },[])

  

  return (
    <div className="localStorage-container">
      <h3>Local storage sample</h3>
      <div>
      <label htmlFor="name">Name:</label>
      <input name="name" id="name" value={fields.name} onChange={handleChange}></input>
      </div>
      <div>
      <label htmlFor="age">Age:</label>
      <input name="age" id="age" value={fields.age} onChange={handleChange}></input>
      </div>
     <div>
     <button onClick={()=>setData(fields)}>Save</button>
     </div>
    
      <h3>{()=>getData()}</h3>
     
    </div>
  );
}

export default LocalStorage;
