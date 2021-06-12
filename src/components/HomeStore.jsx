import React from 'react';

import '../styles/components/HomeStore.css';

function Press() {
  alert('Hola');
}

const HomeStore = () => {
  return (
    <div className="HomeStore">
      <div className="create">
        <input type="button" value="Crear Bodega" onClick={Press} />
      </div>
      <div className="createStore">
        <div className="boxStore">
          <div className="boxStore-icon">
            <i className="fas fa-eye"></i>
          </div>
          <div className="boxStore-info">
            <p>
              Nombre de bodega: <span>DFRTS</span>
            </p>
            <p>
              ID: <span>SF3FSD3</span>
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

export default HomeStore;
