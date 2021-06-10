import React from 'react';

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
        <div className="boxProdcut">
          <p>Nombre</p>
          <p>Código</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
