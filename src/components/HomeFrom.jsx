import React from 'react';

import '../styles/components/HomeFrom.css';

const HomeProductsFrom = ({ title, name, code }) => {
  return (
    <div className="HomeProduct-form">
      <h3>{title}</h3>
      <label htmlFor="name">
        <p>{name}</p>
        <input type="text" placeholder={name} />
      </label>
      <label htmlFor="code">
        <p>{code}</p>
        <input type="text" placeholder={code} />
      </label>
    </div>
  );
};

export default HomeProductsFrom;
