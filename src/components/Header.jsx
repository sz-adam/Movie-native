import { View, Text, Pressable, Platform } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { GlobalStyles } from "../constans/stlyes";
import { useNavigation } from "@react-navigation/native";


const Header = () => {
    const navigation = useNavigation();

  return (
    <View className="absolute z-10 w-full flex-row justify-between items-center my-2 px-2" 
   
    >
      <Pressable onPress={() => navigation.goBack()}>
       
        <Icon name="back" color={GlobalStyles.colors.red500} size={30} />
      </Pressable>
      <Icon name="heart" color={GlobalStyles.colors.red500} size={30} />
    </View>
  );
};

export default Header;
