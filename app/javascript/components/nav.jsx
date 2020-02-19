import React from 'react';
import placeItLogo from '../images/placeit_logo';
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className="navbar col-4">
    <div className="navbar-brand">
      <img src={placeItLogo} width="150" className="d-inline-block align-top" alt="" />
    </div>
    <br></br>
    <ul>
      <li><Link to="/">Peliculas</Link></li>
      <li><Link to="reservas">Reservas</Link></li>
    </ul>
  </nav>
);

export default Nav;
