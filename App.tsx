import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import useGlobalFonts from './src/hooks/useGlobalFonts/useGlobalFonts.hook'
import Router from './src/router/Router'

export default function App() {
  const fontsLoaded = useGlobalFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}
