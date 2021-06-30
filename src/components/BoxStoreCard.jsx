import React from 'react';
import { useModal } from '../hooks/useModal';
import Modals from './Modals';
// import HomeFrom from './HomeFrom';

const BoxStoreCard = ({ data, openForm, setDataToEdit, deleteData }) => {
  const [isOpenEye, openModalEye, closeModalEye] = useModal(false);
  const [isOpenDel, openModalDel, closeModalDel] = useModal(false);
  const { name, code, id } = data;

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
          Nombre: <span>{name}</span>
        </p>
        <p>
          ID: <span>{code}</span>
        </p>
      </div>
      <div className="boxProduct-icons">
        <i
          className="fas fa-edit"
          onClick={() => {
            openForm();
            setDataToEdit(data);
          }}
        />

        <i className="fas fa-trash" onClick={openModalDel}></i>
        <Modals
          isOpen={isOpenDel}
          closeModal={closeModalDel}
          deleteData={deleteData}
          id={id}
          nameButton={'delete'}
        >
          <p>¿Desea eliminar el Producto?</p>
        </Modals>
      </div>
    </div>
  );
};

export default BoxStoreCard;
