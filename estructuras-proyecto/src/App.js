/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import { useState } from 'react';
import Pelicula from './componentes/Pelicula.js';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Utilizamos Routes en lugar de Route

import PaginaPrincipal from './componentes/PaginaPrincipal.js';
import {Comidas} from './componentes/Comidas.js';
import {Navbar} from './componentes/Navbar.js';
import SobreNosotros from './componentes/SobreNosotros.js';
import appfirebase from './credenciales.js';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth=getAuth(appfirebase)


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
=======
  const [usuario,setUsuario]=useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  
 // return (
  //  <div>
 //     {usuario ? (
 //       <Router>
 //         <Routes>
//            <Route path="/" element={<Pelicula />} />
 //           <Route path="/comidas" element={<Comidas />} />
 //           <Route path="/sobre-nosotros" element={<SobreNosotros />} />
 //           <Route path="*" element={<Navigate to="/" />} />
  //        </Routes>
  //      </Router>
 //     ) : (
 //       <PaginaPrincipal />
   //   )}

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
