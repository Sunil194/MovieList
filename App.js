import React, { useState } from 'react';
import './App.css';

import MovieList from './components/MovieList';

function App() {
  const [ movies, setMovies]= useState([]);
  function fetchDataHandler() {
    fetch('https://swapi.dev/api/films').then(response => {
      return response.json();
    }).then(data => {
      const transformMovies = data.results.map(movieData => {
      return{
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date
      }
    });
      setMovies(transformMovies);
    })
  }
  return (
    <div className="App">
      
    <button onClick={fetchDataHandler}>fetch</button>
    <MovieList movies = {movies} />
    
    
    </div>
  );
}

export default App;
