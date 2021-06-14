import React from 'react';

import '../styles/components/Modals.css';

import Modal from './Modal';

const Modals = ({ children, isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {children}
    </Modal>
  );
};

export default Modals;
