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

  const createData = (data) => {
    data.id = Date.now();
    console.log(Date.now());
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((d) => (d.id === data.id ? data : d));
    setDb(newData);
  };

  const deleteData = (id) => {};

  const openForm = () => {
    setFormState(!formState);
    // console.log(formState);
  };

  return (
    <div className="HomeProduct">
      <div className="create">
        <input
          type="button"
          value={!formState ? 'Crear Producto' : 'Cancelar'}
          onClick={openForm}
        />
      </div>
      {formState ? (
        <HomeFrom
          titleForm="Crear producto"
          nameForm="Ingrese nombre del producto"
          codeForm="Ingrese código del producto"
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          openForm={openForm}
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
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                openForm={openForm}
              />
            ))
          ) /*llamamiento de datos de manera dinamica*/
        }
      </div>
    </div>
  );
};

export default HomeProduct;
