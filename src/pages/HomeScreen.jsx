import { View} from "react-native";
import React, { useEffect, useState } from "react";
import MovieCarousel from "../components/MovieCarousel";
import { GlobalStyles } from "../constans/stlyes";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";
import MovieList from "../components/MovieList";
import Card from "../components/Card";

const HomeScreen = () => {
  const [yearData, setYearData] = useState([]);
  const [data, setData] = useState([]);
  const year = new Date().getFullYear();
  const [page, setPage] = useState(1);
  /**carousel endpoint */
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
        setYearData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /**Card endpoint */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await axios.get(
          `${API_URL}${API_KEY}&s=movie&page=${page}`
        );
        const series = await axios.get(
          `${API_URL}${API_KEY}&s=series&page=${page}`
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
  }, [page]);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
      <View className="flex-1">
        <MovieCarousel data={yearData} />
        <MovieList />
        <Card data={data} page={page} setPage={setPage} />
      </View>
    </View>
  );
};

export default HomeScreen;
