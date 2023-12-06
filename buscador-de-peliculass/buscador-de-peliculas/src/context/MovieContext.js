import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = '316d489c'; 

  const viewDetails = async (imdbID) => {

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
      const detailedInfo = response.data;
      setSelectedMovie(detailedInfo);
    } catch (error) {
      console.error('Error al obtener detalles:', error);
    }
  };

  const value = {
    movies,
    setMovies,
    viewDetails,
    selectedMovie,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
