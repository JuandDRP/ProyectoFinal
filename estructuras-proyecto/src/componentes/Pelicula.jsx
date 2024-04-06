import '../hojas-de-estilo/Pelicula.css';

function Pelicula (props){
return (
    <div className="contenedor-pelicula">

    <img className='imagen-pelicula'
      src={require(`../imagenes/${props.imagen}.png`)}
      alt='Portada de KunfuPanda' />

    <h1> Infantil, para toda la familia</h1>

    </div>

);

}

export default Pelicula;