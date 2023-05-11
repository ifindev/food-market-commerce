import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { Pressable, View } from 'react-native'
import { ChevronBack } from '../../../assets/icons'
import { Text } from '../../atoms'

const Container = styled(View, clsx('bg-white flex flex-row items-center h-[108px] py-[30px] px-6'))
const TextContainer = styled(View)
const BackButton = styled(Pressable, clsx('p-4 pl-0 mr-4'))
const SubTitle = styled(Text.Body14, clsx('text-grey-lightish font-poppins-light'))

export type HeaderProps = {
  title: string
  subTitle: string
  onPressBack?: () => void
}

export default function Header({ title, subTitle, onPressBack }: HeaderProps) {
  return (
    <Container>
      {onPressBack && (
        <BackButton onPress={onPressBack} hitSlop={20}>
          <ChevronBack />
        </BackButton>
      )}
      <TextContainer>
        <Text.HeadingTwo>{title}</Text.HeadingTwo>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
    </Container>
  )
}
