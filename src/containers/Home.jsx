import React, { useState } from 'react';

import '../styles/components/Home.css';

import HomeProduct from '../components/HomeProduct';
import HomeStore from '../components/HomeStore';

const Home = () => {
  let [view, setView] = useState('product');

  const click = (e) => {
    const p = document.querySelector(`#product`);
    let s = document.querySelector('#store');

    if (e.target.id === 'product') {
      // console.log(e.target.id);
      setView(e.target.id);
      s.classList.remove('selected');
      p.classList.add('selected');
    } else if (e.target.id === 'store') {
      setView(e.target.id);
      p.classList.remove('selected');
      s.classList.add('selected');
    }
  };

  return (
    <div className="Home">
      <h2>Hola, Andres</h2>

      <div className="Home-container">
        <nav className="Home-nav">
          {/* Ver si usando input tipo buton funciona mejor */}
          <li
            className="Home-nav__option selected"
            id="product"
            onClick={click}
          >
            {' '}
            Producto{' '}
          </li>
          <li className="Home-nav__option" id="store" onClick={click}>
            Bodega
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
