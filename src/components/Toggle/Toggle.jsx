import React from 'react'
import { useToggle } from '../../hooks/useToggle'
import './Toggle.css'
import Navbar from '../../Navbar';


export function Toggle() {

    const {toggle,handleToggle}=useToggle();

   
  return (
    <div className='toggle-container'>
      <Navbar/>
      <h3>Toggle Button - Custom Hook used for toggling</h3>
        <button onClick={handleToggle}>{toggle? "ON" :"OFF"}</button>
      
    </div>
  )
}


