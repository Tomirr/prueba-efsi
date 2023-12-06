
import React from 'react';
import axios from 'axios';
import { useMovieContext } from '../context/MovieContext';
import './MovieList.css'; 

const MovieList = () => {
  const { movies, viewDetails } = useMovieContext();

  const apiKey = '316d489c'; 

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
      const movieDetails = response.data;
  
        console.log('Detalles de la película:', movieDetails);
  
      viewDetails(movieDetails.imdbID);
    } catch (error) {
      console.error('Error al obtener detalles:', error);
    }
  };
  

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <button onClick={() => fetchMovieDetails(movie.imdbID)}>Ver Detalles</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
