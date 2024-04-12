import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

//Display notification
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// create FavoritesContext
const FavoritesContext = createContext();

// FavoritesProvider  state, action
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  async function scheduleNotificationHandler({ item }) {
    // are there notifications
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      // permission request/engedély kérés
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    //notification settings
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Added to Favorites",
        body: `${item.Title}`,
      },
      trigger: {
        seconds: 1,
      },
    });
  }

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
      scheduleNotificationHandler({ item });
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
