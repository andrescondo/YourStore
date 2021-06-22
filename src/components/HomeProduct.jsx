import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import '../styles/components/HomeProduct.css';

import BoxProduct from './BoxProduct';
import HomeFrom from './HomeFrom';
// import { helpHttp } from "../helpers/helpHttp";

const intitialDbProduct = [
  {
    id: 1,
    name: 'Coca cola',
    code: 'ADSFSD',
  },
  {
    id: 2,
    name: 'Big cola',
    code: 'DSFNDG',
  },
  {
    id: 3,
    name: 'KFC',
    code: 'DGDFGD',
  },
];

const HomeProduct = () => {
  const [db, setDb] = useState(intitialDbProduct);
  const [formState, setFormState] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {};

  const updateData = (data) => {};

  const deleteData = (id) => {};

  const openForm = () => {
    setFormState(!formState);
    console.log(formState);
  };

  return (
    <div className="HomeProduct">
      <div className="create">
        <input type="button" value="Crear Producto" onClick={openForm} />
      </div>
      {formState ? (
        <HomeFrom
          title="Crear producto"
          name="Ingrese nombre del producto"
          code="Ingrese código del producto"
        />
      ) : (
        ''
      )}

      <div className="boxCreate">
        {/* <BoxProduct /> llamamiento de datos de manera directa */}
        {
          db.length === 0 ? (
            <p>No hay datos</p>
          ) : (
            db.map((data) => (
              <BoxProduct
                data={data}
                key={data.id}
                createData={createData}
                updateData={updateData}
                deleteData={deleteData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) /*llamamiento de datos de manera dinamica*/
        }
      </div>
    </div>
  );
};

export default HomeProduct;
