import clsx from 'clsx'
import { styled } from 'nativewind'
import { Text as NativeText } from 'react-native'

const baseHeading = clsx('text-black-darkish font-poppins-medium')
const HeadingOne = styled(NativeText, clsx(baseHeading, 'text-[32px]'))
const HeadingTwo = styled(NativeText, clsx(baseHeading, 'text-[22px]'))
const HeadingThree = styled(NativeText, clsx(baseHeading, 'text-xl'))

const baseBody = clsx('text-black-darkish font-poppins-regular')
const Body20 = styled(NativeText, clsx(baseBody, 'text-xl'))
const Body18 = styled(NativeText, clsx(baseBody, 'text-lg'))
const Body16 = styled(NativeText, clsx(baseBody, 'text-base'))
const Body14 = styled(NativeText, clsx(baseBody, 'text-sm'))
const Body13 = styled(NativeText, clsx(baseBody, 'text-[13px]'))
const Body12 = styled(NativeText, clsx(baseBody, 'text-xs'))

export default Object.assign(Body18, {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Body20,
  Body16,
  Body14,
  Body13,
  Body12
})
