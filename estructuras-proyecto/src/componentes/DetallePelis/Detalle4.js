import React from 'react';

import TablaHorarios from './TablaHorarios';
import Navbar from '../Navbar';
const Detalle4 = () => {

  // Encuentra la película correspondiente según el nombre en los parámetros de la URL
  

  // Manejo si no se encuentra la película


  return (
    <div>
      <Navbar />
      <h2>Toy Story</h2>
      <img
        src={`${process.env.PUBLIC_URL}/imagenes/ToyStory.png`}
        alt={`Soy Leyenda`}
      />
      {}
      {<p>Sinopsis. TOY STORY sigue las aventuras de los juguetes que pertenecen a un niño llamado Andy. Su favorito es un sheriff del Viejo Oeste llamado Woody (con la voz de Tom Hanks), quien actúa como el líder del resto de los juguetes de Andy, incluido un Tyrannosaurus Rex (Wallace Shawn) y Mr. Potato Head (Don Rickles). Todo va bien hasta que Andy reciba un regalo de cumpleaños muy especial: un astronauta de juguete llamado Buzz Lightyear (Tim Allen). Woody se pone celoso y, en un esfuerzo por evitar que Andy se lleve a Buzz con él en una excursión, accidentalmente empuja a Buzz por la ventana. Sintiéndose muy mal por lo que ha hecho, Woody lo sigue, decidido a llevar a Buzz de vuelta a casa con Andy antes de que la familia se mude a su nueva casa.</p>}
      {<p></p>}
      <TablaHorarios/>
    </div>
  );
};

export default Detalle4;