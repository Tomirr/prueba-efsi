// MovieDetails.js
import React from 'react';
import { useMovieContext } from '../context/MovieContext';

const MovieDetails = () => {
  const { selectedMovie } = useMovieContext();

  if (!selectedMovie) {
    return null; 
  }

  return (
    <div className="movie-details">
      <h2>{selectedMovie.Title}</h2>
      <p>Año: {selectedMovie.Year}</p>
      <p>Género: {selectedMovie.Genre}</p>
      <p>Duración: {selectedMovie.Runtime}</p>
      <p>Director: {selectedMovie.Director}</p>
      <p>Actores: {selectedMovie.Actors}</p>
      <p>Sinopsis: {selectedMovie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
