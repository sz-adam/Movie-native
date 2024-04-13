import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../constans/styles";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

const DataCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { item: item })}
      className="flex-1 justify-center items-center m-3"
    >
      <Animated.View entering={FadeInDown.delay(400)}>
        <Animated.Image
          source={{ uri: item.Poster }}
          className="w-full aspect-square m-3 rounded-2xl"
          style={{ height: undefined }}        
        />
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
      </Animated.View>
    </TouchableOpacity>
  );
};

export default DataCard;
