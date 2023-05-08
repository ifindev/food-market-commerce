// Disable since it produces error when extending props
/* eslint-disable @typescript-eslint/indent */
import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { PropsWithChildren } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Header } from '../../molecules'
import { HeaderProps } from '../../molecules/Header/Header.molecule'

const Container = styled(SafeAreaView, clsx('flex-1 bg-white'))
const Spacer = styled(View, clsx('h-6 bg-grey-lighterer'))
const InnerContainer = styled(View, clsx('flex-1 bg-white pt-[26px] px-6'))

type Props = PropsWithChildren<
  HeaderProps & {
    withInnerPadding?: boolean
  }
>

export default function ContainerWithHeader({
  children,
  title,
  subTitle,
  withInnerPadding,
  onPressBack
}: Props) {
  return (
    <Container>
      <Header title={title} subTitle={subTitle} onPressBack={onPressBack} />
      <Spacer />
      {withInnerPadding ? (
        <InnerContainer>{children}</InnerContainer>
      ) : (
        // Disabled since rendering without fragment is error
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
      )}
    </Container>
  )
}
