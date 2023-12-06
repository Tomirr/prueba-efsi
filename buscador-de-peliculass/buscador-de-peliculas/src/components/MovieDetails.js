import React from 'react';
import { useMovieContext } from '../context/MovieContext';

const MovieDetails = () => {
  const { selectedMovie } = useMovieContext();

  if (!selectedMovie) {
    return null;
  }

  const { Title, Year, Genre, Runtime, Director, Actors, Plot } = selectedMovie;

  console.log(selectedMovie)
  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <h2>{Title}</h2>
        <p>Año: {Year}</p>
        <p>Género: {Genre}</p>
        <p>Duración: {Runtime}</p>
        <p>Director: {Director}</p>
        <p>Actores: {Actors}</p>
        <p>Sinopsis: {Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
