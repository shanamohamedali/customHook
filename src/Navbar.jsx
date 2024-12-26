import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
           
            <li>
                <Link to="/">Toggle</Link>
            </li>
            <li>
                <Link to="/local-storage">LocalStorage Example</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
