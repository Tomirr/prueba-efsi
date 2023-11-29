// SearchBar.js
import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext.js';
import axios from 'axios';

const SearchBar = () => {
  const { setMovies } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [contentType, setContentType] = useState('movie');
  const [releaseYear, setReleaseYear] = useState('');

  const apiKey = '316d489c';

  const searchMovies = async () => {
    if (searchTerm === '') {
      alert('Ingresa un término de búsqueda.');
      return;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=${contentType}&y=${releaseYear}`;

    try {
      const response = await axios.get(apiUrl);
      const { Search } = response.data;

      if (Search) {
        setMovies(Search);
      } else {
        alert('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar películas..."
      />
      <select
        value={contentType}
        onChange={(e) => setContentType(e.target.value)}
      >
        <option value="movie">Película</option>
        <option value="series">Serie</option>
        <option value="episode">Episodio</option>
      </select>
      <input
        type="text"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        placeholder="Año de lanzamiento"
      />
      <button onClick={searchMovies}>Buscar</button>
    </div>
  );
};

export default SearchBar;
