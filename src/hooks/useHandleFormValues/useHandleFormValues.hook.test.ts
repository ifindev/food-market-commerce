import { act, renderHook } from '@testing-library/react-hooks'
import useHandleFormValues from './useHandleFormValues.hook'

interface TestType {
  email: string
  password: string
  username: string
}

const initialValues: TestType = {
  email: '',
  password: '',
  username: ''
}

describe('useHandleFormValues hook', () => {
  it('should have correct initial values', () => {
    const { result } = renderHook(() =>
      useHandleFormValues<TestType>(initialValues)
    )

    expect(result.current.currentFocus).toBe(undefined)
    expect(result.current.formValues.email).toBe('')
    expect(result.current.formValues.password).toBe('')
    expect(result.current.formValues.username).toBe('')
  })

  it('should handle input change correctly', () => {
    const { result } = renderHook(() =>
      useHandleFormValues<TestType>(initialValues)
    )

    const mockEmail = 'email@mail.com'
    const mockPassword = 'password'
    const mockUsername = 'username'

    act(() => result.current.handleInputChange('email', mockEmail))
    expect(result.current.formValues.email).toBe(mockEmail)

    act(() => result.current.handleInputChange('password', mockPassword))
    expect(result.current.formValues.password).toBe(mockPassword)

    act(() => result.current.handleInputChange('username', mockUsername))
    expect(result.current.formValues.username).toBe(mockUsername)
  })

  it('should handle changing & reseting focus field', () => {
    const { result } = renderHook(() =>
      useHandleFormValues<TestType>(initialValues)
    )

    act(() => result.current.handleChangeFocus('email'))
    expect(result.current.currentFocus).toBe('email')

    act(() => result.current.handleChangeFocus('password'))
    expect(result.current.currentFocus).toBe('password')

    act(() => result.current.handleChangeFocus('username'))
    expect(result.current.currentFocus).toBe('username')

    act(() => result.current.resetFocus())
    expect(result.current.currentFocus).toBe(undefined)
  })
})
