import React from 'react';
import TablaHorarios from './TablaHorarios';
import Navbar from '../Navbar';
import '../DetallePelis/../DetallePelis/Detalle.css';
import MovieDetailTrailer from './MovieDetailTrailer';
const Detalle2 = () => {



  return (
    <div className='detalle-container'>
      <Navbar />
      <h2>El Exorcista</h2>
      <img
        src={`${process.env.PUBLIC_URL}/imagenes/ElExorcista.png`}
        alt={`El Exorcista`}
      />
      
      {<p>Sinopsis.Una inocente niña de 12 años sufre un grave trastorno en su comportamiento, pero los médicos son incapaces de diagnosticar las causas. En realidad, está poseída por el demonio y solo un exorcismo puede sanarla.</p>}
      {<p></p>}
      {<p className='datos'>
        <p className='contenedor'>
          <p className='datos-nombre'>Fecha de estreno.</p>
          7/3/2024
          </p>
      <p className='contenedor'>
        <p className='datos-nombre'>Director.</p> 
        Mike Mitchell
        </p>
        <p className='contenedor'>
          <p className='datos-nombre'>Nacionalidad.</p>
          United States of America
          </p>
      <p className='contenedor'>
        <p className='datos-nombre'>Calificación.</p>
        PG13
        </p>
      <p className='contenedor'>
        <p className='datos-nombre'>Duración.</p>
        94 Minutos
      </p>

      
      </p>}
      <TablaHorarios/>
      <MovieDetailTrailer/>
    </div>
    
  );
};

export default Detalle2;