import React, { useState } from 'react';

import '../styles/components/HomeProduct.css';

import Modals from './Modals';
import BoxProduct from './BoxProduct';
import HomeFrom from './HomeFrom';
// import { helpHttp } from "../helpers/helpHttp";
import { useModal } from '../hooks/useModal';

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
  const [isOpen, openModal, closeModal] = useModal(false);

  const [db, setDb] = useState(intitialDbProduct);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {};

  const updateData = (data) => {};

  const deleteData = (id) => {};

  return (
    <div className="HomeProduct">
      <div className="create">
        <input type="button" value="Crear Producto" onClick={openModal} />
      </div>
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
      <Modals isOpen={isOpen} closeModal={closeModal}>
        <HomeFrom
          title="Crear producto"
          name="Ingrese nombre del producto"
          code="Ingrese código del producto"
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        ></HomeFrom>
      </Modals>
    </div>
  );
};

export default HomeProduct;
