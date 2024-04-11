import React from "react";
import { View, FlatList } from "react-native";
import { useFavoritesContext } from "../context/FavoritesContext";
import DataCard from "../components/DataCard";
import { GlobalStyles } from "../constans/styles";

const FavoriteScreen = () => {
  const { favorites } = useFavoritesContext();
  console.log(favorites);

  return (
    <View className="flex-1"
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <DataCard item={item} />}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
      />
    </View>
  );
};

export default FavoriteScreen;
