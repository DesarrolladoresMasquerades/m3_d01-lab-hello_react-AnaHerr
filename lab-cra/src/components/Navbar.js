import React from 'react';
import logo from "../images/logoIron.png"
import menu from "../images/menutop.png"


function Navbar() {
    return (
        <div>
      <nav className='navbar'>
        <img
          id="nav-img2"
          src={menu}
          alt="menu"
        />
        <img
          id="nav-img1"
          src={logo}
          alt="logo-iron"
        />
      </nav>
      </div>
    );
  }
  
  export default Navbar;