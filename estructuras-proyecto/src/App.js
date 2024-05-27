/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate,useParams } from 'react-router-dom'; // Utilizamos Routes en lugar de Route
import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import Comidas from './componentes/Comidas.js';
import SobreNosotros from './componentes/SobreNosotros.js';
import Reservation from './componentes/Reservartion/Reservation.js';
import Detalle from './componentes/DetallePelis/Detalle.js';
import appfirebase from './credenciales.js';
import CargarPeliculas from './componentes/DetallePelis/CargarPelis.js';
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
            
            <Route path="/comidas" element={<Comidas />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/reservas" element={<Reservation/>} />
            <Route path="/cargarpelis" element={<CargarPeliculas/>} />


          </Routes>
        </Router>
      ) : (
        <PaginaPrincipal />
      )}
    </div>
  );
}


export default App;
