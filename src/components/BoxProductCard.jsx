import React from 'react';
import { useModal } from '../hooks/useModal';
import Modals from './Modals';
import BoxProductPlus from './BoxProductsPlus';
import '../styles/components/HomeProduct.css';

import imageDefault from '../img/default.png';

const BoxProductCard = ({ data, openForm, setDataToEdit, deleteData }) => {
  // const [isOpenPlus, openModalPlus, closeModalPlus] = useModal(false);
  const [isOpenDel, openModalDel, closeModalDel] = useModal(false);
  const { name, code, id } = data;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.name);
  //   alert('Si funciona');
  // };

  return (
    //usar este como componente hijo de boxproduct, y aqui recien hacer el map()
    <div className="boxProduct">
      <figure>
        <div className="boxProduct-icon">
          {/* =============================== */}
          {/* <i className="fas fa-plus" onClick={openModalPlus}></i>
          <Modals
            isOpen={isOpenPlus}
            closeModal={closeModalPlus}
            nameButton={'addStore'}
          >
            <div className="boxProducts-modal">
              <BoxProductPlus
                //BOTON PARA AÑADIR A UN STORE
                handleSubmit={handleSubmit}
                data={data}
                product={product}
              />
            </div>
          </Modals> */}
        </div>
        {/* ============================= */}

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
