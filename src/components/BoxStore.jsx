import React from 'react';

import { useModal } from '../hooks/useModal';
import Modals from './Modals';
import HomeFrom from './HomeFrom';

const BoxStore = () => {
  const [isOpenEye, openModalEye, closeModalEye] = useModal(false);
  const [isOpenDel, openModalDel, closeModalDel] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModal(false);

  return (
    <div className="boxStore">
      <div className="boxStore-icon">
        <i className="fas fa-eye" onClick={openModalEye}></i>
        <Modals isOpen={isOpenEye} closeModal={closeModalEye}>
          <div>
            <p> Mira los Productos guardados en esta Bodega: </p>
          </div>
        </Modals>
      </div>
      <div className="boxStore-info">
        <p>
          Nombre de bodega: <span>DFRTS</span>
        </p>
        <p>
          ID: <span>SF3FSD3</span>
        </p>
      </div>
      <div className="boxProduct-icons">
        <i className="fas fa-edit" onClick={openModalEdit}></i>
        <Modals isOpen={isOpenEdit} closeModal={closeModalEdit}>
          <HomeFrom
            title="Editar Bodega"
            name="Ingrese nombre de Bodega"
            code="Ingrese código Bodega"
          ></HomeFrom>
        </Modals>
        <i className="fas fa-trash" onClick={openModalDel}></i>
        <Modals isOpen={isOpenDel} closeModal={closeModalDel}>
          <p>¿Desea eliminar Bodega?</p>
        </Modals>
      </div>
    </div>
  );
};

export default BoxStore;
