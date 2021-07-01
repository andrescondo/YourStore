import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export default function useAddStore(urlProduct) {
  const [product, setProduct] = useState([]); //addStore

  useEffect(() => {
    //addStore
    helpHttp()
      .get(urlProduct)
      .then((res) => {
        if (!res.err) {
          setProduct(res);
        } else {
          setProduct(null);
        }
      });
  }, []);
  return { product };
}
