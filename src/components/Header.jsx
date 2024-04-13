import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/styles";
import { useFavoritesContext } from "../context/FavoritesContext";

const Header = ({ dataDetails }) => {
  const navigation = useNavigation();
  const { addFavorite, isFavorite, removeFavorite } = useFavoritesContext();

  const handleAddFavorite = () => {
    addFavorite(dataDetails);
  };

  return (
    <View className="absolute z-10 w-full flex-row justify-between items-center my-2 px-2">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-white rounded-xl w-8 flex justify-center items-center"
      >
        <Icon name="arrow-back" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddFavorite}>
        <Icon
          name={isFavorite(dataDetails.imdbID) ? "heart" : "heart-outline"}
          size={36}
          style={{ color: "red" }}
          onPress={() => {
            if (isFavorite(dataDetails.imdbID)) {
              removeFavorite(dataDetails.imdbID);
            } else {
              addFavorite(dataDetails);
            }
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
