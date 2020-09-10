import React from 'react'
import {View, Text} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function ProfileScreen() {
  return (
    <View style={CONTAINER}>
      <Text>Tela de perfil</Text>
    </View>
  )
}

export {ProfileScreen}
