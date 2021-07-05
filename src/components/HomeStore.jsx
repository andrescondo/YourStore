import React from 'react';

import '../styles/components/HomeStore.css';

import useCrudData from '../hooks/useCrudData';
import useAddStore from '../hooks/useAddStore';
import BoxStore from './BoxStore';
import HomeFrom from './HomeFrom';
import LoadingData from './LoadingData';
import ErrorData from './ErrorData';

const HomeStore = () => {
  // const [isOpen, openModal, closeModal] = useModal(false);
  const url = 'http://localhost:3004/store';
  const urlProduct = 'http://localhost:3004/products'; //addStore
  const { product } = useAddStore(urlProduct); //CUSTOM HOOK PARA EL ADDSTORE

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
    <div className="HomeStore">
      <div className="create">
        {/* {!db === null ? ( */}
        <input
          id="create"
          type="button"
          value={!formState ? 'Crear Bodega' : 'Cancelar'}
          onClick={openForm}
        />
      </div>
      {formState ? (
        <HomeFrom
          data={product}
          nameForm="Ingrese nombre de la bodega"
          codeForm="Ingrese código de la bodega"
          typeForm="Bodega"
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          openForm={openForm}
        />
      ) : (
        ''
      )}
      <div className="createStore">
        {error && (
          <ErrorData msg={`Error ${error.status}: ${error.statusText}`} />
        )}
        {db && (
          <BoxStore
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

export default HomeStore;
