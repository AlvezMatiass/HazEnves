import React from "react";

const Inicio = () => {
  return (
    <div>
      <header className="header">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="#2">Sobre Nosotros</a>
        </li>
        <li>
          <a href="">Proceso</a>
        </li>
        <li>
          <a href="">Nuestros Servicios</a>
        </li>
      </header>

      <div className="img-container">
        <img src=".\img\logo.png" alt="logo" className="logo-inicio" />
        <p className="texto-inicio">
          Somos una propuesta de diseño <strong>innovadora</strong> sobre los
          textiles.
        </p>
        <img className="foto-inicio" src="/img/inicio.png" alt="Imagen 1" />
        <img className="foto-inicio" src="/img/inicio2.png" alt="Imagen 2" />
      </div>

      <div className="whatsapp">
        <a href="">
          <img src=".\img\whatsappverde.png" alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default Inicio;
