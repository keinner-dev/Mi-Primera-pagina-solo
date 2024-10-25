// src/Footer.js

import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contacto</h3>
        <p>Teléfono: +58 414-2854625</p>
        <p>Email: foreverkeinner@gmail.com</p>
      </div>
      <div className="footer-social">
        <h3>Síguenos en redes sociales</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </div>
      <div className="footer-rights">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
