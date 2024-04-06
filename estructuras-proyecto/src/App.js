import './App.css';
import Pelicula from './componentes/Pelicula.jsx';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          <Pelicula
          imagen='KunfuPanda'
          />
          <Pelicula
          imagen='ElExorcista'
          />
        </h1>


      </div>
    </div>
  );
}

export default App;
