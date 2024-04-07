import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MovieList = () => {
  return (
    <View className="flex-row justify-around w-full">
      <TouchableOpacity>
        <Text className="font-bold text-white">All</Text>
      </TouchableOpacity>
      <View className="flex-row w-[30%] justify-between">
        <TouchableOpacity>
          <Text className="font-bold text-white">Movie</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-bold text-white">Series</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieList;
