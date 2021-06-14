import React from 'react';

import '../styles/components/SignUp.css';

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-box" data-title="Aún en desarrollo">
        <h3>Crear Cuenta</h3>
        <form action="signup" method="post">
          <p>
            <label htmlFor="nickname">Ingrese un nombre de usuario</label>
          </p>
          <p>
            <input type="text" placeholder="Nombre de usuario" />
          </p>
          <p>
            <label htmlFor="email">Ingrese un Correo</label>
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
            <label htmlFor="password">Ingrese una Contraseña</label>
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
            <label htmlFor="password-two">Ingrese Contraseña Nuevamente</label>
          </p>
          <p>
            <input
              type="password"
              name="password-two"
              id="password-two"
              placeholder="Contraseña nuevamente"
            />
          </p>
          <p>
            <label htmlFor="country-signup">
              {' '}
              Pais:
              <br />
              <select name="country" id="country-signup">
                <option value="Ecuador"> Ecuador</option>
                <option value="Colombia"> Colombia</option>
              </select>
            </label>
          </p>
          <p>
            Genero: <br />
            <label htmlFor="hombre">
              <input type="radio" value="hombre" name="gener" id="hombre" />
              Hombre
            </label>
            <label htmlFor="mujer">
              <input type="radio" value="mujer" name="gener" id="mujer" />
              Mujer
            </label>
            <label htmlFor="noBinario">
              <input
                type="radio"
                value="noBinario"
                name="gener"
                id="noBinario"
              />
              No Binario
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="terminos" id="terms" /> Acepto
              térmimos y condiciones
            </label>
          </p>

          <input type="submit" value="Crear Cuenta" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
