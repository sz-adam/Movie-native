import React, { useRef } from "react";
import {
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

const MovieCarousel = ({ data }) => {
  const { width } = useWindowDimensions();
  const SIZE = width * 0.6;
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentSizeWidth = event.nativeEvent.contentSize.width;
    const layoutMeasurementWidth = event.nativeEvent.layoutMeasurement.width;

    // Ha elérjük a ScrollView végét, ugrunk vissza az elejére
    if (contentOffsetX + layoutMeasurementWidth >= contentSizeWidth) {
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    }
  };

  return (
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
        <View key={item.id} style={{ width: SIZE * 0.7 }}>
          <View className="rounded-3xl overflow-hidden m-2">
            <Image
              source={item.imageUrl}
              className="w-full aspect-square "
              style={{ height: undefined }}
            />
          </View>
        </View>
      ))}    
      <View style={{ width: SIZE * 0.7 }}></View>
    </ScrollView>
  );
};

export default MovieCarousel;
