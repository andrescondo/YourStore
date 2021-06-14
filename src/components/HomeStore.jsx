import React from 'react';

import '../styles/components/HomeStore.css';

import BoxStore from './BoxStore';
import Modals from './Modals';
import HomeFrom from './HomeFrom';
import { useModal } from '../hooks/useModal';

const HomeStore = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div className="HomeStore">
      <div className="create">
        <input type="button" value="Crear Bodega" onClick={openModal} />
        <Modals isOpen={isOpen} closeModal={closeModal}>
          <HomeFrom
            title="Crear Bodega"
            name="Ingrese nombre de la bodega"
            code="Ingrese código de la bodega"
          ></HomeFrom>
        </Modals>
      </div>
      <div className="createStore">
        <BoxStore />
      </div>
    </div>
  );
};

export default HomeStore;
