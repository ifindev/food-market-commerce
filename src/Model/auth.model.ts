export interface SignInParams {
  email: string
  password: string
}

export interface SignUpParams extends SignInParams {
  fullName: string
}

export interface AddressParams {
  phoneNumber: string
  address: string
  houseNumber: number
  city: string
}
