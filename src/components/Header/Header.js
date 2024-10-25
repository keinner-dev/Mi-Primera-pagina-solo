import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="nombre">Cars.ve</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/HeroSection">Inicio</a></li>
          <li><a href="#modelos">Modelos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

