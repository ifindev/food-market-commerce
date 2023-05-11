import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { useCallback, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ChevronDown } from '../../../assets/icons'

const InputContainer = styled(View, clsx('relative'))
const InputIconContainer = styled(View, clsx('absolute right-2 top-5'))
const Input = styled(
  TextInput,
  clsx(
    'h-12 p-[10px] pr-7 mt-[6px] rounded-lg border border-gray-600 text-black-darkish font-poppins-regular'
  )
)

const StyledView = styled(View)

type DropdownDataProps = {
  id: string
  label: string
  value: string
}

function PickerItem({
  text,
  selected,
  onLongPress,
  onPress
}: {
  text: string
  selected?: boolean
  onLongPress: () => void
  onPress: () => void
}) {
  return (
    <TouchableOpacity onLongPress={onLongPress} onPress={onPress} activeOpacity={1}>
      <StyledView className={clsx('px-2 py-4 bg-white', `${selected && 'bg-gray-200'}`)}>
        <Text>{text}</Text>
      </StyledView>
    </TouchableOpacity>
  )
}

export default function Picker() {
  const [currentFocus, setCurrentFocus] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false)

  const handleSelectedValue = useCallback((item: DropdownDataProps) => {
    setSelectedValue(item.value)
    setCurrentFocus(item.value)
    setIsOptionsModalOpen(false)
  }, [])

  const handlePressIn = useCallback(() => {
    if (!isOptionsModalOpen) {
      setIsOptionsModalOpen(true)
      setCurrentFocus(selectedValue)
      return
    }

    setIsOptionsModalOpen(false)
  }, [selectedValue, isOptionsModalOpen])

  const data: DropdownDataProps[] = [
    { id: '1', label: 'Item 1', value: '1' },
    { id: '2', label: 'Item 2', value: '2' },
    { id: '3', label: 'Item 3', value: '3' },
    { id: '4', label: 'Item 4', value: '4' },
    { id: '5', label: 'Item 5', value: '5' },
    { id: '6', label: 'Item 6', value: '6' },
    { id: '7', label: 'Item 7', value: '7' },
    { id: '8', label: 'Item 8', value: '8' }
  ]

  return (
    <View>
      <Text>Select Option</Text>
      <InputContainer>
        <Input
          value={selectedValue}
          placeholder="Dropdown Placeholder"
          editable={false}
          onPressIn={handlePressIn}
        />
        <InputIconContainer>
          <ChevronDown />
        </InputIconContainer>
      </InputContainer>
      {isOptionsModalOpen && (
        <StyledView className="border border-black-darkish h-60 w-full mt-1 rounded-lg">
          <FlatList
            style={{ borderRadius: 8 }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PickerItem
                key={item.label}
                text={item.label}
                selected={item.id === currentFocus}
                onPress={() => handleSelectedValue(item)}
                onLongPress={() => setCurrentFocus(item.id)}
              />
            )}
          />
        </StyledView>
      )}
    </View>
  )
}