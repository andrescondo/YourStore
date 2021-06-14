import React from 'react';

import '../styles/components/Modals.css';

import Modal from './Modal';

const Modals = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h3>¿Desea crear un nuevo Producto?</h3>
    </Modal>
  );
};

export default Modals;
