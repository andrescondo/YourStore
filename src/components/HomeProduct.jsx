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
          <p>Nombre</p>
          <p>Código</p>
        </div>
        <div className="boxProduct">
          <figure>
            <img src={imageDefault} alt="imagen por defecto" />
          </figure>
          <p>Nombre</p>
          <p>Código</p>
        </div>
        <div className="boxProduct">
          <figure>
            <img src={imageDefault} alt="imagen por defecto" />
          </figure>
          <p>Nombre</p>
          <p>Código</p>
        </div>
        <div className="boxProduct">
          <figure>
            <img src={imageDefault} alt="imagen por defecto" />
          </figure>
          <p>Nombre</p>
          <p>Código</p>
        </div>
        <div className="boxProduct">
          <figure>
            <img src={imageDefault} alt="imagen por defecto" />
          </figure>
          <p>Nombre</p>
          <p>Código</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
