import React, { useEffect, useState } from 'react';

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

  //servira para actualizar cada que cambie el estado de dataToEdit
  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : setForm(initialForm);
    //si datatoedit cambia este valor se reflejara en el formulario
    //cuando se de actualizar
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.code) {
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
          <p>{nameForm}</p>
          <input
            type="text"
            name="name"
            placeholder={nameForm}
            onChange={handleChange}
            value={form.name} //algo
          />
        </label>
        <label htmlFor="code">
          <p>{codeForm}</p>
          <input
            type="text"
            name="code"
            placeholder={codeForm}
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
