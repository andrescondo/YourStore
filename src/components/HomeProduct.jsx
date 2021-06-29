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

  const api = helpHttp();
  //asegurarse que el protocolo sea el correcto
  const url = 'http://localhost:3004/products';

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        setLoading(true);
        if (!res.err) {
          setDb(res);
        } else {
          setDb(null);
        }
        setLoading(false);
        console.log(res.length + 1);
      });
  }, []);

  const createData = (data) => {
    data.id = db.length + 1;
    console.log(db.length + 1);
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb(...db, res);
      } else {
        console.log(res.err);
      }
    });
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((d) => (d.id === data.id ? data : d));
    setDb(newData);
  };

  const deleteData = (id) => {
    //se usa el click del modal para validar si quiere eliminar o no
    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
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
        {/* {db ? (
          db.length === 0 ? (
            <div>
              <p>Sin datos</p>

              {/* {loading && <LoadingData /> /*loader} }
            </div>
          ) : (
            /*llamamiento de datos de manera dinamica
            db.map((data) => (
              <BoxProduct
                data={data}
                key={data.id}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                openForm={openForm}
              />
            ))
          )
        ) : (
          <ErrorData />
        )} */}
      </div>
      {loading && <LoadingData />}
    </div>
  );
};

export default HomeProduct;
