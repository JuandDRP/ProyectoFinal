import React from 'react';

import TablaHorarios from './TablaHorarios';
import Navbar from '../Navbar';
const Detalle3 = () => {

  // Encuentra la película correspondiente según el nombre en los parámetros de la URL
  

  // Manejo si no se encuentra la película


  return (
    <div>
      <Navbar />
      <h2>Soy Leyenda</h2>
      <img
        src={`${process.env.PUBLIC_URL}/imagenes/SoyLeyenda.png`}
        alt={`Soy Leyenda`}
      />
      {}
      {<p>Sinopsis.Robert Neville es el único superviviente de una guerra bacteriológica que ha asolado el planeta y convertido al resto de la humanidad en vampiros. Su vida se ha reducido a asesinar el máximo número posible de estos seres sanguinarios durante el día, y a soportar su asedio cada noche.</p>}
      
      <TablaHorarios/>
      
    </div>
    
  );
};

export default Detalle3;