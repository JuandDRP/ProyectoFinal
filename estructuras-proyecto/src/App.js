/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Pelicula from './componentes/Pelicula.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Utilizamos Routes en lugar de Route
import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import Comidas from './componentes/Comidas.js';
import SobreNosotros from './componentes/SobreNosotros.js';
import appfirebase from './credenciales.js';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth=getAuth(appfirebase)


function App() {
  const [usuario,setUsuario]=useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  
  return (
    <div>
      {usuario ? (
        <Router>
          <Routes>
            <Route path="/" element={<Pelicula />} />
            <Route path="/comidas" element={<Comidas />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      ) : (
        <PaginaPrincipal />
      )}
    </div>
    // <div>
    //   {usuario ? <Pelicula/>:<PaginaPrincipal />}
    // </div>
    // <div className="App">
    //   <Router>
    //     <Routes> {/* Envuelve tus Routes dentro del componente Routes */}
    //       <Route path="/" element={<PaginaPrincipal />} />
    //       <Route path="/peliculas"  element={<Pelicula /> } />
    //       <Route path="/comidas"  element={<Comidas /> } />
    //       <Route path="/sobre-nosotros"  element={<SobreNosotros /> } />
    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
