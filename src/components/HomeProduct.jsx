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

  return (
    <div className="HomeProduct">
      <div className="create">
        <input type="button" value="Crear Producto" onClick={openModal} />
      </div>
      <div className="boxCreate">{/* <BoxProduct /> */}</div>
      <Modals isOpen={isOpen} closeModal={closeModal}>
        <HomeFrom
          title="Crear producto"
          name="Ingrese nombre del producto"
          code="Ingrese código del producto"
        ></HomeFrom>
      </Modals>
    </div>
  );
};

export default HomeProduct;
