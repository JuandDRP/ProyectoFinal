import React, { useEffect, useState } from 'react';

const DetallePelicula = ({ match }) => {
  const [pelicula, setPelicula] = useState(null);
  const [error, setError] = useState(null);
  const peliculaId = match.params.id;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmUwYmUxNjhjNWI3Yzk0NzY1ODk2ZDA3M2MyNDk3ZiIsInN1YiI6IjY2MmQ4NjIwYzU2ZDJkMDEyYmNjNzU0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NDPZ1OffekMGpR0oXUujHfA-OpRrPa9TM-2PRQd5dn8'
    }
  };

  useEffect(() => {
    const fetchPelicula = async () => {
      try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=fbe0be168c5b7c94765896d073c2497f&language=es-MX`, options);
        
        if (respuesta.status === 200) {
          const datos = await respuesta.json();
          setPelicula(datos);
        } else if (respuesta.status === 401) {
          setError('Pusiste los datos mal');
        } else if (respuesta.status === 404) {
          setError('La pelicula que elegiste no existe');
        } else {
          setError('Ocurrió un error');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPelicula();
  }, [peliculaId]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        pelicula && (
          <div className="detalle-pelicula">
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
            <p><strong>Fecha de lanzamiento:</strong> {pelicula.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`} alt={pelicula.title} />
          </div>
        )
      )}
    </div>
  );
};

export default DetallePelicula;
