import React from 'react';

import imageDefault from '../img/default.png';

import '../styles/components/HomeProduct.css';

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
        <div className="boxProduct">
          <figure>
            <img src={imageDefault} alt="imagen por defecto" />
          </figure>
          <div className="boxProduct-info">
            <p>Nombre</p>
            <p>Código</p>
          </div>
          <div className="boxProduct-icons">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
