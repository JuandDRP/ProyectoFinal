import React from 'react';

import TablaHorarios from './TablaHorarios';
import Navbar from '../Navbar';
import '../DetallePelis/../DetallePelis/Detalle.css';
const Detalle1 = () => {

  // Encuentra la película correspondiente según el nombre en los parámetros de la URL
  

  // Manejo si no se encuentra la película


  return (
    <div className='detalle-container'>
      <Navbar />
      <h2>KunfuPanda</h2>

      <img
        src={`${process.env.PUBLIC_URL}/imagenes/KunfuPanda.png`}
        alt={`Kung Fu Panda`}
      />
      {<p> Sinopsis. Po se está preparando para convertirse en el Líder Espiritual del Valle de la Paz, por lo que necesita a alguien que ocupe su lugar como Guerrero Dragón. Como tal, entrenará a un nuevo practicante de Kung Fu para el puesto, y se encontrará con un nuevo enemigo llamado "la Camaleona".</p>}
      {<p></p>}


      <TablaHorarios/>
    </div>
  );
};

export default Detalle1;