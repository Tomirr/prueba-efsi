// App.js
import React from 'react';
import { MovieProvider } from './context/MovieContext.js';
import SearchBar from './components/SearchBar.js';
import MovieList from './components/MovieList.js';
import MovieDetails from './components/MovieDetails'; // Asegúrate de importar MovieDetails si no lo has hecho

import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="app">
        <header>
          <h1>Buscador de Películas</h1>
          <SearchBar />
        </header>
        <main>
          <MovieList />
          <MovieDetails />

        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
