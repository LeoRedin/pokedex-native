import React from 'react'
import {View, Text} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function AdminScreen() {
  return (
    <View style={CONTAINER}>
      <Text>Tela de admin</Text>
    </View>
  )
}

export {AdminScreen}
