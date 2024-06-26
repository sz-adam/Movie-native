import { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/styles";

const PAGE_WIDTH = Dimensions.get("window").width;

const MovieCarousel = ({ data }) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieDetails", {item:item});
  };

  return (
    <View className="mt-0 h-[50%]">
    
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
                source={{ uri: item.Poster }}
                className="w-full aspect-square "
                style={{ height: undefined }}
              />
              <View
                className="w-full absolute bottom-0 p-3 "
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
        )}
      />
    </View>
  );
};

export default MovieCarousel;
