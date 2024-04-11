import React, { createContext, useState, useContext } from 'react';

// create FavoritesContext 
const FavoritesContext = createContext();

// FavoritesProvider  state, action
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // add favorite
  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
