import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import { styled } from 'nativewind'
import React from 'react'
import { View } from 'react-native'
import { SignInParams } from '../../Model/auth.model'
import { Button, Spacer } from '../../components/atoms'
import { InputText } from '../../components/molecules'
import { ContainerWithHeader } from '../../components/templates'
import useHandleFormValues from '../../hooks/useHandleFormValues/useHandleFormValues.hook'
import { StackParams } from '../../router/Router'

const ButtonContainer = styled(View, clsx('mt-6'))

// TODO: Move logic to viewModel & add form validations
export default function SignInView() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

  const { formValues, currentFocus, resetFocus, handleChangeFocus, handleInputChange } =
    useHandleFormValues<SignInParams>({
      email: '',
      password: ''
    })

  return (
    <ContainerWithHeader title="Sign In" subTitle="Find your best meal ever" withInnerPadding>
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
