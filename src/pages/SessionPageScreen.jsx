import { View, Text, Image, ScrollView, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";
import { GlobalStyles } from "../constans/styles";
import Icon from "react-native-vector-icons/AntDesign";
import Header from "../components/Header";


const SessionPageScreen = ({ route }) => {
  const { item } = route.params;
  const [episod, setEpisod] =useState("")
  const { width } = useWindowDimensions();

  console.log(item);

  const imdbID = item?.imdbID;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await axios.get(`${API_URL}${API_KEY}&i=${imdbID}`);
        setEpisod(details.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <View
    className="flex-1"
    style={{ backgroundColor: GlobalStyles.colors.gray500 }}
  >
  <Header dataDetails={episod}/>
    <Image
      sharedTransitionTag="sharedTag"
      style={{ width: width, height: width }}
      source={{ uri: episod.Poster }}
    />
    <ScrollView>
      <View>
        <Text className="color-white text-center text-2xl py-2">
          {episod?.Title}
        </Text>
        <View>
          <View className="color-white py-2">
            <Text className="color-white text-center">
              Released : {episod?.Year} - {episod?.Runtime}
            </Text>
          </View>
          <View className="color-white py-2">
            <Text className="color-white text-center">
             {episod?.Genre}{" "}
            </Text>
          </View>
          <View className="color-white  py-2">
            <Text className="color-white text-center">
              Language : {episod?.Language}{" "}
            </Text>
          </View>
          <View className="color-white  py-2 ">
            <Text className="color-white text-center">
              {" "}
              {episod?.Actors}{" "}
            </Text>
          </View>
          <View className="color-white  py-2">
            <Text className="color-white text-center">
              <Icon name="star" color={GlobalStyles.colors.accent500} />{" "}
              {episod?.imdbRating}{" "}
            </Text>
          </View>
         
          <View className="color-white  py-2 m-5">
            <Text className="color-white text-center">
              {" "}
              {episod?.Plot}{" "}
            </Text>
          </View>         
        </View>
      </View>
    </ScrollView>
  </View>
  );
};

export default SessionPageScreen;
