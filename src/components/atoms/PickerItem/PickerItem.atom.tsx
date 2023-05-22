import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Container = styled(View, clsx('px-2 py-4 bg-white'))

type Props = {
  item: string
  selected?: boolean
  currentFocus?: boolean
  onPress(): void
  onLongPress(): void
}

export default function PickerItem({ item, selected, currentFocus, onPress, onLongPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      delayLongPress={200}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Container
        className={clsx(
          `${selected && 'bg-gray-200'}`,
          `${currentFocus && !selected && 'bg-gray-100'}`
        )}
      >
        <Text>{item}</Text>
      </Container>
    </TouchableOpacity>
  )
}
