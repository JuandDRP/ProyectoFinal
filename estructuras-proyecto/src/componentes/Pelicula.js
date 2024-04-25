import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick"; // Importa el componente Slider de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../hojas-de-estilo/Pelicula.css";
Pelicula.propTypes = {
  peliculas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      genero: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Pelicula.defaultProps = {
  peliculas: [
    { nombre: "KunfuPanda", genero: 1 },
    { nombre: "ElExorcista", genero: 2 },
    {nombre: "SoyLeyenda", genero: 3},
    {nombre: "ToyStory", genero:  1}

  ],
};

function Pelicula({ peliculas }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div style={{ marginTop: '20px' }}></div>
      <Slider {...settings}>
        {peliculas.map((pelicula, index) => (
          <div key={index} className="contenedor-pelicula">
            <img
              className="imagen-pelicula"
              src={`${process.env.PUBLIC_URL}/imagenes/${pelicula.nombre}.png`}
              alt={pelicula.nombre}
            />

            <p>
              {
                pelicula.genero === 0
                ? "Servidor en mantenimiento"
                :pelicula.genero === 1? "Infantil, para toda la familia"
                :pelicula.genero === 2? "Terror"
                :pelicula.genero ===3? "Accion"
                :pelicula.genero ===4? "Fantasia"
                : "Otro género"}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Pelicula;
