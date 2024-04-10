import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../constans/stlyes";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";

const DataCard = ({item}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { item: item })}
      className="flex-1 justify-center items-center m-3"
    >
      <View>
        <Animated.Image
          source={{ uri: item.Poster }}
          className="w-full aspect-square m-3 rounded-2xl"
          style={{ height: undefined }}
          sharedTransitionTag={`Poster-${item.imdbID}`}
        />
        {/**<Text className="absolute right-3 top-1"><Icon name="hearto" size={30} /> <Icon name="heart" color={GlobalStyles.colors.red500} size={30} /> </Text> */}
        <View
          className="w-full absolute bottom-0 m-3 p-1 rounded-b-2xl"
          style={{
            backgroundColor: GlobalStyles.colors.primary50,
            opacity: 0.7,
          }}
        >
          <View>
            <Text className="font-bold color-black text-center">
              {item.Title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DataCard;
