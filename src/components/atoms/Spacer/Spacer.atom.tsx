import React from 'react'
import { View } from 'react-native'

type Props = {
  height: number
}

export default function Spacer({ height }: Props) {
  return <View style={{ height }} />
}
