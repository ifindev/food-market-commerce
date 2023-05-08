import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { SignInParams } from '../../Model/auth.model'
import { Button, Spacer } from '../../components/atoms'
import { InputText } from '../../components/molecules'
import { ContainerWithHeader } from '../../components/templates'
import { StackParams } from '../../router/Router'

const ButtonContainer = styled(View, clsx('mt-6'))

// TODO: Move logic to viewModel & add form validations
export default function SignInView() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

  const [formValues, setFormValues] = useState<SignInParams>({
    Email: '',
    Password: ''
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
      title="Sign In"
      subTitle="Find your best meal ever"
      withInnerPadding
    >
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
        <Button text="Sign In" variant="primary" onClick={() => {}} />
        <Spacer height={12} />
        <Button
          text="Create New Account"
          variant="secondary"
          onClick={() => navigation.navigate('SignUp')}
        />
      </ButtonContainer>
    </ContainerWithHeader>
  )
}
