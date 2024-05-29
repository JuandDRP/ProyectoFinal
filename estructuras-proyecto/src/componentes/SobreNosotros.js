import '../hojas-de-estilo/sobreNosotros.css';

function SobreNosotros({ sobreNosotros }) {
  return (
    <div className="sobreNosotros-container">
      <div className="persona-container">
        <h1>Andres Felipe Cardona Millan - 2215932</h1>
        <img src='/imagenes/Andres.jpg' alt='Foto de andres' />
      </div>
      <div className="persona-container">
        <h1>Juan de Dios Rodriguez Perez - 2210004</h1>
        <img src='/imagenes/dedios.jpg' alt='Foto de miguel' />
      </div>
      <div className="persona-container">
        <h1>Miguel Angel Jimenez Trochez - 2215407</h1>
        <img src='/imagenes/migel.jpg' alt='Foto de Juan' />
      </div>
      <div className="persona-container">
        <h1>Jose Miguel Hernandez Castro - 2215513</h1>
        <img src='/imagenes/Jose.jpg' alt='Foto de Jose' />
      </div>
    </div>
  );
}

export default SobreNosotros;
