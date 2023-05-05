import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { TextInput, View } from 'react-native'
import { Text } from '../../atoms'

const Input = styled(
  TextInput,
  clsx(
    'h-12 p-[10px] mt-[6px] rounded-lg border border-gray-600 text-black-darkish font-poppins-regular'
  )
)

type Props = {
  label: string
  text: string
  placeholder: string
  currentlyFocused?: boolean
  isPasswordField?: boolean
  onChangeText: (text: string) => void
  onBlur: () => void
  onFocus: () => void
}

export default function InputText({
  label,
  text,
  placeholder,
  currentlyFocused = false,
  isPasswordField = false,
  onChangeText,
  onBlur,
  onFocus
}: Props) {
  return (
    <View>
      <Text.Body16>{label}</Text.Body16>
      <Input
        style={{ fontSize: 14 }}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
        className={clsx(
          `${currentlyFocused ? 'border-green-active' : 'border-gray-600'}`
        )}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordField}
        autoCapitalize="none"
        autoCorrect={false}
        enablesReturnKeyAutomatically
      />
    </View>
  )
}
