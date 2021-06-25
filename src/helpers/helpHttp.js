export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    //los header por defecto al momento de realizar la peticion
    const defaultHeader = {
      accept: 'application/json',
    };
    //en caso de que no responda abortar la opeacion
    const controller = new AbortController();
    options.signal = controller.signal;

    //si no trae por defecto los metodos, se le asigna GET
    options.method = options.method || 'GET';

    options.headers = options.headers
      ? //si no trae datos en la cabecera le asigna, los de por defecto, mas el get
        { ...defaultHeader, ...options.headers }
      : //si trae solo le asigna los valores por defecto
        defaultHeader;

    //en caso de que no traiga body se le asigna falso
    options.body = JSON.stringify(options.body) || false;
    //si es falto las option.body lo elimina para no entregar nada
    if (!options.body) delete options.body;

    // console.log(options.body);
    //si pasa mas de 3s aborta la operacion
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurrió un error',
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
