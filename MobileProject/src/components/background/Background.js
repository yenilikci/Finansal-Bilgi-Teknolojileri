import React from 'react'
import { ImageBackground } from 'react-native'
import BackgroundStyle from './BackgroundStyle'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={BackgroundStyle.background, BackgroundStyle.container}
    >
        {children} 
    </ImageBackground>
  )
}
