import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/stlyes";
import SearchInput from "../components/SearchInput";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View
      className="flex-1 "
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
      <View className="flex-row ">
        <TouchableOpacity
          className="mt-2 pl-2"
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="arrow-back"
            color={GlobalStyles.colors.primary50}
            size={30}
          />
        </TouchableOpacity>
        <Text
          className="mt-2 text-2xl font-bold text-center flex-1"
          style={{ color: GlobalStyles.colors.red500 }}
        >
          S<Text style={{ color: GlobalStyles.colors.primary50 }}>earch</Text>
        </Text>
      </View>
      <SearchInput />
    </View>
  );
};

export default Search;
