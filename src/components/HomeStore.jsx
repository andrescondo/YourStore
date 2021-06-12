import React from 'react';

import '../styles/components/HomeStore.css';

import BoxStore from './BoxStore';

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
        <BoxStore />
      </div>
    </div>
  );
};

export default HomeStore;
