import React from 'react';

const Modal = ({ children }) => {
  return (
    <article className="modal is-open">
      <div className="modal-container">
        <button className="modal-close">x</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
