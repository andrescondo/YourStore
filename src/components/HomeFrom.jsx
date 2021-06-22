import React, { useState } from 'react';

import '../styles/components/HomeFrom.css';

// import ModalButton from './ModalButton';

const initialForm = {
  name: '',
  code: '',
  id: null,
};

const HomeFrom = ({
  title,
  name,
  code,
  createData,
  updateData,
  deleteData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);
  // console.log();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target]: e.target.value,
    });
    // console.log(form.name.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.code) {
      alert('Esta vacio');
      return;
    }
  };

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
            // value={} //aun en desarrollo
          />
        </label>
        <label htmlFor="code">
          <p>{code}</p>
          <input
            type="text"
            placeholder={code}
            onChange={handleChange}
            // value={form.code} aun en desarrollo
          />
        </label>
        {/* <ModalButton /> */}
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default HomeFrom;
