import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { View } from 'react-native'
import { Text } from '../../atoms'

const Container = styled(
  View,
  clsx(
    'bg-white flex flex-row justify-between items-center h-[108px] py-[30px] px-6'
  )
)

const SubTitle = styled(
  Text.Body14,
  clsx('text-grey-lightish font-poppins-light')
)

type Props = {
  title: string
  subTitle: string
}

export default function Header({ title, subTitle }: Props) {
  return (
    <Container>
      <View>
        <Text.HeadingTwo>{title}</Text.HeadingTwo>
        <SubTitle>{subTitle}</SubTitle>
      </View>
    </Container>
  )
}
