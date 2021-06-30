import React from 'react';

const Modal = ({
  children,
  isOpen,
  closeModal,
  deleteData,
  id,
  nameButton,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  const action = () => {
    if (nameButton === 'delete') {
      deleteData(id);
    }
  };

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <div className="modal-top">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
        </div>

        {children}

        <div className="modal-bottom">
          <div className="modal-bottom__box">
            <button className="modal-save" onClick={action}>
              Si, aceptar
            </button>
            <button type="text" className=" modal-cancel" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Modal;
