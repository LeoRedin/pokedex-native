import React from 'react'
import {View, Text, Button} from 'react-native'

const CONTAINER = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

function LandingScreen({navigation}) {
  return (
    <View style={CONTAINER}>
      <Text>Landing Screen</Text>
      <Button
        title="Fazer login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

export {LandingScreen}
