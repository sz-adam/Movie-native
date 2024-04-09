import { Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Animated from "react-native-reanimated";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";

export default function MovieScreen({ navigation, route }) {
  const { item } = route.params;
  const { width } = useWindowDimensions();
  const [dataDetails, setDataDetails] = useState("");

  const imdbID = item?.imdbID;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await axios.get(`${API_URL}${API_KEY}&i=${imdbID}`);
        console.log(details.data)
        setDataDetails(details.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <View className="flex-1">
      <Header />
      <Animated.Image
        sharedTransitionTag="sharedTag"
        style={{ width: width, height: width }}
        source={{ uri: dataDetails.Poster }}
      />
      <View>
      {/* Itt jelenítsd meg a dataDetails-t */}
      {/* Például, ha az adatok egy objektumot tartalmaznak, akkor így */}

        <View className="absolute z-15 bg-black w-full h-screen border-t-2xl">
          <Text className="color-white text-center text-2xl pt-2">{dataDetails.Title}</Text>
       
        </View>
     
    </View>
    </View>
  );
}


