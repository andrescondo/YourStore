import React, { useState } from 'react';

import '../styles/components/HomeFrom.css';

// import ModalButton from './ModalButton';

const initialForm = {
  name: '',
  code: '',
  id: null,
};

const HomeFrom = ({
  titleForm,
  nameForm,
  codeForm,
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  openForm,
}) => {
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

    form.id === null ? createData(form) : updateData(form);

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
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
          <input type="reset" value="Borrar Todo" onClick={handleReset} />

          {/* <input type="submit" value="Cancelar" /> */}
        </div>
      </form>
    </div>
  );
};

export default HomeFrom;
