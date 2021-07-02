import React from 'react';
// import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';

const BoxProductPlus = ({ handleSubmit, product, data }) => {
  const addToStore = () => {
    //
  };

  return (
    <>
      <h3>Agregar a Bodega</h3>
      <div>
        <p>Eliga la bodega a la que ingresar</p>
        <p>Item: {data.name}</p>

        <form onSubmit={handleSubmit} name={'formAddToStore'}>
          {product.map((product) => (
            <label htmlFor={product.name} key={product.id}>
              <p>{product.name}</p>
            </label>
          ))}
          {/* {console.log()} */}
          <input type="button" value="Enviar" onClick={addToStore} />
        </form>
      </div>
    </>
  );
};

export default BoxProductPlus;
