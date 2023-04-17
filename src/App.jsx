import "./App.css";


import Inicio from "./components/Inicio/Inicio";

import Nosotros from "./components/Nosotros/Nosotros";

import Proceso from "./components/Proceso/Proceso";

import Vino from "./components/Vino/Vino";

import Participacion from "./components/Participacion/Participacion";

import Presentacion from "./components/Presentacion/Presentacion";

import Carrousel from "./components/Carrousel/Carrousel";

import Encontrarnos from "./components/Encontrarnos/Encontrarnos";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Inicio />

      <Nosotros />

      <Proceso />

      <Vino />

      <Participacion />

      <Presentacion />   

      <Carrousel />

      <Encontrarnos />

      <Footer />
    </div>
  );
}

export default App;
