import React, { Children } from 'react';

import '../styles/components/Modals.css';

import Modal from './Modal';

const Modals = ({ children }) => {
  return (
    <Modal>
      <h3>¿Desea crear un nuevo Producto?</h3>
    </Modal>
  );
};

export default Modals;
