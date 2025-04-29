import React, { useState, useEffect } from 'react';
import Movie from './movie';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import    Movieinform from './movieinform';
import Movies from './movies';
import Signin from './signin';
import Login from './login';
import Redeem from './redeem';
import Myplaza from './myplaza';
import Mylist from './mylist';

const App = () => {
  const [movies, setMovies] = useState([]);

  const api = 'https://api.themoviedb.org/3/movie/popular?api_key=ef4fc770518a5db1c9f5e4d2b7b130f5';
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
   <Router>

      <Routes>
        <Route path='/' element={<Movie movies={movies}/>} />
        <Route path='/movie/:id' element={<Movieinform movies={movies}/>} />
        <Route path='/movies/popular' element={<Movies movies={movies}/>} />
        <Route path = '/signin' element = {<Signin/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path='/redeem' element={<Redeem/>}/>
        <Route path='/myplaza' element={<Myplaza/>}/>
        <Route path='/mylist' element={<Mylist/>}/>
      </Routes>

    </Router>    
  );
};

export default App;
