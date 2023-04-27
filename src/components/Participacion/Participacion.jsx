import React from "react";

const Participacion = () => {
  return (
    <div className="distinciones">
      <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="0"
        className="disTitulo"
      >
        Distinciones
      </p>
      <div className="distinDisplay">
        <div>
          <div className="puroDiseContainer">
            <img
              src="./img/purodise.png"
              alt=""
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="puroDise"
            />
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="300"
              className="indPremio"
            >
              Premio en Indumentaria
            </p>
          </div>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
            className="year"
          >
            2014
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
          <img src="/img/logonotexto.png" alt="" className="logoDistin" />
        </div>
        <div className="buenDisContainer">
          <img
            src="./img/sellobuen.png"
            alt=""
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="selloBuen"
          />

          <p
            className="year yearMovi"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default Participacion;
