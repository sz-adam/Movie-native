import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";
import { GlobalStyles } from "../constans/styles";
import Icon from "react-native-vector-icons/AntDesign";
import HeaderRightButton from "../components/HeaderRightButton";
import { useFavoritesContext } from "../context/FavoritesContext";
import Animated, {FadeInUp,FadeInRight } from "react-native-reanimated";


const SessionPageScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [episod, setEpisod] = useState("");
  const { width } = useWindowDimensions();
  const { addFavorite, isFavorite, removeFavorite } = useFavoritesContext();

  const imdbID = item?.imdbID;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButton
          isFavorite={isFavorite(episod.imdbID)}
          AddFavorite={() => addFavorite(episod)}
          RemoveFavorite={() => removeFavorite(episod.imdbID)}
        />
      ),
    });
  }, [navigation, addFavorite, removeFavorite, isFavorite, episod]);

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
      <Animated.Image 
         entering={FadeInRight.duration(1000)}
        style={{ width: width, height: width }}
        source={{ uri: episod.Poster }}
      />
      <ScrollView>
        <Animated.View entering={FadeInUp.duration(800)}>
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
              <Text className="color-white text-center">{episod?.Genre} </Text>
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
              <Text className="color-white text-center"> {episod?.Plot} </Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default SessionPageScreen;
