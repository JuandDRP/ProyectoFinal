import React, { useState } from 'react';
import Board from '../Reservartion/Board';
const HorarioCine = ({ lugar, horarios }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="horario-cine">
      <div className="horario-header" onClick={toggleExpanded}>
        <h3>{lugar}</h3>
        <span>{expanded ? '-' : '+'}</span>
      </div>
      {expanded && (
        <div className="horario-body">
          {horarios.map((horario, index) => (
            <div key={index}>
              <h4>{horario.dia}</h4>
              <ul>
                {horario.horario.map((hora, i) => (
                  <li key={i}>{hora}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default HorarioCine;
