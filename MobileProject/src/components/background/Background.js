import React from 'react'
import { ImageBackground, KeyboardAvoidingView } from 'react-native'
import BackgroundStyle from './BackgroundStyle'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={BackgroundStyle.background}
    >
      <KeyboardAvoidingView style={BackgroundStyle.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
