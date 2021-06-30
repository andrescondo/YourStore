import React from 'react';
import useCrudData from '../hooks/useCrudData';

import '../styles/components/HomeProduct.css';

import BoxProduct from './BoxProduct';
import HomeFrom from './HomeFrom';
import LoadingData from './LoadingData';
import ErrorData from './ErrorData';

const HomeProduct = () => {
  const url = 'http://localhost:3004/products';
  //asegurarse  ^^ el protocolo debe ser el correcto

  const {
    db,
    deleteData,
    loading,
    formState,
    openForm,
    updateData,
    createData,
    dataToEdit,
    setDataToEdit,
    error,
  } = useCrudData(url); //CUSTOM HOOK para fecth data

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
        {error && (
          <ErrorData msg={`Error ${error.status}: ${error.statusText}`} />
        )}
        {db && (
          <BoxProduct
            data={db}
            key={db.id}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            openForm={openForm}
          />
        )}
      </div>
      {loading && <LoadingData />}
    </div>
  );
};

export default HomeProduct;
