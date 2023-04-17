import "./App.css";
import Contacto from "./components/Contacto/Contacto.jsx";

import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Participacion from "./components/Participacion/Participacion";
import Presentacion from "./components/Presentacion/Presentacion";
import Proceso from "./components/Proceso/Proceso";
import Servicio from "./components/Servicio/Servicio";
import Carrousel from "./components/Carrousel/Carrousel";

function App() {
  return (
    <div className="App">
      <Inicio />

      <Nosotros />

      <Proceso />

      <Presentacion />

      <Servicio />

      <Participacion />

      <Carrousel />

      <Contacto />

      <Footer />
    </div>
  );
}

export default App;
