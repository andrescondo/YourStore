import React from 'react';

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
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
