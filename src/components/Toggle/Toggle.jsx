import React from 'react'
import { useToggle } from '../../hooks/useToggle'
import './Toggle.css'


export function Toggle() {

    const {toggle,handleToggle}=useToggle();

   
  return (
    <div className='toggle-container'>
      <h3>Toggle Button</h3>
        <button onClick={handleToggle}>{toggle? "ON" :"OFF"}</button>
      
    </div>
  )
}


