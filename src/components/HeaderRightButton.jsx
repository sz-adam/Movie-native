

import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderRightButton = ({ isFavorite, AddFavorite, RemoveFavorite }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {isFavorite ? (
        <TouchableOpacity onPress={RemoveFavorite}>
          <Icon name="heart" size={30} style={{ color: "red" }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={AddFavorite}>
          <Icon name="heart-outline" size={30} style={{ color: "red" }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderRightButton;
