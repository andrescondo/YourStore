import React from 'react';
import BoxProductCard from './BoxProductCard';
import '../styles/components/HomeProduct.css';

const BoxProduct = ({ data, openForm, setDataToEdit, deleteData }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((data) => (
          <BoxProductCard
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

export default BoxProduct;
