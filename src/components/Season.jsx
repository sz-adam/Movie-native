import React from "react";
import { 
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../constans/styles";

const Season = ({ totalSeasons, poster }) => {
  const seasonsArray = Array.from(
    { length: totalSeasons },
    (_, index) => index + 1
  );
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row ">
      {seasonsArray.map((season) => (
        <TouchableOpacity
          key={season}
          className="mx-2 mb-2 text-center flex justify-center items-center "
        >
          <Image source={{ uri: poster }} className="w-14 h-14 rounded-full" />
          <Text
            style={{ color: GlobalStyles.colors.primary50 }}
            className="text-xs"
          >
            {" "}
            Season {season}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Season;
