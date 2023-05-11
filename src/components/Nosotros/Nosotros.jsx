import React from "react";

const Nosotros = () => {
  return (
    <div className="nosotros" id="nosotros">
      <img src="/img/argentinaprueba.gif" alt="" className="argentinaImg"></img>
      <div className="nosotrosContainer">
        <h4 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          Nosotros
        </h4>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
          <strong>Haz & ENVÉS</strong> nació a fines de <strong>2013</strong>,
          luego de recorrer el camino de descubrir y conocer el arte de trabajar
          con las plantas.
        </p>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
          Incorporamos los <strong>tintes naturales</strong> como aporte de
          color y formas, comenzando así a investigar la vegetación de nuestro
          entorno y su potencialidad.{" "}
        </p>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
          Desarrollamos una paleta de colores y patrones geométricos naturales
          propios que combinamos con metales oxidados reutilizables obteniendo
          alta <strong>identidad mendocina</strong> en su expresión.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
