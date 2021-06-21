import React, { useState } from 'react';

import '../styles/components/Home.css';

import HomeProduct from '../components/HomeProduct';
import HomeStore from '../components/HomeStore';

const Home = () => {
  let [view, setView] = useState('product');

  const click = (e) => {
    if (e.target.id === 'product') {
      console.log(e.target.id);
      setView(e.target.id);
    } else if (e.target.id === 'store') {
      setView(e.target.id);
    }
  };

  return (
    <div className="Home">
      <h2>Hola, Patrick</h2>

      <div className="Home-container">
        <nav className="Home-nav">
          <li>
            <p id="product" onClick={click}>
              {' '}
              Producto{' '}
            </p>
          </li>
          <li>
            <p id="store" onClick={click}>
              Bodega
            </p>
          </li>
        </nav>
        <div className="Home-box">
          {
            view === 'product' ? <HomeProduct /> : <HomeStore />
            //uso de if ternario para renderizado de componentes
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
