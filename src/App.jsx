import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";

import "aos/dist/aos.css";

import { useEffect } from "react";

import Inicio from "./components/Inicio/Inicio";

import Nosotros from "./components/Nosotros/Nosotros";

import Proceso from "./components/Proceso/Proceso";

import Vino from "./components/Vino/Vino";

import Participacion from "./components/Participacion/Participacion";

import Presentacion from "./components/Presentacion/Presentacion";

import Carrousel from "./components/Carrousel/Carrousel";

import Encontrarnos from "./components/Encontrarnos/Encontrarnos";

import Plantas from "./components/Plantas/Plantas";

import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <ParallaxProvider>
        <Inicio />

        <Nosotros />

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="textoRandom"
        >
          <p>
            “En cada proceso creativo interviene la tierra, el sol, el aire, el
            agua, el fuego y la <strong>intención humana</strong>”
          </p>
        </div>

        <Proceso />

        <div className="textoRandom hazEnvesFondo">
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="0"
            className="tsegundo"
          >
            “Como una hoja que posee dos caras un
            <strong className="hazFondo"> haz </strong>y un
            <strong className="envesFondo"> envés,</strong> nuestros productos
            proponen una doble experiencia: lo que <strong>se ve/toca</strong> y
            lo que <strong>se siente</strong>, en una conexión con lo{" "}
            <strong>natural.</strong>”
          </p>
        </div>

        <Vino />

        <Participacion />

        <Presentacion />

        <div className="textoRandom">
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="0"
            className="ttercero"
          >
            “<strong>Prendas únicas</strong> pensadas para vivir una experiencia
            de conexión con la <strong>naturaleza.</strong>”
          </p>
        </div>

        <Carrousel />

        <Encontrarnos />

        <Plantas />

        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
