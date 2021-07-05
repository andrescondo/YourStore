import React from 'react';

const BoxProductPlus = ({ data }) => {
  const addToStore = () => {
    //
  };

  return (
    <>
      <h4>Agregar a Bodega</h4>
      <div>
        <p>Lista de Productos:</p>

        {data.map((data) => (
          <label htmlFor={data.name} key={data.id}>
            <p>{data.name}</p>
          </label>
        ))}
        {/* {console.log()} */}
        {/* <input type="button" value="Enviar" onClick={addToStore} /> */}
      </div>
    </>
  );
};

export default BoxProductPlus;
