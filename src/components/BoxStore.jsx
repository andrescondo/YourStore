import React from 'react';

import '../styles/components/HomeStore.css';

import BoxStoreCard from './BoxStoreCard';

const BoxStore = ({ data, openForm, setDataToEdit, deleteData }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((data) => (
          <BoxStoreCard
            data={data}
            key={data.id}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            openForm={openForm}
          />
        ))
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};

export default BoxStore;
