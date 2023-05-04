import { useFonts } from 'expo-font'

export default function useGlobalFonts() {
  const [fontsLoaded] = useFonts({
    // Disable no unsafe assigment to load custom font
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf')
  })

  return fontsLoaded
}
