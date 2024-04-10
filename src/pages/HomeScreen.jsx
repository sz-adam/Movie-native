import { Text, View } from "react-native";
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
  const [category, setCategory] = useState("all");

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
        let movies, series;
        if (category === "movie") {
          movies = await axios.get(`${API_URL}${API_KEY}&s=movie&page=${page}`);
          setData([...data, ...movies.data.Search]);
        } else if (category === "series") {
          series = await axios.get(
            `${API_URL}${API_KEY}&s=series&page=${page}`
          );
          setData([...data, ...series.data.Search]);
        } else {
          movies = await axios.get(`${API_URL}${API_KEY}&s=movie&page=${page}`);
          series = await axios.get(
            `${API_URL}${API_KEY}&s=series&page=${page}`
          );
          const combinedData = [...movies.data.Search, ...series.data.Search];
          setData([...data, ...combinedData]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
    setData([]);
    setPage(1);
  };

  return (
    <View
      className="flex-1 "
      style={{ backgroundColor: GlobalStyles.colors.gray500 }}
    >
        <Text
        className="ml-3 mt-2 text-2xl font-bold"
        style={{ color: GlobalStyles.colors.red500 }}
      >
        N<Text style={{ color: GlobalStyles.colors.primary50 }}>ewest</Text>
      </Text>
      <View className="flex-1">
        <MovieCarousel data={yearData} />
        <MovieList
          handleCategoryChange={handleCategoryChange}
          category={category}
        />
        <Card data={data} page={page} setPage={setPage} />
      </View>
    </View>
  );
};

export default HomeScreen;
