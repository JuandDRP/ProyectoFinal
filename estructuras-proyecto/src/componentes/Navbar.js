import React from 'react';
import '../hojas-de-estilo/Navbar.css'

function Navbar() {
  
  return (
    <nav>
      <ul>
        <li><a href="/peliculas">Cartelera</a></li>
        <li><a href="/comidas">Comidas</a></li>
        <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
