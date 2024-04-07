import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import React from "react";
import { GlobalStyles } from "../constans/stlyes";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data,page,setPage }) => {
  

  const handleEndReached = () => {
    setPage(page + 1);   
  };

  const rendelLoader=()=>{
    return(
      <View>
        <ActivityIndicator size="large" color="#aaa"/>
      </View>
    )
  }
  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DataCard item={item} />}
      keyExtractor={(item) => item.imdbID}
      numColumns={2}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0}  
      ListFooterComponent={rendelLoader} 
    />
  );
};

const DataCard = ({ item }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieDetails", item);
  };

  return (
    <TouchableOpacity
      onPress={() => handleClick(item)}
      className="flex-1 justify-center items-center m-3"
    >
      <View>
        <Image
          source={{ uri: item.Poster }}
          className="w-full aspect-square m-3 rounded-2xl"
          style={{ height: undefined }}
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

export default Card;
