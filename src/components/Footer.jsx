import React from 'react';

import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-info">
        <h2> Datos de contacto</h2>
        <div className="footer-info__contact">
          <p>Your Store</p>
          <p>Ecuador</p>
          <p>Correo</p>
        </div>
      </div>
      <div className="Footer-social">
        <h2>Redes Sociales</h2>
        <div className="social-media">
          <p className="social-media__link"></p>
          <p className="social-media__link"></p>
          <p className="social-media__link"></p>
          <p className="social-media__link"></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
