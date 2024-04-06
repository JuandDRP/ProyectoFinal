import './App.css';
import Pelicula from './componentes/Pelicula.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
        <Pelicula />
          {/* <Pelicula  pelicula="KunfuPanda" genero={1}/>
          <Pelicula pelicula="ElExorcista" genero={2}/> */}
        </h1>


      </div>
    </div>
  );
}

export default App;
