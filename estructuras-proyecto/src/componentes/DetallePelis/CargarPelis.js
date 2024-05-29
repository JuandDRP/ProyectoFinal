import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import Navbar from '../Navbar';
import '../../hojas-de-estilo/App.css';
import Detalle from './Detalle';
import { useNavigate } from 'react-router-dom';

function CargarPeliculas() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "fbe0be168c5b7c94765896d073c2497f";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // Variables de estado
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [selectedMovieIds, setSelectedMovieIds] = useState(new Set()); // Estado para almacenar los IDs
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando peliculas disponibles" });
  const [playing, setPlaying] = useState(false);


  
  // Función para realizar la petición get a la API
  const fetchMovies = async (searchKey = "") => {
    const type = searchKey ? "search/movie" : "movie/now_playing";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language:"es-MX",
      },
    });
    console.log('data', results);
    setMovies(results);
    setSelectedMovie(results[0]);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // Función para la petición de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Trailer oficial" || vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    await fetchMovie(movie.id);
    setSelectedMovie(movie);
    setMovie(movie);
    
    // Usar un conjunto para evitar duplicados
    setSelectedMovieIds((prevIds) => new Set(prevIds).add(movie.id));
    
    
    window.scrollTo(0, 0);
    navigate(`/detalle/${movie.id}`);
  };

  // Función para buscar películas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="text-center mt-5 mb-5">Trailer Popular Movies</h2>

      {/* El buscador */}
      <form className="container mb-4" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>

      {/* Contenedor para previsualizar */}
      <div>
        <main>
          {selectedMovie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${selectedMovie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer ? trailer.key : ""}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                         Trailer
                      </button>
                    ) : (
                      "Lo siento, trailer no disponible"
                    )}
                    <h1 className="text-white">{selectedMovie.title}</h1>
                    <p className="text-white">{selectedMovie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      {/* Contenedor para mostrar los posters y las películas en la petición a la API */}
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="col-md-4 mb-3"
              onClick={() => selectMovie(movie)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`${URL_IMAGE + movie.poster_path}`}
                alt=""
                height={600}
                width="100%"
              />
              <h4 className="text-center">{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Componente adicional que usa los IDs seleccionados */}
      <Detalle selectedMovieIds={Array.from(selectedMovieIds)} />
    </div>
  );
}



export default CargarPeliculas;
