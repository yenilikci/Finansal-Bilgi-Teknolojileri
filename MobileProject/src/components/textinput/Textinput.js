import React from 'react'
import { View, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../../core/theme'
import TextinputStyle from './TextinputStyle'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={TextinputStyle.container}>
      <Input
        style={TextinputStyle.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={TextinputStyle.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={TextinputStyle.error}>{errorText}</Text> : null}
    </View>
  )
}