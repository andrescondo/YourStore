import React, { useState } from 'react';

import '../styles/components/HomeFrom.css';

// import ModalButton from './ModalButton';

const initialForm = {
  name: '',
  code: '',
  id: null,
};

const HomeFrom = ({ titleForm, nameForm, codeForm }) => {
  const [form, setForm] = useState(initialForm);
  const n = nameForm,
    c = codeForm;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nameForm || !form.codeFrom) {
      alert('Esta vacio');
      return;
    }
  };

  return (
    <div className="HomeProduct-form">
      <h3>{titleForm}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>{n}</p>
          <input
            type="text"
            name="name"
            placeholder={n}
            onChange={handleChange}
            value={form.name} //algo
          />
        </label>
        <label htmlFor="code">
          <p>{c}</p>
          <input
            type="text"
            name="code"
            placeholder={c}
            onChange={handleChange}
            value={form.code} //algo
          />
        </label>
        <div className="Form-button">
          <input type="submit" value="Guardar" />
          {/* <input type="submit" value="Cancelar" /> */}
        </div>
      </form>
    </div>
  );
};

export default HomeFrom;
