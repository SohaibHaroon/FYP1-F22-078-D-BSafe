import React from 'react'
import logo from "./bsafe_logo.png"
import seacrh_icon from "./searchIcon.png"
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
    <nav >
      <div className='box'>
       <img className="logo" src={logo}></img>
      <input type="text" placeholder='Search here..'/>
      <button type='submit'><img className="searchLogo" src={seacrh_icon}/></button>
      </div>
    </nav>
    </div>
  );
}

export default Navbar
