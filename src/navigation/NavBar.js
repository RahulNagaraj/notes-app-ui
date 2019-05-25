import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/counter">Counter</Link>
    </ul>
  </div>
);

export default NavBar;
