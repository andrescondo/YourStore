import React from 'react';

const BoxProductPlus = ({ handleSubmit, product, data }) => {
  return (
    <>
      <h3>Agregar a Bodega</h3>
      <div>
        <p>Eliga la bodega a la que ingresar</p>
        <p>Item: {data.name}</p>
        <form onSubmit={handleSubmit}>
          {product.map((product) => (
            <label htmlFor={product.name} key={product.id}>
              <input
                type="radio"
                name="addStore"
                // id={product.name}
                value={product.name}
              />
              {product.name}
            </label>
          ))}
          {/* <input type="submit" value="Enviar" /> */}
        </form>
      </div>
    </>
  );
};

export default BoxProductPlus;
