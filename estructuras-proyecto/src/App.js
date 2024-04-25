/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Pelicula from "./componentes/Pelicula.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Utilizamos Routes en lugar de Route
import PaginaPrincipal from "./componentes/PaginaPrincipal.js";
import {Comidas} from './componentes/Comidas.js';
import {Navbar} from './componentes/Navbar.js';
import SobreNosotros from "./componentes/SobreNosotros.js";
import appfirebase from "./credenciales.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(appfirebase);

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div className="App">
      {usuario ? (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
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
                  />{" "}
                </>
              }
            />
            <Route
              path="/comidas"
              element={
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
              }
            />
            <Route
              path="/sobre-nosotros"
              element={
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
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      ) : (
        <PaginaPrincipal />
      )}
    </div>
  );
}
export default App;
