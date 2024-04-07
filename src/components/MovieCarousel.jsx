import { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/stlyes";

const PAGE_WIDTH = Dimensions.get("window").width;

const MovieCarousel = ({ data }) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieDetails", item);
  };

  return (
    <View className="mt-0 flex-1">
      <Text
        className="ml-3 mt-2 text-2xl font-bold"
        style={{ color: GlobalStyles.colors.red500 }}
      >
        N<Text style={{ color: GlobalStyles.colors.primary50 }}>ewest</Text>
      </Text>
      <Carousel
        width={PAGE_WIDTH}
        height={PAGE_WIDTH}
        vertical={false}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 100,
        }}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleClick(item)}
            className="flex items-center"
          >
            <View
              className="rounded-3xl overflow-hidden m-1 "
              style={{ width: PAGE_WIDTH * 0.75 }}
            >
              <Image
                source={item.imageUrl}
                className="w-full aspect-square "
                style={{ height: undefined }}
              />
              {/**<Text className="absolute right-3 top-1"><Icon name="hearto" size={30} /> <Icon name="heart" color={GlobalStyles.colors.red500} size={30} /> </Text> */}
              <Text className="absolute bottom-5 left-5 color-white">
                Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieCarousel;
