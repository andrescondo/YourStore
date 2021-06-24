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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  //asegurarse que el protocolo sea el correcto
  const url = 'http://localhost:3004/products';

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
      } else {
        setDb(null);
      }
    });
    setLoading(false);
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    console.log(Date.now());
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

        {loading && <LoadingData />}
        {db ? (
          db.length === 0 ? (
            <p>Sin datos</p>
          ) : (
            /*llamamiento de datos de manera dinamica*/
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
        )}
      </div>
    </div>
  );
};

export default HomeProduct;
