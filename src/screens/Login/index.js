import React from 'react'
import {View, Text, Button} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

const TEXT = {
  marginBottom: 10,
}

function LoginScreen({onSignIn, navigation}) {
  return (
    <View style={CONTAINER}>
      <Text style={TEXT}>Tela de login pública</Text>
      <Button title="Login" onPress={onSignIn} />

      <Text>OU</Text>

      <Button
        title="Realizar cadastro"
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title="Esqueci minha senha"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </View>
  )
}

export {LoginScreen}
