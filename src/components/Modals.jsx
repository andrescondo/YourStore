import React from 'react';

import '../styles/components/Modals.css';

import Modal from './Modal';

const Modals = ({
  children,
  isOpen,
  closeModal,
  deleteData,
  id,
  nameButton,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      deleteData={deleteData}
      id={id}
      nameButton={nameButton}
    >
      <div className="modal-box">{children}</div>
    </Modal>
  );
};

export default Modals;
