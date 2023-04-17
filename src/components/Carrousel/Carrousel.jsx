import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className="imgCarrousel"
    src="/img/img1.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img2.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img3.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img4.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img5.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img6.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img7.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
  <img
    className="imgCarrousel"
    src="/img/img8.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={{ margin: "2rem", padding: "1rem", height: "85vh" }}
  />,
];

const Carrousel = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };

  return (
    <div className="carrousel">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={2200}
        animationDuration={1000}
        animationType="fadeout"
        autoHeight
        autoWidth
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
  );
};

export default Carrousel;
