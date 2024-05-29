/* eslint-disable no-unused-vars */
import React from 'react';
import '../hojas-de-estilo/Navbar.css'
import appfirebase from './../credenciales'
import {getAuth,signOut} from 'firebase/auth';
const auth=getAuth(appfirebase);
function Navbar() {
  
  return (
    <nav>
      <ul>
      
        <li><a href="/comidas">Comidas</a></li>
        <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
        <li><a href="/cargarpelis">Cartelera</a></li>

        <button className='btn' onClick={()=>signOut(auth)}>Cerrar sesion</button>
      </ul>
    </nav>
  );
}

export default Navbar;
