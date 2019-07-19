import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 123 },
    { name: 'Game of Thrones', price: '$15', id: 543 },
    { name: 'Great Gatsby', price: '$20', id: 789 },
    { name: 'Homebois', price: '$23', id: 3434 }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
