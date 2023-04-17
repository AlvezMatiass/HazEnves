import "./App.css";


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
  return (
    <div className="App">
      <Inicio />

      <Nosotros />

      <div className='textoRandom'>
        <p>“En cada proceso creativo interviene la tierra, el sol, el aire, el agua, el fuego y la <strong>intención humana</strong>”</p>
      </div>

      <Proceso />

      <div className="textoRandom">
        <p className="tsegundo">“Como una hoja que posee dos caras un haz y un envés, nuestros productos proponen una doble experiencia: lo que <strong>se ve/toca</strong> y lo que <strong>se siente</strong>, en una conexión  con lo <strong>natural.</strong>”</p>
      </div>

      <Vino />

      <Participacion />

      <Presentacion />   

      <Carrousel />

      <Encontrarnos />

      <Plantas />

      <Footer />
    </div>
  );
}

export default App;
