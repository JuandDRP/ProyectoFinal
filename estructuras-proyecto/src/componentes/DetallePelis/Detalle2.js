import React from 'react';
import TablaHorarios from './TablaHorarios';
import Navbar from '../Navbar';
import '../DetallePelis/../DetallePelis/Detalle.css';
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
      <TablaHorarios/>
    </div>
    
  );
};

export default Detalle2;