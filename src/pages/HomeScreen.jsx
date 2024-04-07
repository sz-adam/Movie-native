import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCarousel from "../components/MovieCarousel";
import { GlobalStyles } from "../constans/stlyes";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await axios.get(
          `${API_URL}${API_KEY}&y=${year}&s=movie`
        );
        const series = await axios.get(
          `${API_URL}${API_KEY}&y=${year}&s=series`
        );
        const combinedData = [...movies.data.Search, ...series.data.Search];
        const filteredData = combinedData.filter(
          (item) => item.Poster !== "N/A"
        );
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
      <MovieCarousel data={data} />
    </View>
  );
};

export default HomeScreen;
