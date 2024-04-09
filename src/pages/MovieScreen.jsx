import { Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";

export default function MovieScreen({ route }) {
  const { item } = route.params;
  const { width } = useWindowDimensions();
  const [dataDetails, setDataDetails] = useState("");

  const imdbID = item?.imdbID;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await axios.get(`${API_URL}${API_KEY}&i=${imdbID}`);
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
      <Image
        sharedTransitionTag="sharedTag"
        style={{ width: width, height: width }}
        source={{ uri: dataDetails.Poster }}
      />        
    </View>
  );
}


