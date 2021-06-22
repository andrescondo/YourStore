import React from 'react';
import HomeFrom from '../components/HomeFrom';

const NewData = ({ db }) => {
  console.log(db);
  return (
    <div className="NewData">
      <HomeFrom
        title="Crear producto"
        name="Ingrese nombre del producto"
        code="Ingrese código del producto"
      />
    </div>
  );
};

export default NewData;