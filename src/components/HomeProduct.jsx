import React from 'react';
import useCrudData from '../hooks/useCrudData';
import useAddStore from '../hooks/useAddStore';

import '../styles/components/HomeProduct.css';

import BoxProduct from './BoxProduct';
import HomeFrom from './HomeFrom';
import LoadingData from './LoadingData';
import ErrorData from './ErrorData';

const HomeProduct = () => {
  const url = 'http://localhost:3004/producs';
  //asegurarse  ^^ el protocolo debe ser el correcto
  const urlProduct = 'http://localhost:3004/store'; //addStore
  // console.log(product);
  const { product } = useAddStore(urlProduct); //CUSTOM HOOK PARA EL ADDSTORE
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
  console.log(db);

  return (
    <div className="HomeProduct">
      <div className="create">
        {db === null ? (
          <input
            id="create"
            type="button"
            value={!formState ? 'Crear Producto' : 'Cancelar'}
            onClick={openForm}
          />
        ) : (
          <input
            id="create"
            type="button"
            value={'Crear Producto'}
            onClick={() => {
              alert(
                'Una disculpa, el servidor esta caido, por eso no puedes hacer esta acción'
              );
            }}
            // disabled
          />
        )}
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
            product={product}
          />
        )}
      </div>
      {loading && <LoadingData />}
    </div>
  );
};

export default HomeProduct;
