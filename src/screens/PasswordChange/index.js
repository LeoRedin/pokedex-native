import React from 'react'
import {View, Text} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function PasswordChangeScreen() {
  return (
    <View style={CONTAINER}>
      <Text>Tela de troca de senha</Text>
    </View>
  )
}

export {PasswordChangeScreen}
