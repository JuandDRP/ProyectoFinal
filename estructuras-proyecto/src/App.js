import React from 'react';
import './App.css';
import Pelicula from './componentes/Pelicula.js';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import Comidas from './componentes/Comidas.js';
import SobreNosotros from './componentes/SobreNosotros.js';
import Detalle1 from './componentes/DetallePelis/Detalle1.js';
import Detalle2 from './componentes/DetallePelis/Detalle2.js';
import Detalle3 from './componentes/DetallePelis/Detalle3.js';
import Detalle4 from './componentes/DetallePelis/Detalle4.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/peliculas" element={<Pelicula />} />
          <Route path="/comidas" element={<Comidas />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/:nombre" element={<DetalleComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

function DetalleComponent() {
  const { nombre } = useParams();

  if (nombre === 'Detalle1') {
    return <Detalle1/>;
  } else if (nombre === 'Detalle2') {
    return <Detalle2/>;
  }
  else if (nombre === 'Detalle3') {
    return <Detalle3/>;
  }
  else if (nombre === 'Detalle4') {
    return <Detalle4/>;
  }

  return <div>Película no encontrada</div>;
}

export default App;