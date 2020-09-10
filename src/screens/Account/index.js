import React from 'react'
import {View, Text} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function AccountScreen() {
  return (
    <View style={CONTAINER}>
      <Text>Tela de conta</Text>
    </View>
  )
}

export {AccountScreen}
