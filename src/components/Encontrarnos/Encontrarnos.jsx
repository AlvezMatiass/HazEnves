import React, { useState } from "react";
import CardFlip from "react-card-flip";

const Encontrarnos = () => {
  const backgroundImages = [
    "/img/Encontranos1.jpg",
    "/img/Encontranos1Blur.jpg",
    "/img/Encontranos2.jpg",
    "/img/Encontranos2Blur.jpg",
    "/img/Encontranos3.jpg",
    "/img/Encontranos3Blur.jpg",
    "/img/Encontranos4.jpg",
    "/img/Encontranos4Blur.jpg",
  ];
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleMouseEnter = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setIsFlipped1(true);
        break;
      case 2:
        setIsFlipped2(true);
        break;
      case 3:
        setIsFlipped3(true);
        break;
      case 4:
        setIsFlipped4(true);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setIsFlipped1(false);
        break;
      case 2:
        setIsFlipped2(false);
        break;
      case 3:
        setIsFlipped3(false);
        break;
      case 4:
        setIsFlipped4(false);
        break;
      default:
        break;
    }
  };
  return (
    <div className="encontrarnos" id="servicios">
      <div className="encontrarnosContainer">
        <div className="encoTituloContainer">
          <p className="encoTitulo">Podemos Encontrarnos...</p>
        </div>
        <div className="imgContainer">
          <img src="./img/ropaRama.png" alt="" className="ramaImg" />
          <div className="cuatroImgContainer">
            <CardFlip
              isFlipped={isFlipped3}
              flipDirection="horizontal"
              className="fold"
            >
              <div
                onMouseDown={() => handleMouseEnter(3)}
                onMouseEnter={() => handleMouseEnter(3)}
                className="card"
                style={{ backgroundImage: `url(${backgroundImages[4]})` }}
              >
                <div>
                  <p>
                    <strong>Diseño de Autoras</strong>
                  </p>
                </div>
              </div>
              <div
                onMouseDown={() => handleMouseLeave(3)}
                className="card-bg"
                onMouseLeave={() => handleMouseLeave(3)}
              >
                <div
                  className="card-flip-back-image"
                  style={{ backgroundImage: `url(${backgroundImages[5]})` }}
                >
                  <div className="card-flip-back-content">
                    <p className="titulo-back">
                      <strong>Diseño de Autoras</strong>
                    </p>
                    <p className="texto-back">
                      San Lorenzo 351 <br />
                      Ciudad Mendoza <br />
                      Consultar horarios de <br />
                      atención.
                    </p>
                  </div>
                </div>
              </div>
            </CardFlip>
            <CardFlip isFlipped={isFlipped4} flipDirection="horizontal">
              <div
                onMouseDown={() => handleMouseEnter(4)}
                onMouseEnter={() => handleMouseEnter(4)}
                className="card"
                style={{ backgroundImage: `url(${backgroundImages[6]})` }}
              >
                <div>
                  <p>
                    <strong>Tienda Virtual </strong>
                  </p>
                </div>
              </div>
              <div
                onMouseDown={() => handleMouseLeave(4)}
                className="card-bg"
                onMouseLeave={() => handleMouseLeave(4)}
              >
                <div
                  className="card-flip-back-image"
                  style={{ backgroundImage: `url(${backgroundImages[7]})` }}
                >
                  <div className="card-flip-back-content">
                    <a href="https://wa.me/c/5492615606919" target="_blank">
                      <p className="titulo-back">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-link"
                          width="24"
                          height="22"
                          viewBox="0 -3 24 24"
                          stroke-width="1.5"
                          stroke="#ffffff"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                          <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                        </svg>

                        <strong>{"\u00a0\u00a0"}Tienda Virtual</strong>
                      </p>
                    </a>
                    <p className="texto-back">
                      Consultá los modelos
                      <br /> disponibles en el link.
                    </p>
                  </div>
                </div>
              </div>
            </CardFlip>
            <CardFlip isFlipped={isFlipped1} flipDirection="horizontal">
              <div
                onMouseDown={() => handleMouseEnter(1)}
                onMouseEnter={() => handleMouseEnter(1)}
                className="card"
                style={{ backgroundImage: `url(${backgroundImages[0]})` }}
              >
                <div>
                  <p>
                    <strong>Ferias y Eventos</strong>
                  </p>
                </div>
              </div>
              <div
                onMouseDown={() => handleMouseLeave(1)}
                className="card-bg"
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <div
                  className="card-flip-back-image"
                  style={{ backgroundImage: `url(${backgroundImages[1]})` }}
                >
                  <div className="card-flip-back-content">
                    <p className="titulo-back">
                      <strong>Ferias y Eventos</strong>
                    </p>
                    <p className="texto-back">
                      Consultá nuestras próximas participaciones nacionales e
                      internacionales.
                    </p>
                  </div>
                </div>
              </div>
            </CardFlip>
            <CardFlip isFlipped={isFlipped2} flipDirection="horizontal">
              <div
                onMouseDown={() => handleMouseEnter(2)}
                onMouseEnter={() => handleMouseEnter(2)}
                className="card"
                style={{ backgroundImage: `url(${backgroundImages[2]})` }}
              >
                <div>
                  <p>
                    <strong>
                      Reciclando{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-recycle"
                        width="22"
                        height="22"
                        viewBox="0 -3.1 24 24"
                        stroke-width="1.8"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                        <path
                          d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                          transform="rotate(120 12 13)"
                        />
                        <path
                          d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                          transform="rotate(240 12 13)"
                        />
                      </svg>
                    </strong>
                  </p>
                </div>
              </div>
              <div
                onMouseDown={() => handleMouseLeave(2)}
                className="card-bg"
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <div
                  className="card-flip-back-image"
                  style={{ backgroundImage: `url(${backgroundImages[3]})` }}
                >
                  <div className="card-flip-back-content">
                    <p className="titulo-back">
                      <strong>Diseñando tu prenda</strong>
                    </p>
                    <p className="texto-back">
                      Reciclá, reusá y revalorizá tus prendas preferidas
                      utilizando nuestra impronta natural.
                    </p>
                  </div>
                </div>
              </div>
            </CardFlip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encontrarnos;
