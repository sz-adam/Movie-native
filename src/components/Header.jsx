import {
  View,
  Text,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../constans/styles";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute z-10 w-full flex-row justify-between items-center my-2 px-2">
      <TouchableOpacity>
        <Icon
          name="arrow-back"
          color={GlobalStyles.colors.blue500}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" color={GlobalStyles.colors.red500} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
