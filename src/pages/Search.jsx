import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/stlyes";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View
      className="flex-1 "
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
      <TouchableOpacity
        className="mt-2 ml-2"
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="arrow-back"
          color={GlobalStyles.colors.primary50}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
