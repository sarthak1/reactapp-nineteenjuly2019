import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h3>Sarthak Kanungo</h3>
      <p>Number of movies:{movies.length}</p>
    </nav>
  );
};

export default Nav;
