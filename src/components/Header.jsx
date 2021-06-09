import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>Your Store</h1>
      </div>
      <div className="Header-nav">
        <nav className="Header-nav__help">
          <li>
            {/* Redirecion a pantalla de iniciar sesion */}
            <Link to="/login">Login</Link>
          </li>
          <li>
            {/* Redirecion a pantalla de registrarse */}
            <Link to="signup">Sign Up</Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
