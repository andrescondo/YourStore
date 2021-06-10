import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h2>Hola, Patrick</h2>

      <div className="Home-container">
        <nav className="Home-nav">
          <li>
            <Link to="/home/product">Producto</Link>
          </li>
          <li>
            <Link to="/home/store">Bodega</Link>
          </li>
        </nav>
        <div className="Home-box"></div>
      </div>
    </div>
  );
};

export default Home;
