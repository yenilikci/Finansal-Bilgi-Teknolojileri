import React from 'react'
import { Image } from 'react-native'
import LogoStyle from './LogoStyle'

export default function Logo() {
  return <Image source={require('../../assets/coinflip.gif')} style={LogoStyle.image} />
}