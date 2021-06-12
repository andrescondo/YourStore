import React from 'react';
// import { useState, useEffect } from 'react';

import '../styles/components/HomeProduct.css';

import Modals from './Modals';

import BoxProduct from './BoxProduct';
// import { helpHttp } from "../helpers/helpHttp";

//Desde aqui llamar la API
const HomeProduct = () => {
  return (
    <div className="HomeProduct">
      <div className="create">
        <input type="button" value="Crear Producto" />
      </div>
      <div className="boxCreate">
        <BoxProduct />
      </div>
      <Modals />
    </div>
  );
};

export default HomeProduct;
