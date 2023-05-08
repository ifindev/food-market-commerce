import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { useCallback, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { SignInParams } from '../../Model/auth.model'
import { Button } from '../../components/atoms'
import { Header, InputText } from '../../components/molecules'
import { StackParams } from '../../router/Router'

const Container = styled(SafeAreaView, clsx('flex-1 bg-white'))
const Spacer = styled(View, clsx('h-6 bg-grey-lighterer'))
const FormContainer = styled(View, clsx('flex-1 bg-white pt-[26px] px-6'))
const ButtonContainer = styled(View, clsx('mt-6'))
const InputSpacer = styled(View, clsx('h-4'))
const ButtonsSpacer = styled(View, clsx('h-3'))

// TODO: Move logic to viewModel & add form validations
export default function SignInView() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

  const [formValues, setFormValues] = useState<SignInParams>({
    Email: '',
    Password: ''
  })

  const handleFormChange = useCallback(
    (field: keyof typeof formValues, value: string) => {
      setFormValues((prev) => ({
        ...prev,
        [field]: value
      }))
    },
    []
  )
  const [currentFocus, setCurrentFocus] = useState<'email' | 'password'>()

  return (
    <Container>
      <Header title="Sign In" subTitle="Find your best meal ever" />
      <Spacer />
      <FormContainer>
        <InputText
          label="Email Address"
          text={formValues.Email}
          placeholder="Type your email address"
          currentlyFocused={currentFocus === 'email'}
          onChangeText={(value: string) => handleFormChange('Email', value)}
          onFocus={() => setCurrentFocus('email')}
          onBlur={() => setCurrentFocus(undefined)}
        />
        <InputSpacer />
        <InputText
          label="Password"
          isPasswordField
          text={formValues.Password}
          placeholder="Type your password"
          currentlyFocused={currentFocus === 'password'}
          onChangeText={(value: string) => handleFormChange('Password', value)}
          onFocus={() => setCurrentFocus('password')}
          onBlur={() => setCurrentFocus(undefined)}
        />
        <ButtonContainer>
          <Button text="Sign In" variant="primary" onClick={() => {}} />
          <ButtonsSpacer />
          <Button
            text="Create New Account"
            variant="secondary"
            onClick={() => navigation.navigate('SignUp')}
          />
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}
