import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { View } from 'react-native'
import { SignUpParams } from '../../Model/auth.model'
import { Button, Spacer, Text } from '../../components/atoms'
import { InputText } from '../../components/molecules'
import { ContainerWithHeader } from '../../components/templates'
import useHandleFormValues from '../../hooks/useHandleFormValues/useHandleFormValues.hook'
import { StackParams } from '../../router/Router'

const ImagePickerContainer = styled(View, clsx('flex flex-row items-center justify-center'))
const ImagePickerBorderContainer = styled(
  View,
  clsx('rounded-full w-[110px] h-[110px] border border-dashed border-grey-lightish p-[10px]')
)
const ImageContainer = styled(
  View,
  clsx(
    'flex flex-col items-center justify-center bg-grey-lighterish w-[90px] h-[90px] rounded-full'
  )
)
const ButtonContainer = styled(View, clsx('mt-6'))

const PlaceholderText = styled(Text.Body14, clsx('font-poppins-light text-grey-lightish'))

export default function SignUpView() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

  const { formValues, currentFocus, resetFocus, handleChangeFocus, handleInputChange } =
    useHandleFormValues<SignUpParams>({
      email: '',
      password: '',
      fullName: ''
    })

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
        text={formValues.fullName}
        placeholder="Type your full name"
        currentlyFocused={currentFocus === 'fullName'}
        onChangeText={(value: string) => handleInputChange('fullName', value)}
        onFocus={() => handleChangeFocus('fullName')}
        onBlur={resetFocus}
      />
      <Spacer height={16} />
      <InputText
        label="Email Address"
        text={formValues.email}
        placeholder="Type your email address"
        currentlyFocused={currentFocus === 'email'}
        onChangeText={(value: string) => handleInputChange('email', value)}
        onFocus={() => handleChangeFocus('email')}
        onBlur={resetFocus}
      />
      <Spacer height={16} />
      <InputText
        label="Password"
        isPasswordField
        text={formValues.password}
        placeholder="Type your password"
        currentlyFocused={currentFocus === 'password'}
        onChangeText={(value: string) => handleInputChange('password', value)}
        onFocus={() => handleChangeFocus('password')}
        onBlur={resetFocus}
      />
      <ButtonContainer>
        <Button
          text="Continue"
          variant="primary"
          onClick={() => navigation.navigate('SignUpAddress')}
        />
      </ButtonContainer>
    </ContainerWithHeader>
  )
}
