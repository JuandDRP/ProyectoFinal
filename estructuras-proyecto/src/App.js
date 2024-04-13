import React from 'react';
import './App.css';
import Pelicula from './componentes/Pelicula.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilizamos Routes en lugar de Route

import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import Comidas from './componentes/Comidas.js';
import SobreNosotros from './componentes/SobreNosotros.js';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes> {/* Envuelve tus Routes dentro del componente Routes */}
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/peliculas"  element={<Pelicula /> } />
          <Route path="/comidas"  element={<Comidas /> } />
          <Route path="/sobre-nosotros"  element={<SobreNosotros /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
