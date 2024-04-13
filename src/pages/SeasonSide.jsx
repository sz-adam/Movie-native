import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";

import { API_URL } from "@env";
import { API_KEY } from "@env";

const SeasonSide = ({route}) => {
    const { season } = route.params;
    const [seasonSide, setSeasonSide] =useState([])

    console.log(season)

    useEffect(() => {
        const fetchDetails = async () => {
          try {
            const details = await axios.get(`${API_URL}${API_KEY}&season=${season}&t=Arrow`);
            console.log(details.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchDetails();
      }, []);
  return (
    <View>
      <Text>SeasonSide</Text>
    </View>
  )
}

export default SeasonSide