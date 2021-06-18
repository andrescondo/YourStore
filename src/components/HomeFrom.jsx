import React, { useState } from 'react';

import '../styles/components/HomeFrom.css';

import ModalButton from './ModalButton';

const initialForm = {
  name: '',
  code: '',
  id: null,
};

const HomeFrom = ({ title, name, code }) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="HomeProduct-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>{name}</p>
          <input
            type="text"
            placeholder={name}
            onChange={handleChange}
            value={form.name}
          />
        </label>
        <label htmlFor="code">
          <p>{code}</p>
          <input
            type="text"
            placeholder={code}
            onChange={handleChange}
            value={form.code}
          />
        </label>
        <ModalButton />
      </form>
    </div>
  );
};

export default HomeFrom;
