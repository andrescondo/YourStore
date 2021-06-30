import { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export default function useCrudData(url) {
  // const url = url;
  const [db, setDb] = useState([]);
  const [formState, setFormState] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateDb, setUpdateDb] = useState([]);

  const api = helpHttp();
  console.log(url);
  // const url = url;
  // const url = 'http://localhost:3004/products';MANDAR ESTE DATO DESDE EL COMPONENTE
  //asegurarse  ^^ que el protocolo sea el correcto

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        setLoading(true);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [updateDb]); // eslint-disable-line react-hooks/exhaustive-deps
  //  ^^^ Importante, se usa este hooks de estado para actualizar el effect,
  //cambia de valor siempre que se actualice o cree un nuevo dato,
  //permitiendo asi renderizar los componentes nuevos

  const createData = (data) => {
    data.id = `${db.length + 1}-${Date.now()}`; //id que para los elementos creados
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

  return {
    db,
    deleteData,
    loading,
    formState,
    openForm,
    updateData,
    createData,
    dataToEdit,
    setDataToEdit,
    error,
  };
}
