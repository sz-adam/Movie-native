import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import MovieCarousel from "../components/MovieCarousel";
import { GlobalStyles } from "../constans/stlyes";

const HomeScreen = () => {

  const data = [
    {id:1, imageUrl: require("../../assets/i1.jpeg") },
    {id:2, imageUrl: require("../../assets/i2.jpeg") },
    {id:3, imageUrl: require("../../assets/i3.jpeg") },
    {id:4, imageUrl: require("../../assets/i2.jpeg") },
    {id:5, imageUrl: require("../../assets/i1.jpeg") },
    {id:6, imageUrl: require("../../assets/i2.jpeg") },
  ];
  return (
    <View className="flex-1 items-center justify-center" style={{backgroundColor:GlobalStyles.colors.gray500}}>

   
        <MovieCarousel data={data}/>

     
    </View>
  );
};

export default HomeScreen;
