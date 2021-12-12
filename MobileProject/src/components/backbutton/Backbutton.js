import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import BackbuttonStyle from './BackbuttonStyle'

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={BackbuttonStyle.container}>
      <Image
        style={BackbuttonStyle.image}
        source={require('../../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}
