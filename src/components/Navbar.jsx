import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-byeclope.webp'; // image png passée en webP pour optimiser la performance

function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo ByeClope"
            width="50"
            height="50"
            loading="lazy" // ✅ lazy loading
          />
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/alternatives">Les alternatives au tabac</NavLink>
        <NavLink to="/pourquoi">Pourquoi arrêter</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
