import {
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useLayoutEffect } from "react";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

import { API_URL } from "@env";
import { API_KEY } from "@env";
import { GlobalStyles } from "../constans/styles";
import Season from "../components/Season";
import { useFavoritesContext } from "../context/FavoritesContext";
import HeaderRightButton from "../components/HeaderRightButton";
import Animated, {FadeInUp,FadeInRight } from "react-native-reanimated";


export default function MovieScreen({ route, navigation }) {
  const { item } = route.params;
  const { width } = useWindowDimensions();
  const [dataDetails, setDataDetails] = useState("");
  const { addFavorite, isFavorite, removeFavorite } = useFavoritesContext();

  const imdbID = item?.imdbID;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButton
          isFavorite={isFavorite(dataDetails.imdbID)}
          AddFavorite={() => addFavorite(dataDetails)}
          RemoveFavorite={() => removeFavorite(dataDetails.imdbID)}
        />
      ),
    });
  }, [navigation, addFavorite, removeFavorite, isFavorite, dataDetails]);

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
    <View   
      className="flex-1"
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
      <Animated.Image        
        style={{ width: width, height: width }}
        source={{ uri: item.Poster }}
        entering={FadeInRight.duration(1000)}
      />
      <ScrollView>
        <Animated.View entering={FadeInUp.duration(800)}>
          <Text className="color-white text-center text-2xl py-2">
            {dataDetails.Title}
          </Text>
          <View>
            <View className="color-white py-2">
              <Text className="color-white text-center">
                Released : {dataDetails.Year} - {dataDetails.Runtime}
              </Text>
            </View>
            <View className="color-white py-2">
              <Text className="color-white text-center">
                {dataDetails.Type} - {dataDetails.Genre}{" "}
              </Text>
            </View>
            <View className="color-white  py-2">
              <Text className="color-white text-center">
                Language : {dataDetails.Language}{" "}
              </Text>
            </View>
            <View className="color-white  py-2 ">
              <Text className="color-white text-center">
                {" "}
                {dataDetails.Actors}{" "}
              </Text>
            </View>
            <View className="color-white  py-2">
              <Text className="color-white text-center">
                <Icon name="star" color={GlobalStyles.colors.accent500} />{" "}
                {dataDetails.imdbRating}{" "}
              </Text>
            </View>
            {dataDetails.Type === "series" ? (
              <View className="color-white  py-2 ">
                <Text className="color-white text-center">
                  {" "}
                  Season : {dataDetails.totalSeasons}{" "}
                </Text>
              </View>
            ) : (
              ""
            )}
            <View className="color-white  py-2 m-5">
              <Text className="color-white text-center">
                {" "}
                {dataDetails.Plot}{" "}
              </Text>
            </View>
            <Season
              totalSeasons={dataDetails.totalSeasons}
              poster={dataDetails.Poster}
              title={dataDetails.Title}
            />
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
