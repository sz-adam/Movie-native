import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create FavoritesContext
const FavoritesContext = createContext();

// FavoritesProvider  state, action
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = (movieimdbID) =>
    favorites.some((movie) => movie.imdbID === movieimdbID);

  // add favorite
  const addFavorite = async (item) => {
    try {
      setFavorites([item, ...favorites]);
      // save az async storage
      await AsyncStorage.setItem(
        "favorites",
        JSON.stringify([item, ...favorites])
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //load
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites !== null) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    loadFavorites();
  }, []);
  //delete
  const removeFavorite = (itemimdbID) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.imdbID !== itemimdbID)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, isFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
