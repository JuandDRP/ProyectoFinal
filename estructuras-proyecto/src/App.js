/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Pelicula from './componentes/Pelicula.js';
import { BrowserRouter as Router, Routes, Route, Navigate,useParams } from 'react-router-dom'; // Utilizamos Routes en lugar de Route
import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import Comidas from './componentes/Comidas.js';
import SobreNosotros from './componentes/SobreNosotros.js';
import Detalle1 from './componentes/DetallePelis/Detalle1.js';
import Detalle2 from './componentes/DetallePelis/Detalle2.js';
import Detalle3 from './componentes/DetallePelis/Detalle3.js';
import Detalle4 from './componentes/DetallePelis/Detalle4.js';
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
            <Route path="/:nombre" element={<DetalleComponent />} />
          </Routes>
        </Router>
      ) : (
        <PaginaPrincipal />
      )}
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
