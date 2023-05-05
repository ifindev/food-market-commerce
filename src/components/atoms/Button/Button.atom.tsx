import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text/Text.atom'

enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger'
}

const baseButton = clsx(
  'flex py-3 rounded-lg h-[45px] items-center justify-center'
)
const buttonVariants: Record<Variant, string> = {
  primary: clsx(baseButton, 'bg-yellow'),
  secondary: clsx(baseButton, 'bg-grey-lightish'),
  danger: clsx(baseButton, 'bg-red-danger')
}
const ButtonComponent = styled(TouchableOpacity)

const ButtonText = styled(Text.Body14, clsx('font-poppins-medium'))

type Props = {
  text: string
  variant: keyof typeof Variant
  onClick: () => void
}
export default function Button({ text, variant, onClick }: Props) {
  return (
    <ButtonComponent
      activeOpacity={0.8}
      onPress={onClick}
      className={clsx(buttonVariants[variant])}
    >
      <ButtonText className={clsx(variant !== Variant.primary && 'text-white')}>
        {text}
      </ButtonText>
    </ButtonComponent>
  )
}
