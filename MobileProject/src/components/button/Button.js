import React from 'react'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../../core/theme'
import ButtonStyle from './ButtonStyle'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        ButtonStyle.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={ButtonStyle.text}
      mode={mode}
      {...props}
    />
  )
}