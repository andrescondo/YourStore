import React from 'react';

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}

        <div className="modal-button">
          <button className="modal-save">Guardar</button>
          <button className=" modal-cancel" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
