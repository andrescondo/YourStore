import React from 'react';

// por el momento es un getByTitle, cambiar
// import loader from '../img/loader.gif';

const Loader = () => {
  return (
    <div className="Loader">
      <img src={loader} alt="Loadder" />
    </div>
  );
};

export default Loader;
