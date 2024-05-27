import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Navbar from '../Navbar';
import './Detalle.css'

function Detalle() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "fbe0be168c5b7c94765896d073c2497f";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
            append_to_response: "videos",
          },
        });
        setMovie(data);

        // Buscar el tráiler de la película
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Trailer oficial" || vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
        setError(null); // Restablecer el error a null si la solicitud es exitosa
      } catch (error) {
        console.error("Error al obtener los detalles de la película:", error);
        setMovie(null);
        setTrailer(null);
        setError("Error al cargar los detalles de la película"); // Establecer un mensaje de error
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Navbar />
      {error ? (
        <p>{error}</p> // Mostrar el mensaje de error si existe
      ) : movie ? (
        <>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
          <p>Fecha de lanzamiento: {movie.release_date}</p>
          <p>Duración: {movie.runtime} minutos</p>
          <p>Calificación: {movie.vote_average}</p>
          {trailer && (
            <YouTube
              videoId={trailer.key}
              opts={{
                width: "100%",
                height: "500px",
              }}
            />
          )}
        </>
      ) : (
        <p>Cargando detalles de la película...</p>
      )}
    </div>
  );
}

export default Detalle;