import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  View,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../constans/stlyes";

const MovieCarousel = ({ data }) => {
  const { width } = useWindowDimensions();
  const SIZE = width * 0.6;
  const scrollViewRef = useRef();
  const navigation = useNavigation();

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentSizeWidth = event.nativeEvent.contentSize.width;
    const layoutMeasurementWidth = event.nativeEvent.layoutMeasurement.width;

    // Ha elérjük a ScrollView végét, ugrunk vissza az elejére
    if (contentOffsetX + layoutMeasurementWidth >= contentSizeWidth) {
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    }
  };

  const handleClick = (item) => {
    navigation.navigate("MovieDetails", item);
  };

  return (
    <View>
      <Text
        className="text-center text-2xl font-bold"
        style={{ color: GlobalStyles.colors.red500 }}
      >
        N<Text style={{ color: GlobalStyles.colors.primary50 }}>ewest</Text>
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate="fast"
        onScroll={handleScroll}
      >
        {data.map((item) => (
          <View key={item.id} style={{ width: SIZE * 0.9 }}>
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View className="rounded-3xl overflow-hidden m-2">
                <Image
                  source={item.imageUrl}
                  className="w-full aspect-square "
                  style={{ height: undefined }}
                />
                <Text className="absolute right-3 top-1">O</Text>
                <Text className="absolute left-2 bottom-5 color-white">
                  Lorem ipsum dolor sit amet.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ width: SIZE * 0.7 }}></View>
      </ScrollView>
    </View>
  );
};

export default MovieCarousel;
