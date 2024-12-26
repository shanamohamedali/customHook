import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [localStorageState, setLocalStorageState] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  });

  const setData = (data) => {
    console.log("setdata...", data);
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  // const getData=()=>{
  //     const item=localStorage.getItem(key)
  //   return item? JSON.parse(item):null;
  // }

  return {
    setData,
    localStorageState,
  };
};
