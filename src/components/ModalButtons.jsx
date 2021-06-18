import React from 'react';

import { useModal } from '../hooks/useModal';

const ModalButtons = () => {
  const [closeModal] = useModal(false);

  return (
    <div className="modal-bottom">
      <div className="modal-bottom__box">
        <button className="modal-save">Si, aceptar</button>
        <button className=" modal-cancel" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModalButtons;
