import { View, Text } from 'react-native'
import React from 'react'

export default function MovieScreen({route}) {
  const { item } = route.params;
  console.log(item?.imdbID)
  return (
    <View>
      <Text>Movie</Text>
    </View>
  )
}