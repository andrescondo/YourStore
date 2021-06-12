import React from 'react';

import '../styles/components/HomeProduct.css';

import BoxProduct from './BoxProduct';

function Press() {
  alert('Hola');
}

const HomeProduct = () => {
  return (
    <div className="HomeProduct">
      <div className="create">
        <input type="button" value="Crear Producto" onClick={Press} />
      </div>
      <div className="boxCreate">
        <BoxProduct />
      </div>
    </div>
  );
};

export default HomeProduct;
