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
        <div className="boxProduct" id="hola">
          <figure>
            <div className="boxProduct-icon">
              <i className="fas fa-plus"></i>
            </div>
            <img src={imageDefault} alt="imagen por defecto" />
          </figure>
          <div className="boxProduct-info">
            <p>
              Nombre: <span>Coca cola FDFSDF</span>
            </p>
            <p>
              Código: <span>SAD3FS3</span>
            </p>
          </div>
          <div className="boxProduct-icons">
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
