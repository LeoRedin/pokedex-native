import React from 'react'
import {View, Text} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function HomeScreen() {
  return (
    <View style={CONTAINER}>
      <Text>Home Screen</Text>
    </View>
  )
}

export {HomeScreen}
