import { StyleSheet } from 'react-native'
import { theme } from '../../core/theme'

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})