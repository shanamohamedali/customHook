import { useState } from "react";

export const useLocalStorage=(key="")=>{
    const setData=(data="")=>{
        try{
            localStorage.setItem(key,JSON.stringify(data))
        }
        catch(error){
            console.log(error)
        }
    }

    const getData=()=>{
        const item=localStorage.getItem(key)
        return item? JSON.parse(item) : undefined;
    }
 
   return{
    setData,
    getData
   };
}