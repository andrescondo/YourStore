import React from 'react';

import '../styles/components/HomeFrom.css';

const HomeProductsFrom = ({ title }) => {
  return (
    <div className="HomeProduct-form">
      <h3>{title}</h3>
      <label htmlFor="name">
        <p>Nombre del producto</p>
        <input type="text" placeholder="Nombre del producto" />
      </label>
      <label htmlFor="code">
        <p>Ingrese codigo del producto</p>
        <input type="text" placeholder="Ingrese codigo del producto" />
      </label>
    </div>
  );
};

export default HomeProductsFrom;
