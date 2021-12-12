import { StyleSheet } from 'react-native'
import { theme } from '../core/theme'

export default StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.colors.surface,
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })