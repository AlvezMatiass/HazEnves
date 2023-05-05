import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const style = { margin: "6vw", width: "90%" };
const items = [
  <img
    className="imgCarrousel"
    src="/img/img1.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img2.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img3.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img4.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img5.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img6.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img7.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
  <img
    className="imgCarrousel"
    src="/img/img8.png"
    onDragStart={handleDragStart}
    role="presentation"
    style={style}
  />,
];

const Carrousel = () => {
  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
    480: { items: 2, itemsFit: "contain" },
    768: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
    1400: { items: 5, itemsFit: "contain" },
  };

  return (
    <div className="carrousel">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={2200}
        animationDuration={1000}
        mouseTracking
        touchTracking
        // disableButtonsControls
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
