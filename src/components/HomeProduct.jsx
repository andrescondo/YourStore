import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

import '../styles/components/HomeProduct.css';

import BoxProduct from './BoxProduct';
import HomeFrom from './HomeFrom';
import LoadingData from './LoadingData';
import ErrorData from './ErrorData';

const HomeProduct = () => {
  const [db, setDb] = useState([]);
  const [formState, setFormState] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateDb, setUpdateDb] = useState([]);
  // const [updateDb, setUpdateDb] = useState([]);

  const api = helpHttp();
  const url = 'http://localhost:3004/products';
  //asegurarse  ^^ que el protocolo sea el correcto

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        setLoading(true);
        if (!res.err) {
          setDb(res);
          setError(null);
          // setUpdateDb(!updateDb);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
        console.log(res.length);
        // console.log(res.length + 1);
      });
    // setUpdateDb(!updateDb);
  }, [updateDb]);
  //  ^^^ Importante, se usa este hooks de estado para actualizar el effect,
  //cambia de valor siempre que se actualice o cree un nuevo dato,
  //permitiendo asi renderizar los componentes nuevos

  const createData = (data) => {
    data.id = `${db.length + 1}-${Date.now()}`;
    // data.id = db.length + 1+ Date.now();
    // console.log(db.length + 1);
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb(...db, res);
        setUpdateDb(res);
        // renderiza los elementos una vez creados
        //NOTA: optimizar en el networks mas adelante
      } else {
        console.log(res.err);
      }
    });
    // setUpdateDb(false);
    // setDb([...db, data]);
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((d) => (d.id === data.id ? data : d));
        setDb(newData);
        // setDb(...db, res);
        setUpdateDb(newData);
        // renderiza los elementos una vez creados
        //NOTA: optimizar en el networks mas adelante
      } else {
        console.log(res.err);
      }
    });
  };

  const deleteData = (id) => {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { 'content-type': 'application/json' },
    };
    api.del(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        setError(res);
      }
    });
    //se usa el click del modal para validar si quiere eliminar o no
  };

  const openForm = () => {
    setFormState(!formState);
    // console.log(formState);
  };

  return (
    <div className="HomeProduct">
      <div className="create">
        <input
          type="button"
          value={!formState ? 'Crear Producto' : 'Cancelar'}
          onClick={openForm}
        />
      </div>
      {formState ? (
        <HomeFrom
          nameForm="Ingrese nombre del producto"
          codeForm="Ingrese código del producto"
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          openForm={openForm}
        />
      ) : (
        ''
      )}

      <div className="boxCreate">
        {error && (
          <ErrorData msg={`Error ${error.status}: ${error.statusText}`} />
        )}
        {/* <BoxProduct /> llamamiento de datos de manera directa */}
        {db && (
          <BoxProduct
            data={db}
            key={db.id}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            openForm={openForm}
          />
        )}
      </div>
      {loading && <LoadingData />}
    </div>
  );
};

export default HomeProduct;
