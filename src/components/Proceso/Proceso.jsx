import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const style = {
  margin: "auto",
  maxWidth: "400px",
};
const items = [
  <div data-aos="zoom-out">
    <p>
      <strong>1</strong> Momento creativo
    </p>
    <img
      className="imgCarrousel"
      src="/img/ProcesoCreativo1.png"
      onDragStart={handleDragStart}
      role="presentation"
      style={style}
    />
  </div>,
  <div>
    <p>
      <strong>2</strong> Cierre de las prendas
    </p>
    <img
      className="imgCarrousel"
      src="/img/ProcesoCreativo2.png"
      onDragStart={handleDragStart}
      role="presentation"
      style={style}
    />
  </div>,

  <div>
    <p>
      <strong>3</strong> Cocción
    </p>
    <img
      className="imgCarrousel"
      src="/img/ProcesoCreativo3.png"
      onDragStart={handleDragStart}
      role="presentation"
      style={style}
    />
  </div>,
  <div>
    <p>
      <strong>4</strong> Descanso
    </p>
    <img
      className="imgCarrousel"
      src="/img/ProcesoCreativo4.png"
      onDragStart={handleDragStart}
      role="presentation"
      style={style}
    />
  </div>,
  <div>
    <p>
      <strong>5</strong> Apertura
    </p>
    <img
      className="img5-carrousel"
      src="/img/ProcesoCreativo5.gif"
      onDragStart={handleDragStart}
      role="presentation"
      style={style}
    />
  </div>,
];
const Proceso = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
  };
  return (
    <>
      <div className="proceso show-proceso" id="proceso">
        <div className="flechas">
          <p className="titulo">Proceso Creativo</p>
          <img src="/img/Flechas.png" alt="" className="logoFlecha" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="0"
          className="img1"
        >
          <p>
            <strong>1</strong> Momento creativo
          </p>
          <img src="/img/ProcesoCreativo1.png" alt="" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1000"
          className="img2"
        >
          <p>
            <strong>2</strong> Cierre de las prendas
          </p>
          <img src="/img/ProcesoCreativo2.png" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1500"
          className="img3"
        >
          <p>
            <strong>3</strong> Cocción
          </p>
          <img src="/img/ProcesoCreativo3.png" alt="" />
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-delay="800"
          className="img4"
        >
          <p>
            <strong>4</strong> Descanso
          </p>
          <img src="/img/ProcesoCreativo4.png" alt="" />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1500"
          data-aos-delay="1800"
          className="img5"
        >
          <p>
            <strong>5</strong> Apertura
          </p>
          <img src="/img/ProcesoCreativo5.gif" alt="" />
        </div>
      </div>
      <div className="carrousel-proceso show-carrousel">
        <p className="titulo">Proceso Creativo</p>
        <AliceCarousel
          autoPlay
          autoPlayStrategy="default"
          autoPlayInterval={2800}
          animationDuration={1000}
          autoHeight
          mouseTracking
          touchTracking
          disableButtonsControls
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          disableDotsControls={true}
          infinite={true}
          items={items}
          responsive={responsive}
          controlStrategy="responsive"
        />
      </div>
    </>
  );
};

export default Proceso;
