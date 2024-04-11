import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constans/styles";
import SearchInput from "../components/SearchInput";
import DataCard from "../components/DataCard";

const Search = () => {
  const navigation = useNavigation();
  const [searchData, setSearchData] = useState([]);

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
      <SearchInput setSearchData={setSearchData} />
      <FlatList
        data={searchData}
        renderItem={({ item }) => <DataCard item={item} />}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default Search;
