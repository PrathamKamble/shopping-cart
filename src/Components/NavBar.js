import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h3>Shopping Cart</h3>
      <div>
        <NavLink to='/'>Home Page</NavLink>
        <NavLink to='/cart'>Cart Page</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;