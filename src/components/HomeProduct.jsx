import React from 'react';
// import { useState, useEffect } from 'react';

import '../styles/components/HomeProduct.css';

import Modals from './Modals';
import BoxProduct from './BoxProduct';
import HomeProductsFrom from './HomeProductsFrom';
// import { helpHttp } from "../helpers/helpHttp";
import { useModal } from '../hooks/useModal';

//Desde aqui llamar la API
const HomeProduct = () => {
  // const [] = useState(false)
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div className="HomeProduct">
      <div className="create">
        <input type="button" value="Crear Producto" onClick={openModal} />
      </div>
      <div className="boxCreate">
        <BoxProduct />
      </div>
      <Modals isOpen={isOpen} closeModal={closeModal}>
        <HomeProductsFrom></HomeProductsFrom>
      </Modals>
    </div>
  );
};

export default HomeProduct;
