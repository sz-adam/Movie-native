import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constans/stlyes";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  console.log(search);

  const handleInputChange = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchItem = await axios.get(`${API_URL}${API_KEY}&s=${search}`);
        setSearchData(searchItem);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <View className="flex-row w-full justify-center items-center mt-5">
      <TextInput
        className="border w-1/2 text-center rounded-2xl p-0.5 mr-2"
        style={{ backgroundColor: GlobalStyles.colors.primary50 }}
        value={search}
        placeholder="Search..."
        onChangeText={handleInputChange}
      />
      <Icon
        name="search1"
        size={25}
        className="p-2"
        color={GlobalStyles.colors.primary50}
      />
    </View>
  );
};

export default SearchInput;
