import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/styles";
import { useFavoritesContext } from "../context/FavoritesContext";

const Header = ({ dataDetails }) => {
  const navigation = useNavigation();
  const { addFavorite } = useFavoritesContext();

  const handleAddFavorite = () => {
    addFavorite(dataDetails);
  };

  return (
    <View className="absolute z-10 w-full flex-row justify-between items-center my-2 px-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" color={GlobalStyles.colors.blue500} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddFavorite}>
        <Icon name="heart" color={GlobalStyles.colors.red500} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
