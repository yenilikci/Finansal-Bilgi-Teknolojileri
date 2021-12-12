import React from 'react'
import { Text } from 'react-native-paper'
import HeaderStyle from './HeaderStyle'

export default function Header(props) {
  return <Text style={HeaderStyle.header} {...props} />
}