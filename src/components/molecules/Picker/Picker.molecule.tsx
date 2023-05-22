import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { ChevronDown } from '../../../assets/icons'
import { PickerItem } from '../../atoms'

const InputContainer = styled(View, clsx('relative'))
const InputIconContainer = styled(View, clsx('absolute right-2 top-5'))
const OptionsContainer = styled(View, clsx('border border-black-darkish w-full mt-1 rounded-lg'))
const Input = styled(
  TextInput,
  clsx(
    'h-12 p-[10px] pr-7 mt-[6px] rounded-lg border border-gray-600 text-black-darkish font-poppins-regular'
  )
)

export type PickerDataProps = {
  id: string
  label: string
  value: string
}

type Props = {
  label: string
  placeholder?: string
  currentlyFocused?: boolean
  data: PickerDataProps[]
  selectedItem: PickerDataProps
  onFocus: () => void
  onBlur: () => void
  onSelectedItem: (value: PickerDataProps) => void
}

export default function Picker({
  data,
  label,
  placeholder,
  currentlyFocused,
  selectedItem,
  onFocus,
  onBlur,
  onSelectedItem
}: Props) {
  const [currentPressed, setCurrentPressed] = useState('')
  const [isOptionsShown, setIsOptionsShown] = useState(false)

  useEffect(() => {
    if (isOptionsShown && !currentlyFocused) {
      setIsOptionsShown(false)
    }
  }, [currentlyFocused, isOptionsShown])

  const onPressInput = useCallback(() => {
    if (!isOptionsShown) {
      onFocus()
      setIsOptionsShown(true)
      setCurrentPressed(selectedItem.id)

      return
    }

    onBlur()
    setIsOptionsShown(false)
  }, [isOptionsShown, selectedItem, onFocus, onBlur])

  const handleSelectedValue = useCallback(
    (item: PickerDataProps) => {
      onBlur()
      setCurrentPressed(item.id)
      onSelectedItem(item)
      setIsOptionsShown(false)
    },
    [onSelectedItem, onBlur]
  )

  return (
    <View>
      <Text>{label}</Text>
      <InputContainer>
        <Input
          className={clsx(`${currentlyFocused ? 'border-green-active' : 'border-gray-600'}`)}
          editable={false}
          value={selectedItem.value}
          placeholder={placeholder}
          onPressIn={onPressInput}
        />
        <InputIconContainer className={clsx(`${isOptionsShown && 'rotate-180'}`)}>
          <ChevronDown />
        </InputIconContainer>
      </InputContainer>
      <OptionsContainer className={clsx(`${isOptionsShown ? 'block h-60' : ' h-0 hidden'}`)}>
        <FlatList
          style={{ borderRadius: 8 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PickerItem
              key={item.label}
              item={item.value}
              selected={item.id === selectedItem.id}
              currentFocus={item.id === currentPressed}
              onPress={() => handleSelectedValue(item)}
              onLongPress={() => setCurrentPressed(item.id)}
            />
          )}
        />
      </OptionsContainer>
    </View>
  )
}
