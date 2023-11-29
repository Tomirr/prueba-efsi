// MovieList.js
import React from 'react';
import { useMovieContext } from '../context/MovieContext';

const MovieList = () => {
  const { movies, viewDetails } = useMovieContext();

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <button onClick={() => viewDetails(movie.imdbID)}>Ver Detalles</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
