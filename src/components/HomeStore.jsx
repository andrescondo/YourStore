import React from 'react';

function Press() {
  alert('Hola');
}

const HomeStore = () => {
  return (
    <div className="boxStore">
      <div className="create">
        <input type="button" value="Crear Bodega" onClick={Press} />
      </div>
      <div className="createStore">
        <div className="boxStore">
          <div className="boxStore-info">
            <p>
              Nombre de bodega: <span>DFRTS</span>
            </p>
            <p>
              ID: <span>SF3FSD3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStore;
