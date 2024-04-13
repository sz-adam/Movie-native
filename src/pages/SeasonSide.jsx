import { View, Text } from 'react-native'
import React from 'react'

const SeasonSide = ({route}) => {
    const { season } = route.params;

    console.log(season)
  return (
    <View>
      <Text>SeasonSide</Text>
    </View>
  )
}

export default SeasonSide