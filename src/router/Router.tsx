import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignInView from '../views/SignIn/SignIn.view'
import SignUpView from '../views/SignUp/SingUp.view'

export type StackParams = {
  SignIn: undefined
  SignUp: undefined
}

const Stack = createStackNavigator<StackParams>()

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignInView} />
      <Stack.Screen name="SignUp" component={SignUpView} />
    </Stack.Navigator>
  )
}
