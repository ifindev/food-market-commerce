import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { View } from 'react-native'
import { Logo } from '../../assets/illustrations'
import { Text } from '../../components/atoms'

const SplashContainer = styled(
  View,
  clsx('bg-yellow w-screen h-screen flex flex-col justify-center items-center')
)
const SplashText = styled(Text.HeadingOne, clsx('mt-[30px]'))

export default function SplashView() {
  return (
    <SplashContainer>
      <Logo />
      <SplashText>FoodMarket</SplashText>
    </SplashContainer>
  )
}
