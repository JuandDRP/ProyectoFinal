import React from 'react';
import './App.css';
import { useState } from 'react';
import Pelicula from './componentes/Pelicula.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilizamos Routes en lugar de Route
import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import {Comidas} from './componentes/Comidas.js';
import {Navbar} from './componentes/Navbar.js';
import SobreNosotros from './componentes/SobreNosotros.js';

function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">    
     <Router>
      <Navbar 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        <Routes> {/* Envuelve tus Routes dentro del componente Routes */}
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/peliculas"  element={<Pelicula /> } />
          <Route path="/comidas"  element={<Comidas
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> } />
          <Route path="/sobre-nosotros"  element={<SobreNosotros /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
