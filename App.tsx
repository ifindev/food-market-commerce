import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import useGlobalFonts from './src/hooks/useGlobalFonts/useGlobalFonts.hook'
import SignInView from './src/views/SignIn/SignIn.view'

export default function App() {
  const fontsLoaded = useGlobalFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      {/* <SplashView /> */}
      <SignInView />
    </NavigationContainer>
  )
}
