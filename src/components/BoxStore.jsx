import React from 'react';

const BoxStore = () => {
  return (
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
  );
};

export default BoxStore;
