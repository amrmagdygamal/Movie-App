import { useState, useEffect } from 'react';

import './App.css';
import MovieCard from './MovieCard';
import searchIcom from './search.svg';
//cec885ee

const API_URL = 'http://www.omdbapi.com?apikey=cec885ee';

const App = () => {
const [movies, setmovies] = useState([]);
const [searchTerm, setsearchTerm] = useState('');

const searchMovies = async (title) => {

  const response = await fetch(`${API_URL}&s=${title}`);

  const data = await response.json();
  console.log(data);

  setmovies(data.Search);

}

useEffect(() => {
  searchMovies("Spiderman");
}, []);

return (
  <div className='app'>
  <h1>MovieLand</h1>

  <div className="search">
    <input 
      type="text"
      placeholder='Search for movies'
      value={searchTerm}
      onChange={(e) => setsearchTerm(e.target.value)}
    />
    <img src={searchIcom} 
        alt="search"
        onClick={() => searchMovies(searchTerm)}
    />
  </div>

  {movies?.length > 0
    ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No Movies found</h2>
      </div>
    )}
    <div className='eee'></div>
  </div>
  );
};

export default App;

