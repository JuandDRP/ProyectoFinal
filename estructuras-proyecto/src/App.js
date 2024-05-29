import React, { useState, useEffect } from "react";
import "./componentes/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PaginaPrincipal from "./componentes/PaginaPrincipal.js";
import { Comidas } from './componentes/Comidas.js';
import { Navbar } from './componentes/Navbar.js';
import CargarPelis from "./componentes/DetallePelis/CargarPelis.js";
import SobreNosotros from "./componentes/SobreNosotros.js";
import Detalle from "./componentes/DetallePelis/Detalle";  // Importa el componente Detalle
import appfirebase from "./credenciales.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Reservation from "./componentes/Reservartion/Reservation.js";
const auth = getAuth(appfirebase);

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
    return () => unsubscribe();
  }, []); // Se suscribe y se cancela la suscripción al cambio de estado del usuario

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
                  <CargarPelis
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
            <Route
              path="/reservas"
              element={<Reservation/>}
            ></Route>
            <Route
              path="/detalle/:id"
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
                  <Detalle />
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
