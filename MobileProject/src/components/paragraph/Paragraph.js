import React from 'react'
import { Text } from 'react-native-paper'
import ParagraphStyle from './ParagraphStyle'

export default function Paragraph(props) {
  return <Text style={ParagraphStyle.text} {...props} />
}