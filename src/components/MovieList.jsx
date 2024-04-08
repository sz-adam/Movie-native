import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MovieList = ({ handleCategoryChange, category }) => {
  return (
    <View className="flex-row justify-around w-full mb-2">
      <TouchableOpacity>
        <Text
          onPress={() => handleCategoryChange("all")}
          className={`font-bold text-white ${
            category === "all" ? "text-red-500" : ""
          }`}
        >
          All
        </Text>
      </TouchableOpacity>
      <View className="flex-row w-[30%] justify-between">
        <TouchableOpacity>
          <Text
            className={`font-bold text-white ${
              category === "movie" ? "text-red-500" : ""
            }`}
            onPress={() => handleCategoryChange("movie")}
          >
            Movie
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            className={`font-bold text-white ${
              category === "series" ? "text-red-500" : ""
            }`}
            onPress={() => handleCategoryChange("series")}
          >
            Series
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieList;
