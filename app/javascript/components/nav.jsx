import React from 'react';
import placeItLogo from '../images/placeit_logo';

const Nav = () => (
  <nav className="navbar col-4">
    <div className="navbar-brand">
      <img src={placeItLogo} width="150" className="d-inline-block align-top" alt="" />
    </div>
    <br></br>
    <ul>
      <li>Reservas</li>
      <li>Peliculas</li>
    </ul>
  </nav>
);

export default Nav;
