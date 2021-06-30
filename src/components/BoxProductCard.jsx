import React from 'react';
import { useModal } from '../hooks/useModal';
import Modals from './Modals';
import '../styles/components/HomeProduct.css';

import imageDefault from '../img/default.png';

const BoxProductCard = ({ data, openForm, setDataToEdit, deleteData }) => {
  const [isOpenPlus, openModalPlus, closeModalPlus] = useModal(false);
  const [isOpenDel, openModalDel, closeModalDel] = useModal(false);
  const { name, code, id } = data;
  // console.log(name);

  return (
    //usar este como componente hijo de boxproduct, y aqui recien hacer el map()
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
          Nombre: <span>{name}</span>
        </p>
        <p>
          Código: <span>{code}</span>
        </p>
      </div>
      <div className="boxProduct-icons">
        <i
          className="fas fa-edit"
          onClick={() => {
            openForm();
            setDataToEdit(data);
          }}
        ></i>

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

export default BoxProductCard;
