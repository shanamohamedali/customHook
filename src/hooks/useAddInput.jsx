import { useState } from "react";
export const useAddInput = (initialValue) => {
 const[fields, setFields] = useState(initialValue);

  const handleChange = (e) => {
    setFields((prev)=>({
        ...prev,
      [e.target.name]: e.target.value,

   }))
  };

  // const clearFields=()=>{
  //   setFields("")
  // }
  return {
    fields,
    setFields,
    handleChange,
  
  };
};
