import React from 'react';
import { useModal } from '../hooks/useModal';
import Modals from './Modals';
import HomeProductsFrom from './HomeFrom';

import imageDefault from '../img/default.png';

const BoxProduct = () => {
  const [isOpenPlus, openModalPlus, closeModalPlus] = useModal(false);
  const [isOpenDel, openModalDel, closeModalDel] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModal(false);

  return (
    <div className="boxProduct">
      <figure>
        <div className="boxProduct-icon">
          <i className="fas fa-plus" onClick={openModalPlus}></i>
          <Modals isOpen={isOpenPlus} closeModal={closeModalPlus}>
            <div className="boxProducts-modal">
              <h3>Agregar a Bodega</h3>
              <div>
                <p>Eliga la bodega a la que ingresar</p>
              </div>
            </div>
          </Modals>
        </div>
        <img src={imageDefault} alt="imagen por defecto" />
      </figure>
      <div className="boxProduct-info">
        <p>
          Nombre: <span>Coca cola FDFSDF</span>
        </p>
        <p>
          Código: <span>SAD3FS3</span>
        </p>
      </div>
      <div className="boxProduct-icons">
        <i className="fas fa-edit" onClick={openModalEdit}></i>
        <Modals isOpen={isOpenEdit} closeModal={closeModalEdit}>
          <HomeProductsFrom title="Editar Producto"></HomeProductsFrom>
        </Modals>
        <i className="fas fa-trash" onClick={openModalDel}></i>
        <Modals isOpen={isOpenDel} closeModal={closeModalDel}>
          <p>¿Desea eliminar el Producto?</p>
        </Modals>
      </div>
    </div>
  );
};

export default BoxProduct;
