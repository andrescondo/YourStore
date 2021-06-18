import React from 'react';

import '../styles/components/HomeFrom.css';
import '../styles/components/Modals.css';

import ModalButton from './ModalButton';

const HomeFrom = ({ title, name, code }) => {
  return (
    <div className="HomeProduct-form">
      <h3>{title}</h3>
      <form>
        <label htmlFor="name">
          <p>{name}</p>
          <input type="text" placeholder={name} />
        </label>
        <label htmlFor="code">
          <p>{code}</p>
          <input type="text" placeholder={code} />
        </label>
        <ModalButton />
      </form>
    </div>
  );
};

export default HomeFrom;
