import React, { useEffect, useRef, useState } from "react";

const Inicio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);

  const handleMenuOptionClick = () => {
    console.log("entro");
    setMenuOpen(false);
    inputRef.current.checked = false;
  };
  const toggleMenu = () => {
    setTimeout(() => {
      setMenuOpen(!menuOpen);
    }, 301);
  };
  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => {
        setMenuOpen(false);
        inputRef.current.checked = false;
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);
  return (
    <div>
      <header className="header">
        <label className={`burger`} htmlFor="burger" onMouseDown={toggleMenu}>
          <input type="checkbox" id="burger" ref={inputRef} />
          <span></span>
          <span></span>
          <span></span>
          <div className={`close ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#proceso">Proceso</a>
            </li>
            <li>
              <a href="#servicios">Nuestros Servicios</a>
            </li>
          </div>
        </label>
        <div className={`menu`}>
          <li>
            <a href="#inicio" onMouseDown={handleMenuOptionClick}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" onMouseDown={handleMenuOptionClick}>
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#proceso" onMouseDown={handleMenuOptionClick}>
              Proceso
            </a>
          </li>
          <li>
            <a href="#servicios" onMouseDown={handleMenuOptionClick}>
              Nuestros Servicios
            </a>
          </li>
        </div>
      </header>

      {/* <HamburguerMenu /> */}
      <div className="img-container" id="inicio">
        <img src=".\img\logo.png" alt="logo" className="logo-inicio" />
        <p className="texto-inicio">
          Somos una propuesta de diseño <strong>innovadora</strong> sobre los
          textiles.
        </p>
        <img className="foto-inicio" src="/img/inicio.png" alt="Imagen 1" />
        <img
          className="foto-inicio fotoI-2"
          src="/img/inicio2.png"
          alt="Imagen 2"
        />
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
