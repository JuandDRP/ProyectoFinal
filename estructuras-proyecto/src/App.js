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
      
        <Routes> {/* Envuelve tus Routes dentro del componente Routes */}
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/peliculas"  element={
            <>
          <Navbar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
          <Pelicula 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> </>
        } />
          <Route path="/comidas"  element={
          <>
          <Navbar 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <Comidas
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> 
          </>
          } />
          <Route path="/sobre-nosotros"  element={
          <>
          <Navbar 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <SobreNosotros 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> 
          </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;