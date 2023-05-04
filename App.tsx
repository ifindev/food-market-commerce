import React from 'react'
import useGlobalFonts from './src/hooks/useGlobalFonts/useGlobalFonts.hook'
import SplashScreen from './src/pages/Splash/SplashScreen'

export default function App() {
  const fontsLoaded = useGlobalFonts()

  if (!fontsLoaded) {
    return null
  }

  return <SplashScreen />
}
