import React from 'react'
import {View, Text, Button} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function SignupScreen({onSignup}) {
  return (
    <View style={CONTAINER}>
      <Text>Tela de cadastro pública</Text>
      <Button onPress={onSignup} title="Realizar cadastro" />
    </View>
  )
}

export {SignupScreen}
