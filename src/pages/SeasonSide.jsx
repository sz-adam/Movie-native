import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";
import { GlobalStyles } from "../constans/styles";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

const SeasonSide = ({ route }) => {
  const navigation = useNavigation();
  const { season, poster, title } = route.params;
  const [seasonSide, setSeasonSide] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await axios.get(
          `${API_URL}${API_KEY}&season=${season}&t=${title}`
        );
        setSeasonSide(details.data.Episodes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetails();
  }, []);

  const renderEpisodeItem = ({ item }) => (
    <TouchableOpacity
      className="flex-1 m-2 rounded-lg shadow-md "
      onPress={() => navigation.navigate("SessionPage", { item: item })}
    >
      <Animated.View entering={FadeInDown.delay(400 )}>
        <Image source={{ uri: poster }} className="w-full h-40 rounded-t-lg" />
        <Text
          className="text-lg font-semibold mt-2 text-center"
          style={{ color: GlobalStyles.colors.primary50 }}
        >
          {item.Title}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
      <View className="m-2">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white rounded-xl w-8 flex justify-center items-center"
        >
          <Icon name="arrow-back" size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={seasonSide}
        renderItem={renderEpisodeItem}
        numColumns={2}
        keyExtractor={(item) => item.imdbID || item.Title}
      />
    </View>
  );
};

export default SeasonSide;
