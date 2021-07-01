import React from 'react';
import BoxProductCard from './BoxProductCard';
import '../styles/components/HomeProduct.css';

const BoxProduct = ({ data, openForm, setDataToEdit, deleteData, product }) => {
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
            product={product}
          />
        ))
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};

export default BoxProduct;
