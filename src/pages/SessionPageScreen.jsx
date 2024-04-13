import { View, Text } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";

const SessionPageScreen = ({ route }) => {
  const { item } = route.params;
  console.log(item);

  const imdbID = item?.imdbID;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await axios.get(`${API_URL}${API_KEY}&i=${imdbID}`);
        console.log(details.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <View>
      <Text>SessionPageScreen</Text>
    </View>
  );
};

export default SessionPageScreen;
