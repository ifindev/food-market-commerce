import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { SignUpParams } from '../../Model/auth.model'
import { Button, Spacer, Text } from '../../components/atoms'
import { InputText } from '../../components/molecules'
import { ContainerWithHeader } from '../../components/templates'
import { StackParams } from '../../router/Router'

const ImagePickerContainer = styled(
  View,
  clsx('flex flex-row items-center justify-center')
)
const ImagePickerBorderContainer = styled(
  View,
  clsx(
    'rounded-full w-[110px] h-[110px] border border-dashed border-grey-lightish p-[10px]'
  )
)
const ImageContainer = styled(
  View,
  clsx(
    'flex flex-col items-center justify-center bg-grey-lighterish w-[90px] h-[90px] rounded-full'
  )
)
const ButtonContainer = styled(View, clsx('mt-6'))

const PlaceholderText = styled(
  Text.Body14,
  clsx('font-poppins-light text-grey-lightish')
)

export default function SignUpView() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

  const [formValues, setFormValues] = useState<SignUpParams>({
    Email: '',
    Password: '',
    FullName: ''
  })
  const [currentFocus, setCurrentFocus] = useState<keyof typeof formValues>()

  const handleFormChange = useCallback(
    (field: keyof typeof formValues, value: string) => {
      setFormValues((prev) => ({
        ...prev,
        [field]: value
      }))
    },
    []
  )

  return (
    <ContainerWithHeader
      title="Sign up"
      subTitle="Register and eat"
      withInnerPadding
      onPressBack={() => navigation.goBack()}
    >
      <ImagePickerContainer>
        <ImagePickerBorderContainer>
          <ImageContainer>
            <PlaceholderText>Add</PlaceholderText>
            <PlaceholderText>Photo</PlaceholderText>
          </ImageContainer>
        </ImagePickerBorderContainer>
      </ImagePickerContainer>
      <InputText
        label="Full Name"
        text={formValues.FullName}
        placeholder="Type your full name"
        currentlyFocused={currentFocus === 'FullName'}
        onChangeText={(value: string) => handleFormChange('FullName', value)}
        onFocus={() => setCurrentFocus('FullName')}
        onBlur={() => setCurrentFocus(undefined)}
      />
      <Spacer height={16} />
      <InputText
        label="Email Address"
        text={formValues.Email}
        placeholder="Type your email address"
        currentlyFocused={currentFocus === 'Email'}
        onChangeText={(value: string) => handleFormChange('Email', value)}
        onFocus={() => setCurrentFocus('Email')}
        onBlur={() => setCurrentFocus(undefined)}
      />
      <Spacer height={16} />
      <InputText
        label="Password"
        isPasswordField
        text={formValues.Password}
        placeholder="Type your password"
        currentlyFocused={currentFocus === 'Password'}
        onChangeText={(value: string) => handleFormChange('Password', value)}
        onFocus={() => setCurrentFocus('Password')}
        onBlur={() => setCurrentFocus(undefined)}
      />
      <ButtonContainer>
        <Button text="Continue" variant="primary" onClick={() => {}} />
      </ButtonContainer>
    </ContainerWithHeader>
  )
}
