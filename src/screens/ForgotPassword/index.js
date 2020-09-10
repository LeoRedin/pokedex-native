import React from 'react'
import {View, Text} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function ForgotPasswordScreen() {
  return (
    <View style={CONTAINER}>
      <Text>Tela de esqueci minha senha</Text>
    </View>
  )
}

export {ForgotPasswordScreen}
