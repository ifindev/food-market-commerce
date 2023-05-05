export interface SignInParams {
  Email: string
  Password: string
}

export interface SignUpParams extends SignInParams {
  FullName: string
}

export interface AddressParams {
  PhoneNumber: string
  Address: string
  HouseNumber: number
  City: string
}
