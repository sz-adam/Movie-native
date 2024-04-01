import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import MovieCarousel from "../components/MovieCarousel";

const HomeScreen = () => {

  const data = [
    { imageUrl: require("../../assets/i1.jpeg") },
    { imageUrl: require("../../assets/i2.jpeg") },
    { imageUrl: require("../../assets/i3.jpeg") },
    { imageUrl: require("../../assets/i2.jpeg") },
    { imageUrl: require("../../assets/i1.jpeg") },
    { imageUrl: require("../../assets/i2.jpeg") },
  ];
  return (
    <View className="flex-1 items-center justify-center">

   
        <MovieCarousel data={data}/>

     
    </View>
  );
};

export default HomeScreen;
