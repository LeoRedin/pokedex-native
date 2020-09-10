import React from 'react'
import {Button, TouchableOpacity, Text} from 'react-native'
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {
  HomeScreen,
  LandingScreen,
  LoginScreen,
  SignupScreen,
  ForgotPasswordScreen,
  PasswordChangeScreen,
  AccountScreen,
  AdminScreen,
  ProfileScreen,
} from './src/screens'

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="ChangePassword" component={PasswordChangeScreen} />
      <Drawer.Screen name="Admin" component={AdminScreen} />
    </Drawer.Navigator>
  )
}

const RootStack = createStackNavigator()

export default function App() {
  const [isAutenticated, setIsAuthenticated] = React.useState(false)

  function handleSignIn() {
    // implementar lógica de login
    setIsAuthenticated(true)
  }

  function handleSignOut() {
    // implementar a lógica de logout
    setIsAuthenticated(false)
  }

  function handleSignup() {
    // implementar a lógica de cadastro
    setIsAuthenticated(true)
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAutenticated ? (
          <>
            <RootStack.Screen
              name="Home"
              component={HomeDrawer}
              options={({route, navigation}) => ({
                headerTitle: getFocusedRouteNameFromRoute(route),
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                  >
                    <Text>Menu</Text>
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <Button title="Sair" onPress={handleSignOut} />
                ),
              })}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
            <RootStack.Screen name="Login">
              {(props) => <LoginScreen {...props} onSignIn={handleSignIn} />}
            </RootStack.Screen>
            <RootStack.Screen name="Signup">
              {(props) => <SignupScreen {...props} onSignup={handleSignup} />}
            </RootStack.Screen>
            <RootStack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
