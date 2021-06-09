import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/components/Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login-box" data-title="Aún en desarrollo">
        <h3>Iniciar Sesión </h3>
        <form method="post" target="_blank">
          <p>
            <label htmlFor="email">Correo</label>
          </p>
          <p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="correo@example.com"
            />
          </p>
          <p>
            <label htmlFor="password">Contraseña</label>
          </p>
          <p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
          </p>
          <p>
            <label>
              <input type="checkbox" name="terminos" id="terms" /> Acepto
              termimos y condiciones
            </label>
          </p>
          <a href="/">
            <p>Olvide mi contraseña</p>
          </a>
          {/* <input type="submit" value="Ingresar" /> */}
          <Link to="/home">Ingresar</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
