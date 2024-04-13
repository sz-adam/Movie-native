import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../constans/styles";
import SearchInput from "../components/SearchInput";
import DataCard from "../components/DataCard";

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  return (
    <View
      className="flex-1 "
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >    
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
