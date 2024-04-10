import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../constans/stlyes";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated"
import DataCard from "./DataCard";

const Card = ({ data, page, setPage }) => {
  const handleEndReached = () => {
    setPage(page + 1);
  };

  const rendelLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DataCard item={item} />}
      keyExtractor={(item) => item.imdbID}
      numColumns={2}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0}
      ListFooterComponent={rendelLoader}
    />
  );
};


export default Card;
