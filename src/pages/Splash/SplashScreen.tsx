import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'
import { Logo } from '../../assets/illustrations'
import fonts from '../../utils/theme/fonts.util'

const SplashContainer = styled(
  View,
  clsx('bg-yellow w-screen h-screen flex flex-col justify-center items-center')
)
const SplashText = styled(
  Text,
  clsx('text-black-darkish font-medium text-[32px] mt-[30px]')
)

export default function SplashScreen() {
  return (
    <SplashContainer>
      <Logo />
      <SplashText style={fonts.poppinsMedium}>FoodMarket</SplashText>
    </SplashContainer>
  )
}
